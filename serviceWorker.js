const cacheName = 'Mrinal';
const cacheVersion = `${cacheName}::1.0.0`;

const cachedFiles = ['/', '/static/home.json', '/static/about.json', '/static/contact.json', '/static/snippet.json', '/static/img/bg/hero.jpg', '/static/img/bg/ringtone.jpg', '/static/img/bg/notes.jpg', '/public/images/1.jpg', '/public/fonts/Boruna.otf', '/repositories', 'https://api.github.com/repos/mrinalcs/mrinalcs/contents/public/images', 'https://api.github.com/users/mrinalcs/repos', 'https://api.github.com/repos/mrinalcs/vbstat/contents/note'];

const networkFiles = [];

self.addEventListener('install', event => {
    console.log('[pwa install]');

    event.waitUntil(
        caches.open(cacheVersion).then(cache => cache.addAll(cachedFiles))
    );
});

self.addEventListener('activate', event => {
    console.log('[pwa activate]');

    event.waitUntil(
        caches
            .keys()
            .then(keys =>
                Promise.all(
                    keys
                        .filter(
                            key =>
                                key.indexOf(cacheName) === 0 &&
                                key !== cacheVersion
                        )
                        .map(key => caches.delete(key))
                )
            )
    );

    return self.clients.claim();
});

self.addEventListener('fetch', event => {
    if (networkFiles.filter(item => event.request.url.match(item)).length) {
        console.log('[network fetch]', event.request.url);

        event.respondWith(
            caches
                .match(event.request)
                .then(response => response || fetch(event.request))
        );
    } else {
        console.log('[pwa fetch]', event.request.url);

        event.respondWith(
            caches.match(event.request).then(response => {
                caches
                    .open(cacheVersion)
                    .then(cache => cache.add(event.request.url));

                return fetch(event.request).catch(() => response);
            })
        );
    }
});
