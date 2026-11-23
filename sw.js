const CACHE='renpa-movil-web-v8';
const CORE=['./','index.html','css/styles.css','js/public.js','manifest.webmanifest','assets/cabecera.png','icon-180.png','icon-192.png','icon-512.png','data/RENPA_datos.js','data/RENPA_geo.js','config-publicacion.js','correcciones-iniciales.js','cargar-correcciones.js'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('renpa-movil-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!=='GET')return;const u=new URL(r.url);if(u.origin!==self.location.origin)return;
if(r.mode==='navigate'||['index.html','js/public.js','css/styles.css','config-publicacion.js','correcciones-iniciales.js','cargar-correcciones.js'].some(x=>u.pathname.endsWith('/'+x))){e.respondWith(fetch(r).then(res=>{if(res.ok){const copy=res.clone();e.waitUntil(caches.open(CACHE).then(c=>c.put(r,copy)))}return res}).catch(()=>caches.match(r).then(c=>c||caches.match('./'))));return;}
e.respondWith(caches.match(r,{ignoreSearch:true}).then(c=>c||fetch(r).then(res=>{if(res.ok){const copy=res.clone();e.waitUntil(caches.open(CACHE).then(cache=>cache.put(r,copy)))}return res})));});
