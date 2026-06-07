# 🐻 링곰 · Lingom

곰이랑 매일 한 마디. 상황별 실생활 회화 패턴을 하루 하나씩, 입에 붙을 때까지.

한국어 사용자를 위한 **호스팅형 언어 학습 서비스**입니다. 계정을 만들면 영어·스페인어·일본어의 실생활 회화 패턴을 상황별로 익히고, 어느 기기에서 접속하든 같은 진도로 이어서 학습할 수 있습니다.

## 언어

| 언어 | 상황 | 패턴 | 문장 |
|---|---|---|---|
| 🇺🇸 영어 | 15 | 60 | 300 |
| 🇪🇸 스페인어 | 24 | 88 | 439 |
| 🇯🇵 일본어 | 24 | 99 | 491 |

## 기능

- **상황별 패턴** — 인사·쇼핑·여행 등 실제 상황으로 묶인 회화 패턴
- **가리기 자가 테스트** — 영어/해석을 가리고 입으로 만들어보기
- **상황 단위 시험** — 한 상황을 다 외우면 전체 시험
- **간격 반복 복습 (SRS)** — 외운 문장을 적절한 간격으로 다시 복습
- **쓰기 연습** — 따라 쓰기 패드 (일본어는 획순 애니메이션)
- **섀도잉** — 문장 연속 재생으로 듣고 따라 읽기
- **계정 + 클라우드 동기화** — 가입하면 진도가 서버에 저장돼, 어느 기기에서든 이어서 학습
- **문장별 단어·표현 풀이**

## 구성

```
index.html          메인 랜딩 페이지
bear.svg            마스코트(곰) / 파비콘
server.py           서버 — 정적 서빙 + 계정/세션/진도 API (SQLite, 외부 의존성 0)
Dockerfile          배포 이미지 (python:3.12-alpine)
docker-compose.yml  운영용 실행 정의
영어/ 스페인어/ 일본어/
  index.html        학습 엔진 (언어별 동일)
  patterns-data.js  상황·패턴·예문 데이터
  dialogs-data.js   예시 대화
  words-data.js     단어장
  notes-data.js     문장별 단어·표현 풀이
```

데이터(`*-data.js`)는 엔진과 분리돼 있어, 데이터만 바꿔 콘텐츠를 확장할 수 있습니다.

## 🛠 운영(서버 배포) 가이드

링곰은 **운영자가 서버를 한 대 띄우고, 사용자는 계정을 만들어 접속**하는 구조입니다.
백엔드는 파이썬 표준 라이브러리만 쓰므로 의존성 설치가 없습니다 (`sqlite3`·`hashlib`·`hmac`).

### 1) 세션 비밀키 생성 (필수)

```bash
export STUDY_SECRET=$(openssl rand -hex 32)   # 운영에선 반드시 고정값으로 보관
```

### 2) 도커로 실행

```bash
STUDY_SECRET=$STUDY_SECRET docker compose up -d
```

→ `http://서버:30000`. 실제 서비스는 **HTTPS 뒤**(Cloudflare·Caddy·Nginx 등)에 두고,
그때는 `STUDY_SECURE_COOKIE=1`로 실행하세요. 데이터(계정·진도)는 `lingom-data` 볼륨의 SQLite에 저장됩니다.

| 항목 | 환경변수 | 비고 |
|---|---|---|
| 세션 서명 키 | `STUDY_SECRET` | **필수.** 미설정 시 재시작마다 전원 로그아웃 |
| HTTPS 쿠키 | `STUDY_SECURE_COOKIE` | HTTPS 배포 시 `1` |
| DB 경로 | `STUDY_DB` | 기본 `/data/lingom.db` (볼륨) |
| 포트 | `PORT` | 기본 `30000` |

### 3) 파이썬으로 직접 실행 (개발)

```bash
STUDY_SECRET=dev STUDY_SECURE_COOKIE=0 python3 server.py
```

> 백업은 `lingom-data` 볼륨의 `lingom.db`(+`-wal`/`-shm`)를 주기적으로 복사하면 됩니다.

### API 요약

```
POST /api/signup  {email, password}   계정 생성 + 로그인
POST /api/login   {email, password}   로그인
POST /api/logout                      로그아웃
GET  /api/me                          현재 로그인 사용자
GET  /api/state                       내 진도 (로그인 필요)
POST /api/state   {key: [...]|{...}}  내 진도 병합 저장 (로그인 필요)
```

## ☕ 후원

링곰이 도움이 됐다면 곰에게 따뜻한 차 한 잔 사주세요. 후원은 콘텐츠 확장과 유지보수에 큰 힘이 됩니다.

[![Ko-fi](https://img.shields.io/badge/Ko--fi-후원하기-FF5E5B?logo=ko-fi&logoColor=white)](https://ko-fi.com/ninebelldevgmailcom)

👉 **https://ko-fi.com/ninebelldevgmailcom**
