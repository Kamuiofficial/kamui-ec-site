
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('kamui-cache').then(cache => {
      return cache.addAll([
        './',
        './index.html',
        './style.css',
        './manifest.json',
        './background_for_webpage.png',
        './logo.png'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
