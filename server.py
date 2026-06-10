#!/usr/bin/env python3
"""링곰(Lingom) 호스팅 서비스 백엔드.

정적 사이트를 서빙하면서, 이메일/비밀번호 계정으로 사용자별 학습 진도를
서버(SQLite)에 저장한다. 외부 라이브러리 없이 파이썬 표준 라이브러리만 사용.

환경변수
  PORT                 포트 (기본 30000)
  STUDY_ROOT           정적 파일 폴더 (기본: 이 스크립트 폴더)
  STUDY_DB             SQLite 경로 (기본: ./data/lingom.db)
  STUDY_SECRET         세션 서명 비밀키 — 운영에선 반드시 고정값으로 지정.
                       (미설정 시 임시 키 생성 → 재시작하면 전원 로그아웃)
  STUDY_SECURE_COOKIE  1이면 Secure 쿠키 (HTTPS 배포 시 1 권장, 기본 1)

API
  POST /api/signup   {email, password}  계정 생성 + 로그인
  POST /api/login    {email, password}  로그인
  POST /api/logout                      로그아웃
  GET  /api/me                          현재 로그인 사용자
  GET  /api/state                       내 진도 전체
  POST /api/state    {key: [...]|{...}} 내 진도 병합 저장
      리스트=합집합 병합, 객체(SRS)=항목별 최신 t 우선 병합.
  그 외 경로는 정적 파일 서빙.
"""
import base64
import hashlib
import hmac
import json
import os
import re
import secrets
import sqlite3
import threading
import time
import urllib.error
import urllib.parse
import urllib.request
from http.cookies import SimpleCookie
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer

ROOT = os.environ.get("STUDY_ROOT", os.path.dirname(os.path.abspath(__file__)))
PORT = int(os.environ.get("PORT", "30000"))
DB_FILE = os.environ.get("STUDY_DB", os.path.join(ROOT, "data", "lingom.db"))
_SECRET_FROM_ENV = bool(os.environ.get("STUDY_SECRET"))
SECRET = os.environ.get("STUDY_SECRET") or secrets.token_hex(32)
SECURE_COOKIE = os.environ.get("STUDY_SECURE_COOKIE", "1") == "1"

# 소셜 로그인 공개 주소 (리다이렉트 URI 기준). 제공자 콘솔에 등록한 값과 일치해야 함.
APP_BASE_URL = os.environ.get("APP_BASE_URL", "https://app.lingom.app").rstrip("/")

# 소셜 로그인(OAuth) 제공자. client_id/secret 환경변수가 있어야 활성화됨.
OAUTH_PROVIDERS = {
    "google": {
        "client_id": os.environ.get("GOOGLE_CLIENT_ID", ""),
        "client_secret": os.environ.get("GOOGLE_CLIENT_SECRET", ""),
        "auth_url": "https://accounts.google.com/o/oauth2/v2/auth",
        "token_url": "https://oauth2.googleapis.com/token",
        "userinfo_url": "https://openidconnect.googleapis.com/v1/userinfo",
        "scope": "openid email profile",
        "auth_extra": {"prompt": "select_account"},
        "label": "Google",
    },
    "kakao": {
        "client_id": os.environ.get("KAKAO_CLIENT_ID", ""),
        "client_secret": os.environ.get("KAKAO_CLIENT_SECRET", ""),  # 선택(콘솔에서 사용 안 함 가능)
        "auth_url": "https://kauth.kakao.com/oauth/authorize",
        "token_url": "https://kauth.kakao.com/oauth/token",
        "userinfo_url": "https://kapi.kakao.com/v2/user/me",
        "scope": "",  # 로그인엔 카카오 사용자 id만 필요 → 동의항목 불필요
        "auth_extra": {},
        "label": "카카오",
    },
    "naver": {
        "client_id": os.environ.get("NAVER_CLIENT_ID", ""),
        "client_secret": os.environ.get("NAVER_CLIENT_SECRET", ""),
        "auth_url": "https://nid.naver.com/oauth2.0/authorize",
        "token_url": "https://nid.naver.com/oauth2.0/token",
        "userinfo_url": "https://openapi.naver.com/v1/nid/me",
        "scope": "",
        "auth_extra": {},
        "label": "네이버",
    },
}


