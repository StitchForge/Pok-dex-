const CACHE='dexbinder-shell-v094a';
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

const DATA_CACHE='dexbinder-data-stable-v1';
const IMAGE_CACHE='dexbinder-images-stable-v1';

async function migrateCacheFamily(prefix,targetName){
  const names=await caches.keys();
  const sourceNames=names.filter(n=>n.startsWith(prefix)&&n!==targetName);
  if(!sourceNames.length)return;
  const target=await caches.open(targetName);
  for(const name of sourceNames){
    const source=await caches.open(name);
    const requests=await source.keys();
    for(const req of requests){
      if(await target.match(req))continue;
      const res=await source.match(req);
      if(res)await target.put(req,res);
    }
  }
}

self.addEventListener('activate',event=>{
  event.waitUntil((async()=>{
    await migrateCacheFamily('dexbinder-data-',DATA_CACHE);
    await migrateCacheFamily('dexbinder-images-',IMAGE_CACHE);
    const keep=new Set([CACHE,DATA_CACHE,IMAGE_CACHE]);
    const keys=await caches.keys();
    await Promise.all(keys.filter(k=>k.startsWith('dexbinder-')&&!keep.has(k)).map(k=>caches.delete(k)));
    await self.clients.claim();
  })());
});

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

  if(url.origin===self.location.origin && url.pathname.startsWith('/tcgplayer-gg/')){
    event.respondWith(fetch(req));
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
