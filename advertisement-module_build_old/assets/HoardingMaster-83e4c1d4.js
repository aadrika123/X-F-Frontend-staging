import{r as s,c as He,a as Ee,b as Ve,d as k,e as x,at as E,f as a,F as u,j as o,B as $e,au as Y,av as G,X as Le,n as b,W as Be,al as qe,aw as Me,A as Re}from"./index-483b0d6c.js";import{L as J,R as je}from"./ListTable-9d684a1f.js";const Je=()=>{const{api_addbrand:K,api_getdataagency:Q,api_editbrand:v,api_deletebrand:ee,api_listbrand:q,api_hoardingType:te,api_addhoarding:re,api_edithoarding:oe,api_deletehoarding:ne,api_getdatahoarding:de,api_assignRole:ie,api_newWardByZoneId:ae}=Re(),m=s.useRef(),[le,se]=s.useState(),[C,A]=s.useState(!1),[ce,M]=s.useState(!1),[De,he]=s.useState(""),[Pe,pe]=s.useState(!1),[c,ge]=s.useState(""),[V,R]=s.useState(null),[S,z]=s.useState([]),[p,$]=s.useState([]),[We,fe]=s.useState([]),[ue,be]=s.useState([]),[f,T]=s.useState(null),[me,F]=s.useState(!1),[d,Ze]=s.useState("user"),[Ue,L]=s.useState(null),[j,I]=s.useState(null),D="border border-sky-800 text-sky-800 mx-1 px-3 py-1 rounded-sm shadow-lg hover:shadow-xl hover:bg-sky-800 hover:text-white",we="border border-amber-700 text-amber-700 mx-1 px-3 py-1 rounded-sm shadow-lg hover:shadow-xl hover:bg-amber-700 hover:text-white",P="border border-red-400 text-red-400 mx-1 px-3 py-1 rounded-sm shadow-lg hover:shadow-xl hover:bg-red-800 hover:text-white",W="float-right bg-[#1A4D8C] px-3 py-1 rounded-sm shadow-lg hover:shadow-xl hover:bg-[#113766] hover:text-white text-white flex items-center",xe="text-gray-800 text-sm",Z="border focus:outline-none drop-shadow-sm focus:drop-shadow-md px-4 py-1 text-gray-700 shadow-black placeholder:text-sm",ye="block w-full border focus:outline-none drop-shadow-sm focus:drop-shadow-md p-1 text-sm text-slate-500 file:mr-4 file:py-1 file:px-4 file:rounded-sm file:border file:text-xs file:font-semibold file:bg-zinc-100 hover:file:bg-zinc-200",Ne=([{value:"1",label:"Zone A"},{value:"2",label:"Zone B"},{value:"3",label:"Zone C"},{value:"4",label:"Zone D"}]||[]).map(e=>({value:e.value,label:e.label})),_e=e=>`px-4 py-1 text-sm bg-${e}-500 hover:bg-${e}-600 select-none rounded-sm hover:drop-shadow-md text-white`,w=(e,t)=>{pe(e),he(t)},y=(e,t=null)=>{switch(ge(e),console.log(e,":::::::::",d,t),e){case"add":break;case"edit":T(t),d=="role"&&i.setFieldValue("brandType",t==null?void 0:t.brand_type),d=="user"&&(i.setFieldValue("hoardingNo",(t==null?void 0:t.hoarding_no)||""),i.setFieldValue("hoardingType",(t==null?void 0:t.hoardingId)||""),i.setFieldValue("address",(t==null?void 0:t.address)||""),i.setFieldValue("latitude",(t==null?void 0:t.latitude)||""),i.setFieldValue("longitude",t==null?void 0:t.longitude),i.setFieldValue("length",t==null?void 0:t.length),i.setFieldValue("width",t==null?void 0:t.width),i.setFieldValue("agencyId",t==null?void 0:t.agency_id),i.setFieldValue("remarks",t==null?void 0:t.remarks),i.setFieldValue("zoneId",t==null?void 0:t.zoneId),i.setFieldValue("wardId",t==null?void 0:t.wardId));break;case"delete":R(t);break;case"assign":T(t),R(t==null?void 0:t.id),I((t==null?void 0:t.wf_role_id)||"");break}m.current.showModal()},ke=[{Header:"#",Cell:({row:e})=>o("div",{className:"pr-2",children:(e==null?void 0:e.index)+1})},{Header:"Brand Type",accessor:"brand_type",Cell:({cell:e})=>{var t;return b((t=e.row.original)==null?void 0:t.brand_type)}},{Header:"Created At",accessor:"created_at",Cell:({cell:e})=>{var t;return Be((t=e.row.original)==null?void 0:t.created_at)}},{Header:"Action",accessor:"id",Cell:({cell:e})=>a("div",{className:"flex flex-row flex-wrap gap-2",children:[o("button",{onClick:()=>{var t;return y("edit",(t=e==null?void 0:e.row)==null?void 0:t.original)},className:D,children:"Edit"}),o("button",{onClick:()=>{var t,r;return y("delete",(r=(t=e==null?void 0:e.row)==null?void 0:t.original)==null?void 0:r.id)},className:P,children:"Delete"})]})}],Ce=[{Header:"#",Cell:({row:e})=>o("div",{className:"pr-2",children:(e==null?void 0:e.index)+1})},{Header:"Hoarding No",accessor:"hoarding_no",Cell:({cell:e})=>{var t;return b((t=e.row.original)==null?void 0:t.hoarding_no)}},{Header:"Hoarding Type",accessor:"hoarding_type",Cell:({cell:e})=>{var t;return b((t=e.row.original)==null?void 0:t.hoarding_type)}},{Header:"Height",accessor:"length",Cell:({cell:e})=>{var t;return b((t=e.row.original)==null?void 0:t.length)}},{Header:"Width",accessor:"width",Cell:({cell:e})=>{var t;return b((t=e.row.original)==null?void 0:t.width)}},{Header:"Zone No",accessor:"zone_name",Cell:({cell:e})=>{var t;return b((t=e.row.original)==null?void 0:t.zone_name)}},{Header:"Ward No",accessor:"ward_name",Cell:({cell:e})=>{var t;return b((t=e.row.original)==null?void 0:t.ward_name)}},{Header:"Address",accessor:"address",Cell:({cell:e})=>{var t;return b((t=e.row.original)==null?void 0:t.address)}},{Header:"Agency Name",accessor:"agency_name",Cell:({cell:e})=>{var t;return b((t=e.row.original)==null?void 0:t.agency_name)}},{Header:"Action",accessor:"id",Cell:({cell:e})=>a("div",{className:"flex items-center flex-wrap flex-row gap-1",children:[o("button",{onClick:()=>{var t;return y("edit",(t=e==null?void 0:e.row)==null?void 0:t.original)},className:D,children:"Edit"}),o("button",{onClick:()=>{var t,r;return y("delete",(r=(t=e==null?void 0:e.row)==null?void 0:t.original)==null?void 0:r.id)},className:P,children:"Delete"}),o("button",{onClick:()=>{var t;return y("assign",(t=e==null?void 0:e.row)==null?void 0:t.original)},className:we,children:"Assign Agency"})]})}],H=[{title:"Brand Type",key:"brandType",width:` w-full ${d=="role"?"block ":"hidden "}`,type:d=="role"?"text":"select",hint:"Enter Brand",required:!0,okey:"id",ovalue:"role_name",required:d=="role"&&!0},{title:"Hoarding Type ",key:"hoardingType",width:`md:w-[48%] w-full ${d==="user"?"block ":"hidden "}`,type:"select",hint:"Enter Hoarding Type",required:!0,options:ue,okey:"id",ovalue:"type"},{title:"Height",key:"length",width:`md:w-[48%] w-full ${d=="user"?"block ":"hidden "}`,type:"number",hint:"Enter Length",required:d=="user"&&!0},{title:"Width",key:"width",width:`md:w-[48%] w-full ${d=="user"?"block ":"hidden "}`,type:"number",hint:"Enter width ",required:d=="user"&&!0},{title:"Address",key:"address",width:`md:w-[48%] w-full ${d=="user"?"block ":"hidden "}`,type:"text",hint:"Enter Address",required:d=="user"&&!0},{title:"Zone",key:"zoneId",width:`md:w-[48%] w-full ${d=="user"?"block ":"hidden "}`,type:"select",hint:"Select Zone",required:!0,options:Ne,okey:"value",ovalue:"label"},{title:"Ward No",key:"wardId",width:`md:w-[48%] w-full ${d==="user"?"block ":"hidden "}`,type:"select",hint:"Select Ward",required:!0,options:le,okey:"id",ovalue:"ward_name"}],Ae=He().shape([...H].reduce((e,t)=>(t!=null&&t.required&&(e[t.key]=Ee().required(t==null?void 0:t.hint)),e),{})),i=Ve({initialValues:{role:"",hoardingNo:"",hoardingType:"",latitude:"",longitude:"",length:"",width:"",agencyId:"",loactionId:"",remarks:""},enableReinitialize:!0,validationSchema:Ae,onSubmit:e=>{U(e)}}),B=()=>{z([]),A(!0);let e;d=="role"&&(e=q),d=="user"&&(e=de);let t;d=="user"&&(t=Q),k.post(e,{},x()).then(r=>{var n,l,g,h,N,_;(n=r==null?void 0:r.data)!=null&&n.status?(z((g=(l=r==null?void 0:r.data)==null?void 0:l.data)==null?void 0:g.data),console.log("chandan",(N=(h=r==null?void 0:r.data)==null?void 0:h.data)==null?void 0:N.data)):(w(!0,E((_=r==null?void 0:r.data)==null?void 0:_.message)),z([])),console.log("user role list response => ",r)}).catch(r=>{w(!0,"Server Error! Please try again later."),z([]),console.log("error user role list => ",r)}).finally(()=>{A(!1),T(null),L(null),I(null),m.current.close()}),k.post(t,{},x()).then(r=>{var n,l,g,h,N,_;(n=r==null?void 0:r.data)!=null&&n.status?($((g=(l=r==null?void 0:r.data)==null?void 0:l.data)==null?void 0:g.data),console.log("chandan",(N=(h=r==null?void 0:r.data)==null?void 0:h.data)==null?void 0:N.data)):(w(!0,E((_=r==null?void 0:r.data)==null?void 0:_.message)),$([])),console.log("user role list response => ",r)}).catch(r=>{w(!0,"Server Error! Please try again later."),$([]),console.log("error user role list => ",r)}).finally(()=>{A(!1),T(null),L(null),I(null),m.current.close()})},Se=(e,t="",r,n="",l="",g=!1,h=[],N="",_="")=>a("div",{className:`flex flex-col ${n} `,children:[t!=""&&a("label",{htmlFor:e,className:xe,children:[t," ",g&&o("span",{className:"text-red-500 text-xs font-bold",children:"*"})," : "]}),r!="select"&&r!="file"&&o("input",{...i.getFieldProps(e),type:r,className:Z+` ${i.touched[e]&&i.errors[e]?" border-red-200 placeholder:text-red-400 ":" focus:border-zinc-300 border-zinc-200"}`,name:e,id:"",placeholder:l}),r=="file"&&o("input",{type:"file",className:ye+`${i.touched[e]&&i.errors[e]?" border-red-200 placeholder:text-red-400 text-red-400 file:border-red-200 file:text-red-400":" focus:border-zinc-300 border-zinc-200 file:border-zinc-300 file:text-gray-600"}`,name:e,id:"",placeholder:l,accept:".jpg, .jpeg, .png"}),r=="select"&&o("select",{...i.getFieldProps(e),className:Z+` ${i.touched[e]&&i.errors[e]?" border-red-200 placeholder:text-red-400 text-red-400":" focus:border-zinc-300 border-zinc-200 "}`,children:me?o("option",{children:"Loading..."}):a(u,{children:[o("option",{value:null,children:"Select"}),typeof h=="object"&&(h==null?void 0:h.map(X=>o("option",{className:"",value:X[N],children:X[_]})))]})})]}),U=e=>{M(!0),m.current.close();let t,r,n=new FormData;switch(c){case"add":d=="role"&&(t={brandType:e==null?void 0:e.brandType},r=K),d=="user"&&(n.append("hoardingNo",e==null?void 0:e.hoardingNo),n.append("hoardingType",e==null?void 0:e.hoardingType),n.append("latitude",e==null?void 0:e.latitude),n.append("longitude",e==null?void 0:e.longitude),n.append("length",e==null?void 0:e.length),n.append("width",e==null?void 0:e.width),n.append("agencyId",e==null?void 0:e.agencyId),n.append("address",e==null?void 0:e.address),n.append("zoneId",e==null?void 0:e.zoneId),n.append("wardId",e==null?void 0:e.wardId),n.append("remarks",e==null?void 0:e.remarks),r=re);break;case"edit":d=="role"&&(t={userId:f==null?void 0:f.id,brandType:e==null?void 0:e.brandType},r=v),d=="user"&&(n.append("userId",f==null?void 0:f.id),n.append("hoardingNo",e==null?void 0:e.hoardingNo),n.append("hoardingType",e==null?void 0:e.hoardingType),n.append("address",e==null?void 0:e.address),n.append("zoneId",e==null?void 0:e.zoneId),n.append("wardId",e==null?void 0:e.wardId),n.append("length",e==null?void 0:e.length),n.append("width",e==null?void 0:e.width),r=oe);break;case"delete":d=="role"&&(r=ee,t={id:V}),d=="user"&&(r=ne,n.append("id",V));break}k.post(r,d=="user"?n:t,d=="user"?x():x()).then(l=>{var g,h;(g=l==null?void 0:l.data)!=null&&g.status?B():w(!0,E((h=l==null?void 0:l.data)==null?void 0:h.message)),console.log("fp violation response => ",l)}).catch(l=>{w(!0,"Server Error! Please try again later."),console.log("error violation list => ",l)}).finally(()=>{M(!1),i.resetForm()})},Ie=()=>{F(!0),k.post(q,{},x()).then(e=>{var t,r,n;(t=e==null?void 0:e.data)!=null&&t.status&&(fe((r=e==null?void 0:e.data)==null?void 0:r.data),console.log("chandanlistbrand",(n=e==null?void 0:e.data)==null?void 0:n.data)),console.log("fp department list response => ",e)}).catch(e=>{console.log("error fp department list => ",e)}).finally(()=>{F(!1)})},ze=()=>{F(!0),k.post(te,{},x()).then(e=>{var t,r,n;(t=e==null?void 0:e.data)!=null&&t.status&&(be((r=e==null?void 0:e.data)==null?void 0:r.data),console.log("chandanhaordingType",(n=e==null?void 0:e.data)==null?void 0:n.data)),console.log("chandanhaordingType list response => ",e)}).catch(e=>{console.log("error chandanhaordingType list => ",e)}).finally(()=>{F(!1)})};s.useEffect(()=>{ze()},[]);const Te=e=>{i.setFieldValue("wardId","");let t={zoneId:e};console.log("before fetch wardby old ward...",t),k.post(ae,t,x()).then(function(r){console.log("wardlist by zone id list ....",r.data.data),se(r.data.data),i.setFieldValue("wardId","")}).catch(function(r){console.log("errorrr.... ",r)})},O=e=>{var n;const t=e.target.name,r=e.target.value;if(t=="mobileNo"&&i.setFieldValue("mobileNo",qe(r,i.values.mobileNo,10)),t=="profile"){let l=(n=e==null?void 0:e.target)==null?void 0:n.files[0];if(!Me(l)){i.setFieldValue("profile","");return}L(l)}t=="roleAssign"&&I(r),t==="zoneId"&&Te(r)},Fe=()=>{A(!0);let e={userId:V,roleId:j};k.post(ie,e,x()).then(t=>{var r,n;(r=t==null?void 0:t.data)!=null&&r.status?B():w(!0,E((n=t==null?void 0:t.data)==null?void 0:n.message)),console.log("fp role assign response => ",t)}).catch(t=>{w(!0,"Server Error! Please try again later."),console.log("error fp role assign => ",t)}).finally(()=>{A(!1),m.current.close()})};return s.useEffect(()=>{d!="department"&&Ie(),B()},[d]),a(u,{children:[ce&&o($e,{}),a("div",{className:"poppins p-4 px-6",children:[o("div",{className:"uppercase font-semibold text-gray-700 text-2xl py-2 text-center tracking-[0.5rem]",children:"Hoarding Master"}),o("div",{className:"w-full h-[0.15rem] bg-gray-400 mb-6"}),C&&o(Y,{}),!C&&o(u,{children:(S==null?void 0:S.length)>0?a(u,{children:[a("button",{onClick:()=>y("add"),className:W+"capitalize flex gap-1 items-center",children:[o(G,{})," Add ",o("span",{className:"capitalize",children:"Hoarding"})]}),d=="role"&&o(J,{columns:ke,dataList:S}),d=="user"&&o(J,{columns:Ce,dataList:S})]}):a(u,{children:[o("div",{className:"flex justify-end mb-2",children:a("button",{onClick:()=>y("add"),className:W+"capitalize flex gap-1 items-center",children:[o(G,{})," Add ",o("span",{className:"capitalize",children:d})]})}),o("div",{className:"bg-red-100 text-red-500 py-2 text-lg font-semibold text-center border border-red-500 drop-shadow-sm",children:"Oops! No Data Found."})]})})]}),a("dialog",{ref:m,className:`relative overflow-clip animate__animated animate__zoomIn animate__faster w-full ${d=="role"&&"md:w-[21rem]"} ${d=="user"&&c!="delete"&&"md:w-[50rem]"} ${c=="delete"&&"md:w-[21rem]"} ${c=="assign"&&"md:w-[40rem]"}`,children:[c!="delete"&&o("span",{onClick:()=>(m.current.close(),i.resetForm(),I(null)),className:"block p-1 bg-red-100 hover:bg-red-500 rounded-full hover:text-white cursor-pointer transition-all duration-200 absolute top-2 right-2",children:o(je,{})}),c!="delete"&&c!="assign"&&a("form",{onChange:e=>(i.handleChange(e),O(e)),onSubmit:i.handleSubmit,className:"p-4 px-8 py-6 shadow-lg",children:[a("section",{className:"flex flex-row justify-between gap-4 flex-wrap",children:[a("header",{className:"w-full font-semibold text-xl capitalize text-sky-700 border-b pb-1 text-center",children:[c," Hoarding"]}),c=="edit"&&d=="user"&&o(u,{}),H==null?void 0:H.map(e=>Se(e==null?void 0:e.key,e==null?void 0:e.title,e==null?void 0:e.type,e==null?void 0:e.width,e==null?void 0:e.hint,e==null?void 0:e.required,e==null?void 0:e.options,e==null?void 0:e.okey,e==null?void 0:e.ovalue))]}),o("footer",{className:"mt-4 flex justify-center",children:a("button",{type:"submit",className:_e("green"),children:[c=="add"&&"Add",c=="edit"&&"Update"]})})]}),c=="delete"&&o(u,{children:a("div",{className:" z-50 px-6 py-4 flex flex-col gap-4 ",children:[a("div",{className:"flex items-center gap-6",children:[o("span",{className:"text-red-500 bg-red-100 p-2 block rounded-full drop-shadow-md shadow-red-300",children:o(Le,{size:25})}),a("div",{className:"flex flex-col gap-2",children:[o("span",{className:"text-xl font-semibold border-b pb-1",children:"Confirmation"}),o("span",{className:"text-base",children:"Are you sure want to delete ?"})]})]}),a("div",{className:"flex justify-end gap-2",children:[o("button",{className:"text-white bg-slate-400 hover:bg-slate-500 px-4 py-1 text-sm ",onClick:()=>m.current.close(),children:"No"}),o("button",{className:"text-white bg-red-500 hover:bg-red-600 px-4 py-1 text-sm ",onClick:()=>U(),children:"Yes"})]})]})}),c=="assign"&&o(u,{children:a("div",{className:"p-4 px-8 py-6 shadow-lg",children:[a("header",{className:"w-full font-semibold text-xl capitalize text-sky-700 border-b pb-1 mt-4 text-center",children:["Assign Agency to ",o("span",{className:"text-amber-600",children:f==null?void 0:f.hoarding_no})]}),!C&&Array.isArray(p)&&(p==null?void 0:p.length)>0&&o("div",{className:" mt-4 animate__animated animate__fadeIn animate__faster",children:o("button",{onClick:()=>Fe(),className:"float-right bg-green-500 px-3 py-1 rounded-sm shadow-lg hover:shadow-xl hover:bg-green-600 hover:text-white text-white flex items-center mb-1",children:"Assign"})}),a("div",{className:"flex flex-col h-[40vh] w-full overflow-y-auto md:overflow-x-hidden mt-6",children:[a("div",{className:"w-full grid grid-cols-12 items-center gap-2 bg-slate-500 text-white font-semibold border border-slate-200 px-4 py-2",children:[o("div",{className:"col-span-3",children:"Sl. No."}),o("div",{className:"col-span-6",children:"Agency Name"}),o("div",{className:"col-span-3 text-end",children:o("span",{children:"Action"})})]}),C&&o(Y,{}),!C&&Array.isArray(p)&&(p==null?void 0:p.map((e,t)=>o(u,{children:a("div",{className:"w-full grid grid-cols-12 items-center gap-2 bg-slate-100 border-b hover:bg-white pb-1 p-4 animate__animated animate__fadeIn animate__faster",children:[o("div",{className:"col-span-1",children:t+1}),o("div",{className:"col-span-10",children:e==null?void 0:e.agency_name}),o("div",{className:"col-span-1",children:o("label",{class:"inline-flex items-center px-4",children:o("input",{type:"radio",name:"roleAssign",checked:j==(e==null?void 0:e.id)||"",value:e==null?void 0:e.id,onChange:O,class:"cursor-pointer form-radio h-5 w-5 text-slate-800"})})})]},t)}))),!C&&Array.isArray(p)&&(p==null?void 0:p.length)==0&&o("div",{className:"w-full text-center text-red-400 font-semibold pb-1 p-4",children:"No Roles Available"})]})]})})]})]})};export{Je as default};