def provider_enabled(p):
    cfg = OAUTH_PROVIDERS.get(p)
    if not cfg or not cfg["client_id"]:
        return False
    if p == "kakao":  # 카카오는 client_secret 없이도 동작
        return True
    return bool(cfg["client_secret"])


PBKDF_ITERS = 200_000
SESSION_DAYS = 30
MAX_BODY = 1_000_000  # 1MB 요청 본문 상한
EMAIL_RE = re.compile(r"^[^@\s]+@[^@\s]+\.[^@\s]+$")


class BodyTooLarge(ValueError):  # ValueError 하위라 기존 except는 400으로, 본문 핸들러는 413으로 구분 처리
    pass

_lock = threading.Lock()


# ---------- 진도 병합 ----------
def merge_state(state, incoming):
    """state(dict)에 incoming(dict)을 키별로 병합(제자리 수정 후 반환)."""
    for key, val in incoming.items():
        if isinstance(val, list):
            existing = state.get(key) if isinstance(state.get(key), list) else []
            seen = set()
            merged = []
            for item in (existing + val):
                try:
                    if item in seen:
                        continue
                    seen.add(item)
                except TypeError:
                    continue  # 해시 불가(손상) 항목은 건너뜀
                merged.append(item)
            state[key] = merged
        elif isinstance(val, dict):
            existing = state.get(key) if isinstance(state.get(key), dict) else {}
            for iid, entry in val.items():
                if not isinstance(entry, dict):
                    continue  # 손상 항목 무시
                cur = existing.get(iid) if isinstance(existing.get(iid), dict) else None
                # t(최종수정) 동률이면 서버 cur 유지 — 오래된 클라가 권위 상태를 덮어쓰지 못함
                if cur is None or str(entry.get("t", "0")) > str(cur.get("t", "0")):
                    existing[iid] = entry
            state[key] = existing
    return state


# ---------- DB ----------
def db():
    conn = sqlite3.connect(DB_FILE, timeout=10)
    conn.row_factory = sqlite3.Row
    return conn


def init_db():
    os.makedirs(os.path.dirname(DB_FILE), exist_ok=True)
    with db() as c:
        c.execute("PRAGMA journal_mode=WAL")
        c.execute(
            "CREATE TABLE IF NOT EXISTS users("
            "id INTEGER PRIMARY KEY AUTOINCREMENT,"
            "email TEXT UNIQUE NOT NULL,"
            "pw TEXT NOT NULL,"
            "created REAL NOT NULL)"
        )
        c.execute(
            "CREATE TABLE IF NOT EXISTS progress("
            "user_id INTEGER NOT NULL,"
            "key TEXT NOT NULL,"
            "value TEXT NOT NULL,"
            "PRIMARY KEY(user_id, key))"
        )
        c.execute(
            "CREATE TABLE IF NOT EXISTS oauth("
            "provider TEXT NOT NULL,"
            "sub TEXT NOT NULL,"
            "user_id INTEGER NOT NULL,"
            "PRIMARY KEY(provider, sub))"
        )
        cols = [r["name"] for r in c.execute("PRAGMA table_info(users)").fetchall()]
        if "name" not in cols:  # 표시용 닉네임 (없으면 NULL)
            c.execute("ALTER TABLE users ADD COLUMN name TEXT")


# ---------- 비밀번호 ----------
def hash_pw(password):
    salt = secrets.token_bytes(16)
    h = hashlib.pbkdf2_hmac("sha256", password.encode("utf-8"), salt, PBKDF_ITERS)
    return "%d$%s$%s" % (PBKDF_ITERS, salt.hex(), h.hex())


