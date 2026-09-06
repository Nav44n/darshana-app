import{r as s}from"./index-B2_yG6Jz.js";/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),C=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,a)=>a?a.toUpperCase():t.toLowerCase()),c=r=>{const e=C(r);return e.charAt(0).toUpperCase()+e.slice(1)},u=(...r)=>r.filter((e,t,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===t).join(" ").trim(),w=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var h={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=s.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:l,...i},f)=>s.createElement("svg",{ref:f,...h,width:e,height:e,stroke:r,strokeWidth:a?Number(t)*24/Number(e):t,className:u("lucide",n),...!o&&!w(i)&&{"aria-hidden":"true"},...i},[...l.map(([m,p])=>s.createElement(m,p)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=(r,e)=>{const t=s.forwardRef(({className:a,...n},o)=>s.createElement(k,{ref:o,iconNode:e,className:u(`lucide-${d(c(r))}`,`lucide-${r}`,a),...n}));return t.displayName=c(r),t};function b(r,e=1){const t=(r==null?void 0:r.verseTerm)||"Verse";return e===1?t:t==="Sūtra"?"Sūtras":t==="Kārikā"?"Kārikās":t==="Śloka"?"Ślokas":t==="Mantra"?"Mantras":t==="Śloka / Mantra"?"Ślokas / Mantras":t.endsWith("s")?t:`${t}s`}export{A as c,b as g};
