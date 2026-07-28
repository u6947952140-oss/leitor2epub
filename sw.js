self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(
    caches.open('linguapages-v5').then(cache => {
      return cache.addAll(['./','./index.html','./manifest.json']);
    })
  );
});
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