def verify_pw(password, stored):
    try:
        iters, salt_hex, hash_hex = stored.split("$")
        h = hashlib.pbkdf2_hmac(
            "sha256", password.encode("utf-8"), bytes.fromhex(salt_hex), int(iters)
        )
        return hmac.compare_digest(h.hex(), hash_hex)
    except (ValueError, AttributeError):
        return False


# 존재하지 않는 이메일 로그인 시도에도 동일 시간 소요(계정 열거 타이밍 차 방지)
_DUMMY_PW_HASH = hash_pw("lingom_dummy_password_for_timing")


# ---------- 세션(서명 쿠키) ----------
def sign_session(user_id):
    exp = int(time.time()) + SESSION_DAYS * 86400
    payload = base64.urlsafe_b64encode(
        json.dumps({"u": user_id, "e": exp}).encode("utf-8")
    ).decode("ascii").rstrip("=")
    sig = hmac.new(SECRET.encode("utf-8"), payload.encode("ascii"), hashlib.sha256).hexdigest()
    return payload + "." + sig


def verify_session(token):
    try:
        payload, sig = token.split(".")
        expect = hmac.new(SECRET.encode("utf-8"), payload.encode("ascii"), hashlib.sha256).hexdigest()
        if not hmac.compare_digest(sig, expect):
            return None
        pad = "=" * (-len(payload) % 4)
        data = json.loads(base64.urlsafe_b64decode(payload + pad))
        if data.get("e", 0) < time.time():
            return None
        return data.get("u")
    except (ValueError, TypeError, json.JSONDecodeError):
        return None


# ---------- 소셜 로그인(OAuth) ----------
def _http_post_form(url, data, headers=None):
    body = urllib.parse.urlencode(data).encode("utf-8")
    req = urllib.request.Request(url, data=body, method="POST")
    req.add_header("Content-Type", "application/x-www-form-urlencoded")
    req.add_header("Accept", "application/json")
    for k, v in (headers or {}).items():
        req.add_header(k, v)
    with urllib.request.urlopen(req, timeout=10) as r:
        return json.loads(r.read().decode("utf-8"))


def _http_get_json(url, headers=None):
    req = urllib.request.Request(url, method="GET")
    req.add_header("Accept", "application/json")
    for k, v in (headers or {}).items():
        req.add_header(k, v)
    with urllib.request.urlopen(req, timeout=10) as r:
        return json.loads(r.read().decode("utf-8"))


def oauth_exchange_token(provider, cfg, code, redirect_uri, state):
    data = {
        "grant_type": "authorization_code",
        "code": code,
        "redirect_uri": redirect_uri,
        "client_id": cfg["client_id"],
    }
    if cfg.get("client_secret"):
        data["client_secret"] = cfg["client_secret"]
    return _http_post_form(cfg["token_url"], data)


def oauth_extract_user(provider, info):
    """제공자 사용자정보 → (sub, email|None, name|None, email_verified:bool)."""
    if provider == "google":
        v = info.get("email_verified")
        verified = (v is True or str(v).lower() == "true")
        return str(info.get("sub") or "").strip(), (info.get("email") or None), info.get("name"), verified
    if provider == "kakao":
        acc = info.get("kakao_account") or {}
        prof = acc.get("profile") or {}
        return str(info.get("id") or "").strip(), (acc.get("email") or None), prof.get("nickname"), bool(acc.get("is_email_verified"))
    if provider == "naver":
        resp = info.get("response") or {}
        email = resp.get("email") or None
        return str(resp.get("id") or "").strip(), email, (resp.get("name") or resp.get("nickname")), bool(email)  # 네이버 이메일은 본인 인증된 계정 메일
    return "", None, None, False


