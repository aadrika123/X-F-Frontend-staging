import{x as z,l as t,y as D,v as g,W as q,A as f,m as F,z as Z,B as x,D as V,k as l,o as T,j as a,E as O,G as j,H as M,I as R,J as u,q as E}from"./index-d3ad3408.js";function Q(){const{t:o}=z(),[y,s]=t.useState(),[U,c]=t.useState(!1),[N,m]=t.useState(!1),[p,$]=t.useState();t.useState(!1),t.useContext(D),t.useState();const[h,w]=t.useState();t.useState(1),t.useState(""),t.useState(5),t.useState(""),t.useState(0);const[b,v]=t.useState(null),[S,A]=t.useState(0),{type:d,filterParam:G,searchValueParam:J}=g(),{api_waterSearchConsumer:C,api_newWardByZoneId:W}=q();g(),f();const B=F(),I=e=>{v({filterBy:e==null?void 0:e.filterBy,zoneId:e==null?void 0:e.zoneId,wardId:e==null?void 0:e.wardId,parameter:e==null?void 0:e.parameter,wardId:e==null?void 0:e.wardId}),A(n=>n+1)},L=[{Header:"Sl No.",Cell:({row:e})=>a("div",{className:"pr-2",children:e.index+1})},{Header:"Zone",accessor:"zone_name",Cell:({cell:e})=>a("span",{children:u(e.row.original.zone_name)})},{Header:"Ward No.",accessor:"ward_name",Cell:({cell:e})=>a("span",{children:u(e.row.original.ward_name)})},{Header:"Owner Name",accessor:"owner_name"},{Header:"Consumer Name",accessor:"consumer_no"},{Header:"Property No",accessor:"property_no"},{Header:"Mobile No.",accessor:"mobile_no",Cell:({cell:e})=>a("span",{children:u(e.row.original.mobile_no)})},{Header:"Address",accessor:"address"},{Header:"Bill Amount",accessor:"balance_amount"},{Header:"Status",accessor:"payment_status",Cell:({cell:e})=>a("span",{children:u(e.row.original.payment_status)})},{Header:"Action",accessor:"id",Cell:({cell:e})=>a("button",{onClick:()=>{B(`/waterViewConsumer/${e.value}`)},className:"bg-sky-200 px-3 py-1 rounded-lg shadow-lg hover:shadow-xl hover:bg-sky-800 hover:text-white text-black",children:o("tranWaterApplicationSearchPage.viewLabel.label")})}],P=Z({filterBy:x().required("This is a required field !"),parameter:x().required("This is a required field !")}),r=V({initialValues:{filterBy:"",parameter:"",wardId:"",zoneId:""},onSubmit:e=>{I(e)},validationSchema:P}),_=e=>{r.values.filterBy=e.target.value,e.target.value=="consumerNo"&&(s("Consumer No"),c(!0)),e.target.value=="propertyNo"&&(s("Property No"),c(!0)),e.target.value=="ownerDetails"&&(s("Owner Details"),c(!1)),e.target.value=="address"&&(s("Address"),c(!1)),e.target.value=="applicationNo"&&(s("Application No"),c(!1))};console.log("readymadeListData.data",p==null?void 0:p.data);const k=e=>{m(!0),r.setFieldValue("wardId","");let n={zoneId:e};console.log("before fetch wardby old ward...",n),E.post(W,n,f()).then(function(i){console.log("wardlist by zone id list ....",i.data.data),w(i.data.data),m(!1),r.setFieldValue("wardId","")}).catch(function(i){console.log("errorrr.... ",i),m(!1)})},H=e=>{let n=e.target.name,i=e.target.value;r.values&&s(r.values.filterBy),n==="zoneId"&&k(i)};return l(T,{children:[N&&a(O,{}),(d=="re"||d=="mu")&&l("div",{className:"bg-amber-50 px-4 py-4 mb-4 text-lg rounded-lg shadow-lg text-amber-600 inline-block",children:[a(j,{className:"inline mr-2 text-3xl"})," ",o("tranWaterApplicationSearchPage.searchForAndApplyLabel.label"),a("span",{className:"font-semibold",children:d=="re"?"Re-Assessment":"Mutation"})," ",o("tranWaterApplicationSearchPage.propertySearchInstruction1Label.label")," ",d=="re"?"Re-Assessment":"Mutation"]}),l("div",{className:"border shadow-xl bg-white mt-6",children:[a("div",{className:"flex ml-5 mt-2 ",children:a("p",{className:"font-bold text-3xl ml-4 mt-1 text-gray-600",children:o("tranWaterApplicationSearchPage.searchWaterConsumerLabel.label")})}),a("form",{onChange:H,onSubmit:r.handleSubmit,children:l("div",{className:"flex flex-col sm:flex-row justify-center sm:space-x-8 my-5 m-10",children:[l("div",{children:[l("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[o("tranWaterApplicationSearchPage.filterByLabel.label"),a("span",{className:"text-red-500",children:"*"})]}),l("select",{name:"filterBy",onChange:_,className:"cursor-pointer w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",children:[a("option",{value:"",children:o("tranWaterApplicationSearchPage.selectApplicationTypeLabel.label")}),l("option",{value:"consumerNo",children:[o("tranWaterApplicationSearchPage.consumerNoLabel.label")," "]}),a("option",{value:"propertyNo",children:o("tranWaterApplicationSearchPage.propertyNo.label")}),a("option",{value:"applicantName",children:o("tranWaterApplicationSearchPage.applicantNameLabel.label")}),a("option",{value:"mobileNo",children:o("tranWaterApplicationSearchPage.mobileNoLabel.label")}),a("option",{value:"applicationNo",children:o("tranWaterApplicationSearchPage.applicationNoLabel.label")})]}),a("p",{className:"text-red-500 text-xs",children:r.touched.filterBy&&r.errors.filterBy?r.errors.filterBy:null})]}),l("div",{children:[l("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Zone ",a("span",{className:"text-red-500",children:"*"})]}),l("select",{name:"zoneId",onChange:r.handleChange,className:"cursor-pointer w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",disabled:!1,children:[a("option",{value:"",children:"All Zones"}),a("option",{value:"1",children:"Zone A-East"}),a("option",{value:"2",children:"Zone B-West"}),a("option",{value:"3",children:"Zone C-North"}),a("option",{value:"4",children:"Zone D-South"}),a("option",{value:"gov",children:"GOV"}),a("option",{value:"SUS",children:"SUS"})]}),a("p",{className:"text-red-500 text-xs",children:r.touched.zoneId&&r.errors.zoneId?r.errors.zoneId:null})]}),l("div",{children:[l("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Ward No",a("span",{className:"text-red-500",children:"*"})]}),l("select",{name:"wardId",onChange:r.handleChange,className:"cursor-pointer w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",disabled:!1,children:[a("option",{value:"",children:"All Ward"}),h==null?void 0:h.map((e,n)=>a("option",{value:e.id,children:e.ward_name},n))]}),a("p",{className:"text-red-500 text-xs",children:r.touched.wardNo&&r.errors.wardNo?r.errors.wardNo:null})]}),l("div",{children:[l("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[o("tranWaterApplicationSearchPage.searchByLabel.label")," ",y," ",a("span",{className:"text-red-500",children:"*"})]}),a("input",{type:"text",name:"parameter",onChange:r.handleChange,className:" w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),a("p",{className:"text-red-500 text-xs",children:r.touched.parameter&&r.errors.parameter?r.errors.parameter:null})]}),a("div",{className:"mt-4",children:a("button",{type:"submit",className:"w-full border border-green-600 bg-green-600 hover:bg-green-500 text-white hover:text-black shadow-lg rounded-sm text-base font-semibold px-5 m-3 py-1",children:l("p",{className:"flex",children:[l("span",{className:"mt-1 mr-2",children:[" ",a(M,{})," "]})," ",o("tranWaterApplicationSearchPage.searchRecordLabel.label")," "]})})})]})})]}),l("div",{className:"mt-10",children:[b!=null&&a(R,{columns:L,requestBody:b,changeData:S,api:C}),a("div",{className:"w-full h-40"})]})]})}export{Q as default};