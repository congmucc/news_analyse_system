var Qe=Object.defineProperty,Je=Object.defineProperties;var qe=Object.getOwnPropertyDescriptors;var Me=Object.getOwnPropertySymbols;var Ze=Object.prototype.hasOwnProperty,et=Object.prototype.propertyIsEnumerable;var Ee=(e,t,n)=>t in e?Qe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,L=(e,t)=>{for(var n in t||(t={}))Ze.call(t,n)&&Ee(e,n,t[n]);if(Me)for(var n of Me(t))et.call(t,n)&&Ee(e,n,t[n]);return e},Se=(e,t)=>Je(e,qe(t));import{a as X,b as F,c as re,_ as tt,t as nt}from"./index.15a69904.js";import{f as O,c as ke,a as oe,b as Q,l as g,q as p,t as E,x as v,y,T as st,L as rt,M as ot,N as $e,O as Le,C as _,D as N,G as D,A as w,P as J,Q as B,F as G,r as I,I as ae,o as at,E as it,R as xe,H as K,S as ct,n as ie,U as lt,B as ut}from"./element-plus.06a878fd.js";var ce=O({name:"LayoutContent",setup(){const e=X(),{getSetting:t,getTags:n}=F(),s=ke(()=>e.path);let r=oe({cachedViews:[...n.cachedViews]});return Q(()=>n.cachedViews.length,()=>r.cachedViews=[...n.cachedViews]),{key:s,data:r,setting:t}}});const ht=e=>($e("data-v-4cba26f8"),e=e(),Le(),e),dt=ht(()=>_("div",null,[_("i",{class:"el-icon-caret-top"})],-1));function ft(e,t,n,s,r,a){const o=g("router-view"),c=g("el-backtop"),i=g("el-scrollbar");return p(),E(i,null,{default:v(()=>[y(o,null,{default:v(({Component:l})=>[y(st,{name:"fade-transform",mode:"out-in"},{default:v(()=>[(p(),E(rt,{include:e.setting.showTags?e.data.cachedViews:[]},[(p(),E(ot(l),{key:e.key,class:"page m-3 relative"}))],1032,["include"]))]),_:2},1024)]),_:1}),y(c,{target:".layout-main-content>.el-scrollbar>.el-scrollbar__wrap",bottom:15,right:15},{default:v(()=>[dt]),_:1})]),_:1})}ce.render=ft;ce.__scopeId="data-v-4cba26f8";var Ie=O({name:"MenubarItem",props:{menuList:{type:Object,default:()=>({})}},setup(){return{}}});function pt(e,t,n,s,r,a){const o=g("menubar-item",!0),c=g("el-menu-item-group"),i=g("el-sub-menu"),l=g("el-menu-item");return e.menuList.children&&e.menuList.children.length>0?(p(),E(i,{key:e.menuList.path,index:e.menuList.path},{title:v(()=>[_("i",{class:N(e.menuList.meta.icon||"el-icon-location")},null,2),_("span",null,D(e.menuList.meta.title),1)]),default:v(()=>[y(c,null,{default:v(()=>[(p(!0),w(B,null,J(e.menuList.children,u=>(p(),E(o,{key:u.path,index:u.path,"menu-list":u},null,8,["index","menu-list"]))),128))]),_:1})]),_:1},8,["index"])):(p(),E(l,{key:e.menuList.path,index:e.menuList.path},{title:v(()=>[G(D(e.menuList.meta.title),1)]),default:v(()=>[_("i",{class:N(e.menuList.meta.icon||"el-icon-setting")},null,2)]),_:1},8,["index"]))}Ie.render=pt;const gt=e=>{const t=n=>{let s=[];return n.filter(r=>!r.meta.hidden).forEach(r=>{let a=r.children&&r.children.filter(c=>!c.meta.hidden),o=r;!r.meta.alwaysShow&&a&&a.length===1&&([o]=a),s.push(o),o.children&&o.children.length>0&&(s[s.length-1].children=t(o.children))}),s};return t(e)};var le=O({name:"LayoutMenubar",components:{MenubarItem:Ie},setup(){const e=X(),t=re(),{getMenubar:n,setRoutes:s,changeCollapsed:r,getSetting:a}=F(),o=gt(n.menuList);s(o);const c=ke(()=>e.meta.activeMenu?e.meta.activeMenu:e.path);return{getMenubar:n,filterMenubarData:o,activeMenu:c,onOpenChange:l=>{t.push({path:l}),n.status===2&&r()},getSetting:a}}});function mt(e,t,n,s,r,a){const o=g("menubar-item"),c=g("el-menu");return p(),E(c,{mode:e.getMenubar.isPhone?"vertical":e.getSetting.mode,"default-active":e.activeMenu,collapse:e.getMenubar.status===1||e.getMenubar.status===3,class:N({"el-menu-vertical-demo":!0,"w-64":e.getMenubar.status===0||e.getMenubar.status===2,"w-0":e.getMenubar.status===3,"w-16":e.getMenubar.status===1,"w-full":e.getSetting.mode==="horizontal"&&!e.getMenubar.isPhone}),"collapse-transition":!1,"unique-opened":!0,onSelect:e.onOpenChange},{default:v(()=>[(p(!0),w(B,null,J(e.filterMenubarData,i=>(p(),E(o,{key:i.path,index:i.path,"menu-list":i},null,8,["index","menu-list"]))),128))]),_:1},8,["mode","default-active","collapse","class","onSelect"])}le.render=mt;var Ce={exports:{}};/*!
* screenfull
* v5.1.0 - 2020-12-24
* (c) Sindre Sorhus; MIT License
*/(function(e){(function(){var t=typeof window!="undefined"&&typeof window.document!="undefined"?window.document:{},n=e.exports,s=function(){for(var o,c=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],i=0,l=c.length,u={};i<l;i++)if(o=c[i],o&&o[1]in t){for(i=0;i<o.length;i++)u[c[0][i]]=o[i];return u}return!1}(),r={change:s.fullscreenchange,error:s.fullscreenerror},a={request:function(o,c){return new Promise(function(i,l){var u=function(){this.off("change",u),i()}.bind(this);this.on("change",u),o=o||t.documentElement;var h=o[s.requestFullscreen](c);h instanceof Promise&&h.then(u).catch(l)}.bind(this))},exit:function(){return new Promise(function(o,c){if(!this.isFullscreen){o();return}var i=function(){this.off("change",i),o()}.bind(this);this.on("change",i);var l=t[s.exitFullscreen]();l instanceof Promise&&l.then(i).catch(c)}.bind(this))},toggle:function(o,c){return this.isFullscreen?this.exit():this.request(o,c)},onchange:function(o){this.on("change",o)},onerror:function(o){this.on("error",o)},on:function(o,c){var i=r[o];i&&t.addEventListener(i,c,!1)},off:function(o,c){var i=r[o];i&&t.removeEventListener(i,c,!1)},raw:s};if(!s){n?e.exports={isEnabled:!1}:window.screenfull={isEnabled:!1};return}Object.defineProperties(a,{isFullscreen:{get:function(){return Boolean(t[s.fullscreenElement])}},element:{enumerable:!0,get:function(){return t[s.fullscreenElement]}},isEnabled:{enumerable:!0,get:function(){return Boolean(t[s.fullscreenEnabled])}}}),n?e.exports=a:window.screenfull=a})()})(Ce);var P=Ce.exports,Ae=O({name:"Screenfull",setup(){const e=I(!1),t=()=>{P.isEnabled?P.toggle():it({message:"\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u5168\u5C4F",type:"warning"})},n=()=>{P.isEnabled&&(e.value=P.isFullscreen)};return ae(()=>P.isEnabled&&P.on("change",n)),at(()=>P.isEnabled&&P.off("change",n)),{isFullscreen:e,changeScreenfull:t}}});const _t={class:"hidden-xs-only px-2"};function bt(e,t,n,s,r,a){const o=g("svg-icon");return p(),w("div",_t,[e.isFullscreen?(p(),E(o,{key:1,"class-name":"cursor-pointer","icon-class":"svg-exit-fullscreen",onClick:e.changeScreenfull},null,8,["onClick"])):(p(),E(o,{key:0,"class-name":"cursor-pointer","icon-class":"svg-fullscreen",onClick:e.changeScreenfull},null,8,["onClick"]))])}Ae.render=bt;function C(e){return Array.isArray?Array.isArray(e):Fe(e)==="[object Array]"}const vt=1/0;function yt(e){if(typeof e=="string")return e;let t=e+"";return t=="0"&&1/e==-vt?"-0":t}function wt(e){return e==null?"":yt(e)}function A(e){return typeof e=="string"}function Te(e){return typeof e=="number"}function Mt(e){return e===!0||e===!1||Et(e)&&Fe(e)=="[object Boolean]"}function Re(e){return typeof e=="object"}function Et(e){return Re(e)&&e!==null}function S(e){return e!=null}function ue(e){return!e.trim().length}function Fe(e){return e==null?e===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}const St="Incorrect 'index' type",kt=e=>`Invalid value for key ${e}`,$t=e=>`Pattern length exceeds max of ${e}.`,Lt=e=>`Missing ${e} property in key`,xt=e=>`Property 'weight' in key '${e}' must be a positive integer`,Oe=Object.prototype.hasOwnProperty;class It{constructor(t){this._keys=[],this._keyMap={};let n=0;t.forEach(s=>{let r=Ne(s);n+=r.weight,this._keys.push(r),this._keyMap[r.id]=r,n+=r.weight}),this._keys.forEach(s=>{s.weight/=n})}get(t){return this._keyMap[t]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function Ne(e){let t=null,n=null,s=null,r=1;if(A(e)||C(e))s=e,t=Pe(e),n=he(e);else{if(!Oe.call(e,"name"))throw new Error(Lt("name"));const a=e.name;if(s=a,Oe.call(e,"weight")&&(r=e.weight,r<=0))throw new Error(xt(a));t=Pe(a),n=he(a)}return{path:t,id:n,weight:r,src:s}}function Pe(e){return C(e)?e:e.split(".")}function he(e){return C(e)?e.join("."):e}function Ct(e,t){let n=[],s=!1;const r=(a,o,c)=>{if(!!S(a))if(!o[c])n.push(a);else{let i=o[c];const l=a[i];if(!S(l))return;if(c===o.length-1&&(A(l)||Te(l)||Mt(l)))n.push(wt(l));else if(C(l)){s=!0;for(let u=0,h=l.length;u<h;u+=1)r(l[u],o,c+1)}else o.length&&r(l,o,c+1)}};return r(e,A(t)?t.split("."):t,0),s?n:n[0]}const At={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},Tt={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(e,t)=>e.score===t.score?e.idx<t.idx?-1:1:e.score<t.score?-1:1},Rt={location:0,threshold:.6,distance:100},Ft={useExtendedSearch:!1,getFn:Ct,ignoreLocation:!1,ignoreFieldNorm:!1};var f=L(L(L(L({},Tt),At),Rt),Ft);const Ot=/[^ ]+/g;function Nt(e=3){const t=new Map,n=Math.pow(10,e);return{get(s){const r=s.match(Ot).length;if(t.has(r))return t.get(r);const a=1/Math.sqrt(r),o=parseFloat(Math.round(a*n)/n);return t.set(r,o),o},clear(){t.clear()}}}class de{constructor({getFn:t=f.getFn}={}){this.norm=Nt(3),this.getFn=t,this.isCreated=!1,this.setIndexRecords()}setSources(t=[]){this.docs=t}setIndexRecords(t=[]){this.records=t}setKeys(t=[]){this.keys=t,this._keysMap={},t.forEach((n,s)=>{this._keysMap[n.id]=s})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,A(this.docs[0])?this.docs.forEach((t,n)=>{this._addString(t,n)}):this.docs.forEach((t,n)=>{this._addObject(t,n)}),this.norm.clear())}add(t){const n=this.size();A(t)?this._addString(t,n):this._addObject(t,n)}removeAt(t){this.records.splice(t,1);for(let n=t,s=this.size();n<s;n+=1)this.records[n].i-=1}getValueForItemAtKeyId(t,n){return t[this._keysMap[n]]}size(){return this.records.length}_addString(t,n){if(!S(t)||ue(t))return;let s={v:t,i:n,n:this.norm.get(t)};this.records.push(s)}_addObject(t,n){let s={i:n,$:{}};this.keys.forEach((r,a)=>{let o=this.getFn(t,r.path);if(!!S(o)){if(C(o)){let c=[];const i=[{nestedArrIndex:-1,value:o}];for(;i.length;){const{nestedArrIndex:l,value:u}=i.pop();if(!!S(u))if(A(u)&&!ue(u)){let h={v:u,i:l,n:this.norm.get(u)};c.push(h)}else C(u)&&u.forEach((h,d)=>{i.push({nestedArrIndex:d,value:h})})}s.$[a]=c}else if(!ue(o)){let c={v:o,n:this.norm.get(o)};s.$[a]=c}}}),this.records.push(s)}toJSON(){return{keys:this.keys,records:this.records}}}function je(e,t,{getFn:n=f.getFn}={}){const s=new de({getFn:n});return s.setKeys(e.map(Ne)),s.setSources(t),s.create(),s}function Pt(e,{getFn:t=f.getFn}={}){const{keys:n,records:s}=e,r=new de({getFn:t});return r.setKeys(n),r.setIndexRecords(s),r}function te(e,{errors:t=0,currentLocation:n=0,expectedLocation:s=0,distance:r=f.distance,ignoreLocation:a=f.ignoreLocation}={}){const o=t/e.length;if(a)return o;const c=Math.abs(s-n);return r?o+c/r:c?1:o}function jt(e=[],t=f.minMatchCharLength){let n=[],s=-1,r=-1,a=0;for(let o=e.length;a<o;a+=1){let c=e[a];c&&s===-1?s=a:!c&&s!==-1&&(r=a-1,r-s+1>=t&&n.push([s,r]),s=-1)}return e[a-1]&&a-s>=t&&n.push([s,a-1]),n}const W=32;function Vt(e,t,n,{location:s=f.location,distance:r=f.distance,threshold:a=f.threshold,findAllMatches:o=f.findAllMatches,minMatchCharLength:c=f.minMatchCharLength,includeMatches:i=f.includeMatches,ignoreLocation:l=f.ignoreLocation}={}){if(t.length>W)throw new Error($t(W));const u=t.length,h=e.length,d=Math.max(0,Math.min(s,h));let b=a,m=d;const M=c>1||i,V=M?Array(h):[];let x;for(;(x=e.indexOf(t,m))>-1;){let k=te(t,{currentLocation:x,expectedLocation:d,distance:r,ignoreLocation:l});if(b=Math.min(k,b),m=x+u,M){let T=0;for(;T<u;)V[x+T]=1,T+=1}}m=-1;let H=[],z=1,Z=u+h;const Xe=1<<u-1;for(let k=0;k<u;k+=1){let T=0,R=Z;for(;T<R;)te(t,{errors:k,currentLocation:d+R,expectedLocation:d,distance:r,ignoreLocation:l})<=b?T=R:Z=R,R=Math.floor((Z-T)/2+T);Z=R;let ye=Math.max(1,d-R+1),se=o?h:Math.min(d+R,h)+u,Y=Array(se+2);Y[se+1]=(1<<k)-1;for(let $=se;$>=ye;$-=1){let ee=$-1,we=n[e.charAt(ee)];if(M&&(V[ee]=+!!we),Y[$]=(Y[$+1]<<1|1)&we,k&&(Y[$]|=(H[$+1]|H[$])<<1|1|H[$+1]),Y[$]&Xe&&(z=te(t,{errors:k,currentLocation:ee,expectedLocation:d,distance:r,ignoreLocation:l}),z<=b)){if(b=z,m=ee,m<=d)break;ye=Math.max(1,2*d-m)}}if(te(t,{errors:k+1,currentLocation:d,expectedLocation:d,distance:r,ignoreLocation:l})>b)break;H=Y}const ne={isMatch:m>=0,score:Math.max(.001,z)};if(M){const k=jt(V,c);k.length?i&&(ne.indices=k):ne.isMatch=!1}return ne}function zt(e){let t={};for(let n=0,s=e.length;n<s;n+=1){const r=e.charAt(n);t[r]=(t[r]||0)|1<<s-n-1}return t}class Ve{constructor(t,{location:n=f.location,threshold:s=f.threshold,distance:r=f.distance,includeMatches:a=f.includeMatches,findAllMatches:o=f.findAllMatches,minMatchCharLength:c=f.minMatchCharLength,isCaseSensitive:i=f.isCaseSensitive,ignoreLocation:l=f.ignoreLocation}={}){if(this.options={location:n,threshold:s,distance:r,includeMatches:a,findAllMatches:o,minMatchCharLength:c,isCaseSensitive:i,ignoreLocation:l},this.pattern=i?t:t.toLowerCase(),this.chunks=[],!this.pattern.length)return;const u=(d,b)=>{this.chunks.push({pattern:d,alphabet:zt(d),startIndex:b})},h=this.pattern.length;if(h>W){let d=0;const b=h%W,m=h-b;for(;d<m;)u(this.pattern.substr(d,W),d),d+=W;if(b){const M=h-W;u(this.pattern.substr(M),M)}}else u(this.pattern,0)}searchIn(t){const{isCaseSensitive:n,includeMatches:s}=this.options;if(n||(t=t.toLowerCase()),this.pattern===t){let m={isMatch:!0,score:0};return s&&(m.indices=[[0,t.length-1]]),m}const{location:r,distance:a,threshold:o,findAllMatches:c,minMatchCharLength:i,ignoreLocation:l}=this.options;let u=[],h=0,d=!1;this.chunks.forEach(({pattern:m,alphabet:M,startIndex:V})=>{const{isMatch:x,score:H,indices:z}=Vt(t,m,M,{location:r+V,distance:a,threshold:o,findAllMatches:c,minMatchCharLength:i,includeMatches:s,ignoreLocation:l});x&&(d=!0),h+=H,x&&z&&(u=[...u,...z])});let b={isMatch:d,score:d?h/this.chunks.length:1};return d&&s&&(b.indices=u),b}}class j{constructor(t){this.pattern=t}static isMultiMatch(t){return ze(t,this.multiRegex)}static isSingleMatch(t){return ze(t,this.singleRegex)}search(){}}function ze(e,t){const n=e.match(t);return n?n[1]:null}class Dt extends j{constructor(t){super(t)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(t){const n=t===this.pattern;return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class Bt extends j{constructor(t){super(t)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(t){const s=t.indexOf(this.pattern)===-1;return{isMatch:s,score:s?0:1,indices:[0,t.length-1]}}}class Kt extends j{constructor(t){super(t)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(t){const n=t.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class Wt extends j{constructor(t){super(t)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(t){const n=!t.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,t.length-1]}}}class Ut extends j{constructor(t){super(t)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(t){const n=t.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[t.length-this.pattern.length,t.length-1]}}}class Ht extends j{constructor(t){super(t)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(t){const n=!t.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,t.length-1]}}}class De extends j{constructor(t,{location:n=f.location,threshold:s=f.threshold,distance:r=f.distance,includeMatches:a=f.includeMatches,findAllMatches:o=f.findAllMatches,minMatchCharLength:c=f.minMatchCharLength,isCaseSensitive:i=f.isCaseSensitive,ignoreLocation:l=f.ignoreLocation}={}){super(t);this._bitapSearch=new Ve(t,{location:n,threshold:s,distance:r,includeMatches:a,findAllMatches:o,minMatchCharLength:c,isCaseSensitive:i,ignoreLocation:l})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(t){return this._bitapSearch.searchIn(t)}}class Be extends j{constructor(t){super(t)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(t){let n=0,s;const r=[],a=this.pattern.length;for(;(s=t.indexOf(this.pattern,n))>-1;)n=s+a,r.push([s,n-1]);const o=!!r.length;return{isMatch:o,score:o?0:1,indices:r}}}const fe=[Dt,Be,Kt,Wt,Ht,Ut,Bt,De],Ke=fe.length,Yt=/ +(?=([^\"]*\"[^\"]*\")*[^\"]*$)/,Gt="|";function Xt(e,t={}){return e.split(Gt).map(n=>{let s=n.trim().split(Yt).filter(a=>a&&!!a.trim()),r=[];for(let a=0,o=s.length;a<o;a+=1){const c=s[a];let i=!1,l=-1;for(;!i&&++l<Ke;){const u=fe[l];let h=u.isMultiMatch(c);h&&(r.push(new u(h,t)),i=!0)}if(!i)for(l=-1;++l<Ke;){const u=fe[l];let h=u.isSingleMatch(c);if(h){r.push(new u(h,t));break}}}return r})}const Qt=new Set([De.type,Be.type]);class Jt{constructor(t,{isCaseSensitive:n=f.isCaseSensitive,includeMatches:s=f.includeMatches,minMatchCharLength:r=f.minMatchCharLength,ignoreLocation:a=f.ignoreLocation,findAllMatches:o=f.findAllMatches,location:c=f.location,threshold:i=f.threshold,distance:l=f.distance}={}){this.query=null,this.options={isCaseSensitive:n,includeMatches:s,minMatchCharLength:r,findAllMatches:o,ignoreLocation:a,location:c,threshold:i,distance:l},this.pattern=n?t:t.toLowerCase(),this.query=Xt(this.pattern,this.options)}static condition(t,n){return n.useExtendedSearch}searchIn(t){const n=this.query;if(!n)return{isMatch:!1,score:1};const{includeMatches:s,isCaseSensitive:r}=this.options;t=r?t:t.toLowerCase();let a=0,o=[],c=0;for(let i=0,l=n.length;i<l;i+=1){const u=n[i];o.length=0,a=0;for(let h=0,d=u.length;h<d;h+=1){const b=u[h],{isMatch:m,indices:M,score:V}=b.search(t);if(m){if(a+=1,c+=V,s){const x=b.constructor.type;Qt.has(x)?o=[...o,...M]:o.push(M)}}else{c=0,a=0,o.length=0;break}}if(a){let h={isMatch:!0,score:c/a};return s&&(h.indices=o),h}}return{isMatch:!1,score:1}}}const pe=[];function qt(...e){pe.push(...e)}function ge(e,t){for(let n=0,s=pe.length;n<s;n+=1){let r=pe[n];if(r.condition(e,t))return new r(e,t)}return new Ve(e,t)}const q={AND:"$and",OR:"$or"},me={PATH:"$path",PATTERN:"$val"},_e=e=>!!(e[q.AND]||e[q.OR]),Zt=e=>!!e[me.PATH],en=e=>!C(e)&&Re(e)&&!_e(e),We=e=>({[q.AND]:Object.keys(e).map(t=>({[t]:e[t]}))});function Ue(e,t,{auto:n=!0}={}){const s=r=>{let a=Object.keys(r);const o=Zt(r);if(!o&&a.length>1&&!_e(r))return s(We(r));if(en(r)){const i=o?r[me.PATH]:a[0],l=o?r[me.PATTERN]:r[i];if(!A(l))throw new Error(kt(i));const u={keyId:he(i),pattern:l};return n&&(u.searcher=ge(l,t)),u}let c={children:[],operator:a[0]};return a.forEach(i=>{const l=r[i];C(l)&&l.forEach(u=>{c.children.push(s(u))})}),c};return _e(e)||(e=We(e)),s(e)}function tn(e,{ignoreFieldNorm:t=f.ignoreFieldNorm}){e.forEach(n=>{let s=1;n.matches.forEach(({key:r,norm:a,score:o})=>{const c=r?r.weight:null;s*=Math.pow(o===0&&c?Number.EPSILON:o,(c||1)*(t?1:a))}),n.score=s})}function nn(e,t){const n=e.matches;t.matches=[],!!S(n)&&n.forEach(s=>{if(!S(s.indices)||!s.indices.length)return;const{indices:r,value:a}=s;let o={indices:r,value:a};s.key&&(o.key=s.key.src),s.idx>-1&&(o.refIndex=s.idx),t.matches.push(o)})}function sn(e,t){t.score=e.score}function rn(e,t,{includeMatches:n=f.includeMatches,includeScore:s=f.includeScore}={}){const r=[];return n&&r.push(nn),s&&r.push(sn),e.map(a=>{const{idx:o}=a,c={item:t[o],refIndex:o};return r.length&&r.forEach(i=>{i(a,c)}),c})}class U{constructor(t,n={},s){this.options=L(L({},f),n),this.options.useExtendedSearch,this._keyStore=new It(this.options.keys),this.setCollection(t,s)}setCollection(t,n){if(this._docs=t,n&&!(n instanceof de))throw new Error(St);this._myIndex=n||je(this.options.keys,this._docs,{getFn:this.options.getFn})}add(t){!S(t)||(this._docs.push(t),this._myIndex.add(t))}remove(t=()=>!1){const n=[];for(let s=0,r=this._docs.length;s<r;s+=1){const a=this._docs[s];t(a,s)&&(this.removeAt(s),s-=1,r-=1,n.push(a))}return n}removeAt(t){this._docs.splice(t,1),this._myIndex.removeAt(t)}getIndex(){return this._myIndex}search(t,{limit:n=-1}={}){const{includeMatches:s,includeScore:r,shouldSort:a,sortFn:o,ignoreFieldNorm:c}=this.options;let i=A(t)?A(this._docs[0])?this._searchStringList(t):this._searchObjectList(t):this._searchLogical(t);return tn(i,{ignoreFieldNorm:c}),a&&i.sort(o),Te(n)&&n>-1&&(i=i.slice(0,n)),rn(i,this._docs,{includeMatches:s,includeScore:r})}_searchStringList(t){const n=ge(t,this.options),{records:s}=this._myIndex,r=[];return s.forEach(({v:a,i:o,n:c})=>{if(!S(a))return;const{isMatch:i,score:l,indices:u}=n.searchIn(a);i&&r.push({item:a,idx:o,matches:[{score:l,value:a,norm:c,indices:u}]})}),r}_searchLogical(t){const n=Ue(t,this.options),s=(c,i,l)=>{if(!c.children){const{keyId:u,searcher:h}=c,d=this._findMatches({key:this._keyStore.get(u),value:this._myIndex.getValueForItemAtKeyId(i,u),searcher:h});return d&&d.length?[{idx:l,item:i,matches:d}]:[]}switch(c.operator){case q.AND:{const u=[];for(let h=0,d=c.children.length;h<d;h+=1){const b=c.children[h],m=s(b,i,l);if(m.length)u.push(...m);else return[]}return u}case q.OR:{const u=[];for(let h=0,d=c.children.length;h<d;h+=1){const b=c.children[h],m=s(b,i,l);if(m.length){u.push(...m);break}}return u}}},r=this._myIndex.records,a={},o=[];return r.forEach(({$:c,i})=>{if(S(c)){let l=s(n,c,i);l.length&&(a[i]||(a[i]={idx:i,item:c,matches:[]},o.push(a[i])),l.forEach(({matches:u})=>{a[i].matches.push(...u)}))}}),o}_searchObjectList(t){const n=ge(t,this.options),{keys:s,records:r}=this._myIndex,a=[];return r.forEach(({$:o,i:c})=>{if(!S(o))return;let i=[];s.forEach((l,u)=>{i.push(...this._findMatches({key:l,value:o[u],searcher:n}))}),i.length&&a.push({idx:c,item:o,matches:i})}),a}_findMatches({key:t,value:n,searcher:s}){if(!S(n))return[];let r=[];if(C(n))n.forEach(({v:a,i:o,n:c})=>{if(!S(a))return;const{isMatch:i,score:l,indices:u}=s.searchIn(a);i&&r.push({score:l,key:t,value:a,idx:o,norm:c,indices:u})});else{const{v:a,n:o}=n,{isMatch:c,score:i,indices:l}=s.searchIn(a);c&&r.push({score:i,key:t,value:a,norm:o,indices:l})}return r}}U.version="6.4.6";U.createIndex=je;U.parseIndex=Pt;U.config=f;U.parseQuery=Ue;qt(Jt);const on=()=>tt(()=>import("./pinyin.889e0d93.js").then(function(e){return e.w}),[]),an=async(e,t,n)=>{const s=[],r=async(i,l)=>{for(let u of i){const h=Object.assign({},u,{searchLabel:l+u.meta.title});if(n.usePinyinSearch){const d=await on();h.pinyinTitle=d.default(u.meta.title,{style:d.STYLE_NORMAL}).join("")}s.push(h),u.children&&u.children.length>0&&r(u.children,`${l+u.meta.title} > `)}};await r(t,"");const a=()=>({shouldSort:!0,threshold:.4,location:0,distance:100,minMatchCharLength:1,includeScore:!0,keys:n.usePinyinSearch?["meta.title","path","pinyinTitle"]:["meta.title","path"]});let o=new U(s,a());return Q(()=>n.usePinyinSearch,async()=>{s.splice(0,s.length),await r(t,""),o=new U(s,a())}),i=>{i!==""?e.value=o.search(i).map(l=>l.item):e.value=[]}},cn=e=>{const t=re(),n=I(""),s=I(!1),r=I(),a=()=>{s.value=!s.value,s.value&&r.value&&r.value.focus()},o=()=>{n.value="",e.value.splice(0,e.value.length),s.value=!1};return Q(s,i=>{i?document.body.addEventListener("click",o):document.body.removeEventListener("click",o)}),{href:n,changeRoute:()=>{t.push({path:n.value}),o()},changeStatus:a,isShow:s,elSelect:r,hideSearch:o}};var be=O({name:"Search",setup(){const{getMenubar:e,getSetting:t}=F(),n=I([]),s=I(null);return an(n,e.menuList,t).then(r=>{s.value=r}),L({searchList:n,searchText:s},cn(n))}});const ln={class:"layout-navbar-search-select"};function un(e,t,n,s,r,a){const o=g("svg-icon"),c=g("el-option"),i=g("el-select");return p(),w("div",{class:N(["layout-navbar-search hidden-xs-only cursor-pointer flex flex-center px-2",{open:e.isShow}])},[y(o,{"class-name":"svg-icon","icon-class":"svg-search",onClick:xe(e.changeStatus,["stop"])},null,8,["onClick"]),_("div",ln,[y(i,{ref:"elSelect",modelValue:e.href,"onUpdate:modelValue":t[0]||(t[0]=l=>e.href=l),filterable:"",placeholder:"search",remote:"","remote-method":e.searchText,onChange:e.changeRoute},{default:v(()=>[(p(!0),w(B,null,J(e.searchList,l=>(p(),E(c,{key:l.path,label:l.searchLabel,value:l.path},null,8,["label","value"]))),128))]),_:1},8,["modelValue","remote-method","onChange"])])],2)}be.render=un;be.__scopeId="data-v-163ee8c0";var He="/assets/icon.51fd296d.png";const hn=e=>{const t=()=>{const s=[],r=["Dashboard","RedirectPage"];return e.matched[0]&&r.includes(e.matched[0].name)||e.matched.forEach(a=>{const o={title:a.meta.title,path:a.path};s.push(o)}),s};let n=oe({breadcrumbList:t()});return Q(()=>e.path,()=>n.breadcrumbList=t()),{data:n}};var ve=O({name:"LayoutNavbar",components:{Search:be,Screenfull:Ae,LayoutMenubar:le},setup(){const{getMenubar:e,getUserInfo:t,changeCollapsed:n,logout:s,getSetting:r,loginRequired:a}=F(),o=X();return Se(L({loginRequired:a,getMenubar:e,userInfo:t,changeCollapsed:n,logout:s},hn(o)),{getSetting:r,icon:He})}});const dn=e=>($e("data-v-d602b4be"),e=e(),Le(),e),fn={key:0,class:"flex items-center px-4 flex-wrap h-12 leading-12"},pn={class:"px-4"},gn=G("\u4E3B\u9875"),mn={key:1,class:"flex items-center px-4 flex-wrap h-12 flex-1"},_n={class:"layout-sidebar-logo flex relative shadow-lg w-60 leading-12 items-center"},bn={key:0,class:"pl-2"},vn={class:"layout-sidebar-menubar flex flex-1 overflow-hidden"},yn={class:"flex items-center flex-row-reverse px-4 min-width-32"},wn={class:"el-dropdown-link flex flex-center px-2"},Mn={class:"ml-2"},En=dn(()=>_("i",{class:"el-icon-arrow-down el-icon--right"},null,-1)),Sn=G("\u524D\u5F80\u540E\u53F0"),kn=G("\u9000\u51FA\u767B\u5F55");function $n(e,t,n,s,r,a){const o=g("el-breadcrumb-item"),c=g("el-breadcrumb"),i=g("layout-menubar"),l=g("el-link"),u=g("el-dropdown-item"),h=g("el-dropdown-menu"),d=g("el-dropdown"),b=g("Screenfull"),m=g("Search");return p(),w(B,null,[e.getSetting.mode==="vertical"||e.getMenubar.isPhone?(p(),w("div",fn,[_("span",{class:N(["text-2xl cursor-pointer h-12 leading-12",{"el-icon-s-fold":!e.getMenubar.status,"el-icon-s-unfold":e.getMenubar.status}]),onClick:t[0]||(t[0]=(...M)=>e.changeCollapsed&&e.changeCollapsed(...M))},null,2),_("div",pn,[y(c,{separator:"/"},{default:v(()=>[y(ct,{name:"breadcrumb"},{default:v(()=>[y(o,{key:"/",to:{path:"/"}},{default:v(()=>[gn]),_:1}),(p(!0),w(B,null,J(e.data.breadcrumbList,M=>(p(),E(o,{key:M.path,to:M.path},{default:v(()=>[G(D(M.title),1)]),_:2},1032,["to"]))),128))]),_:1})]),_:1})])])):(p(),w("div",mn,[_("div",_n,[e.getMenubar.status===0||e.getMenubar.status===2?(p(),w("span",bn,D(e.ImportMetaEnv.VITE_APP_TITLE),1)):K("",!0)]),_("div",vn,[y(i)])])),_("div",yn,[y(d,null,{dropdown:v(()=>[y(h,null,{default:v(()=>[y(u,null,{default:v(()=>[y(l,{target:"_blank",underline:!1,href:"/admin"},{default:v(()=>[Sn]),_:1})]),_:1}),e.loginRequired?(p(),E(u,{key:0,divided:"",onClick:e.logout},{default:v(()=>[kn]),_:1},8,["onClick"])):K("",!0)]),_:1})]),default:v(()=>[_("span",wn,[_("span",Mn,D(e.loginRequired?e.userInfo.name:"\u9009\u9879"),1),En])]),_:1}),y(b),y(m)])],64)}ve.render=$n;ve.__scopeId="data-v-d602b4be";const Ln=()=>{const{removeOtherTagNav:e}=F(),t=X(),n=re(),s=oe({left:"0px",top:"0px",display:"none"}),r=I(null);let a;const o=(l,u)=>{a=l,s.display="block",ie(()=>{var m;if(!r.value)return;const h=(m=r.value)==null?void 0:m.parentNode;let d=u.clientX-h.offsetLeft-5,b=u.clientY-h.offsetTop+10;u.clientX+r.value.offsetWidth>document.body.offsetWidth&&(d=d-r.value.offsetWidth+15),s.left=`${d}px`,s.top=`${b}px`})},c=()=>{a.path===t.path?n.replace(`/redirect${a.path}`):n.push(`/redirect${a.path}`)},i=()=>e(a);return document.body.addEventListener("click",()=>s.display="none"),{menuPos:s,contextRightMenu:o,refresh:c,rightMenuEl:r,closeOther:i}},xn=()=>{const{getTags:e}=F(),{tagsList:t,cachedViews:n}=e,s=I(null),r=I([]),a=o=>o&&r.value.push(o);return Q(()=>t.length,()=>ie(()=>{!s.value||(s.value.update(),ie(()=>{const o=r.value.filter(i=>i).reduce((i,l)=>i+l.offsetWidth+6,0);if(!s.value)return;const c=o-s.value.wrap.offsetWidth+70;c>0&&(s.value.wrap.scrollLeft=c)}))})),lt(()=>{r.value=[]}),{tagsList:t,scrollbar:s,layoutTagsItem:r,cachedViews:n,getTagsDom:a}};var Ye=O({name:"LayoutTags",setup(){const{removeAllTagNav:e,addCachedViews:t,removeTagNav:n}=F(),s=X(),r=a=>n({cPath:s.path,tagsList:a});return ae(()=>{t({name:s.name,noCache:s.meta.noCache})}),L(L({removeTag:r,removeAllTagNav:e},xn()),Ln())}});const In={class:"shadow border-b border-gray-100 px-3 overflow-hidden relative z-10"},Cn={class:"layout-tags-container whitespace-nowrap"},An=["onContextmenu"],Tn={key:0,class:"rounded-full inline-block w-2 h-2 bg-white -ml-1 mr-1"},Rn=["onClick"];function Fn(e,t,n,s,r,a){const o=g("router-link"),c=g("el-scrollbar");return p(),w(B,null,[_("div",In,[y(c,{ref:"scrollbar","wrap-class":"scrollbar-wrapper"},{default:v(()=>[_("div",Cn,[(p(!0),w(B,null,J(e.tagsList,i=>(p(),w("span",{key:i.path,ref:e.getTagsDom,class:N(["border border-gray-200 px-2 py-1 mx-1 cursor-pointer",{"layout-tags-active":i.isActive}]),onContextmenu:xe(l=>e.contextRightMenu(i,l),["prevent"])},[i.isActive?(p(),w("i",Tn)):K("",!0),y(o,{to:i.path},{default:v(()=>[G(D(i.title),1)]),_:2},1032,["to"]),e.tagsList.length>1?(p(),w("i",{key:1,class:"el-icon-close text-xs hover:bg-gray-300 hover:text-white rounded-full leading-3 p-0.5 ml-1 -mr-1",onClick:l=>e.removeTag(i)},null,8,Rn)):K("",!0)],42,An))),128))])]),_:1},512)]),_("ul",{ref:"rightMenuEl",class:"border border-gray-200 absolute w-24 leading-none bg-white shadow-md rounded-lg py-0.5 z-10",style:ut(e.menuPos)},[_("li",{class:"px-4 py-2 cursor-pointer hover:bg-gray-200",onClick:t[0]||(t[0]=(...i)=>e.refresh&&e.refresh(...i))},"\u5237\u65B0"),_("li",{class:"px-4 py-2 cursor-pointer hover:bg-gray-200",onClick:t[1]||(t[1]=(...i)=>e.closeOther&&e.closeOther(...i))},"\u5173\u95ED\u5176\u5B83"),_("li",{class:"px-4 py-2 cursor-pointer hover:bg-gray-200",onClick:t[2]||(t[2]=(...i)=>e.removeAllTagNav&&e.removeAllTagNav(...i))},"\u5173\u95ED\u6240\u6709")],4)],64)}Ye.render=Fn;var Ge=O({name:"Layout",components:{LayoutContent:ce,LayoutMenubar:le,LayoutNavbar:ve,LayoutTags:Ye},setup(){const{changeDeviceWidth:e,changeCollapsed:t,getMenubar:n,getSetting:s}=F();return ae(async()=>{e();const r=nt(300);let a=async function(){await r(),e()};window.addEventListener("resize",a,!0)}),{getMenubar:n,getSetting:s,changeCollapsed:t,icon:He}}});const On={class:"layout flex h-screen"},Nn={class:"layout-sidebar-logo flex h-12 relative flex-center shadow-lg"},Pn={key:0,class:"pl-2"},jn={class:"layout-sidebar-menubar flex flex-1 overflow-hidden"},Vn={class:"layout-main flex flex-1 flex-col overflow-x-hidden overflow-y-auto"},zn={class:"layout-main-navbar flex justify-between items-center h-12 shadow-sm overflow-hidden relative z-10"},Dn={key:0,class:"layout-main-tags h-8 leading-8 text-sm text-gray-600 relative"},Bn={class:"layout-main-content flex-1 overflow-hidden"};function Kn(e,t,n,s,r,a){const o=g("layout-menubar"),c=g("el-scrollbar"),i=g("layout-navbar"),l=g("layout-tags"),u=g("layout-content");return p(),w("div",On,[_("div",{class:N(["layout-sidebar-mask fixed w-screen h-screen bg-black bg-opacity-25 z-20",{hidden:e.getMenubar.status!==2}]),onClick:t[0]||(t[0]=(...h)=>e.changeCollapsed&&e.changeCollapsed(...h))},null,2),e.getSetting.mode==="vertical"||e.getMenubar.isPhone?(p(),w("div",{key:0,class:N(["layout-sidebar flex flex-col h-screen transition-width duration-200 shadow",{"w-64":e.getMenubar.status===0||e.getMenubar.status===2,"w-0":e.getMenubar.status===3,"w-16":e.getMenubar.status===1,"absolute z-30":e.getMenubar.status===2||e.getMenubar.status===3}])},[_("div",Nn,[e.getMenubar.status===0||e.getMenubar.status===2?(p(),w("span",Pn,D(e.ImportMetaEnv.VITE_APP_TITLE),1)):K("",!0)]),_("div",jn,[y(c,{"wrap-class":"scrollbar-wrapper"},{default:v(()=>[y(o)]),_:1})])],2)):K("",!0),_("div",Vn,[_("div",zn,[y(i)]),e.getSetting.showTags?(p(),w("div",Dn,[y(l)])):K("",!0),_("div",Bn,[y(u)])])])}Ge.render=Kn;Ge.__scopeId="data-v-154fa610";export{Ge as default};
