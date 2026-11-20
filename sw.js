// Cambia V cada vez que sustituyas RENPA_datos.js, RENPA_geo.js o cualquier archivo de la app.
const V='renpa-movil-v2';
const CORE=['./','index.html','manifest.webmanifest','cabecera.png','icon-180.png','icon-192.png','icon-512.png','lib/leaflet.js','lib/leaflet.css','data/RENPA_datos.js','data/RENPA_geo.js','data/RENPA_exclusiones.js','data/RENPA_solapes_confirmados.js'];
const REG=['RENPA_exclusiones.js','RENPA_solapes_confirmados.js'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  const r=e.request,u=new URL(r.url);
  if(r.method!=='GET'||u.origin!==location.origin)return;
  if(REG.some(n=>u.pathname.endsWith(n))){ // registros de correcciones: red primero, caché como respaldo
    e.respondWith(fetch(r).then(x=>{const c=x.clone();caches.open(V).then(h=>h.put(r,c));return x}).catch(()=>caches.match(r)));return}
  e.respondWith(caches.match(r,{ignoreSearch:true}).then(m=>m||fetch(r)));
});
