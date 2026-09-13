const CACHE='dexbinder-shell-v082';
const APP_SHELL=[
  './',
  './index.html',
  './manifest.webmanifest','./cloud-config.js',
  './icon-192.png',
  './icon-512.png',
  './icon-maskable-512.png',
  './apple-touch-icon.png'
];

self.addEventListener('install',event=>{
  event.waitUntil(
    caches.open(CACHE)
      .then(cache=>cache.addAll(APP_SHELL))
      .then(()=>self.skipWaiting())
  );
});

self.addEventListener('activate',event=>{
  const keep=new Set([CACHE,'dexbinder-data-v06b','dexbinder-images-v06b']);
  event.waitUntil(
    caches.keys()
      .then(keys=>Promise.all(keys.filter(k=>k.startsWith('dexbinder-')&&!keep.has(k)).map(k=>caches.delete(k))))
      .then(()=>self.clients.claim())
  );
});

const DATA_CACHE='dexbinder-data-v06b';
const IMAGE_CACHE='dexbinder-images-v06b';

async function trimCache(name,max){
  const cache=await caches.open(name),keys=await cache.keys();
  if(keys.length<=max)return;
  await Promise.all(keys.slice(0,keys.length-max).map(k=>cache.delete(k)));
}
async function staleWhileRevalidate(req,cacheName,max){
  const cache=await caches.open(cacheName);
  const cached=await cache.match(req);
  const network=fetch(req).then(res=>{
    if(res && (res.ok || res.type==='opaque')){
      cache.put(req,res.clone()).then(()=>trimCache(cacheName,max));
    }
    return res;
  }).catch(()=>null);
  if(cached){network.catch(()=>{});return cached}
  const fresh=await network;
  if(fresh)return fresh;
  throw new Error('Offline and not cached');
}
async function cacheFirst(req,cacheName,max){
  const cache=await caches.open(cacheName);
  const cached=await cache.match(req);if(cached)return cached;
  const res=await fetch(req);
  if(res && (res.ok || res.type==='opaque')){
    cache.put(req,res.clone()).then(()=>trimCache(cacheName,max));
  }
  return res;
}

self.addEventListener('fetch',event=>{
  const req=event.request;
  if(req.method!=='GET')return;
  const url=new URL(req.url);

  if(req.mode==='navigate'){
    event.respondWith(
      fetch(req).then(res=>{
        const copy=res.clone();caches.open(CACHE).then(c=>c.put('./index.html',copy));return res;
      }).catch(()=>caches.match('./index.html'))
    );
    return;
  }

  if(url.origin===self.location.origin){
    event.respondWith(cacheFirst(req,CACHE,40));
    return;
  }

  if(url.hostname==='api.tcgdex.net'){
    event.respondWith(staleWhileRevalidate(req,DATA_CACHE,900));
    return;
  }

  if(url.hostname==='assets.tcgdex.net'){
    event.respondWith(cacheFirst(req,IMAGE_CACHE,1200));
  }
});
