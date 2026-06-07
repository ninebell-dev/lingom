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
from http.cookies import SimpleCookie
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer

ROOT = os.environ.get("STUDY_ROOT", os.path.dirname(os.path.abspath(__file__)))
PORT = int(os.environ.get("PORT", "30000"))
DB_FILE = os.environ.get("STUDY_DB", os.path.join(ROOT, "data", "lingom.db"))
_SECRET_FROM_ENV = bool(os.environ.get("STUDY_SECRET"))
SECRET = os.environ.get("STUDY_SECRET") or secrets.token_hex(32)
SECURE_COOKIE = os.environ.get("STUDY_SECURE_COOKIE", "1") == "1"

PBKDF_ITERS = 200_000
SESSION_DAYS = 30
MAX_BODY = 1_000_000  # 1MB 요청 본문 상한
EMAIL_RE = re.compile(r"^[^@\s]+@[^@\s]+\.[^@\s]+$")

_lock = threading.Lock()


# ---------- 진도 병합 ----------
def merge_state(state, incoming):
    """state(dict)에 incoming(dict)을 키별로 병합(제자리 수정 후 반환)."""
    for key, val in incoming.items():
        if isinstance(val, list):
            existing = state.get(key) if isinstance(state.get(key), list) else []
            seen = set(existing)
            merged = list(existing)
            for item in val:
                if item not in seen:
                    seen.add(item)
                    merged.append(item)
            state[key] = merged
        elif isinstance(val, dict):
            existing = state.get(key) if isinstance(state.get(key), dict) else {}
            for iid, entry in val.items():
                cur = existing.get(iid)
                if cur is None or str((entry or {}).get("t", "")) >= str((cur or {}).get("t", "")):
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


class Handler(SimpleHTTPRequestHandler):
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
        if length > MAX_BODY:
            raise ValueError("body too large")
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
        if path == "/api/me":
            uid = self.require_user()
            if not uid:
                return
            with db() as c:
                row = c.execute("SELECT email FROM users WHERE id=?", (uid,)).fetchone()
            if not row:
                return self.send_json({"error": "unauthorized"}, 401)
            return self.send_json({"email": row["email"]})
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
        if path == "/api/state":
            return self.state_post()
        return self.send_error(404)

    def signup(self):
        try:
            data = self.read_json()
            email = str(data.get("email", "")).strip().lower()
            password = str(data.get("password", ""))
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
                "INSERT INTO users(email, pw, created) VALUES(?,?,?)",
                (email, hash_pw(password), time.time()),
            ).lastrowid
        return self.send_json({"email": email}, cookie=self.session_cookie(sign_session(uid)))

    def login(self):
        try:
            data = self.read_json()
            email = str(data.get("email", "")).strip().lower()
            password = str(data.get("password", ""))
        except (ValueError, TypeError):
            return self.send_json({"error": "invalid JSON"}, 400)
        with db() as c:
            row = c.execute("SELECT id, pw FROM users WHERE email=?", (email,)).fetchone()
        if not row or not verify_pw(password, row["pw"]):
            return self.send_json({"error": "이메일 또는 비밀번호가 틀려요"}, 401)
        return self.send_json(
            {"email": email}, cookie=self.session_cookie(sign_session(row["id"]))
        )

    def state_post(self):
        uid = self.require_user()
        if not uid:
            return
        try:
            incoming = self.read_json()
            if not isinstance(incoming, dict):
                raise ValueError
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

    def log_message(self, *args):
        pass


if __name__ == "__main__":
    init_db()
    if not _SECRET_FROM_ENV:
        print("[경고] STUDY_SECRET 미설정 — 임시 키 사용. 운영 배포 시 반드시 고정값을 지정하세요.")
    print("링곰 서버: port=%d db=%s" % (PORT, DB_FILE))
    ThreadingHTTPServer(("0.0.0.0", PORT), Handler).serve_forever()
