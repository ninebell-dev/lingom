# 링곰 · Lingom — 가벼운 정적 사이트 + 진도 동기화 서버
FROM python:3.12-alpine

WORKDIR /app

# 의존성 없음(파이썬 표준 라이브러리만 사용). 소스만 복사.
COPY . /app

# 진도 저장 위치를 컨테이너 안 /data 로 고정 (볼륨으로 영구 보존)
ENV STUDY_ROOT=/app \
    STUDY_DATA=/data/progress.json \
    PORT=30000

EXPOSE 30000
VOLUME ["/data"]

CMD ["python3", "server.py"]