def find_or_create_oauth_user(provider, sub, email, name=None, email_verified=False):
    """소셜 계정(provider, sub)으로 사용자 찾기/만들기.
    보안: 검증된(email_verified) 이메일만 계정 식별에 사용하고, 비밀번호 계정엔 절대 자동 연결하지 않음
    (가입 시 이메일 미검증이라, 공격자가 피해자 이메일로 비번 계정을 선점하는 탈취를 막음).
    같은 검증 이메일의 기존 '소셜' 계정에는 연결해 다중 제공자 연속성을 유지."""
    em = (email or "").strip().lower()
    has_email = bool(em and EMAIL_RE.match(em) and len(em) <= 254)
    use_email = has_email and bool(email_verified)
    nm = (name or "").strip()[:30] or None
    synthetic = "%s_%s@users.lingom.app" % (provider, sub)
    with _lock, db() as c:
        row = c.execute(
            "SELECT user_id FROM oauth WHERE provider=? AND sub=?", (provider, sub)
        ).fetchone()
        if row:
            uid = row["user_id"]
            if nm:  # 재로그인 시 이름이 비어 있으면 제공자 이름으로 채움
                c.execute(
                    "UPDATE users SET name=? WHERE id=? AND (name IS NULL OR name='')",
                    (nm, uid),
                )
            return uid
        uid = None
        if use_email:
            u = c.execute("SELECT id, pw FROM users WHERE email=?", (em,)).fetchone()
            if u and u["pw"] == "oauth":
                uid = u["id"]  # 같은 검증 이메일의 기존 소셜 계정에만 연결
        if uid is None:
            # 검증 이메일이 비어 있거나 이미 다른 계정(비번 등)이 점유 → 합성 이메일로 분리 생성
            taken = use_email and c.execute("SELECT 1 FROM users WHERE email=?", (em,)).fetchone()
            login_email = em if (use_email and not taken) else synthetic
            try:
                uid = c.execute(
                    "INSERT INTO users(email, pw, created, name) VALUES(?,?,?,?)",
                    (login_email, "oauth", time.time(), nm),
                ).lastrowid
            except sqlite3.IntegrityError:
                # 합성 이메일까지 충돌(동시 생성 경쟁) → 기존 oauth/계정 재조회
                ex = c.execute(
                    "SELECT user_id FROM oauth WHERE provider=? AND sub=?", (provider, sub)
                ).fetchone()
                if ex:
                    uid = ex["user_id"]
                else:
                    u2 = c.execute("SELECT id FROM users WHERE email=?", (synthetic,)).fetchone()
                    uid = u2["id"] if u2 else None
        if uid is None:
            return None
        if nm:  # 닉네임이 비어 있던 계정이면 제공자 이름으로 채움
            c.execute(
                "UPDATE users SET name=? WHERE id=? AND (name IS NULL OR name='')",
                (nm, uid),
            )
        c.execute(
            "INSERT OR IGNORE INTO oauth(provider, sub, user_id) VALUES(?,?,?)",
            (provider, sub, uid),
        )
        return uid


PROVIDER_LABELS = {"kakao": "카카오", "google": "Google", "naver": "네이버"}


def display_for(c, uid, email, name):
    """표시 이름: 닉네임 > 제공자 라벨(소셜 가입·이메일 미수신) > 이메일."""
    name = (name or "").strip()
    if name:
        return name
    if email.endswith("@users.lingom.app"):
        orow = c.execute(
            "SELECT provider FROM oauth WHERE user_id=? LIMIT 1", (uid,)
        ).fetchone()
        return PROVIDER_LABELS.get(orow["provider"] if orow else "", "소셜") + " 회원"
    return email


