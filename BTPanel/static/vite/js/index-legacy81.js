System.register(["./index.vue_vue_type_script_setup_true_lang-legacy6.js?v=1723125373998","./pinia-legacy.js?v=1723125373998","./index-legacy.js?v=1723125373998","./vue-legacy.js?v=1723125373998","./Select-legacy.js?v=1723125373998","./Tag-legacy.js?v=1723125373998","./Empty-legacy.js?v=1723125373998"],(function(e,t){"use strict";var l,s,a,r,n,i,u,o,d,c,p,v,_,g,y,f,x;return{setters:[e=>{l=e._,s=e.a},e=>{a=e.s},e=>{r=e.u,n=e.dF,i=e.n},e=>{u=e.l,o=e.r,d=e.f,c=e.k,p=e.S,v=e.Z,_=e.P,g=e.V,y=e._,f=e.W},e=>{x=e._},null,null],execute:function(){const t={class:"px-20px pt-24px pb-8px"},h={class:"w-260px"};e("default",u({__name:"index",setup(e,{expose:u}){const m=r(),{remoteList:j}=a(m),w=o(null),b=d({sid:j.value.length>0?j.value[0].id:null}),E=c((()=>j.value.map((e=>({label:`${e.ps||e.db_host} (${e.db_host})`,value:e.id}))))),S={sid:{trigger:"change",validator:(e,t)=>null!==t||new Error("请选择服务器位置")}};return u({onConfirm:async({hide:e})=>{try{await(w.value?.validate());const t=(()=>{const{sid:e}=b;if(null===e)throw i.error("请选择远程服务器"),new Error("请选择远程服务器");return{sid:e}})();await n(m.type,t),m.setRefresh(!0),e()}catch(t){console.error(t)}}}),(e,a)=>{const r=x,n=l,i=s;return p(),v("div",t,[_(i,{ref_key:"formRef",ref:w,model:f(b),rules:S},{default:g((()=>[_(n,{label:"Position",path:"sid"},{default:g((()=>[y("div",h,[_(r,{value:f(b).sid,"onUpdate:value":a[0]||(a[0]=e=>f(b).sid=e),options:f(E)},null,8,["value","options"])])])),_:1})])),_:1},8,["model"])])}}}))}}}));