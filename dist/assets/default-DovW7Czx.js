import{p as w,m as z,a as me,b as ie,c as Y,g as p,r as U,d as se,t as B,s as P,u as qe,e as r,f as ee,h as M,i as s,j as q,k as ge,w as ye,l as he,o as te,n as ue,q as j,v as Ye,F as re,x as Ze,y as X,z as oe,A as Ke,T as be,B as Ce,C as Se,D as Je,E as Ve,G as ke,H as Xe,I as E,J as _e,K as xe,L as N,M as Qe,N as G,O as et,P as R,Q as Ie,R as ae,S as Be,U as Z,V as tt,W as at,X as lt,Y as we,Z as le,_ as nt,$ as ot,a0 as it,a1 as st,a2 as ut,a3 as rt,a4 as pe,a5 as ct,a6 as dt,a7 as vt,a8 as ft,a9 as mt,aa as gt,ab as yt,ac as ht}from"./index-BgQ5IiWE.js";import{m as Te,a as Ae,b as Pe,u as Le,c as He,d as Me,V as ne,e as bt,f as Q,g as Ct,M as St,h as $e,i as Fe,R as Vt,j as kt,L as _t,k as xt}from"./index-Dgr4b6L2.js";import{u as ce,_ as It,a as De}from"./_plugin-vue_export-helper-QvXSjGUs.js";const Bt=w({app:Boolean,color:String,height:{type:[Number,String],default:"auto"},...Te(),...z(),...Ae(),...me(),...Pe(),...ie({tag:"footer"}),...Y()},"VFooter"),wt=p()({name:"VFooter",props:Bt(),setup(e,u){let{slots:a}=u;const t=U(),{themeClasses:i}=se(e),{backgroundColorClasses:l,backgroundColorStyles:n}=ce(B(e,"color")),{borderClasses:o}=Le(e),{elevationClasses:c}=He(e),{roundedClasses:b}=Me(e),g=P(32),{resizeRef:f}=qe(v=>{v.length&&(g.value=v[0].target.clientHeight)}),h=r(()=>e.height==="auto"?g.value:parseInt(e.height,10));return ee(()=>e.app,()=>{const v=ge({id:e.name,order:r(()=>parseInt(e.order,10)),position:r(()=>"bottom"),layoutSize:h,elementSize:r(()=>e.height==="auto"?void 0:h.value),active:r(()=>e.app),absolute:B(e,"absolute")});ye(()=>{t.value=v.layoutItemStyles.value})}),M(()=>s(e.tag,{ref:f,class:["v-footer",i.value,l.value,o.value,c.value,b.value,e.class],style:[n.value,e.app?t.value:{height:q(e.height)},e.style]},a)),{}}}),pt=["href","title"],Tt={class:"text-caption text-disabled",style:{position:"absolute",right:"16px"}},At=he({__name:"AppFooter",setup(e){const u=[{title:"Vuetify Documentation",icon:"$vuetify",href:"https://vuetifyjs.com/"},{title:"Vuetify Support",icon:"mdi-shield-star-outline",href:"https://support.vuetifyjs.com/"},{title:"Vuetify X",icon:["M2.04875 3.00002L9.77052 13.3248L1.99998 21.7192H3.74882L10.5519 14.3697L16.0486 21.7192H22L13.8437 10.8137L21.0765 3.00002H19.3277L13.0624 9.76874L8.0001 3.00002H2.04875ZM4.62054 4.28821H7.35461L19.4278 20.4308H16.6937L4.62054 4.28821Z"],href:"https://x.com/vuetifyjs"},{title:"Vuetify GitHub",icon:"mdi-github",href:"https://github.com/vuetifyjs/vuetify"},{title:"Vuetify Discord",icon:["M22,24L16.75,19L17.38,21H4.5A2.5,2.5 0 0,1 2,18.5V3.5A2.5,2.5 0 0,1 4.5,1H19.5A2.5,2.5 0 0,1 22,3.5V24M12,6.8C9.32,6.8 7.44,7.95 7.44,7.95C8.47,7.03 10.27,6.5 10.27,6.5L10.1,6.33C8.41,6.36 6.88,7.53 6.88,7.53C5.16,11.12 5.27,14.22 5.27,14.22C6.67,16.03 8.75,15.9 8.75,15.9L9.46,15C8.21,14.73 7.42,13.62 7.42,13.62C7.42,13.62 9.3,14.9 12,14.9C14.7,14.9 16.58,13.62 16.58,13.62C16.58,13.62 15.79,14.73 14.54,15L15.25,15.9C15.25,15.9 17.33,16.03 18.73,14.22C18.73,14.22 18.84,11.12 17.12,7.53C17.12,7.53 15.59,6.36 13.9,6.33L13.73,6.5C13.73,6.5 15.53,7.03 16.56,7.95C16.56,7.95 14.68,6.8 12,6.8M9.93,10.59C10.58,10.59 11.11,11.16 11.1,11.86C11.1,12.55 10.58,13.13 9.93,13.13C9.29,13.13 8.77,12.55 8.77,11.86C8.77,11.16 9.28,10.59 9.93,10.59M14.1,10.59C14.75,10.59 15.27,11.16 15.27,11.86C15.27,12.55 14.75,13.13 14.1,13.13C13.46,13.13 12.94,12.55 12.94,11.86C12.94,11.16 13.45,10.59 14.1,10.59Z"],href:"https://community.vuetifyjs.com/"},{title:"Vuetify Reddit",icon:"mdi-reddit",href:"https://reddit.com/r/vuetifyjs"}];return(a,t)=>(te(),ue(wt,{height:"40",app:""},{default:j(()=>[(te(),Ye(re,null,Ze(u,i=>X("a",{key:i.title,href:i.href,title:i.title,class:"d-inline-block mx-2 social-link",rel:"noopener noreferrer",target:"_blank"},[s(ne,{icon:i.icon,size:i.icon==="$vuetify"?24:16},null,8,["icon","size"])],8,pt)),64)),X("div",Tt,[oe(" © 2016-"+Ke(new Date().getFullYear())+" ",1),t[0]||(t[0]=X("span",{class:"d-none d-sm-inline-block"},"Vuetify, LLC",-1)),t[1]||(t[1]=oe(" — ")),t[2]||(t[2]=X("a",{class:"text-decoration-none on-surface",href:"https://vuetifyjs.com/about/licensing/",rel:"noopener noreferrer",target:"_blank"}," MIT License ",-1))])]),_:1}))}}),Pt=It(At,[["__scopeId","data-v-dfb8bf39"]]),Ee=w({text:String,...z(),...ie()},"VToolbarTitle"),ze=p()({name:"VToolbarTitle",props:Ee(),setup(e,u){let{slots:a}=u;return M(()=>{const t=!!(a.default||a.text||e.text);return s(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var i;return[t&&s("div",{class:"v-toolbar-title__placeholder"},[a.text?a.text():e.text,(i=a.default)==null?void 0:i.call(a)])]}})}),{}}}),Lt=w({disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:String,origin:String},"transition");function T(e,u,a){return p()({name:e,props:Lt({mode:a,origin:u}),setup(t,i){let{slots:l}=i;const n={onBeforeEnter(o){t.origin&&(o.style.transformOrigin=t.origin)},onLeave(o){if(t.leaveAbsolute){const{offsetTop:c,offsetLeft:b,offsetWidth:g,offsetHeight:f}=o;o._transitionInitialStyles={position:o.style.position,top:o.style.top,left:o.style.left,width:o.style.width,height:o.style.height},o.style.position="absolute",o.style.top=`${c}px`,o.style.left=`${b}px`,o.style.width=`${g}px`,o.style.height=`${f}px`}t.hideOnLeave&&o.style.setProperty("display","none","important")},onAfterLeave(o){if(t.leaveAbsolute&&(o!=null&&o._transitionInitialStyles)){const{position:c,top:b,left:g,width:f,height:h}=o._transitionInitialStyles;delete o._transitionInitialStyles,o.style.position=c||"",o.style.top=b||"",o.style.left=g||"",o.style.width=f||"",o.style.height=h||""}}};return()=>{const o=t.group?be:Ce;return Se(o,{name:t.disabled?"":e,css:!t.disabled,...t.group?void 0:{mode:t.mode},...t.disabled?{}:n},l.default)}}})}function Re(e,u){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return p()({name:e,props:{mode:{type:String,default:a},disabled:Boolean,group:Boolean},setup(t,i){let{slots:l}=i;const n=t.group?be:Ce;return()=>Se(n,{name:t.disabled?"":e,css:!t.disabled,...t.disabled?{}:u},l.default)}})}function Ne(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const a=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",t=Je(`offset-${a}`);return{onBeforeEnter(n){n._parent=n.parentNode,n._initialStyle={transition:n.style.transition,overflow:n.style.overflow,[a]:n.style[a]}},onEnter(n){const o=n._initialStyle;n.style.setProperty("transition","none","important"),n.style.overflow="hidden";const c=`${n[t]}px`;n.style[a]="0",n.offsetHeight,n.style.transition=o.transition,e&&n._parent&&n._parent.classList.add(e),requestAnimationFrame(()=>{n.style[a]=c})},onAfterEnter:l,onEnterCancelled:l,onLeave(n){n._initialStyle={transition:"",overflow:n.style.overflow,[a]:n.style[a]},n.style.overflow="hidden",n.style[a]=`${n[t]}px`,n.offsetHeight,requestAnimationFrame(()=>n.style[a]="0")},onAfterLeave:i,onLeaveCancelled:i};function i(n){e&&n._parent&&n._parent.classList.remove(e),l(n)}function l(n){const o=n._initialStyle[a];n.style.overflow=n._initialStyle.overflow,o!=null&&(n.style[a]=o),delete n._initialStyle}}T("fab-transition","center center","out-in");T("dialog-bottom-transition");T("dialog-top-transition");T("fade-transition");const Ht=T("scale-transition");T("scroll-x-transition");T("scroll-x-reverse-transition");T("scroll-y-transition");T("scroll-y-reverse-transition");T("slide-x-transition");T("slide-x-reverse-transition");const Mt=T("slide-y-transition");T("slide-y-reverse-transition");const $t=Re("expand-transition",Ne());Re("expand-x-transition",Ne("",!0));const Ft=[null,"prominent","default","comfortable","compact"],Ue=w({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>Ft.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...Te(),...z(),...Ae(),...Pe(),...ie({tag:"header"}),...Y()},"VToolbar"),de=p()({name:"VToolbar",props:Ue(),setup(e,u){var v;let{slots:a}=u;const{backgroundColorClasses:t,backgroundColorStyles:i}=ce(B(e,"color")),{borderClasses:l}=Le(e),{elevationClasses:n}=He(e),{roundedClasses:o}=Me(e),{themeClasses:c}=se(e),{rtlClasses:b}=Ve(),g=P(!!(e.extended||(v=a.extension)!=null&&v.call(a))),f=r(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),h=r(()=>g.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return ke({VBtn:{variant:"text"}}),M(()=>{var V;const m=!!(e.title||a.title),C=!!(a.image||e.image),S=(V=a.extension)==null?void 0:V.call(a);return g.value=!!(e.extended||S),s(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},t.value,l.value,n.value,o.value,c.value,b.value,e.class],style:[i.value,e.style]},{default:()=>[C&&s("div",{key:"image",class:"v-toolbar__image"},[a.image?s(Q,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):s(bt,{key:"image-img",cover:!0,src:e.image},null)]),s(Q,{defaults:{VTabs:{height:q(f.value)}}},{default:()=>{var d,k,_;return[s("div",{class:"v-toolbar__content",style:{height:q(f.value)}},[a.prepend&&s("div",{class:"v-toolbar__prepend"},[(d=a.prepend)==null?void 0:d.call(a)]),m&&s(ze,{key:"title",text:e.title},{text:a.title}),(k=a.default)==null?void 0:k.call(a),a.append&&s("div",{class:"v-toolbar__append"},[(_=a.append)==null?void 0:_.call(a)])])]}}),s(Q,{defaults:{VTabs:{height:q(h.value)}}},{default:()=>[s($t,null,{default:()=>[g.value&&s("div",{class:"v-toolbar__extension",style:{height:q(h.value)}},[S])]})]})]})}),{contentHeight:f,extensionHeight:h}}}),Dt=w({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function Et(e){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:a}=u;let t=0,i=0;const l=U(null),n=P(0),o=P(0),c=P(0),b=P(!1),g=P(!1),f=r(()=>Number(e.scrollThreshold)),h=r(()=>Xe((f.value-n.value)/f.value||0)),v=()=>{const m=l.value;if(!m||a&&!a.value)return;t=n.value,n.value="window"in m?m.pageYOffset:m.scrollTop;const C=m instanceof Window?document.documentElement.scrollHeight:m.scrollHeight;if(i!==C){i=C;return}g.value=n.value<t,c.value=Math.abs(n.value-f.value)};return E(g,()=>{o.value=o.value||n.value}),E(b,()=>{o.value=0}),_e(()=>{E(()=>e.scrollTarget,m=>{var S;const C=m?document.querySelector(m):window;C&&C!==l.value&&((S=l.value)==null||S.removeEventListener("scroll",v),l.value=C,l.value.addEventListener("scroll",v,{passive:!0}))},{immediate:!0})}),xe(()=>{var m;(m=l.value)==null||m.removeEventListener("scroll",v)}),a&&E(a,v,{immediate:!0}),{scrollThreshold:f,currentScroll:n,currentThreshold:c,isScrollActive:b,scrollRatio:h,isScrollingUp:g,savedScroll:o}}const zt=w({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...Ue(),...me(),...Dt(),height:{type:[Number,String],default:64}},"VAppBar"),Rt=p()({name:"VAppBar",props:zt(),emits:{"update:modelValue":e=>!0},setup(e,u){let{slots:a}=u;const t=U(),i=N(e,"modelValue"),l=r(()=>{var k;const d=new Set(((k=e.scrollBehavior)==null?void 0:k.split(" "))??[]);return{hide:d.has("hide"),fullyHide:d.has("fully-hide"),inverted:d.has("inverted"),collapse:d.has("collapse"),elevate:d.has("elevate"),fadeImage:d.has("fade-image")}}),n=r(()=>{const d=l.value;return d.hide||d.fullyHide||d.inverted||d.collapse||d.elevate||d.fadeImage||!i.value}),{currentScroll:o,scrollThreshold:c,isScrollingUp:b,scrollRatio:g}=Et(e,{canScroll:n}),f=r(()=>l.value.hide||l.value.fullyHide),h=r(()=>e.collapse||l.value.collapse&&(l.value.inverted?g.value>0:g.value===0)),v=r(()=>e.flat||l.value.fullyHide&&!i.value||l.value.elevate&&(l.value.inverted?o.value>0:o.value===0)),m=r(()=>l.value.fadeImage?l.value.inverted?1-g.value:g.value:void 0),C=r(()=>{var _,y;if(l.value.hide&&l.value.inverted)return 0;const d=((_=t.value)==null?void 0:_.contentHeight)??0,k=((y=t.value)==null?void 0:y.extensionHeight)??0;return f.value?o.value<c.value||l.value.fullyHide?d+k:d:d+k});ee(r(()=>!!e.scrollBehavior),()=>{ye(()=>{f.value?l.value.inverted?i.value=o.value>c.value:i.value=b.value||o.value<c.value:i.value=!0})});const{ssrBootStyles:S}=Qe(),{layoutItemStyles:V}=ge({id:e.name,order:r(()=>parseInt(e.order,10)),position:B(e,"location"),layoutSize:C,elementSize:P(void 0),active:i,absolute:B(e,"absolute")});return M(()=>{const d=de.filterProps(e);return s(de,G({ref:t,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...V.value,"--v-toolbar-image-opacity":m.value,height:void 0,...S.value},e.style]},d,{collapse:h.value,flat:v.value}),a)}),{}}}),Nt=p()({name:"VAppBarTitle",props:Ee(),setup(e,u){let{slots:a}=u;return M(()=>s(ze,G(e,{class:"v-app-bar-title"}),a)),{}}});function Ut(e){const{t:u}=et();function a(t){let{name:i}=t;const l={prepend:"prependAction",prependInner:"prependAction",append:"appendAction",appendInner:"appendAction",clear:"clear"}[i],n=e[`onClick:${i}`],o=n&&l?u(`$vuetify.input.${l}`,e.label??""):void 0;return s(ne,{icon:e[`${i}Icon`],"aria-label":o,onClick:n},null)}return{InputIcon:a}}const Ot=w({active:Boolean,color:String,messages:{type:[Array,String],default:()=>[]},...z(),...Ct({transition:{component:Mt,leaveAbsolute:!0,group:!0}})},"VMessages"),jt=p()({name:"VMessages",props:Ot(),setup(e,u){let{slots:a}=u;const t=r(()=>R(e.messages)),{textColorClasses:i,textColorStyles:l}=De(r(()=>e.color));return M(()=>s(St,{transition:e.transition,tag:"div",class:["v-messages",i.value,e.class],style:[l.value,e.style],role:"alert","aria-live":"polite"},{default:()=>[e.active&&t.value.map((n,o)=>s("div",{class:"v-messages__message",key:`${o}-${t.value}`},[a.message?a.message({message:n}):n]))]})),{}}}),Gt=w({focused:Boolean,"onUpdate:focused":ae()},"focus");function Wt(e){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Ie();const a=N(e,"focused"),t=r(()=>({[`${u}--focused`]:a.value}));function i(){a.value=!0}function l(){a.value=!1}return{focusClasses:t,isFocused:a,focus:i,blur:l}}const qt=Symbol.for("vuetify:form");function Yt(){return Be(qt,null)}const Zt=w({disabled:{type:Boolean,default:null},error:Boolean,errorMessages:{type:[Array,String],default:()=>[]},maxErrors:{type:[Number,String],default:1},name:String,label:String,readonly:{type:Boolean,default:null},rules:{type:Array,default:()=>[]},modelValue:null,validateOn:String,validationValue:null,...Gt()},"validation");function Kt(e){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Ie(),a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Z();const t=N(e,"modelValue"),i=r(()=>e.validationValue===void 0?t.value:e.validationValue),l=Yt(),n=U([]),o=P(!0),c=r(()=>!!(R(t.value===""?null:t.value).length||R(i.value===""?null:i.value).length)),b=r(()=>!!(e.disabled??(l==null?void 0:l.isDisabled.value))),g=r(()=>!!(e.readonly??(l==null?void 0:l.isReadonly.value))),f=r(()=>{var y;return(y=e.errorMessages)!=null&&y.length?R(e.errorMessages).concat(n.value).slice(0,Math.max(0,+e.maxErrors)):n.value}),h=r(()=>{let y=(e.validateOn??(l==null?void 0:l.validateOn.value))||"input";y==="lazy"&&(y="input lazy"),y==="eager"&&(y="input eager");const x=new Set((y==null?void 0:y.split(" "))??[]);return{input:x.has("input"),blur:x.has("blur")||x.has("input")||x.has("invalid-input"),invalidInput:x.has("invalid-input"),lazy:x.has("lazy"),eager:x.has("eager")}}),v=r(()=>{var y;return e.error||(y=e.errorMessages)!=null&&y.length?!1:e.rules.length?o.value?n.value.length||h.value.lazy?null:!0:!n.value.length:!0}),m=P(!1),C=r(()=>({[`${u}--error`]:v.value===!1,[`${u}--dirty`]:c.value,[`${u}--disabled`]:b.value,[`${u}--readonly`]:g.value})),S=tt("validation"),V=r(()=>e.name??at(a));lt(()=>{l==null||l.register({id:V.value,vm:S,validate:_,reset:d,resetValidation:k})}),xe(()=>{l==null||l.unregister(V.value)}),_e(async()=>{h.value.lazy||await _(!h.value.eager),l==null||l.update(V.value,v.value,f.value)}),ee(()=>h.value.input||h.value.invalidInput&&v.value===!1,()=>{E(i,()=>{if(i.value!=null)_();else if(e.focused){const y=E(()=>e.focused,x=>{x||_(),y()})}})}),ee(()=>h.value.blur,()=>{E(()=>e.focused,y=>{y||_()})}),E([v,f],()=>{l==null||l.update(V.value,v.value,f.value)});async function d(){t.value=null,await we(),await k()}async function k(){o.value=!0,h.value.lazy?n.value=[]:await _(!h.value.eager)}async function _(){let y=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;const x=[];m.value=!0;for(const I of e.rules){if(x.length>=+(e.maxErrors??1))break;const A=await(typeof I=="function"?I:()=>I)(i.value);if(A!==!0){if(A!==!1&&typeof A!="string"){console.warn(`${A} is not a valid value. Rule functions must return boolean true or a string.`);continue}x.push(A||"")}}return n.value=x,m.value=!1,o.value=y,n.value}return{errorMessages:f,isDirty:c,isDisabled:b,isReadonly:g,isPristine:o,isValid:v,isValidating:m,reset:d,resetValidation:k,validate:_,validationClasses:C}}const Oe=w({id:String,appendIcon:le,centerAffix:{type:Boolean,default:!0},prependIcon:le,hideDetails:[Boolean,String],hideSpinButtons:Boolean,hint:String,persistentHint:Boolean,messages:{type:[Array,String],default:()=>[]},direction:{type:String,default:"horizontal",validator:e=>["horizontal","vertical"].includes(e)},"onClick:prepend":ae(),"onClick:append":ae(),...z(),...$e(),...nt(ot(),["maxWidth","minWidth","width"]),...Y(),...Zt()},"VInput"),ve=p()({name:"VInput",props:{...Oe()},emits:{"update:modelValue":e=>!0},setup(e,u){let{attrs:a,slots:t,emit:i}=u;const{densityClasses:l}=Fe(e),{dimensionStyles:n}=it(e),{themeClasses:o}=se(e),{rtlClasses:c}=Ve(),{InputIcon:b}=Ut(e),g=Z(),f=r(()=>e.id||`input-${g}`),h=r(()=>`${f.value}-messages`),{errorMessages:v,isDirty:m,isDisabled:C,isReadonly:S,isPristine:V,isValid:d,isValidating:k,reset:_,resetValidation:y,validate:x,validationClasses:I}=Kt(e,"v-input",f),F=r(()=>({id:f,messagesId:h,isDirty:m,isDisabled:C,isReadonly:S,isPristine:V,isValid:d,isValidating:k,reset:_,resetValidation:y,validate:x})),A=r(()=>{var $;return($=e.errorMessages)!=null&&$.length||!V.value&&v.value.length?v.value:e.hint&&(e.persistentHint||e.focused)?e.hint:e.messages});return M(()=>{var H,K,J,O;const $=!!(t.prepend||e.prependIcon),D=!!(t.append||e.appendIcon),L=A.value.length>0,W=!e.hideDetails||e.hideDetails==="auto"&&(L||!!t.details);return s("div",{class:["v-input",`v-input--${e.direction}`,{"v-input--center-affix":e.centerAffix,"v-input--hide-spin-buttons":e.hideSpinButtons},l.value,o.value,c.value,I.value,e.class],style:[n.value,e.style]},[$&&s("div",{key:"prepend",class:"v-input__prepend"},[(H=t.prepend)==null?void 0:H.call(t,F.value),e.prependIcon&&s(b,{key:"prepend-icon",name:"prepend"},null)]),t.default&&s("div",{class:"v-input__control"},[(K=t.default)==null?void 0:K.call(t,F.value)]),D&&s("div",{key:"append",class:"v-input__append"},[e.appendIcon&&s(b,{key:"append-icon",name:"append"},null),(J=t.append)==null?void 0:J.call(t,F.value)]),W&&s("div",{class:"v-input__details"},[s(jt,{id:h.value,active:L,messages:A.value},{message:t.message}),(O=t.details)==null?void 0:O.call(t,F.value)])])}),{reset:_,resetValidation:y,validate:x,isValid:d,errorMessages:v}}}),Jt=w({text:String,onClick:ae(),...z(),...Y()},"VLabel"),Xt=p()({name:"VLabel",props:Jt(),setup(e,u){let{slots:a}=u;return M(()=>{var t;return s("label",{class:["v-label",{"v-label--clickable":!!e.onClick},e.class],style:e.style,onClick:e.onClick},[e.text,(t=a.default)==null?void 0:t.call(a)])}),{}}}),je=Symbol.for("vuetify:selection-control-group"),Ge=w({color:String,disabled:{type:Boolean,default:null},defaultsTarget:String,error:Boolean,id:String,inline:Boolean,falseIcon:le,trueIcon:le,ripple:{type:[Boolean,Object],default:!0},multiple:{type:Boolean,default:null},name:String,readonly:{type:Boolean,default:null},modelValue:null,type:String,valueComparator:{type:Function,default:st},...z(),...$e(),...Y()},"SelectionControlGroup"),Qt=w({...Ge({defaultsTarget:"VSelectionControl"})},"VSelectionControlGroup");p()({name:"VSelectionControlGroup",props:Qt(),emits:{"update:modelValue":e=>!0},setup(e,u){let{slots:a}=u;const t=N(e,"modelValue"),i=Z(),l=r(()=>e.id||`v-selection-control-group-${i}`),n=r(()=>e.name||l.value),o=new Set;return ut(je,{modelValue:t,forceUpdate:()=>{o.forEach(c=>c())},onForceUpdate:c=>{o.add(c),rt(()=>{o.delete(c)})}}),ke({[e.defaultsTarget]:{color:B(e,"color"),disabled:B(e,"disabled"),density:B(e,"density"),error:B(e,"error"),inline:B(e,"inline"),modelValue:t,multiple:r(()=>!!e.multiple||e.multiple==null&&Array.isArray(t.value)),name:n,falseIcon:B(e,"falseIcon"),trueIcon:B(e,"trueIcon"),readonly:B(e,"readonly"),ripple:B(e,"ripple"),type:B(e,"type"),valueComparator:B(e,"valueComparator")}}),M(()=>{var c;return s("div",{class:["v-selection-control-group",{"v-selection-control-group--inline":e.inline},e.class],style:e.style,role:e.type==="radio"?"radiogroup":void 0},[(c=a.default)==null?void 0:c.call(a)])}),{}}});const We=w({label:String,baseColor:String,trueValue:null,falseValue:null,value:null,...z(),...Ge()},"VSelectionControl");function ea(e){const u=Be(je,void 0),{densityClasses:a}=Fe(e),t=N(e,"modelValue"),i=r(()=>e.trueValue!==void 0?e.trueValue:e.value!==void 0?e.value:!0),l=r(()=>e.falseValue!==void 0?e.falseValue:!1),n=r(()=>!!e.multiple||e.multiple==null&&Array.isArray(t.value)),o=r({get(){const v=u?u.modelValue.value:t.value;return n.value?R(v).some(m=>e.valueComparator(m,i.value)):e.valueComparator(v,i.value)},set(v){if(e.readonly)return;const m=v?i.value:l.value;let C=m;n.value&&(C=v?[...R(t.value),m]:R(t.value).filter(S=>!e.valueComparator(S,i.value))),u?u.modelValue.value=C:t.value=C}}),{textColorClasses:c,textColorStyles:b}=De(r(()=>{if(!(e.error||e.disabled))return o.value?e.color:e.baseColor})),{backgroundColorClasses:g,backgroundColorStyles:f}=ce(r(()=>o.value&&!e.error&&!e.disabled?e.color:e.baseColor)),h=r(()=>o.value?e.trueIcon:e.falseIcon);return{group:u,densityClasses:a,trueValue:i,falseValue:l,model:o,textColorClasses:c,textColorStyles:b,backgroundColorClasses:g,backgroundColorStyles:f,icon:h}}const fe=p()({name:"VSelectionControl",directives:{Ripple:Vt},inheritAttrs:!1,props:We(),emits:{"update:modelValue":e=>!0},setup(e,u){let{attrs:a,slots:t}=u;const{group:i,densityClasses:l,icon:n,model:o,textColorClasses:c,textColorStyles:b,backgroundColorClasses:g,backgroundColorStyles:f,trueValue:h}=ea(e),v=Z(),m=P(!1),C=P(!1),S=U(),V=r(()=>e.id||`input-${v}`),d=r(()=>!e.disabled&&!e.readonly);i==null||i.onForceUpdate(()=>{S.value&&(S.value.checked=o.value)});function k(I){d.value&&(m.value=!0,vt(I.target,":focus-visible")!==!1&&(C.value=!0))}function _(){m.value=!1,C.value=!1}function y(I){I.stopPropagation()}function x(I){if(!d.value){S.value&&(S.value.checked=o.value);return}e.readonly&&i&&we(()=>i.forceUpdate()),o.value=I.target.checked}return M(()=>{var D,L;const I=t.label?t.label({label:e.label,props:{for:V.value}}):e.label,[F,A]=pe(a),$=s("input",G({ref:S,checked:o.value,disabled:!!e.disabled,id:V.value,onBlur:_,onFocus:k,onInput:x,"aria-disabled":!!e.disabled,"aria-label":e.label,type:e.type,value:h.value,name:e.name,"aria-checked":e.type==="checkbox"?o.value:void 0},A),null);return s("div",G({class:["v-selection-control",{"v-selection-control--dirty":o.value,"v-selection-control--disabled":e.disabled,"v-selection-control--error":e.error,"v-selection-control--focused":m.value,"v-selection-control--focus-visible":C.value,"v-selection-control--inline":e.inline},l.value,e.class]},F,{style:e.style}),[s("div",{class:["v-selection-control__wrapper",c.value],style:b.value},[(D=t.default)==null?void 0:D.call(t,{backgroundColorClasses:g,backgroundColorStyles:f}),ct(s("div",{class:["v-selection-control__input"]},[((L=t.input)==null?void 0:L.call(t,{model:o,textColorClasses:c,textColorStyles:b,backgroundColorClasses:g,backgroundColorStyles:f,inputNode:$,icon:n.value,props:{onFocus:k,onBlur:_,id:V.value}}))??s(re,null,[n.value&&s(ne,{key:"icon",icon:n.value},null),$])]),[[dt("ripple"),e.ripple&&[!e.disabled&&!e.readonly,null,["center","circle"]]]])]),I&&s(Xt,{for:V.value,onClick:y},{default:()=>[I]})])}),{isFocused:m,input:S}}}),ta=w({indeterminate:Boolean,inset:Boolean,flat:Boolean,loading:{type:[Boolean,String],default:!1},...Oe(),...We()},"VSwitch"),aa=p()({name:"VSwitch",inheritAttrs:!1,props:ta(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,u){let{attrs:a,slots:t}=u;const i=N(e,"indeterminate"),l=N(e,"modelValue"),{loaderClasses:n}=kt(e),{isFocused:o,focus:c,blur:b}=Wt(e),g=U(),f=ft&&window.matchMedia("(forced-colors: active)").matches,h=r(()=>typeof e.loading=="string"&&e.loading!==""?e.loading:e.color),v=Z(),m=r(()=>e.id||`switch-${v}`);function C(){i.value&&(i.value=!1)}function S(V){var d,k;V.stopPropagation(),V.preventDefault(),(k=(d=g.value)==null?void 0:d.input)==null||k.click()}return M(()=>{const[V,d]=pe(a),k=ve.filterProps(e),_=fe.filterProps(e);return s(ve,G({class:["v-switch",{"v-switch--flat":e.flat},{"v-switch--inset":e.inset},{"v-switch--indeterminate":i.value},n.value,e.class]},V,k,{modelValue:l.value,"onUpdate:modelValue":y=>l.value=y,id:m.value,focused:o.value,style:e.style}),{...t,default:y=>{let{id:x,messagesId:I,isDisabled:F,isReadonly:A,isValid:$}=y;const D={model:l,isValid:$};return s(fe,G({ref:g},_,{modelValue:l.value,"onUpdate:modelValue":[L=>l.value=L,C],id:x.value,"aria-describedby":I.value,type:"checkbox","aria-checked":i.value?"mixed":void 0,disabled:F.value,readonly:A.value,onFocus:c,onBlur:b},d),{...t,default:L=>{let{backgroundColorClasses:W,backgroundColorStyles:H}=L;return s("div",{class:["v-switch__track",f?void 0:W.value],style:H.value,onClick:S},[t["track-true"]&&s("div",{key:"prepend",class:"v-switch__track-true"},[t["track-true"](D)]),t["track-false"]&&s("div",{key:"append",class:"v-switch__track-false"},[t["track-false"](D)])])},input:L=>{let{inputNode:W,icon:H,backgroundColorClasses:K,backgroundColorStyles:J}=L;return s(re,null,[W,s("div",{class:["v-switch__thumb",{"v-switch__thumb--filled":H||e.loading},e.inset||f?void 0:K.value],style:e.inset?void 0:J.value},[t.thumb?s(Q,{defaults:{VIcon:{icon:H,size:"x-small"}}},{default:()=>[t.thumb({...D,icon:H})]}):s(Ht,null,{default:()=>[e.loading?s(_t,{name:"v-switch",active:!0,color:$.value===!1?void 0:h.value},{default:O=>t.loader?t.loader(O):s(xt,{active:O.isActive,color:O.color,indeterminate:!0,size:"16",width:"2"},null)}):H&&s(ne,{key:String(H),icon:H,size:"x-small"},null)]})])])}})}})}),{}}}),la={__name:"AppBar",setup(e){const u=mt(),a=U(u.global.current.value.dark),t=()=>{u.global.name.value=a.value?"dark":"light"};return(i,l)=>(te(),ue(Rt,{class:"position-sticky",color:"lighter","elevate-on-scroll":""},{append:j(()=>[s(aa,{modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=n=>a.value=n),class:"mt-5 mr-5",label:"Toggle Theme",onChange:l[1]||(l[1]=n=>t())},null,8,["modelValue"])]),default:j(()=>[s(Nt,null,{default:j(()=>l[2]||(l[2]=[oe("Medical Inventory System MIS")])),_:1})]),_:1}))}},sa=he({__name:"default",setup(e){return(u,a)=>{const t=la,i=yt("router-view"),l=Pt;return te(),ue(gt,null,{default:j(()=>[s(t),s(ht,null,{default:j(()=>[s(i)]),_:1}),s(l)]),_:1})}}});export{sa as default};
