const CACHE='renpa-movil-mapa-v34';
const CORE=['index.html','css/styles.css?v=34','js/public.js?v=34','js/tutorial.js?v=34','manifest.webmanifest','assets/cabecera.png','icon-180.png','icon-192.png','icon-512.png','data/estadisticas.js?v=34','data/RENPA_datos.js','data/RENPA_geo.js','data/RENPA_espacios_completos.js','config-publicacion.js','correcciones-iniciales.js?v=34','cargar-correcciones.js?v=34'];
const absolute=p=>new URL(p,self.registration.scope).href;
self.addEventListener('install',e=>e.waitUntil((async()=>{
 const c=await caches.open(CACHE);
 await c.addAll(CORE.map(p=>new Request(absolute(p),{cache:'reload'})));
 await self.skipWaiting();
})()));
self.addEventListener('activate',e=>e.waitUntil((async()=>{
 await Promise.all((await caches.keys()).filter(k=>k.startsWith('renpa-movil-')&&k!==CACHE).map(k=>caches.delete(k)));
 await self.clients.claim();
})()));
self.addEventListener('fetch',e=>{
 const r=e.request,u=new URL(r.url);if(r.method!=='GET'||!u.href.startsWith(self.registration.scope))return;
 const path=u.pathname.slice(new URL(self.registration.scope).pathname.length)+u.search;
 if(r.mode==='navigate'){e.respondWith(caches.open(CACHE).then(c=>c.match(absolute('index.html'))).then(v=>v||fetch(r)));return;}
 if(CORE.includes(path))e.respondWith(caches.open(CACHE).then(c=>c.match(absolute(path))).then(v=>v||fetch(r)));
});
