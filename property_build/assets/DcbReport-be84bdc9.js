import{R as re,_ as se,a as de,r as d,w as ie,W as u,A as j,b as f,v as g,ak as t,j as a,i as c,av as me,B as he,T as ue,U as xe,P as ge}from"./index-2304052d.js";import{C as Ce}from"./CitizenApplyApiList-9209eb91.js";import{L as C}from"./ListTable-d302409a.js";import"./GlobalFilter-208a02d0.js";const Ne=re.lazy(()=>se(()=>import("./PieChart-10498703.js"),["assets/PieChart-10498703.js","assets/index-2304052d.js","assets/index-62259d23.css","assets/index-d4555131.js"])),we=()=>{const{get_MasterData:oe,searchWardWiseDcb:O,yearList:W,getPieChartData:R,api_newWardByZoneId:U}=ge(),{api_getAllUlb:k}=Ce();de("DCB Report");const z=window.localStorage.getItem("ulbId"),[_,P]=d.useState(),[be,M]=d.useState(),[b,Y]=d.useState(null),[H,o]=d.useState(!1),[Z,w]=d.useState(!1),[s,F]=d.useState(!1),[i,V]=d.useState(null),[l,q]=d.useState(null),[E,G]=d.useState(!0),[N,J]=d.useState(null),[h,A]=d.useState(!1),[x,y]=d.useState(!1),v="form-control block w-full px-2 py-1 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-md",m=ie({initialValues:{zone:"",wardId:"",fiYear:b!=null&&b[0],withHh:"0",withCe:"0"},enableReinitialize:!0,onSubmit:e=>{w(!1),G(!1),(e==null?void 0:e.ulbId)==""?y(!0):y(!1),((e==null?void 0:e.withHh)=="0"||(e==null?void 0:e.withHh[0])==null)&&F(!1),(e==null?void 0:e.withHh[0])=="on"&&F(!0),((e==null?void 0:e.withCe)=="0"||(e==null?void 0:e.withCe[0])==null)&&A(!1),(e==null?void 0:e.withCe[0])=="on"&&A(!0),X()}}),K=e=>{o(!0);let r={zoneId:e};j.post(U,r,f()).then(function(n){P(n.data.data),o(!1)}).catch(function(n){o(!1)})},Q=e=>{let r=e.target.name,n=e.target.value;r=="zone"&&K(n)},X=e=>{o(!0);let r;u(z)!="NA"?r={zone:m.values.zone,wardId:m.values.wardId,fiYear:m.values.fiYear}:r={fiYear:m.values.fiYear},j.post(O,r,f()).then(n=>{var T,B,S,I;((T=n==null?void 0:n.data)==null?void 0:T.status)==!0&&(V((S=(B=n==null?void 0:n.data)==null?void 0:B.data)==null?void 0:S.dcb),q((I=n==null?void 0:n.data)==null?void 0:I.data)),o(!1)}).catch(n=>o(!1))};d.useEffect(()=>{w(!0),j.post(R,{},f()).then(e=>{var r,n;((r=e==null?void 0:e.data)==null?void 0:r.status)==!0&&J((n=e==null?void 0:e.data)==null?void 0:n.data)}).catch(e=>{}).finally(()=>w(!1)),j.post(W,{},f()).then(e=>{var r,n;((r=e==null?void 0:e.data)==null?void 0:r.status)==!0&&Y((n=e==null?void 0:e.data)==null?void 0:n.data)}).catch(e=>{}),j.get(k,f()).then(e=>{var r,n;((r=e==null?void 0:e.data)==null?void 0:r.status)==!0&&M((n=e==null?void 0:e.data)==null?void 0:n.data)}).catch(e=>{})},[]);const L=e=>{e.target.name,e.target.checked},$=[{Header:g(),columns:[{Header:"Ward No",accessor:"ward_no",Cell:e=>u(e==null?void 0:e.value)}]},{Header:"DEMAND",columns:[{Header:"HH",accessor:"arrear_demand_hh",Cell:e=>t(e==null?void 0:e.value),className:"text-white bg-[#22C55E]"},{Header:"Arrear",accessor:"arrear_demand",Cell:e=>a.jsx(a.Fragment,{children:c(e==null?void 0:e.value)}),className:"text-white bg-[#22C55E]"},{Header:"HH",accessor:"current_demand_hh",Cell:e=>t(e==null?void 0:e.value),className:"text-white bg-[#22C55E]"},{Header:"Current",accessor:"current_demand",Cell:e=>a.jsx(a.Fragment,{children:c(e==null?void 0:e.value)}),className:"text-white bg-[#22C55E]"}],className:"text-white bg-[#22C55E]"},{Header:"COLLECTION",columns:[{Header:"HH",accessor:"arrear_collection_hh",Cell:e=>t(e==null?void 0:e.value),className:"text-white bg-[#6366F1]"},{Header:"Arrear",accessor:"arrear_collection",Cell:e=>a.jsx(a.Fragment,{children:c(e==null?void 0:e.value)}),className:"text-white bg-[#6366F1]"},{Header:"HH",accessor:"current_collection_hh",Cell:e=>t(e==null?void 0:e.value),className:"text-white bg-[#6366F1]"},{Header:"Current",accessor:"current_collection",Cell:e=>a.jsx(a.Fragment,{children:c(e==null?void 0:e.value)}),className:"text-white bg-[#6366F1]"}],className:"text-white bg-[#6366F1]"},{Header:"BALANCE",columns:[{Header:"HH",accessor:"arrear_balance_hh",Cell:e=>t(e==null?void 0:e.value),className:"text-white bg-[#EC4899]"},{Header:"Arrear",accessor:"old_due",Cell:e=>a.jsx(a.Fragment,{children:c(e==null?void 0:e.value)}),className:"text-white bg-[#EC4899]"},{Header:"HH",accessor:"current_balance_hh",Cell:e=>t(e==null?void 0:e.value),className:"text-white bg-[#EC4899]"},{Header:"Current",accessor:"current_due",Cell:e=>a.jsx(a.Fragment,{children:c(e==null?void 0:e.value)}),className:"text-white bg-[#EC4899]"}],className:"text-white bg-[#EC4899]"}],D=[{Header:g(),columns:[{Header:"Ward No",accessor:"ward_no",Cell:e=>u(e==null?void 0:e.value)}]},{Header:"DEMAND",columns:[{Header:"HH",accessor:"arrear_demand_hh",Cell:e=>t(e==null?void 0:e.value),className:"text-white bg-[#22C55E]"},{Header:"Arrear",accessor:"arrear_demand",Cell:e=>a.jsx(a.Fragment,{children:c(e==null?void 0:e.value)}),className:"text-white bg-[#22C55E]"},{Header:"HH",accessor:"current_demand_hh",Cell:e=>t(e==null?void 0:e.value),className:"text-white bg-[#22C55E]"},{Header:"Current",accessor:"current_demand",Cell:e=>a.jsx(a.Fragment,{children:c(e==null?void 0:e.value)}),className:"text-white bg-[#22C55E]"}],className:"text-white bg-[#22C55E]"},{Header:"COLLECTION",columns:[{Header:"HH",accessor:"arrear_collection_hh",Cell:e=>t(e==null?void 0:e.value),className:"text-white bg-[#6366F1]"},{Header:"Arrear",accessor:"arrear_collection",Cell:e=>a.jsx(a.Fragment,{children:c(e==null?void 0:e.value)}),className:"text-white bg-[#6366F1]"},{Header:"HH",accessor:"current_collection_hh",Cell:e=>t(e==null?void 0:e.value),className:"text-white bg-[#6366F1]"},{Header:"Current",accessor:"current_collection",Cell:e=>a.jsx(a.Fragment,{children:c(e==null?void 0:e.value)}),className:"text-white bg-[#6366F1]"}],className:"text-white bg-[#6366F1]"},{Header:"BALANCE",columns:[{Header:"HH",accessor:"arrear_balance_hh",Cell:e=>t(e==null?void 0:e.value),className:"text-white bg-[#EC4899]"},{Header:"Arrear",accessor:"old_due",Cell:e=>a.jsx(a.Fragment,{children:c(e==null?void 0:e.value)}),className:"text-white bg-[#EC4899]"},{Header:"HH",accessor:"current_balance_hh",Cell:e=>t(e==null?void 0:e.value),className:"text-white bg-[#EC4899]"},{Header:"Current",accessor:"current_due",Cell:e=>a.jsx(a.Fragment,{children:c(e==null?void 0:e.value)}),className:"text-white bg-[#EC4899]"}],className:"text-white bg-[#EC4899]"},{Header:"Collection Efficiency",columns:[{Header:"HH",accessor:"arrear_hh_eff",Cell:e=>a.jsxs(a.Fragment,{children:[t(e==null?void 0:e.value),"%"]})},{Header:"Arrear",accessor:"arrear_eff",Cell:e=>a.jsxs(a.Fragment,{children:[t(e==null?void 0:e.value),"%"]})},{Header:"HH",accessor:"current_hh_eff",Cell:e=>a.jsxs(a.Fragment,{children:[t(e==null?void 0:e.value),"%"]})},{Header:"Current",accessor:"current_eff",Cell:e=>a.jsxs(a.Fragment,{children:[t(e==null?void 0:e.value),"%"]})}]}],p=[{Header:g(),columns:[{Header:"Ward No",accessor:"ward_no",Cell:e=>u(e==null?void 0:e.value)}]},{Header:"DEMAND",columns:[{Header:"Arrear",accessor:"arrear_demand",Cell:e=>a.jsx(a.Fragment,{children:c(e==null?void 0:e.value)}),className:"text-white bg-[#22C55E]"},{Header:"Current",accessor:"current_demand",Cell:e=>a.jsx(a.Fragment,{children:c(e==null?void 0:e.value)}),className:"text-white bg-[#22C55E]"}],className:"text-white bg-[#22C55E]"},{Header:"COLLECTION",columns:[{Header:"Arrear",accessor:"arrear_collection",Cell:e=>a.jsx(a.Fragment,{children:c(e==null?void 0:e.value)}),className:"text-white bg-[#6366F1]"},{Header:"Current",accessor:"current_collection",Cell:e=>a.jsx(a.Fragment,{children:c(e==null?void 0:e.value)}),className:"text-white bg-[#6366F1]"}],className:"text-white bg-[#6366F1]"},{Header:"BALANCE",columns:[{Header:"Arrear",accessor:"old_due",Cell:e=>a.jsx(a.Fragment,{children:c(e==null?void 0:e.value)}),className:"text-white bg-[#EC4899]"},{Header:"Current",accessor:"current_due",Cell:e=>a.jsx(a.Fragment,{children:c(e==null?void 0:e.value)}),className:"text-white bg-[#EC4899]"}],className:"text-white bg-[#EC4899]"},{Header:"Collection Efficiency",columns:[{Header:"Arrear",accessor:"arrear_eff",Cell:e=>a.jsxs(a.Fragment,{children:[t(e==null?void 0:e.value),"%"]})},{Header:"Current",accessor:"current_eff",Cell:e=>a.jsxs(a.Fragment,{children:[t(e==null?void 0:e.value),"%"]})}]}],ee=[{Header:g(),columns:[{Header:"Ward No",accessor:"ward_no",Cell:e=>u(e==null?void 0:e.value)}]},{Header:"DEMAND",columns:[{Header:"Arrear",accessor:"arrear_demand",Cell:e=>a.jsx(a.Fragment,{children:c(e==null?void 0:e.value)}),className:"text-white bg-[#22C55E]"},{Header:"Current",accessor:"current_demand",Cell:e=>a.jsx(a.Fragment,{children:c(e==null?void 0:e.value)}),className:"text-white bg-[#22C55E]"}],className:"text-white bg-[#22C55E]"},{Header:"COLLECTION",columns:[{Header:"Arrear",accessor:"arrear_collection",Cell:e=>a.jsx(a.Fragment,{children:c(e==null?void 0:e.value)}),className:"text-white bg-[#6366F1]"},{Header:"Current",accessor:"current_collection",Cell:e=>a.jsx(a.Fragment,{children:c(e==null?void 0:e.value)}),className:"text-white bg-[#6366F1]"}],className:"text-white bg-[#6366F1]"},{Header:"BALANCE",columns:[{Header:"Arrear",accessor:"old_due",Cell:e=>a.jsx(a.Fragment,{children:c(e==null?void 0:e.value)}),className:"text-white bg-[#EC4899]"},{Header:"Current",accessor:"current_due",Cell:e=>a.jsx(a.Fragment,{children:c(e==null?void 0:e.value)}),className:"text-white bg-[#EC4899]"}],className:"text-white bg-[#EC4899]"}],ae=[{Header:g(),columns:[{Header:"ULB Name",accessor:"ulb_name",Cell:e=>u(e==null?void 0:e.value)}]},{Header:"DEMAND",columns:[{Header:"HH",accessor:"arrear_demand_hh",Cell:e=>t(e==null?void 0:e.value),className:"text-white bg-[#22C55E]"},{Header:"Arrear",accessor:"arrear_demand",Cell:e=>a.jsx(a.Fragment,{children:c(e==null?void 0:e.value)}),className:"text-white bg-[#22C55E]"},{Header:"HH",accessor:"current_demand_hh",Cell:e=>t(e==null?void 0:e.value),className:"text-white bg-[#22C55E]"},{Header:"Current",accessor:"current_demand",Cell:e=>a.jsx(a.Fragment,{children:c(e==null?void 0:e.value)}),className:"text-white bg-[#22C55E]"}],className:"text-white bg-[#22C55E]"},{Header:"COLLECTION",columns:[{Header:"HH",accessor:"arrear_collection_hh",Cell:e=>t(e==null?void 0:e.value),className:"text-white bg-[#6366F1]"},{Header:"Arrear",accessor:"arrear_collection",Cell:e=>a.jsx(a.Fragment,{children:c(e==null?void 0:e.value)}),className:"text-white bg-[#6366F1]"},{Header:"HH",accessor:"current_collection_hh",Cell:e=>t(e==null?void 0:e.value),className:"text-white bg-[#6366F1]"},{Header:"Current",accessor:"current_collection",Cell:e=>a.jsx(a.Fragment,{children:c(e==null?void 0:e.value)}),className:"text-white bg-[#6366F1]"}],className:"text-white bg-[#6366F1]"},{Header:"BALANCE",columns:[{Header:"HH",accessor:"arrear_balance_hh",Cell:e=>t(e==null?void 0:e.value),className:"text-white bg-[#EC4899]"},{Header:"Arrear",accessor:"old_due",Cell:e=>a.jsx(a.Fragment,{children:c(e==null?void 0:e.value)}),className:"text-white bg-[#EC4899]"},{Header:"HH",accessor:"current_balance_hh",Cell:e=>t(e==null?void 0:e.value),className:"text-white bg-[#EC4899]"},{Header:"Current",accessor:"current_due",Cell:e=>a.jsx(a.Fragment,{children:c(e==null?void 0:e.value)}),className:"text-white bg-[#EC4899]"}],className:"text-white bg-[#EC4899]"}],le=[{Header:g(),columns:[{Header:"ULB Name",accessor:"ulb_name",Cell:e=>u(e==null?void 0:e.value)}]},{Header:"DEMAND",columns:[{Header:"HH",accessor:"arrear_demand_hh",Cell:e=>t(e==null?void 0:e.value),className:"text-white bg-[#22C55E]"},{Header:"Arrear",accessor:"arrear_demand",Cell:e=>a.jsx(a.Fragment,{children:c(e==null?void 0:e.value)}),className:"text-white bg-[#22C55E]"},{Header:"HH",accessor:"current_demand_hh",Cell:e=>t(e==null?void 0:e.value),className:"text-white bg-[#22C55E]"},{Header:"Current",accessor:"current_demand",Cell:e=>a.jsx(a.Fragment,{children:c(e==null?void 0:e.value)}),className:"text-white bg-[#22C55E]"}],className:"text-white bg-[#22C55E]"},{Header:"COLLECTION",columns:[{Header:"HH",accessor:"arrear_collection_hh",Cell:e=>t(e==null?void 0:e.value),className:"text-white bg-[#6366F1]"},{Header:"Arrear",accessor:"arrear_collection",Cell:e=>a.jsx(a.Fragment,{children:c(e==null?void 0:e.value)}),className:"text-white bg-[#6366F1]"},{Header:"HH",accessor:"current_collection_hh",Cell:e=>t(e==null?void 0:e.value),className:"text-white bg-[#6366F1]"},{Header:"Current",accessor:"current_collection",Cell:e=>a.jsx(a.Fragment,{children:c(e==null?void 0:e.value)}),className:"text-white bg-[#6366F1]"}],className:"text-white bg-[#6366F1]"},{Header:"BALANCE",columns:[{Header:"HH",accessor:"arrear_balance_hh",Cell:e=>t(e==null?void 0:e.value),className:"text-white bg-[#EC4899]"},{Header:"Arrear",accessor:"old_due",Cell:e=>a.jsx(a.Fragment,{children:c(e==null?void 0:e.value)}),className:"text-white bg-[#EC4899]"},{Header:"HH",accessor:"current_balance_hh",Cell:e=>t(e==null?void 0:e.value),className:"text-white bg-[#EC4899]"},{Header:"Current",accessor:"current_due",Cell:e=>a.jsx(a.Fragment,{children:c(e==null?void 0:e.value)}),className:"text-white bg-[#EC4899]"}],className:"text-white bg-[#EC4899]"},{Header:"Collection Efficiency",columns:[{Header:"HH",accessor:"arrear_hh_eff",Cell:e=>a.jsxs(a.Fragment,{children:[t(e==null?void 0:e.value),"%"]})},{Header:"Arrear",accessor:"arrear_eff",Cell:e=>a.jsxs(a.Fragment,{children:[t(e==null?void 0:e.value),"%"]})},{Header:"HH",accessor:"current_hh_eff",Cell:e=>a.jsxs(a.Fragment,{children:[t(e==null?void 0:e.value),"%"]})},{Header:"Current",accessor:"current_eff",Cell:e=>a.jsxs(a.Fragment,{children:[t(e==null?void 0:e.value),"%"]})}]}],ce=[{Header:g(),columns:[{Header:"ULB Name",accessor:"ulb_name",Cell:e=>u(e==null?void 0:e.value)}]},{Header:"DEMAND",columns:[{Header:"Arrear",accessor:"arrear_demand",Cell:e=>a.jsx(a.Fragment,{children:c(e==null?void 0:e.value)}),className:"text-white bg-[#22C55E]"},{Header:"Current",accessor:"current_demand",Cell:e=>a.jsx(a.Fragment,{children:c(e==null?void 0:e.value)}),className:"text-white bg-[#22C55E]"}],className:"text-white bg-[#22C55E]"},{Header:"COLLECTION",columns:[{Header:"Arrear",accessor:"arrear_collection",Cell:e=>a.jsx(a.Fragment,{children:c(e==null?void 0:e.value)}),className:"text-white bg-[#6366F1]"},{Header:"Current",accessor:"current_collection",Cell:e=>a.jsx(a.Fragment,{children:c(e==null?void 0:e.value)}),className:"text-white bg-[#6366F1]"}],className:"text-white bg-[#6366F1]"},{Header:"BALANCE",columns:[{Header:"Arrear",accessor:"old_due",Cell:e=>a.jsx(a.Fragment,{children:c(e==null?void 0:e.value)}),className:"text-white bg-[#EC4899]"},{Header:"Current",accessor:"current_due",Cell:e=>a.jsx(a.Fragment,{children:c(e==null?void 0:e.value)}),className:"text-white bg-[#EC4899]"}],className:"text-white bg-[#EC4899]"},{Header:"Collection Efficiency",columns:[{Header:"Arrear",accessor:"arrear_eff",Cell:e=>a.jsxs(a.Fragment,{children:[t(e==null?void 0:e.value),"%"]})},{Header:"Current",accessor:"current_eff",Cell:e=>a.jsxs(a.Fragment,{children:[t(e==null?void 0:e.value),"%"]})}]}],te=[{Header:g(),columns:[{Header:"ULB Name",accessor:"ulb_name",Cell:e=>u(e==null?void 0:e.value)}]},{Header:"DEMAND",columns:[{Header:"Arrear",accessor:"arrear_demand",Cell:e=>a.jsx(a.Fragment,{children:c(e==null?void 0:e.value)}),className:"text-white bg-[#22C55E]"},{Header:"Current",accessor:"current_demand",Cell:e=>a.jsx(a.Fragment,{children:c(e==null?void 0:e.value)}),className:"text-white bg-[#22C55E]"}],className:"text-white bg-[#22C55E]"},{Header:"COLLECTION",columns:[{Header:"Arrear",accessor:"arrear_collection",Cell:e=>a.jsx(a.Fragment,{children:c(e==null?void 0:e.value)}),className:"text-white bg-[#6366F1]"},{Header:"Current",accessor:"current_collection",Cell:e=>a.jsx(a.Fragment,{children:c(e==null?void 0:e.value)}),className:"text-white bg-[#6366F1]"}],className:"text-white bg-[#6366F1]"},{Header:"BALANCE",columns:[{Header:"Arrear",accessor:"old_due",Cell:e=>a.jsx(a.Fragment,{children:c(e==null?void 0:e.value)}),className:"text-white bg-[#EC4899]"},{Header:"Current",accessor:"current_due",Cell:e=>a.jsx(a.Fragment,{children:c(e==null?void 0:e.value)}),className:"text-white bg-[#EC4899]"}],className:"text-white bg-[#EC4899]"}],ne=d.useRef();return me.useReactToPrint({content:()=>ne.current}),a.jsxs(a.Fragment,{children:[H&&a.jsx(he,{}),Z?a.jsxs("div",{className:"my-4 w-screen flex-col items-center justify-center",children:[a.jsx(ue,{radius:"9",color:"#4338ca",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClassName:"",visible:!0}),a.jsx("span",{className:"italic",children:"Pie Chart Loading..."})," "]}):a.jsxs(a.Fragment,{children:[N!=null&&E&&(N==null?void 0:N.length)>0&&i==null&&a.jsxs("div",{className:"my-4 bg-white rounded-md py-2 shadow-md",children:[a.jsx("div",{className:"flex flex-row-reverse flex-wrap items-end justify-evenly gap-x-2 w-[100%] ",children:N==null?void 0:N.map(e=>a.jsxs("div",{className:"w-[20%] flex flex-col",children:[a.jsx("div",{className:"bg-indigo-500 w-max px-2 text-white rounded-md text-xs sm:text-sm font-semibold shadow-md shadow-indigo-300",children:e==null?void 0:e.fyear}),a.jsx(Ne,{label:["Total Demand","Total Collection","Total Balance"],data:[e==null?void 0:e.totaldemand,e==null?void 0:e.totalcollection,e==null?void 0:e.totalbalance]})]}))}),a.jsxs("div",{className:"flex flex-wrap justify-center gap-2 sm:gap-4 items-center pt-4",children:[a.jsxs("div",{className:"flex items-center",children:[a.jsx("span",{className:"bg-[#22C55E] h-2 sm:h-4 w-7 sm:w-14 inline-block mr-1"}),a.jsx("span",{className:"text-xs sm:text-base",children:"Demand"})]}),a.jsxs("div",{className:"flex items-center",children:[a.jsx("span",{className:"bg-[#6366F1] h-2 sm:h-4 w-7 sm:w-14 inline-block mr-1"}),a.jsx("span",{className:"text-xs sm:text-base",children:"Collection"})]}),a.jsxs("div",{className:"flex items-center",children:[a.jsx("span",{className:"bg-[#EC4899] h-2 sm:h-4 w-7 sm:w-14 inline-block mr-1"}),a.jsx("span",{className:"text-xs sm:text-base",children:"Balance"})]})]})]})," "]}),a.jsxs("form",{onChange:m.handleChange,onSubmit:m.handleSubmit,className:"mb-4 bg-white shadow-lg rounded-md",children:[a.jsx("h1",{className:"text-xl w-full font-bold px-8 pt-4 text-gray-700",children:"Search Report"}),a.jsxs("div",{className:"flex flex-wrap flex-row justify-start w-full gap-x-6 gap-y-2 text-sm 3xl:text-base p-4 px-8",children:[a.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[a.jsx("div",{className:"col-span-6 font-semibold",children:"Select Zone"}),a.jsxs("select",{onChange:Q,className:v,type:"text",name:"zone",children:[a.jsx("option",{value:"",children:"All"}),a.jsx("option",{value:"1",children:"A-East Zone"}),a.jsx("option",{value:"2",children:"B-West Zone"}),a.jsx("option",{value:"3",children:"C-North Zone"}),a.jsx("option",{value:"4",children:"D-South Zone"})]}),a.jsxs("p",{className:"text-red-500 text-xs font-semibold absolute",children:[" ",m.touched.zone&&m.errors.zone?m.errors.zone:null]})]}),m.values.ulbId!=""&&a.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[a.jsx("div",{className:"col-span-6 font-semibold",children:"Ward No."}),a.jsx("div",{className:"col-span-6",children:a.jsxs("select",{name:"wardId",id:"",className:v,disabled:H,children:[a.jsx("option",{value:"",children:"All"}),_==null?void 0:_.map(e=>a.jsx(a.Fragment,{children:a.jsx("option",{value:e==null?void 0:e.id,children:e==null?void 0:e.ward_name})}))]})})]}),a.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[a.jsx("div",{className:"col-span-6 font-semibold",children:"Financial Year"}),a.jsx("div",{className:"col-span-6",children:a.jsx("select",{name:"fiYear",id:"",className:v,disabled:H,children:b==null?void 0:b.map((e,r)=>a.jsx(a.Fragment,{children:a.jsx("option",{value:e,children:e})}))})})]}),a.jsx("div",{className:"flex flex-col justify-center w-full md:w-[20%]",children:a.jsxs("div",{className:"col-span-12 font-semibold flex items-center justify-center mt-4",children:[a.jsx("label",{htmlFor:"withHh",className:"mr-2",children:"With HH : "}),a.jsx("input",{type:"checkbox",name:"withHh",id:"withHh",className:"w-4 h-4 rounded",onChange:L})]})}),a.jsx("div",{className:"flex flex-col justify-center w-full md:w-[20%]",children:a.jsxs("div",{className:"col-span-12 font-semibold flex items-center justify-center mt-4",children:[a.jsx("label",{htmlFor:"withCe",className:"mr-2",children:"With Collection Efficiency : "}),a.jsx("input",{type:"checkbox",name:"withCe",id:"withCe",className:"w-4 h-4 rounded",onChange:L})]})}),a.jsx("div",{className:"w-full md:w-[20%] flex justify-start items-end",children:a.jsxs("button",{type:"submit",className:"flex flex-row items-center border border-green-600 bg-green-600 hover:bg-green-500 text-white hover:text-black shadow-lg rounded-sm text-sm font-semibold px-5 py-1 w-max",children:[" ",a.jsx("span",{className:"mr-2",children:a.jsx(xe,{})}),"Search"]})})]})]}),!H&&i!=null&&(i==null?void 0:i.length)>0?a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"bg-white p-2 rounded-md shadow-md mb-4 grid grid-cols-12 flex-wrap gap-4",children:[a.jsxs("div",{className:"col-span-12 sm:col-span-6 md:col-span-4 flex flex-col gap-1",children:[a.jsxs("div",{className:"grid grid-cols-12 items-center gap-2",children:[a.jsx("span",{className:"text-sm col-span-6",children:"Total Arrear Demand :"}),a.jsx("span",{className:"font-semibold col-span-6",children:c(l==null?void 0:l.total_arrear_demand)})]}),s&&a.jsxs("div",{className:"grid grid-cols-12 items-center gap-2",children:[a.jsx("span",{className:"text-sm col-span-6",children:"Total Arrear Demand HH :"}),a.jsx("span",{className:"font-semibold col-span-6",children:t(l==null?void 0:l.total_arrear_demand_hh)})]}),a.jsxs("div",{className:"grid grid-cols-12 items-center gap-2",children:[a.jsx("span",{className:"text-sm col-span-6",children:"Total Current Demand :"}),a.jsx("span",{className:"font-semibold col-span-6",children:c(l==null?void 0:l.total_current_demand)})]}),s&&a.jsxs("div",{className:"grid grid-cols-12 items-center gap-2",children:[a.jsx("span",{className:"text-sm col-span-6",children:"Total Current Demand HH :"}),a.jsx("span",{className:"font-semibold col-span-6",children:t(l==null?void 0:l.total_current_demand_hh)})]}),a.jsxs("div",{className:"grid grid-cols-12 items-center gap-2",children:[a.jsx("span",{className:"text-sm col-span-6",children:"Total Demand :"}),a.jsx("span",{className:"font-semibold col-span-6",children:c(parseFloat(l==null?void 0:l.total_arrear_demand)+parseFloat(l==null?void 0:l.total_current_demand))})]})]}),a.jsxs("div",{className:"col-span-12 sm:col-span-6 md:col-span-4 flex flex-col gap-1",children:[a.jsxs("div",{className:"grid grid-cols-12 items-center gap-2",children:[a.jsx("span",{className:"text-sm col-span-6",children:"Total Arrear Collection :"}),a.jsx("span",{className:"font-semibold col-span-6",children:c(l==null?void 0:l.total_arrear_collection)})]}),s&&a.jsxs("div",{className:"grid grid-cols-12 items-center gap-2",children:[a.jsx("span",{className:"text-sm col-span-6",children:"Total Arrear Collection HH :"}),a.jsx("span",{className:"font-semibold col-span-6",children:t(l==null?void 0:l.total_arrear_collection_hh)})]}),a.jsxs("div",{className:"grid grid-cols-12 items-center gap-2",children:[a.jsx("span",{className:"text-sm col-span-6",children:"Total Current Collection :"}),a.jsx("span",{className:"font-semibold col-span-6",children:c(l==null?void 0:l.total_current_collection)})]}),s&&a.jsxs("div",{className:"grid grid-cols-12 items-center gap-2",children:[a.jsx("span",{className:"text-sm col-span-6",children:"Total Current Collection HH :"}),a.jsx("span",{className:"font-semibold col-span-6",children:t(l==null?void 0:l.total_current_collection_hh)})]}),a.jsxs("div",{className:"grid grid-cols-12 items-center gap-2",children:[a.jsx("span",{className:"text-sm col-span-6",children:"Total Collection :"}),a.jsx("span",{className:"font-semibold col-span-6",children:c(parseFloat(l==null?void 0:l.total_arrear_collection)+parseFloat(l==null?void 0:l.total_current_collection))})]})]}),a.jsxs("div",{className:"col-span-12 sm:col-span-6 md:col-span-4 flex flex-col gap-1",children:[a.jsxs("div",{className:"grid grid-cols-12 items-center gap-2",children:[a.jsx("span",{className:"text-sm col-span-6",children:"Total Arrear Balance :"}),a.jsx("span",{className:"font-semibold col-span-6",children:c(l==null?void 0:l.total_old_due)})]}),s&&a.jsxs("div",{className:"grid grid-cols-12 items-center gap-2",children:[a.jsx("span",{className:"text-sm col-span-6",children:"Total Arrear Balance HH :"}),a.jsx("span",{className:"font-semibold col-span-6",children:t(l==null?void 0:l.total_arrear_balance_hh)})]}),a.jsxs("div",{className:"grid grid-cols-12 items-center gap-2",children:[a.jsx("span",{className:"text-sm col-span-6",children:"Total Current Balance :"}),a.jsx("span",{className:"font-semibold col-span-6",children:c(l==null?void 0:l.total_current_due)})]}),s&&a.jsxs("div",{className:"grid grid-cols-12 items-center gap-2",children:[a.jsx("span",{className:"text-sm col-span-6",children:"Total Current Balance HH :"}),a.jsx("span",{className:"font-semibold col-span-6",children:t(l==null?void 0:l.total_current_balance_hh)})]}),a.jsxs("div",{className:"grid grid-cols-12 items-center gap-2",children:[a.jsx("span",{className:"text-sm col-span-6",children:"Total Balance :"}),a.jsx("span",{className:"font-semibold col-span-6",children:c(parseFloat(l==null?void 0:l.total_current_due)+parseFloat(l==null?void 0:l.total_old_due))})]})]}),h&&a.jsxs("div",{className:"col-span-12 sm:col-span-6 md:col-span-4 flex flex-col gap-1",children:[a.jsxs("div",{className:"grid grid-cols-12 items-center gap-2",children:[a.jsx("span",{className:"text-sm col-span-6",children:"Total Arrear Efficiency :"}),a.jsxs("span",{className:"font-semibold col-span-6",children:[t(l==null?void 0:l.total_arrear_eff),"%"]})]}),s&&a.jsxs("div",{className:"grid grid-cols-12 items-center gap-2",children:[a.jsx("span",{className:"text-sm col-span-6",children:"Total Arrear HH Efficiency :"}),a.jsxs("span",{className:"font-semibold col-span-6",children:[t(l==null?void 0:l.total_arrear_hh_eff),"%"]})]}),a.jsxs("div",{className:"grid grid-cols-12 items-center gap-2",children:[a.jsx("span",{className:"text-sm col-span-6",children:"Total Current Efficiency :"}),a.jsxs("span",{className:"font-semibold col-span-6",children:[t(l==null?void 0:l.total_current_eff),"%"]})]}),s&&a.jsxs("div",{className:"grid grid-cols-12 items-center gap-2",children:[a.jsx("span",{className:"text-sm col-span-6",children:"Total Current HH Efficiency :"}),a.jsxs("span",{className:"font-semibold col-span-6",children:[t(l==null?void 0:l.total_current_hh_eff),"%"]})]}),a.jsxs("div",{className:"grid grid-cols-12 items-center gap-2",children:[a.jsx("span",{className:"text-sm col-span-6",children:"Total Collection Efficiency :"}),a.jsxs("span",{className:"font-semibold col-span-6",children:[t(l==null?void 0:l.total_eff),"%"]})]})]})]}),a.jsxs("div",{children:[!x&&s&&!h&&a.jsx(C,{columns:$,dataList:i}),!x&&!s&&!h&&a.jsx(C,{columns:ee,dataList:i}),!x&&!s&&h&&a.jsx(C,{columns:p,dataList:i}),!x&&s&&h&&a.jsx(C,{columns:D,dataList:i}),x&&s&&!h&&a.jsx(C,{columns:ae,dataList:i}),x&&!s&&!h&&a.jsx(C,{columns:te,dataList:i}),x&&!s&&h&&a.jsx(C,{columns:ce,dataList:i}),x&&s&&h&&a.jsx(C,{columns:le,dataList:i})]})]}):a.jsx(a.Fragment,{children:!E&&!H&&a.jsx("div",{className:"w-full my-4 text-center text-red-500 text-lg font-bold",children:"No Data Found"})}),a.jsx("div",{className:"h-[20vh]"})]})};export{we as default};