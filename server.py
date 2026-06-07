#!/usr/bin/env python3
"""공부자료 static site + 진도 동기화 API.

정적 파일을 서빙하면서 /api/state 로 학습 진도(외운 패턴/즐겨찾기/단어)를
서버 파일에 저장한다. 집 PC와 휴대폰이 같은 진도를 공유하게 하기 위함.

저장 형식: {"<localStorage key>": [<id>, ...], ...}
- GET  /api/state            저장된 전체 진도 JSON 반환
- POST /api/state  {k:[...]}  키별로 합집합(union) 병합 후 저장, 병합 결과 반환

병합을 합집합으로 하므로 두 기기에서 외운 항목이 모두 보존된다(추가 위주).
"""
import json
import os
import threading
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer

# 환경변수로 덮어쓸 수 있음(도커 등). 기본값은 기존 동작과 동일.
#  - STUDY_ROOT : 정적 파일을 서빙할 폴더 (기본: 이 스크립트가 있는 폴더)
#  - STUDY_DATA : 진도 저장 파일 경로 (기본: ~/.local/state/study-site/progress.json)
#  - PORT       : 포트 번호 (기본: 30000)
ROOT = os.environ.get("STUDY_ROOT", os.path.dirname(os.path.abspath(__file__)))
DATA_FILE = os.environ.get(
    "STUDY_DATA", os.path.expanduser("~/.local/state/study-site/progress.json")
)
PORT = int(os.environ.get("PORT", "30000"))

_lock = threading.Lock()


def _read_state():
    try:
        with open(DATA_FILE, "r", encoding="utf-8") as f:
            data = json.load(f)
            return data if isinstance(data, dict) else {}
    except (FileNotFoundError, ValueError):
        return {}


def _write_state(state):
    os.makedirs(os.path.dirname(DATA_FILE), exist_ok=True)
    tmp = DATA_FILE + ".tmp"
    with open(tmp, "w", encoding="utf-8") as f:
        json.dump(state, f, ensure_ascii=False)
    os.replace(tmp, DATA_FILE)


class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=ROOT, **kwargs)

    def _send_json(self, obj, status=200):
        body = json.dumps(obj, ensure_ascii=False).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        self.wfile.write(body)

    def do_GET(self):
        if self.path.split("?")[0] == "/api/state":
            with _lock:
                self._send_json(_read_state())
            return
        super().do_GET()

    def do_POST(self):
        if self.path.split("?")[0] != "/api/state":
            self.send_error(404)
            return
        try:
            length = int(self.headers.get("Content-Length", 0))
            incoming = json.loads(self.rfile.read(length) or b"{}")
            if not isinstance(incoming, dict):
                raise ValueError("expected object")
        except (ValueError, TypeError):
            self.send_error(400, "invalid JSON")
            return
        with _lock:
            state = _read_state()
            for key, val in incoming.items():
                if isinstance(val, list):
                    existing = state.get(key, [])
                    if not isinstance(existing, list):
                        existing = []
                    # 합집합 병합, 입력 순서 보존
                    seen = set(existing)
                    merged = list(existing)
                    for item in val:
                        if item not in seen:
                            seen.add(item)
                            merged.append(item)
                    state[key] = merged
                elif isinstance(val, dict):
                    # 객체(SRS 복습 일정) — 항목별로 최신(t) 우선 병합
                    existing = state.get(key)
                    if not isinstance(existing, dict):
                        existing = {}
                    for iid, entry in val.items():
                        cur = existing.get(iid)
                        if cur is None or str((entry or {}).get("t", "")) >= str((cur or {}).get("t", "")):
                            existing[iid] = entry
                    state[key] = existing
            _write_state(state)
            self._send_json(state)

    def log_message(self, *args):
        pass  # 조용히


if __name__ == "__main__":
    httpd = ThreadingHTTPServer(("0.0.0.0", PORT), Handler)
    httpd.serve_forever()
