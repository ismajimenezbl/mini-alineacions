/* Service worker: la app funciona sin conexión. Solo guarda en caché el código de la app y pdf.js; nunca datos de jugadores. */
const V = 'alineaciones-mini-v2';
const SHELL = ['./', 'index.html', 'manifest.webmanifest', 'icon-192.png', 'icon-512.png'];
const CDN = ['https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js', 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js'];

self.addEventListener('install', e => e.waitUntil((async () => {
  const c = await caches.open(V);
  await c.addAll(SHELL);
  await Promise.all(CDN.map(u => c.add(new Request(u, {mode: 'cors'})).catch(() => {})));
  self.skipWaiting();
})()));

self.addEventListener('activate', e => e.waitUntil((async () => {
  for (const k of await caches.keys()) if (k !== V) await caches.delete(k);
  await self.clients.claim();
})()));

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const u = new URL(e.request.url);
  if (u.origin !== location.origin && u.hostname !== 'cdnjs.cloudflare.com') return;
  e.respondWith(caches.match(e.request).then(hit => {
    const red = fetch(e.request).then(r => { if (r.ok) { const copia = r.clone(); caches.open(V).then(c => c.put(e.request, copia)); } return r; }).catch(() => hit);
    return hit || red;
  }));
});
