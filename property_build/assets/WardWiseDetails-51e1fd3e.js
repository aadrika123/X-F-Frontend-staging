import{R as o,_ as S,e as _,r as a,a as A,u as D,j as t,P as W,A as g,b as r}from"./index-24ff9cc9.js";const y=o.lazy(()=>S(()=>import("./index-24ff9cc9.js").then(l=>l.ea),["assets/index-24ff9cc9.js","assets/index-62259d23.css"])),L=()=>{const{wardWiseCollection:l}=W();_();const[C,c]=a.useState(!1),[b,d]=a.useState(),[s,m]=a.useState(null),[n,v]=a.useState(null),[f,x]=a.useState(0);a.useState(0),A("Ward Wise Details");const{id:i}=D();a.useEffect(()=>{h()},[]);const h=()=>{c(!0),m({userId:i}),x(e=>e+1)},N=()=>{let e={userId:i};g.post(l,e,r()).then(function(u){v(u.data.data)}).catch(function(u){})};a.useEffect(()=>{N()},[]);const j=[{Header:"S.No.",Cell:({row:e})=>t.jsx("div",{children:(e==null?void 0:e.index)+1})},{Header:"Ward No",accessor:"ward_no",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return t.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Total No of Form(s)",accessor:"total",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return t.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}}];return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"mt-4"}),t.jsxs("div",{className:"absolute top-11 right-16 mt-16 text-gray-600",children:["Total Forms : ",t.jsxs("span",{className:"font-semibold",children:[" ",n==null?void 0:n.totalSaf]})]}),s!=null&&t.jsx(y,{type:"old",allData:e=>d(e),api:l,columns:j,requestBody:s,changeData:f}),t.jsx("div",{className:"h-[20vh]"})]})};export{L as default};