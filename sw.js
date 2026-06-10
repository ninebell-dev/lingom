/* 링곰 PWA 서비스워커 — 정적 자산만 캐시, 인증/동적 요청은 절대 건드리지 않음 */
const CACHE = 'lingom-static-v1';
const ASSETS = [
  '/bear.svg', '/icon-192.png', '/icon-512.png',
  '/apple-touch-icon.png', '/manifest.webmanifest'
];

self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)).catch(() => {}));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;                       // 로그인 등 POST는 건드리지 않음
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;             // 외부 요청 패스
  if (url.pathname.startsWith('/api') || url.pathname.startsWith('/auth')) return; // 동적/인증 패스
  // 정적 자산만 cache-first (+백그라운드 갱신)
  if (/\.(png|svg|webmanifest|ico|css|js|woff2?)$/.test(url.pathname)) {
    e.respondWith(
      caches.match(req).then((hit) => {
        const net = fetch(req).then((res) => {
          if (res && res.status === 200) {
            const copy = res.clone();
            caches.open(CACHE).then((c) => c.put(req, copy));
          }
          return res;
        }).catch(() => hit);
        return hit || net;
      })
    );
  }
});
