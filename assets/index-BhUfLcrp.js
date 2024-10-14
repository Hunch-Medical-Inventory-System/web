import{V as q,a as Ie}from"./VRow-DwlZjFgp.js";import{m as M,h as J,a as W,b as Y,i as Z,u as K,c as Q,d as H,l as Ve,n as _e,o as Pe,j as Se,p as Be,q as Le,R as we,V as w,f as A,k as Ae,e as Ge}from"./index-Bfmrwq0l.js";import{i as r,F as De,p as I,Q as X,e as d,W as B,m as p,b as ee,c as ne,g as $,d as te,G as Re,t as x,h as E,V as T,U as $e,a2 as ae,S as Ee,K as le,I as se,ad as R,L as Te,J as ze,ae as Oe,a1 as ie,P as Ne,af as qe,N as oe,ag as je,ah as j,Y as Fe,Z as F,$ as Ue,a0 as Me,a5 as Je,l as ue,o as de,n as re,q as _,z as G}from"./index-CHo292sQ.js";import{b as We,_ as Ye}from"./_plugin-vue_export-helper-DEqWr1cp.js";const Ze=["elevated","flat","tonal","outlined","text","plain"];function Ke(e,o){return r(De,null,[r("span",{key:"overlay",class:`${o}__overlay`},null),r("span",{key:"underlay",class:`${o}__underlay`},null)])}const ce=I({color:String,variant:{type:String,default:"elevated",validator:e=>Ze.includes(e)}},"variant");function Qe(e){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:X();const a=d(()=>{const{variant:i}=B(e);return`${o}--variant-${i}`}),{colorClasses:n,colorStyles:l}=We(d(()=>{const{variant:i,color:m}=B(e);return{[["elevated","flat"].includes(i)?"background":"text"]:m}}));return{colorClasses:n,colorStyles:l,variantClasses:a}}const ve=I({baseColor:String,divided:Boolean,...M(),...p(),...J(),...W(),...Y(),...ee(),...ne(),...ce()},"VBtnGroup"),U=$()({name:"VBtnGroup",props:ve(),setup(e,o){let{slots:a}=o;const{themeClasses:n}=te(e),{densityClasses:l}=Z(e),{borderClasses:i}=K(e),{elevationClasses:m}=Q(e),{roundedClasses:f}=H(e);Re({VBtn:{height:"auto",baseColor:x(e,"baseColor"),color:x(e,"color"),density:x(e,"density"),flat:!0,variant:x(e,"variant")}}),E(()=>r(e.tag,{class:["v-btn-group",{"v-btn-group--divided":e.divided},n.value,i.value,l.value,m.value,f.value,e.class],style:e.style},a))}}),He=I({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),Xe=I({value:null,disabled:Boolean,selectedClass:String},"group-item");function pe(e,o){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const n=T("useGroupItem");if(!n)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const l=$e();ae(Symbol.for(`${o.description}:id`),l);const i=Ee(o,null);if(!i){if(!a)return i;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${o.description}`)}const m=x(e,"value"),f=d(()=>!!(i.disabled.value||e.disabled));i.register({id:l,value:m,disabled:f},n),le(()=>{i.unregister(l)});const g=d(()=>i.isSelected(l)),h=d(()=>i.items.value[0].id===l),k=d(()=>i.items.value[i.items.value.length-1].id===l),C=d(()=>g.value&&[i.selectedClass.value,e.selectedClass]);return se(g,s=>{n.emit("group:selected",{value:s})},{flush:"sync"}),{id:l,isSelected:g,isFirst:h,isLast:k,toggle:()=>i.select(l,!g.value),select:s=>i.select(l,s),selectedClass:C,value:m,disabled:f,group:i}}function en(e,o){let a=!1;const n=R([]),l=Te(e,"modelValue",[],s=>s==null?[]:fe(n,Ne(s)),s=>{const u=tn(n,s);return e.multiple?u:u[0]}),i=T("useGroup");function m(s,u){const v=s,t=Symbol.for(`${o.description}:id`),b=qe(t,i==null?void 0:i.vnode).indexOf(u);B(v.value)==null&&(v.value=b,v.useIndexAsValue=!0),b>-1?n.splice(b,0,v):n.push(v)}function f(s){if(a)return;g();const u=n.findIndex(v=>v.id===s);n.splice(u,1)}function g(){const s=n.find(u=>!u.disabled);s&&e.mandatory==="force"&&!l.value.length&&(l.value=[s.id])}ze(()=>{g()}),le(()=>{a=!0}),Oe(()=>{for(let s=0;s<n.length;s++)n[s].useIndexAsValue&&(n[s].value=s)});function h(s,u){const v=n.find(t=>t.id===s);if(!(u&&(v!=null&&v.disabled)))if(e.multiple){const t=l.value.slice(),c=t.findIndex(L=>L===s),b=~c;if(u=u??!b,b&&e.mandatory&&t.length<=1||!b&&e.max!=null&&t.length+1>e.max)return;c<0&&u?t.push(s):c>=0&&!u&&t.splice(c,1),l.value=t}else{const t=l.value.includes(s);if(e.mandatory&&t)return;l.value=u??!t?[s]:[]}}function k(s){if(e.multiple,l.value.length){const u=l.value[0],v=n.findIndex(b=>b.id===u);let t=(v+s)%n.length,c=n[t];for(;c.disabled&&t!==v;)t=(t+s)%n.length,c=n[t];if(c.disabled)return;l.value=[n[t].id]}else{const u=n.find(v=>!v.disabled);u&&(l.value=[u.id])}}const C={register:m,unregister:f,selected:l,select:h,disabled:x(e,"disabled"),prev:()=>k(n.length-1),next:()=>k(1),isSelected:s=>l.value.includes(s),selectedClass:d(()=>e.selectedClass),items:d(()=>n),getItemIndex:s=>nn(n,s)};return ae(o,C),C}function nn(e,o){const a=fe(e,[o]);return a.length?e.findIndex(n=>n.id===a[0]):-1}function fe(e,o){const a=[];return o.forEach(n=>{const l=e.find(m=>ie(n,m.value)),i=e[n];(l==null?void 0:l.value)!=null?a.push(l.id):i!=null&&a.push(i.id)}),a}function tn(e,o){const a=[];return o.forEach(n=>{const l=e.findIndex(i=>i.id===n);if(~l){const i=e[l];a.push(i.value!=null?i.value:l)}}),a}const me=Symbol.for("vuetify:v-btn-toggle"),an=I({...ve(),...He()},"VBtnToggle");$()({name:"VBtnToggle",props:an(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:a}=o;const{isSelected:n,next:l,prev:i,select:m,selected:f}=en(e,me);return E(()=>{const g=U.filterProps(e);return r(U,oe({class:["v-btn-toggle",e.class]},g,{style:e.style}),{default:()=>{var h;return[(h=a.default)==null?void 0:h.call(a,{isSelected:n,next:l,prev:i,select:m,selected:f})]}})}),{next:l,prev:i,select:m}}});const ln=["static","relative","fixed","absolute","sticky"],sn=I({position:{type:String,validator:e=>ln.includes(e)}},"position");function on(e){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:X();return{positionClasses:d(()=>e.position?`${o}--${e.position}`:void 0)}}function un(){const e=T("useRoute");return d(()=>{var o;return(o=e==null?void 0:e.proxy)==null?void 0:o.$route})}function dn(e,o){var C,s;const a=je("RouterLink"),n=d(()=>!!(e.href||e.to)),l=d(()=>(n==null?void 0:n.value)||j(o,"click")||j(e,"click"));if(typeof a=="string"||!("useLink"in a)){const u=x(e,"href");return{isLink:n,isClickable:l,href:u,linkProps:R({href:u})}}const i=d(()=>({...e,to:x(()=>e.to||"")})),m=a.useLink(i.value),f=d(()=>e.to?m:void 0),g=un(),h=d(()=>{var u,v,t;return f.value?e.exact?g.value?((t=f.value.isExactActive)==null?void 0:t.value)&&ie(f.value.route.value.query,g.value.query):((v=f.value.isExactActive)==null?void 0:v.value)??!1:((u=f.value.isActive)==null?void 0:u.value)??!1:!1}),k=d(()=>{var u;return e.to?(u=f.value)==null?void 0:u.route.value.href:e.href});return{isLink:n,isClickable:l,isActive:h,route:(C=f.value)==null?void 0:C.route,navigate:(s=f.value)==null?void 0:s.navigate,href:k,linkProps:R({href:k,"aria-current":d(()=>h.value?"page":void 0)})}}const rn=I({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");function cn(e,o){se(()=>{var a;return(a=e.isActive)==null?void 0:a.value},a=>{e.isLink.value&&a&&o&&Fe(()=>{o(!0)})},{immediate:!0})}const vn=I({active:{type:Boolean,default:void 0},activeColor:String,baseColor:String,symbol:{type:null,default:me},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:F,appendIcon:F,block:Boolean,readonly:Boolean,slim:Boolean,stacked:Boolean,ripple:{type:[Boolean,Object],default:!0},text:String,...M(),...p(),...J(),...Ue(),...W(),...Xe(),...Ve(),..._e(),...sn(),...Y(),...rn(),...Pe(),...ee({tag:"button"}),...ne(),...ce({variant:"elevated"})},"VBtn"),D=$()({name:"VBtn",props:vn(),emits:{"group:selected":e=>!0},setup(e,o){let{attrs:a,slots:n}=o;const{themeClasses:l}=te(e),{borderClasses:i}=K(e),{densityClasses:m}=Z(e),{dimensionStyles:f}=Me(e),{elevationClasses:g}=Q(e),{loaderClasses:h}=Se(e),{locationStyles:k}=Be(e),{positionClasses:C}=on(e),{roundedClasses:s}=H(e),{sizeClasses:u,sizeStyles:v}=Le(e),t=pe(e,e.symbol,!1),c=dn(e,a),b=d(()=>{var y;return e.active!==void 0?e.active:c.isLink.value?(y=c.isActive)==null?void 0:y.value:t==null?void 0:t.isSelected.value}),L=d(()=>b.value?e.activeColor??e.color:e.color),ge=d(()=>{var V,S;return{color:(t==null?void 0:t.isSelected.value)&&(!c.isLink.value||((V=c.isActive)==null?void 0:V.value))||!t||((S=c.isActive)==null?void 0:S.value)?L.value??e.baseColor:e.baseColor,variant:e.variant}}),{colorClasses:be,colorStyles:ye,variantClasses:he}=Qe(ge),P=d(()=>(t==null?void 0:t.disabled.value)||e.disabled),ke=d(()=>e.variant==="elevated"&&!(e.disabled||e.flat||e.border)),Ce=d(()=>{if(!(e.value===void 0||typeof e.value=="symbol"))return Object(e.value)===e.value?JSON.stringify(e.value,null,0):e.value});function xe(y){var V;P.value||c.isLink.value&&(y.metaKey||y.ctrlKey||y.shiftKey||y.button!==0||a.target==="_blank")||((V=c.navigate)==null||V.call(c,y),t==null||t.toggle())}return cn(c,t==null?void 0:t.select),E(()=>{const y=c.isLink.value?"a":e.tag,V=!!(e.prependIcon||n.prepend),S=!!(e.appendIcon||n.append),z=!!(e.icon&&e.icon!==!0);return Je(r(y,oe({type:y==="a"?void 0:"button",class:["v-btn",t==null?void 0:t.selectedClass.value,{"v-btn--active":b.value,"v-btn--block":e.block,"v-btn--disabled":P.value,"v-btn--elevated":ke.value,"v-btn--flat":e.flat,"v-btn--icon":!!e.icon,"v-btn--loading":e.loading,"v-btn--readonly":e.readonly,"v-btn--slim":e.slim,"v-btn--stacked":e.stacked},l.value,i.value,be.value,m.value,g.value,h.value,C.value,s.value,u.value,he.value,e.class],style:[ye.value,f.value,k.value,v.value,e.style],"aria-busy":e.loading?!0:void 0,disabled:P.value||void 0,tabindex:e.loading||e.readonly?-1:void 0,onClick:xe,value:Ce.value},c.linkProps),{default:()=>{var O;return[Ke(!0,"v-btn"),!e.icon&&V&&r("span",{key:"prepend",class:"v-btn__prepend"},[n.prepend?r(A,{key:"prepend-defaults",disabled:!e.prependIcon,defaults:{VIcon:{icon:e.prependIcon}}},n.prepend):r(w,{key:"prepend-icon",icon:e.prependIcon},null)]),r("span",{class:"v-btn__content","data-no-activator":""},[!n.default&&z?r(w,{key:"content-icon",icon:e.icon},null):r(A,{key:"content-defaults",disabled:!z,defaults:{VIcon:{icon:e.icon}}},{default:()=>{var N;return[((N=n.default)==null?void 0:N.call(n))??e.text]}})]),!e.icon&&S&&r("span",{key:"append",class:"v-btn__append"},[n.append?r(A,{key:"append-defaults",disabled:!e.appendIcon,defaults:{VIcon:{icon:e.appendIcon}}},n.append):r(w,{key:"append-icon",icon:e.appendIcon},null)]),!!e.loading&&r("span",{key:"loader",class:"v-btn__loader"},[((O=n.loader)==null?void 0:O.call(n))??r(Ae,{color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0,width:"2"},null)])]}}),[[we,!P.value&&e.ripple,"",{center:!!e.icon}]])}),{group:t}}}),fn="/web/assets/logo-C7ZYeSDN.png",mn=ue({__name:"Lander",setup(e){return(o,a)=>(de(),re(Ie,null,{default:_(()=>[r(q,null,{default:_(()=>[r(Ge,{class:"mb-4",height:"700px",src:B(fn)},null,8,["src"])]),_:1}),r(q,{class:"text-center justify-center ga-5"},{default:_(()=>[r(D,{class:"button-styles",href:"https://hunch-medical-inventory-system.github.io/front-end/login",size:"x-large"},{default:_(()=>a[0]||(a[0]=[G("Demo Login")])),_:1}),r(D,{class:"button-styles",href:"https://hunch-medical-inventory-system.github.io/front-end/profile",size:"x-large"},{default:_(()=>a[1]||(a[1]=[G("Demo Profile")])),_:1}),r(D,{class:"button-styles",size:"x-large",to:"/proposal"},{default:_(()=>a[2]||(a[2]=[G("Our Proposal")])),_:1})]),_:1})]),_:1}))}}),gn=Ye(mn,[["__scopeId","data-v-db8a1ba5"]]),Cn=ue({__name:"index",setup(e){return(o,a)=>{const n=gn;return de(),re(n)}}});export{Cn as default};
