System.register(["./index-legacy73.js?v=1723125373998","./index.vue_vue_type_script_setup_true_lang-legacy6.js?v=1723125373998","./index-legacy.js?v=1723125373998","./site-legacy.js?v=1723125373998","./vue-legacy.js?v=1723125373998","./Checkbox-legacy.js?v=1723125373998"],(function(e,t){"use strict";var a,l,i,s,u,n,r,o,d,c,f,p,_,g,x,m,v,h,b,k,S,C;return{setters:[e=>{a=e._},e=>{l=e._,i=e.a},e=>{s=e.j,u=e.ae,n=e.B},e=>{r=e.aC,o=e.S},e=>{d=e.l,c=e.ad,f=e.d,p=e.r,_=e.f,g=e.S,x=e.Z,m=e.P,v=e.V,h=e._,b=e.W,k=e.q,S=e.a3},e=>{C=e._}],execute:function(){const t={class:"w-300px"},y={class:"w-300px"},w={class:"w-300px"},$={class:"flex flex-col"},j=h("br",null,null,-1);e("_",d({__name:"form",props:{site:{}},emits:["changeHotlink"],setup(e,{expose:d,emit:H}){const{t:T}=c(),R=H,U=f(e,"site"),E=p(null),L=_({fix:"",domains:"",return_rule:"",status:!1,http_status:!1}),P={fix:{trigger:["blur","change"],validator:()=>""!==L.fix.trim()||new Error(T("Site.RulesError.Suffix"))},return_rule:{trigger:["blur","change"],validator:()=>""!==L.return_rule.trim()||new Error(T("Site.RulesError.AntiTheft"))}},A=()=>{z()},q=()=>{z()},z=async()=>{await(E.value?.validate()),await r({id:U.value.id,name:U.value.name,fix:L.fix,domains:L.domains.trim().split("\n").join(","),return_rule:L.return_rule,status:L.status,http_status:L.http_status}),R("changeHotlink",L.status),B()},B=async()=>{const{message:e}=await o({id:U.value.id,name:U.value.name});s(e)&&(L.fix=e.fix,L.domains=e.domains.split(",").join("\n"),L.return_rule=e.return_rule,L.status=e.status,L.http_status="true"===e.http_status||!0===e.http_status)};return B(),d({init:B}),(e,s)=>{const r=u,o=l,d=C,c=n,f=i,p=a;return g(),x("div",null,[m(f,{ref_key:"formRef",ref:E,class:"px-8px",model:b(L),rules:P},{default:v((()=>[m(o,{label:e.$t("Site.Lable.Suffix"),path:"fix"},{default:v((()=>[h("div",t,[m(r,{value:b(L).fix,"onUpdate:value":s[0]||(s[0]=e=>b(L).fix=e),disabled:b(L).status,placeholder:""},null,8,["value","disabled"])])])),_:1},8,["label"]),m(o,{label:e.$t("Site.Lable.Access")},{default:v((()=>[h("div",y,[m(r,{value:b(L).domains,"onUpdate:value":s[1]||(s[1]=e=>b(L).domains=e),type:"textarea",autosize:{minRows:6,maxRows:6},placeholder:""},null,8,["value"])])])),_:1},8,["label"]),m(o,{label:e.$t("Site.Lable.Response"),path:"return_rule"},{default:v((()=>[h("div",w,[m(r,{value:b(L).return_rule,"onUpdate:value":s[2]||(s[2]=e=>b(L).return_rule=e),disabled:b(L).status,placeholder:""},null,8,["value","disabled"])])])),_:1},8,["label"]),m(o,{label:" "},{default:v((()=>[h("div",$,[m(d,{checked:b(L).status,"onUpdate:checked":[s[3]||(s[3]=e=>b(L).status=e),A]},{default:v((()=>[k(S(e.$t("Site.Config.HotlinkConfig.Protection")),1)])),_:1},8,["checked"]),m(d,{checked:b(L).http_status,"onUpdate:checked":[s[4]||(s[4]=e=>b(L).http_status=e),q],class:"mt-16px"},{default:v((()=>[k(S(e.$t("Site.Config.HotlinkConfig.HTTP")),1)])),_:1},8,["checked"])])])),_:1}),m(o,{label:" ","show-feedback":!1},{default:v((()=>[m(c,{type:"primary",onClick:z},{default:v((()=>[k(S(e.$t("Site.Cert.Save")),1)])),_:1})])),_:1})])),_:1},8,["model"]),m(p,{class:"mt-20px"},{default:v((()=>[h("li",null,[k(S(e.$t("Site.Config.HotlinkConfig.Tips.0")),1),j,k(" "+S(e.$t("Site.Config.HotlinkConfig.Tips.1")),1)]),h("li",null,S(e.$t("Site.Config.HotlinkConfig.Tips.2")),1),h("li",null,S(e.$t("Site.Config.HotlinkConfig.Tips.3")),1)])),_:1})])}}}))}}}));