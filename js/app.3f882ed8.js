(function(e){function t(t){for(var r,a,u=t[0],l=t[1],i=t[2],b=0,s=[];b<u.length;b++)a=u[b],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&s.push(c[a][0]),c[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);f&&f(t);while(s.length)s.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var l=n[a];0!==c[l]&&(r=!1)}r&&(o.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},c={app:0},o=[];function a(e){return u.p+"js/"+({PrivacyPolicy:"PrivacyPolicy"}[e]||e)+"."+{PrivacyPolicy:"3b4ce159"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n=c[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=c[e]=[t,r]}));t.push(n[2]=r);var o,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=a(e);var i=new Error;o=function(t){l.onerror=l.onload=null,clearTimeout(b);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",i.name="ChunkLoadError",i.type=r,i.request=o,n[1](i)}c[e]=void 0}};var b=setTimeout((function(){o({type:"timeout",target:l})}),12e4);l.onerror=l.onload=o,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var b=0;b<l.length;b++)t(l[b]);var f=i;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"02d9":function(e,t,n){"use strict";n("e231")},"037f":function(e,t,n){},"2b98":function(e,t,n){"use strict";n("88fc")},"3eb0":function(e,t,n){},4895:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function c(e,t){var n=Object(r["v"])("router-view");return Object(r["o"])(),Object(r["c"])(n)}n("8bb8");const o={};o.render=c;var a=o,u=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),l=Object(r["B"])("data-v-2abc804a");Object(r["r"])("data-v-2abc804a");var i={class:"wrapper"};Object(r["p"])();var b=l((function(e,t,n,c,o,a){var u=Object(r["v"])("f-nav"),l=Object(r["v"])("router-view"),b=Object(r["v"])("f-footer");return Object(r["o"])(),Object(r["c"])("div",i,[Object(r["f"])(u,{zooming:""}),Object(r["f"])(l),Object(r["f"])(b)])})),f=Object(r["B"])("data-v-ac535b2e");Object(r["r"])("data-v-ac535b2e");var s={class:"logo"},d=Object(r["f"])("img",{src:"/assets/logo.png",alt:"FREESERVER Logo"},null,-1),v={class:"links"},O=Object(r["e"])("Home"),j=Object(r["e"])("Wiki"),p=Object(r["e"])("Maps"),h=Object(r["e"])("SNS");Object(r["p"])();var m=f((function(e,t,n,c,o,a){var u=Object(r["v"])("router-link"),l=Object(r["v"])("hash-match-link");return Object(r["o"])(),Object(r["c"])("nav",{class:["global-nav",{zoom:a.zoom}]},[Object(r["f"])("span",s,[Object(r["f"])(u,{to:{name:"Home"},class:"no-underline"},{default:f((function(){return[d]})),_:1})]),Object(r["f"])("div",v,[Object(r["f"])(l,{to:{name:"Home"}},{default:f((function(){return[O]})),_:1}),Object(r["f"])(l,{to:{name:"Home",hash:"#wiki"}},{default:f((function(){return[j]})),_:1}),Object(r["f"])(l,{to:{name:"Home",hash:"#maps"}},{default:f((function(){return[p]})),_:1}),Object(r["f"])(l,{to:{name:"Home",hash:"#sns"}},{default:f((function(){return[h]})),_:1})])],2)}));function y(e,t,n,c,o,a){var u=Object(r["v"])("router-link");return Object(r["o"])(),Object(r["c"])(u,{to:n.to,class:{"router-link-hash-match":a.hashMatch}},{default:Object(r["A"])((function(){return[Object(r["u"])(e.$slots,"default")]})),_:3},8,["to","class"])}var g={name:"NavLink",props:{to:{type:Object,required:!0}},computed:{hashMatch:function(){return this.$route.hash===this.$props.to.hash}},mounted:function(){}};g.render=y;var _=g,w={name:"FNav",components:{HashMatchLink:_},data:function(){return{scroll:0}},props:{zooming:{type:Boolean,default:!1}},computed:{zoom:function(){return this.scroll<=70&&this.zooming}},mounted:function(){var e=this;window.addEventListener("scroll",(function(){e.scroll=window.scrollY}))}};n("a4d3");w.render=m,w.__scopeId="data-v-ac535b2e";var P=w,k=Object(r["B"])("data-v-5e572c79");Object(r["r"])("data-v-5e572c79");var E=Object(r["e"])("プライバシーポリシー"),S=Object(r["e"])("ルール・各種案内"),F=Object(r["e"])("運営募集 | Join us"),M={class:"copyright"};Object(r["p"])();var H=k((function(e,t,n,c,o,a){var u=Object(r["v"])("router-link");return Object(r["o"])(),Object(r["c"])("footer",null,[Object(r["f"])(u,{to:{path:"/privacy-policy"}},{default:k((function(){return[E]})),_:1}),Object(r["f"])(u,{to:{path:"/privacy-policy"}},{default:k((function(){return[S]})),_:1}),Object(r["f"])(u,{to:{path:"/privacy-policy"}},{default:k((function(){return[F]})),_:1}),Object(r["f"])("span",M,"©"+Object(r["x"])((new Date).getFullYear())+" FREESERVER PROJECT",1)])})),R={name:"FFotter"};n("02d9");R.render=H,R.__scopeId="data-v-5e572c79";var B=R,x={name:"Main",components:{FNav:P,FFooter:B}};n("2b98");x.render=b,x.__scopeId="data-v-2abc804a";var T=x,z=Object(r["B"])("data-v-43cfb9d7");Object(r["r"])("data-v-43cfb9d7");var I={class:"home"},L=Object(r["f"])("div",{class:"title"},[Object(r["f"])("h1",null,"Welcome to FREESERVER")],-1),A=Object(r["f"])("div",{id:"about"},"About",-1),N=Object(r["f"])("br",null,null,-1),C=Object(r["f"])("br",null,null,-1),J=Object(r["f"])("br",null,null,-1),$=Object(r["f"])("br",null,null,-1),q=Object(r["f"])("br",null,null,-1),V=Object(r["f"])("br",null,null,-1),W=Object(r["f"])("br",null,null,-1),Y=Object(r["f"])("div",{id:"wiki"},"Wiki",-1),D=Object(r["f"])("br",null,null,-1),G=Object(r["f"])("br",null,null,-1),K=Object(r["f"])("br",null,null,-1),Q=Object(r["f"])("br",null,null,-1),U=Object(r["f"])("br",null,null,-1),X=Object(r["f"])("br",null,null,-1),Z=Object(r["f"])("br",null,null,-1),ee=Object(r["f"])("br",null,null,-1);Object(r["p"])();var te=z((function(e,t,n,c,o,a){var u=Object(r["v"])("scroll-to-see-more");return Object(r["o"])(),Object(r["c"])("main",I,[Object(r["f"])("header",null,[L,Object(r["f"])(u,{onClick:t[1]||(t[1]=function(t){return e.$router.push({name:"Home",hash:"#about"})})})]),A,N,C,J,$,q,V,W,Y,D,G,K,Q,U,X,Z,ee])})),ne=Object(r["B"])("data-v-89621f88");Object(r["r"])("data-v-89621f88");var re={class:"scroll-to-see-more"};Object(r["p"])();var ce=ne((function(e,t,n,c,o,a){return Object(r["o"])(),Object(r["c"])("span",re)})),oe={name:"ScrollToSeeMore",emits:[]};n("6c23");oe.render=ce,oe.__scopeId="data-v-89621f88";var ae=oe,ue={name:"Home",components:{ScrollToSeeMore:ae}};n("df6d");ue.render=te,ue.__scopeId="data-v-43cfb9d7";var le=ue,ie=Object(r["B"])("data-v-1aebadc2");Object(r["r"])("data-v-1aebadc2");var be={class:"wrapper"};Object(r["p"])();var fe=ie((function(e,t,n,c,o,a){var u=Object(r["v"])("f-nav"),l=Object(r["v"])("router-view"),i=Object(r["v"])("f-footer");return Object(r["o"])(),Object(r["c"])("div",be,[Object(r["f"])(u),Object(r["f"])("article",null,[Object(r["f"])(l)]),Object(r["f"])(i)])})),se={name:"Article",components:{FNav:P,FFooter:B}};n("67d8");se.render=fe,se.__scopeId="data-v-1aebadc2";var de=se,ve=Object(u["a"])({history:Object(u["b"])(),scrollBehavior:function(e,t,n){if(n)return n;var r={behavior:"smooth"};return e.hash&&document.querySelector(e.hash)?r.el=e.hash:(r.top=0,r.left=0),r},routes:[{path:"/",name:"Main",component:T,children:[{path:"",name:"Home",component:le}]},{path:"/",name:"Article",component:de,children:[{path:"privacy-policy",name:"PrivacyPolicy",component:function(){return n.e("PrivacyPolicy").then(n.bind(null,"aeed"))}}]}]}),Oe=ve;Object(r["b"])(a).use(Oe).mount("#app")},"67d8":function(e,t,n){"use strict";n("037f")},"6c23":function(e,t,n){"use strict";n("4895")},"88fc":function(e,t,n){},"8bb8":function(e,t,n){"use strict";n("b6f1")},a4d3:function(e,t,n){"use strict";n("aa2e")},aa2e:function(e,t,n){},b6f1:function(e,t,n){},df6d:function(e,t,n){"use strict";n("3eb0")},e231:function(e,t,n){}});
//# sourceMappingURL=app.3f882ed8.js.map