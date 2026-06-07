# 링곰 · Lingom — 호스팅 서비스 (정적 사이트 + 계정/진도 API)
FROM python:3.12-alpine

WORKDIR /app

# 의존성 없음(파이썬 표준 라이브러리만 사용). 소스만 복사.
COPY . /app

# 계정·진도 DB는 컨테이너 안 /data 에 (볼륨으로 영구 보존).
# STUDY_SECRET 은 이미지에 굽지 않고 런타임(compose/배포 env)에서 주입한다.
# STUDY_SECURE_COOKIE=1 → HTTPS 배포 기본값. (로컬 http 테스트는 0으로 override)
ENV STUDY_ROOT=/app \
    STUDY_DB=/data/lingom.db \
    STUDY_SECURE_COOKIE=1 \
    PORT=30000

EXPOSE 30000
VOLUME ["/data"]

CMD ["python3", "server.py"]
