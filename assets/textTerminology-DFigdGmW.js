import{r as s}from"./index-cAYfEHpu.js";/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),d=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,o)=>o?o.toUpperCase():t.toLowerCase()),c=r=>{const e=d(r);return e.charAt(0).toUpperCase()+e.slice(1)},u=(...r)=>r.filter((e,t,o)=>!!e&&e.trim()!==""&&o.indexOf(e)===t).join(" ").trim(),C=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var w={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=s.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:o,className:n="",children:a,iconNode:l,...i},m)=>s.createElement("svg",{ref:m,...w,width:e,height:e,stroke:r,strokeWidth:o?Number(t)*24/Number(e):t,className:u("lucide",n),...!a&&!C(i)&&{"aria-hidden":"true"},...i},[...l.map(([f,h])=>s.createElement(f,h)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=(r,e)=>{const t=s.forwardRef(({className:o,...n},a)=>s.createElement(g,{ref:a,iconNode:e,className:u(`lucide-${p(c(r))}`,`lucide-${r}`,o),...n}));return t.displayName=c(r),t};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],b=k("chevron-right",v);function y(r,e=1){const t=(r==null?void 0:r.verseTerm)||"Verse";return e===1?t:t==="Sūtra"?"Sūtras":t==="Kārikā"?"Kārikās":t==="Śloka"?"Ślokas":t==="Mantra"?"Mantras":t==="Śloka / Mantra"?"Ślokas / Mantras":t.endsWith("s")?t:`${t}s`}export{b as C,k as c,y as g};
