# 링곰 공개 사이트 — 배포 · 도메인 · 애드센스 가이드

이 `site/` 폴더는 **로그인 없이 누구나 볼 수 있는 공개 정적 사이트**입니다.
구글 애드센스 심사는 로그인 벽을 통과하지 못하므로, 이 폴더를 Cloudflare Pages에 올려 심사를 받습니다.
(기존 로그인 앱 `index.html`·`server.py`는 그대로 두고, 별도로 운영하세요.)

```
site/
  index.html        홈 (소개·기능·샘플·FAQ)
  about.html        사이트 소개
  features.html     기능 소개
  privacy.html      개인정보처리방침  ← 애드센스 필수
  404.html          없는 페이지
  style.css         공통 스타일
  bear.svg          로고/파비콘
  robots.txt        크롤러 허용 + 사이트맵 위치
  sitemap.xml       4개 페이지 목록
  manifest.webmanifest
  assets/
    og-image.png        공유 카드 1200x630
    apple-touch-icon.png 180x180
    screenshot.png      실제 학습 화면
```

---

## 1) Cloudflare Pages에 올리기

GitHub 저장소(`ninebell-dev/lingom`)와 연결돼 있으니 Git 연동 방식이 가장 쉽습니다.

1. Cloudflare 대시보드 → **Workers & Pages → Create → Pages → Connect to Git**
2. `lingom` 저장소 선택
3. 빌드 설정:
   - **Framework preset**: None
   - **Build command**: 비워둠
   - **Build output directory**: `site`     ← **이게 핵심.** 공개 폴더만 배포됩니다.
   - **Root directory**: (비워둠)
4. Save and Deploy → 잠시 후 `https<프로젝트>.pages.dev` 주소가 나옵니다.

> 프로젝트 이름을 `lingom`으로 만들면 주소가 `https://lingom.app`가 됩니다.
> 본 사이트의 모든 SEO 태그가 이 주소로 맞춰져 있습니다.

---

## 2) 커스텀 도메인 (선택, 애드센스 신뢰도 ↑)

`*.pages.dev`로도 애드센스 신청은 되지만, 직접 도메인이 있으면 더 좋습니다.

**도메인 사는 법**
- 가장 간단: **Cloudflare 대시보드 → Domain Registration → Register Domains**에서 바로 구매(원가에 가까움, 별도 네임서버 설정 불필요).
- 또는 가비아·후이즈·Namecheap 등에서 구매 후 네임서버를 Cloudflare로 변경.

**Pages에 연결**
- 해당 Pages 프로젝트 → **Custom domains → Set up a domain** → 도메인 입력 → 안내대로 DNS 추가.

**도메인을 정했으면 SEO 주소 일괄 교체** (프로젝트 루트에서 실행):

```bash
# 예: lingom.kr 로 바꾸는 경우
grep -rl 'lingom.app' site/ | xargs sed -i 's#https://lingom.app#https://lingom.kr#g'
```

`canonical`, `og:url`, `sitemap.xml`, `robots.txt`, JSON-LD가 한 번에 새 주소로 바뀝니다.
교체 후 다시 커밋·푸시하면 Cloudflare가 자동 재배포합니다.

---

## 3) 구글 애드센스 신청

1. **콘텐츠/정책 점검** — 이 사이트는 소개·기능·개인정보처리방침 + 실제 학습 콘텐츠를 갖추고 있어 기본 요건을 충족합니다. 배포 후 며칠 운영하며 색인되게 둡니다.
2. [Google AdSense](https://adsense.google.com) 가입 → 사이트 주소 등록.
3. AdSense가 주는 **게시자 스크립트**를 각 페이지 `<head>`의
   `▼▼▼ Google AdSense ▼▼▼` 주석 사이에 붙여넣습니다 (index·about·features·privacy 4개 파일).
   ```html
   <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX" crossorigin="anonymous"></script>
   ```
4. **ads.txt** 추가 — 승인 후 발급되는 게시자 ID로 `site/ads.txt`를 만듭니다:
   ```
   google.com, pub-XXXXXXXXXXXXXXXX, DIRECT, f08c47fec0942fa0
   ```
5. 광고 단위를 만들면 본문 안에 `<ins class="adsbygoogle" ...>` 코드를 원하는 위치에 넣습니다.

> 개인정보처리방침에는 이미 **구글 애드센스/제3자 쿠키·맞춤 광고·옵트아웃** 고지가 포함돼 있습니다(애드센스 필수 항목).

---

## 4) 검색 노출 (SEO) 마무리

- [Google Search Console](https://search.google.com/search-console) → 도메인/URL 등록 → **소유권 확인**.
- **Sitemaps** 메뉴에서 `sitemap.xml` 제출.
- 모든 페이지에 `title`·`description`·`canonical`·Open Graph·Twitter 카드·JSON-LD 구조화 데이터가 들어 있어 색인에 유리합니다.

---

## 교체가 필요한 값 한눈에

| 값 | 현재 | 바꿀 때 |
|---|---|---|
| 정규 주소 | `https://lingom.app` | 커스텀 도메인 정하면 sed로 일괄 교체 |
| 문의 이메일 | `ninebell94@gmail.com` | 바꾸려면 각 파일에서 검색·치환 |
| `시작하기` 버튼 링크 | `https://app.lingom.app/` | 로그인 학습 앱(Cloudflare Tunnel→내 PC) |
| 애드센스 스크립트 | 주석 자리(비어 있음) | 승인 코드 붙여넣기 |
