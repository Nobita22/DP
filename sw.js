if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let c={};const t=e=>s(e,o),f={module:{uri:o},exports:c,require:t};i[o]=Promise.all(n.map((e=>f[e]||t(e)))).then((e=>(r(...e),c)))}}define(["./workbox-6da860f9"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"icon.png",revision:"a8929655abfdbf396c0d02be585fc97e"},{url:"index.html",revision:"1f96994c3213b4775710aee32dad4786"},{url:"manifest.json",revision:"c8dcafce7475e75128357f22b350c6c5"},{url:"package-lock.json",revision:"402ef452f3048e8f0da6ae128e523138"},{url:"package.json",revision:"8e025c4136f963602fd3bfab03a60a7f"},{url:"snippets/index.css",revision:"811b1ebec86fce691beab519207ec865"},{url:"snippets/index.js",revision:"b4b743a733c54ca2a4aaa964ffe3d38b"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map