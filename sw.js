// Network first, always revalidated (updates arrive as soon as the iPad is online), cached copy when offline.
const C='lexiterra-v1';
const CORE=['./','index.html','icon-180.png','icon-512.png','manifest.webmanifest'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(CORE)));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;const u=new URL(e.request.url);
 if(u.pathname.endsWith('version.txt'))return;
 const same=u.origin===location.origin,req=same?fetch(u.href,{cache:'no-cache'}):fetch(e.request);
 e.respondWith(req.then(r=>{const cp=r.clone();caches.open(C).then(c=>c.put(e.request,cp)).catch(()=>{});return r})
  .catch(()=>caches.match(e.request,{ignoreSearch:true}).then(r=>r||caches.match('index.html'))))});
