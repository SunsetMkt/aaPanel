const __vite__fileDeps=["js/index122.js?v=1723125373998","js/index.vue_vue_type_script_setup_true_lang6.js?v=1723125373998","js/vue.js?v=1723125373998","js/index.js?v=1723125373998","js/pinia.js?v=1723125373998","css/index42.css?v=1723125373998","js/mail.js?v=1723125373998","js/Select.js?v=1723125373998","js/Tag.js?v=1723125373998","js/Empty.js?v=1723125373998","js/Switch.js?v=1723125373998"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{g as t,h as e,j as s,k as a,r as i,B as o,q as r,v as l}from"./index.js?v=1723125373998";import{_ as n}from"./index.vue_vue_type_script_setup_true_lang.js?v=1723125373998";import{u as p,_ as d}from"./useTableData.js?v=1723125373998";import{b as m}from"./useTableColumns.js?v=1723125373998";import{i as c,j as u}from"./mail.js?v=1723125373998";import{l as _,ad as h,f as y,P as f,S as j,U as w,V as g,q as C,W as v,a1 as k}from"./vue.js?v=1723125373998";import"./pinia.js?v=1723125373998";import"./index.vue_vue_type_script_setup_true_lang5.js?v=1723125373998";import"./data.js?v=1723125373998";import"./Skeleton.js?v=1723125373998";import"./DataTable.js?v=1723125373998";import"./Checkbox.js?v=1723125373998";import"./Ellipsis.js?v=1723125373998";import"./Select.js?v=1723125373998";import"./Tag.js?v=1723125373998";import"./Empty.js?v=1723125373998";import"./omit.js?v=1723125373998";import"./Progress.js?v=1723125373998";import"./Switch.js?v=1723125373998";const b=_({__name:"index",setup(_){const b=k((()=>l((()=>import("./index122.js?v=1723125373998")),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10])))),{t:x}=h(),E=y({p:1,size:10}),B=t("Add BCC",{isEdit:!1,row:void 0,onRefresh:()=>{W()}}),D=()=>{B.data.isEdit=!1,B.title="Add BCC",B.show=!0},T=new Map([["sender","When sending"],["recipient","When receiving"]]),{table:A,columns:P}=p([{key:"user",title:"Need Copy",ellipsis:{tooltip:!0}},{key:"forward_user",title:"Copy to",ellipsis:{tooltip:!0}},{key:"domain",title:"Domain",ellipsis:{tooltip:!0}},{key:"type",title:"BCC Type",render:t=>T.get(t.type)},{key:"active",title:"Active",render:t=>f("div",{class:[1===t.active?"text-primary":"text-error"]},[f("span",{class:["glyphicon","glyphicon-".concat(1===t.active?"ok":"remove")]},null)])},m({width:150,options:t=>[{label:x("Public.Btn.Edit"),onClick:()=>{R(t)}},{label:x("Public.Btn.Del"),onClick:()=>{S(t)}}]})]),R=t=>{B.data.isEdit=!0,B.data.row=t,B.title="Edit BCC",B.show=!0},S=async t=>{e({title:"Delete forward",content:"Whether to delete the forward setting",onConfirm:async()=>{await c({type:t.type,user:t.user,forward_user:t.forward_user}),W()}})},W=async()=>{try{A.loading=!0;const{message:t}=await u();A.data=[],s(t)&&Object.entries(t).forEach((([t,e])=>{a(e)&&A.data.push(...e.map((e=>({...e,type:t}))))}))}finally{A.loading=!1}},q=()=>{E.p=1,W()};return W(),(t,e)=>{const s=o,a=d,l=n,p=r,m=i;return j(),w(m,{class:"p-16px"},{default:g((()=>[f(l,null,{toolsLeft:g((()=>[f(s,{type:"primary",onClick:D},{default:g((()=>[C("Add BCC")])),_:1})])),toolsRight:g((()=>[f(s,{onClick:q},{default:g((()=>[C("Refresh")])),_:1})])),table:g((()=>[f(a,{loading:v(A).loading,data:v(A).data,columns:v(P)},null,8,["loading","data","columns"])])),_:1}),f(p,{show:v(B).show,"onUpdate:show":e[0]||(e[0]=t=>v(B).show=t),title:v(B).title,data:v(B).data,width:540,"min-height":228,footer:!0,component:v(b)},null,8,["show","title","data","component"])])),_:1})}}});export{b as default};