import{e as u,aj as c,aq as h,ar as k,as as P,at as V,au as B,p as r,Q as C,ai as D,j as i,Z as I,m as $,b as N,c as R,g as x,r as T,d as _,av as j,t as w,h as F,aw as O,ax as E,i as q,ay as G,G as Q}from"./index-BvzDPrEZ.js";function S(e){return h(()=>{const a=[],s={};if(e.value.background)if(k(e.value.background)){if(s.backgroundColor=e.value.background,!e.value.text&&P(e.value.background)){const t=V(e.value.background);if(t.a==null||t.a===1){const n=B(t);s.color=n,s.caretColor=n}}}else a.push(`bg-${e.value.background}`);return e.value.text&&(k(e.value.text)?(s.color=e.value.text,s.caretColor=e.value.text):a.push(`text-${e.value.text}`)),{colorClasses:a,colorStyles:s}})}function U(e,a){const s=u(()=>({text:c(e)?e.value:a?e[a]:null})),{colorClasses:t,colorStyles:n}=S(s);return{textColorClasses:t,textColorStyles:n}}function W(e,a){const s=u(()=>({background:c(e)?e.value:a?e[a]:null})),{colorClasses:t,colorStyles:n}=S(s);return{backgroundColorClasses:t,backgroundColorStyles:n}}const X=r({elevation:{type:[Number,String],validator(e){const a=parseInt(e);return!isNaN(a)&&a>=0&&a<=24}}},"elevation");function Y(e){return{elevationClasses:u(()=>{const s=c(e)?e.value:e.elevation,t=[];return s==null||t.push(`elevation-${s}`),t})}}const p=r({rounded:{type:[Boolean,Number,String],default:void 0},tile:Boolean},"rounded");function ee(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:C();return{roundedClasses:u(()=>{const t=c(e)?e.value:e.rounded,n=c(e)?e.value:e.tile,o=[];if(t===!0||t==="")o.push(`${a}--rounded`);else if(typeof t=="string"||t===0)for(const l of String(t).split(" "))o.push(`rounded-${l}`);else(n||t===!1)&&o.push("rounded-0");return o})}}const Z=["x-small","small","default","large","x-large"],A=r({size:{type:[String,Number],default:"default"}},"size");function H(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:C();return h(()=>{let s,t;return D(Z,e.size)?s=`${a}--size-${e.size}`:e.size&&(t={width:i(e.size),height:i(e.size)}),{sizeClasses:s,sizeStyles:t}})}const J=r({color:String,disabled:Boolean,start:Boolean,end:Boolean,icon:I,...$(),...A(),...N({tag:"i"}),...R()},"VIcon"),te=x()({name:"VIcon",props:J(),setup(e,a){let{attrs:s,slots:t}=a;const n=T(),{themeClasses:o}=_(e),{iconData:l}=j(u(()=>n.value||e.icon)),{sizeClasses:d}=H(e),{textColorClasses:f,textColorStyles:z}=U(w(e,"color"));return F(()=>{var b,y;const g=(b=t.default)==null?void 0:b.call(t);g&&(n.value=(y=O(g).filter(m=>m.type===E&&m.children&&typeof m.children=="string")[0])==null?void 0:y.children);const v=!!(s.onClick||s.onClickOnce);return q(l.value.component,{tag:e.tag,icon:l.value.icon,class:["v-icon","notranslate",o.value,d.value,f.value,{"v-icon--clickable":v,"v-icon--disabled":e.disabled,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[d.value?void 0:{fontSize:i(e.size),height:i(e.size),width:i(e.size)},z.value,e.style],role:v?"button":void 0,"aria-hidden":!v,tabindex:v?e.disabled?-1:0:void 0},{default:()=>[g]})}),{}}}),se=(e,a)=>{const s=e.__vccOpts||e;for(const[t,n]of a)s[t]=n;return s},K=r({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),ae=x(!1)({name:"VDefaultsProvider",props:K(),setup(e,a){let{slots:s}=a;const{defaults:t,disabled:n,reset:o,root:l,scoped:d}=G(e);return Q(t,{reset:o,root:l,scoped:d,disabled:n}),()=>{var f;return(f=s.default)==null?void 0:f.call(s)}}}),L=[null,"default","comfortable","compact"],ne=r({density:{type:String,default:"default",validator:e=>L.includes(e)}},"density");function oe(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:C();return{densityClasses:u(()=>`${a}--density-${e.density}`)}}export{te as V,se as _,p as a,Y as b,ee as c,ae as d,U as e,ne as f,oe as g,S as h,A as i,H as j,X as m,W as u};
