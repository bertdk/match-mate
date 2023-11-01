import{m as P}from"./q-ee904b6c.js";import"./q-b1226339.js";var V=Object.defineProperty,W=(e,t,i)=>t in e?V(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,m=(e,t,i)=>(W(e,typeof t!="symbol"?t+"":t,i),i);class ee extends Error{constructor(t,i){super(typeof t=="string"?t:""),m(this,"name","FormError"),m(this,"errors"),this.errors=typeof t=="string"?i||{}:t}}function te(e,t,i){const{checked:n,files:r,options:a,value:o,valueAsDate:l,valueAsNumber:c}=e;return!i||i==="string"?o:i==="string[]"?a?[...a].filter(s=>s.selected&&!s.disabled).map(s=>s.value):n?[...t.value||[],o]:(t.value||[]).filter(s=>s!==o):i==="number"?c:i==="boolean"?n:i==="File"&&r?P(r[0]):i==="File[]"&&r?[...r].map(s=>P(s)):i==="Date"&&l?l:t.value}function g(e){return[...Object.values(e.internal.fields),...Object.values(e.internal.fieldArrays)]}function N(e,t){return e.internal.fieldArrays[t]}function $(e,t){return+t.replace(`${e}.`,"").split(".")[0]}function j(e,t){_(e,!1).forEach(i=>{const n=N(e,i).items.length-1;t.filter(r=>r.startsWith(`${i}.`)&&$(i,r)>n).forEach(r=>{t.splice(t.indexOf(r),1)})})}function _(e,t=!0){const i=Object.keys(e.internal.fieldArrays);return t&&j(e,i),i}function q(e,t=!0){const i=Object.keys(e.internal.fields);return t&&j(e,i),i}function b(e,t){return e.internal.fields[t]}function I(e,t,i){const n=q(e,i),r=_(e,i);return typeof t=="string"||Array.isArray(t)?(typeof t=="string"?[t]:t).reduce((a,o)=>{const[l,c]=a;return r.includes(o)?(r.forEach(s=>{s.startsWith(o)&&c.add(s)}),n.forEach(s=>{s.startsWith(o)&&l.add(s)})):l.add(o),a},[new Set,new Set]).map(a=>[...a]):[n,r]}function z(e,t){const i=n=>n instanceof Blob?n.size:n;return Array.isArray(e)&&Array.isArray(t)?e.map(i).join()!==t.map(i).join():e instanceof Date&&t instanceof Date?e.getTime()!==t.getTime():Number.isNaN(e)&&Number.isNaN(t)?!1:e!==t}function w(e,t){return e.split(".").reduce((i,n)=>i==null?void 0:i[n],t)}let B=0;function x(){return B++}async function ie(e,t){const i=await e.resolve();return(typeof i=="function"?i():i).safeParse(t)}function D(e,t){return(typeof e!="string"&&!Array.isArray(e)?e:t)||{}}function U(e,t){e.dirty=t||g(e).some(i=>i.active&&i.dirty)}function Z(e,t){const i=z(t.internal.startValue,t.value);i!==t.dirty&&(t.dirty=i,U(e,i))}function T(e,t){var i,n;(n=(i=b(e,t))==null?void 0:i.internal.elements[0])==null||n.focus()}function G(e,t,i,{shouldActive:n=!0,shouldTouched:r=!1,shouldDirty:a=!1,shouldFocus:o=!!i}={}){for(const l of[b(e,t),N(e,t)])l&&(!n||l.active)&&(!r||l.touched)&&(!a||l.dirty)&&(l.error=i,i&&"value"in l&&o&&T(e,t));R(e,!!i)}function H(e,t,i){const{shouldActive:n=!0,shouldTouched:r=!1,shouldDirty:a=!1,shouldValid:o=!1}=D(t,i);return I(e,t)[0].reduce((l,c)=>{const s=b(e,c);return(!n||s.active)&&(!r||s.touched)&&(!a||s.dirty)&&(!o||!s.error)&&(typeof t=="string"?c.replace(`${t}.`,""):c).split(".").reduce((y,d,f,v)=>y[d]=f===v.length-1?s.value:typeof y[d]=="object"&&y[d]||(isNaN(+v[f+1])?{}:[]),l),l},typeof t=="string"?[]:{})}function ne(e,t,i){const[n,r]=I(e,t,!1),a=typeof t=="string"&&n.length===1,o=!a&&!Array.isArray(t),l=D(t,i),{initialValue:c,initialValues:s,keepResponse:y=!1,keepSubmitCount:d=!1,keepSubmitted:f=!1,keepValues:v=!1,keepDirtyValues:p=!1,keepItems:h=!1,keepDirtyItems:C=!1,keepErrors:O=!1,keepTouched:k=!1,keepDirty:S=!1}=l;n.forEach(A=>{const u=b(e,A);(a?"initialValue"in l:s)&&(u.internal.initialValue=a?c:w(A,s));const F=p&&u.dirty;!v&&!F&&(u.internal.startValue=u.internal.initialValue,u.value=u.internal.initialValue,u.internal.elements.forEach(E=>{E.type==="file"&&(E.value="")})),k||(u.touched=!1),!S&&!v&&!F&&(u.dirty=!1),O||(u.error="")}),r.forEach(A=>{var E;const u=N(e,A),F=C&&u.dirty;!h&&!F&&(s&&(u.internal.initialItems=((E=w(A,s))==null?void 0:E.map(()=>x()))||[]),u.internal.startItems=[...u.internal.initialItems],u.items=[...u.internal.initialItems]),k||(u.touched=!1),!S&&!h&&!F&&(u.dirty=!1),O||(u.error="")}),o&&(y||(e.response={}),d||(e.submitCount=0),f||(e.submitted=!1)),Q(e)}function J(e,t,{duration:i}={}){e.response=t,i&&setTimeout(()=>{e.response===t&&(e.response={})},i)}async function K(e,t,i){const[n,r]=I(e,t),{shouldActive:a=!0,shouldFocus:o=!0}=D(t,i),l=x();e.internal.validators.push(l),e.validating=!0;const c=e.internal.validate?await e.internal.validate(H(e,{shouldActive:a})):{};let s=typeof t!="string"&&!Array.isArray(t)?!Object.keys(c).length:!0;const[y]=await Promise.all([Promise.all(n.map(async d=>{const f=b(e,d);if(!a||f.active){let v;for(const h of f.internal.validate)if(v=await h(f.value),v)break;const p=v||c[d]||"";return p&&(s=!1),f.error=p,p?d:null}})),Promise.all(r.map(async d=>{const f=N(e,d);if(!a||f.active){let v="";for(const h of f.internal.validate)if(v=await h(f.items),v)break;const p=v||c[d]||"";p&&(s=!1),f.error=p}}))]);if(M(e,c,{shouldActive:a}),o){const d=y.find(f=>f);d&&T(e,d)}return R(e,!s),e.internal.validators.splice(e.internal.validators.indexOf(l),1),e.internal.validators.length||(e.validating=!1),s}function L(e,t,i,{on:n,shouldFocus:r=!1}){n.includes((e.internal.validateOn==="submit"?e.submitted:t.error)?e.internal.revalidateOn:e.internal.validateOn)&&K(e,i,{shouldFocus:r})}async function re(e,t,i,n,r,a,o){o!==void 0&&(t.value=o);for(const l of t.internal.transform)t.value=await l(t.value,n,r);t.touched=!0,e.touched=!0,Z(e,t),L(e,t,i,{on:a})}function M(e,t,{duration:i,shouldActive:n=!0}){const r=Object.entries(t).reduce((a,[o,l])=>([b(e,o),N(e,o)].every(c=>!c||n&&!c.active)&&a.push(l),a),[]).join(" ");r&&J(e,{status:"error",message:r},{duration:i})}function se(e,t,i){Object.entries(t).forEach(([n,r])=>{r&&G(e,n,r,{...i,shouldFocus:!1})})}function R(e,t){e.invalid=t||g(e).some(i=>i.active&&i.error)}function Q(e){let t=!1,i=!1,n=!1;for(const r of g(e))if(r.active&&(r.touched&&(t=!0),r.dirty&&(i=!0),r.error&&(n=!0)),t&&i&&n)break;e.touched=t,e.dirty=i,e.invalid=n}export{ee as F,H as a,J as b,M as c,x as d,ie as e,te as g,re as h,ne as r,se as s,Q as u,K as v};