class Handler(SimpleHTTPRequestHandler):
    # PWA: 기본 http.server는 .webmanifest를 octet-stream으로 줘서 일부 브라우저가 거부함
    extensions_map = {
        **SimpleHTTPRequestHandler.extensions_map,
        ".webmanifest": "application/manifest+json",
        ".json": "application/json",
        ".svg": "image/svg+xml",
        ".png": "image/png",
    }

    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=ROOT, **kwargs)

    # --- 헬퍼 ---
    def send_json(self, obj, status=200, cookie=None):
        body = json.dumps(obj, ensure_ascii=False).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Cache-Control", "no-store")
        if cookie is not None:
            self.send_header("Set-Cookie", cookie)
        self.end_headers()
        self.wfile.write(body)

    def read_json(self):
        length = int(self.headers.get("Content-Length", 0))
        if length < 0:  # 음수 길이로 EOF까지 읽어 상한 우회 방지
            raise ValueError("invalid body length")
        if length > MAX_BODY:
            raise BodyTooLarge("body too large")
        return json.loads(self.rfile.read(length) or b"{}")

    def session_cookie(self, token, clear=False):
        parts = ["sid=%s" % (token or ""), "Path=/", "HttpOnly", "SameSite=Lax"]
        parts.append("Max-Age=0" if clear else "Max-Age=%d" % (SESSION_DAYS * 86400))
        if SECURE_COOKIE:
            parts.append("Secure")
        return "; ".join(parts)

    def current_user(self):
        raw = self.headers.get("Cookie")
        if not raw:
            return None
        try:
            jar = SimpleCookie()
            jar.load(raw)
        except Exception:
            return None
        if "sid" not in jar:
            return None
        return verify_session(jar["sid"].value)

    def require_user(self):
        uid = self.current_user()
        if not uid:
            self.send_json({"error": "unauthorized"}, 401)
            return None
        return uid

    # --- GET ---
    def do_GET(self):
        path = self.path.split("?")[0]
        if path == "/api/providers":
            return self.send_json({p: provider_enabled(p) for p in OAUTH_PROVIDERS})
        if path.startswith("/auth/"):
            parts = path.strip("/").split("/")
            if len(parts) == 2:
                return self.oauth_start(parts[1])
            if len(parts) == 3 and parts[2] == "callback":
                return self.oauth_callback(parts[1])
            return self.send_error(404)
        if path == "/api/me":
            uid = self.require_user()
            if not uid:
                return
            with db() as c:
                row = c.execute("SELECT email, name FROM users WHERE id=?", (uid,)).fetchone()
                if not row:
                    return self.send_json({"error": "unauthorized"}, 401)
                email = row["email"]
                display = display_for(c, uid, email, row["name"])
            return self.send_json({"email": email, "display": display})
        if path == "/api/state":
            uid = self.require_user()
            if not uid:
                return
            with db() as c:
                rows = c.execute(
                    "SELECT key, value FROM progress WHERE user_id=?", (uid,)
                ).fetchall()
            return self.send_json({r["key"]: json.loads(r["value"]) for r in rows})
        super().do_GET()

    # --- POST ---
    def do_POST(self):
        path = self.path.split("?")[0]
        if path == "/api/signup":
            return self.signup()
        if path == "/api/login":
            return self.login()
        if path == "/api/logout":
            return self.send_json({"ok": True}, cookie=self.session_cookie("", clear=True))
        if path == "/api/profile":
            return self.profile_post()
        if path == "/api/state":
            return self.state_post()
        return self.send_error(404)

    def signup(self):
        try:
            data = self.read_json()
            email = str(data.get("email", "")).strip().lower()
            password = str(data.get("password", ""))
            name = str(data.get("name", "")).strip()[:30] or None
        except (ValueError, TypeError):
            return self.send_json({"error": "invalid JSON"}, 400)
        if not EMAIL_RE.match(email) or len(email) > 254:
            return self.send_json({"error": "이메일 형식이 올바르지 않아요"}, 400)
        if not (8 <= len(password) <= 200):
            return self.send_json({"error": "비밀번호는 8자 이상이어야 해요"}, 400)
        with _lock, db() as c:
            if c.execute("SELECT 1 FROM users WHERE email=?", (email,)).fetchone():
                return self.send_json({"error": "이미 가입된 이메일이에요"}, 409)
            uid = c.execute(
                "INSERT INTO users(email, pw, created, name) VALUES(?,?,?,?)",
                (email, hash_pw(password), time.time(), name),
            ).lastrowid
            display = display_for(c, uid, email, name)
        return self.send_json(
            {"email": email, "display": display}, cookie=self.session_cookie(sign_session(uid))
        )

    def login(self):
        try:
            data = self.read_json()
            email = str(data.get("email", "")).strip().lower()
            password = str(data.get("password", ""))
        except (ValueError, TypeError):
            return self.send_json({"error": "invalid JSON"}, 400)
        with db() as c:
            row = c.execute(
                "SELECT id, pw, name FROM users WHERE email=?", (email,)
            ).fetchone()
            # 이메일이 없어도 더미 해시로 검증해 시간 일정화(존재 여부 타이밍 누출 방지)
            if not row:
                verify_pw(password, _DUMMY_PW_HASH)
                return self.send_json({"error": "이메일 또는 비밀번호가 틀려요"}, 401)
            if not verify_pw(password, row["pw"]):
                return self.send_json({"error": "이메일 또는 비밀번호가 틀려요"}, 401)
            display = display_for(c, row["id"], email, row["name"])
        return self.send_json(
            {"email": email, "display": display},
            cookie=self.session_cookie(sign_session(row["id"])),
        )

    def profile_post(self):
        uid = self.require_user()
        if not uid:
            return
        try:
            data = self.read_json()
            name = str(data.get("name", "")).strip()[:30]
        except (ValueError, TypeError):
            return self.send_json({"error": "invalid JSON"}, 400)
        if not name:
            return self.send_json({"error": "닉네임을 입력해 주세요"}, 400)
        with _lock, db() as c:
            c.execute("UPDATE users SET name=? WHERE id=?", (name, uid))
            row = c.execute("SELECT email FROM users WHERE id=?", (uid,)).fetchone()
            display = display_for(c, uid, row["email"], name) if row else name
        return self.send_json({"display": display})

    def state_post(self):
        uid = self.require_user()
        if not uid:
            return
        try:
            incoming = self.read_json()
            if not isinstance(incoming, dict):
                raise ValueError
        except BodyTooLarge:
            return self.send_json({"error": "동기화 데이터가 너무 커요"}, 413)
        except (ValueError, TypeError):
            return self.send_json({"error": "invalid JSON"}, 400)
        with _lock, db() as c:
            rows = c.execute("SELECT key, value FROM progress WHERE user_id=?", (uid,)).fetchall()
            state = {r["key"]: json.loads(r["value"]) for r in rows}
            merge_state(state, incoming)
            for key, val in state.items():
                c.execute(
                    "INSERT INTO progress(user_id, key, value) VALUES(?,?,?) "
                    "ON CONFLICT(user_id, key) DO UPDATE SET value=excluded.value",
                    (uid, key, json.dumps(val, ensure_ascii=False)),
                )
        return self.send_json(state)

    # --- 소셜 로그인 ---
    def _read_cookie(self, name):
        raw = self.headers.get("Cookie")
        if not raw:
            return None
        try:
            jar = SimpleCookie()
            jar.load(raw)
        except Exception:
            return None
        return jar[name].value if name in jar else None

    def _oauth_fail(self, msg):
        html = (
            "<!doctype html><meta charset=utf-8><title>로그인 오류 · 링곰</title>"
            "<div style=\"font-family:system-ui,'Apple SD Gothic Neo',sans-serif;"
            "max-width:420px;margin:84px auto;text-align:center;color:#2B2521;padding:0 20px\">"
            "<div style='font-size:40px'>🐻</div>"
            "<h2 style='margin:10px 0 6px'>로그인을 완료하지 못했어요</h2>"
            "<p style='color:#7A6C5B'>%s</p>"
            "<p style='margin-top:22px'><a href='/' style='color:#BF4E32;font-weight:600;"
            "text-decoration:none'>← 돌아가기</a></p></div>"
        ) % msg
        body = html.encode("utf-8")
        self.send_response(200)
        self.send_header("Content-Type", "text/html; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Cache-Control", "no-store")
        self.send_header("Set-Cookie", self._ostate_cookie("", clear=True))  # 실패 시 state 쿠키 무효화
        self.end_headers()
        self.wfile.write(body)

    def _ostate_cookie(self, value, clear=False):
        parts = ["ostate=%s" % (value or ""), "Path=/", "HttpOnly", "SameSite=Lax"]
        parts.append("Max-Age=0" if clear else "Max-Age=600")
        if SECURE_COOKIE:
            parts.append("Secure")
        return "; ".join(parts)

    def oauth_start(self, provider):
        cfg = OAUTH_PROVIDERS.get(provider)
        if not cfg or not provider_enabled(provider):
            return self._oauth_fail("지원하지 않는 로그인이에요")
        state = secrets.token_urlsafe(16)
        params = {
            "response_type": "code",
            "client_id": cfg["client_id"],
            "redirect_uri": APP_BASE_URL + "/auth/%s/callback" % provider,
            "state": state,
        }
        if cfg.get("scope"):
            params["scope"] = cfg["scope"]
        params.update(cfg.get("auth_extra") or {})
        url = cfg["auth_url"] + "?" + urllib.parse.urlencode(params)
        self.send_response(302)
        self.send_header("Location", url)
        self.send_header("Set-Cookie", self._ostate_cookie(state))
        self.end_headers()

    def oauth_callback(self, provider):
        cfg = OAUTH_PROVIDERS.get(provider)
        if not cfg or not provider_enabled(provider):
            return self._oauth_fail("지원하지 않는 로그인이에요")
        qs = urllib.parse.parse_qs(self.path.split("?", 1)[1] if "?" in self.path else "")
        code = (qs.get("code") or [""])[0]
        state = (qs.get("state") or [""])[0]
        cookie_state = self._read_cookie("ostate")
        if not code or not state or not cookie_state or not hmac.compare_digest(state, cookie_state):
            return self._oauth_fail("로그인 검증에 실패했어요. 다시 시도해 주세요.")
        redirect_uri = APP_BASE_URL + "/auth/%s/callback" % provider
        try:
            tok = oauth_exchange_token(provider, cfg, code, redirect_uri, state)
            access = tok.get("access_token")
            if not access:
                print("[oauth %s] token response has no access_token: %r" % (provider, tok), flush=True)
                return self._oauth_fail("토큰을 받지 못했어요")
            info = _http_get_json(cfg["userinfo_url"], {"Authorization": "Bearer " + access})
            sub, email, _name, _verified = oauth_extract_user(provider, info)
        except urllib.error.HTTPError as e:
            try:
                body = e.read().decode("utf-8", "replace")
            except Exception:
                body = ""
            print("[oauth %s] HTTPError %s %s: %s" % (provider, e.code, getattr(e, "url", "?"), body), flush=True)
            return self._oauth_fail("로그인 처리 중 오류가 났어요")
        except Exception as e:
            print("[oauth %s] error: %r" % (provider, e), flush=True)
            return self._oauth_fail("로그인 처리 중 오류가 났어요")
        if not sub or not sub.strip():
            return self._oauth_fail("계정 정보를 받지 못했어요")
        uid = find_or_create_oauth_user(provider, sub, email, _name, _verified)
        if not uid:
            return self._oauth_fail("계정을 만들지 못했어요. 다시 시도해 주세요.")
        self.send_response(302)
        self.send_header("Location", "/")
        self.send_header("Set-Cookie", self.session_cookie(sign_session(uid)))
        self.send_header("Set-Cookie", self._ostate_cookie("", clear=True))
        self.end_headers()

    def log_message(self, *args):
        pass


if __name__ == "__main__":
    init_db()
    if not _SECRET_FROM_ENV:
        print("[경고] STUDY_SECRET 미설정 — 임시 키 사용. 운영 배포 시 반드시 고정값을 지정하세요.")
    print("링곰 서버: port=%d db=%s" % (PORT, DB_FILE))
    ThreadingHTTPServer(("0.0.0.0", PORT), Handler).serve_forever()
