"use strict";(self.webpackChunkmySimpleIonicApp=self.webpackChunkmySimpleIonicApp||[]).push([[7356],{7356:(k,p,u)=>{u.r(p),u.d(p,{startTapClick:()=>w});var d=u(8476),C=u(4920);const w=n=>{if(void 0===d.d)return;let t,o,a,s=0;const g=n.getBoolean("animated",!0)&&n.getBoolean("rippleEffect",!0),l=new WeakMap,m=()=>{a&&clearTimeout(a),a=void 0,t&&(h(!1),t=void 0)},A=(e,i)=>{if(e&&e===t)return;a&&clearTimeout(a),a=void 0;const{x:r,y:c}=(0,C.p)(i);if(t){if(l.has(t))throw new Error("internal error");t.classList.contains(f)||T(t,r,c),h(!0)}if(e){const L=l.get(e);L&&(clearTimeout(L),l.delete(e)),e.classList.remove(f);const R=()=>{T(e,r,c),a=void 0};E(e)?R():a=setTimeout(R,_)}t=e},T=(e,i,r)=>{if(s=Date.now(),e.classList.add(f),!g)return;const c=S(e);null!==c&&(D(),o=c.addRipple(i,r))},D=()=>{void 0!==o&&(o.then(e=>e()),o=void 0)},h=e=>{D();const i=t;if(!i)return;const r=v-Date.now()+s;if(e&&r>0&&!E(i)){const c=setTimeout(()=>{i.classList.remove(f),l.delete(i)},v);l.set(i,c)}else i.classList.remove(f)};d.d.addEventListener("ionGestureCaptured",m),d.d.addEventListener("pointerdown",e=>{t||2===e.button||A(I(e),e)},!0),d.d.addEventListener("pointerup",e=>{A(void 0,e)},!0),d.d.addEventListener("pointercancel",m,!0)},I=n=>{if(void 0===n.composedPath)return n.target.closest(".ion-activatable");{const s=n.composedPath();for(let t=0;t<s.length-2;t++){const o=s[t];if(!(o instanceof ShadowRoot)&&o.classList.contains("ion-activatable"))return o}}},E=n=>n.classList.contains("ion-activatable-instant"),S=n=>{if(n.shadowRoot){const s=n.shadowRoot.querySelector("ion-ripple-effect");if(s)return s}return n.querySelector("ion-ripple-effect")},f="ion-activated",_=100,v=150}}]);