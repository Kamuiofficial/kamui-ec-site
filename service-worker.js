
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('kamui-cache').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/style.css',
        '/product.html',
        '/cart.html',
        '/contact.html',
        '/cart.js',
        '/logo.png'
      ]);
    })
  );
});
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
