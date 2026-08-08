// Nome do cache
const CACHE_NAME = 'artigoum-v1';

// Arquivos para salvar em cache para funcionar offline
const urlsToCache = [
  '/artigoum/',
  '/artigoum/index.html',
  '/artigoum/painel.html',
  '/artigoum/logo-a1.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
