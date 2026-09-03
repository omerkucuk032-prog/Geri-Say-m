self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('geri-sayim-store').then((cache) => {
      return cache.addAll([
        './index.html',
        './icon.svg'
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
