import{r,_ as Me,Y as Fe,e as ke,au as y,a as Pe,q as Be,s as D,a5 as qe,w as Ee,A as ae,b as _,j as e,B as ze,U as He,dB as Oe,i as A,ag as Ve,n as o,P as We,ae as Re,ac as Ye}from"./index-9b1c06d6.js";const Ze=r.lazy(()=>Me(()=>import("./index-9b1c06d6.js").then(d=>d.e9),["assets/index-9b1c06d6.js","assets/index-cb1f22c1.css"])),Ge=()=>{var z,H,O,V,W,R,Y,Z,U,$,Q,G,J,K,X,L,ee,se;const{t:d}=Fe(),{get_MasterData:Ue,searchAllCollection:C,get_taxCollectorList:$e,get_collectorList:le,api_newWardByZoneId:ne}=We(),h=ke(),[te,T]=r.useState(!1),[j,oe]=r.useState(),[w,re]=r.useState(),[m,ce]=r.useState([]),[a,de]=r.useState(null),[ie,me]=r.useState(0),[ue,i]=r.useState(!1),[xe,he]=r.useState(""),[t,S]=r.useState(null),[v,I]=r.useState(null),[M,F]=r.useState(0),pe=()=>T(!0),fe=()=>T(!1),ge=()=>{};let Ne=new Date().toLocaleDateString("in-IN"),k=y(Ne).format("DD-MM-YYYY");const[P,je]=r.useState(),[we,B]=r.useState(!1);Pe("Collection Report");const x="form-control block w-full px-2 py-1 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-md",ve=Be({fromDate:D().required("Field Required"),uptoDate:D().required("Field Required"),collType:qe().min(1,"Check atleast one").of(D().required("Array items must be non-empty strings"))}),l=Ee({initialValues:{fromDate:y(new Date).format("yy-MM-DD"),uptoDate:y(new Date).format("yy-MM-DD"),collType:["property"],wardId:"",userId:"",zoneId:"",paymentMode:""},onSubmit:s=>{S(null),ce(s==null?void 0:s.collType),I({collectionType:l.values.collType,fromDate:l.values.fromDate,uptoDate:l.values.uptoDate,wardId:l.values.wardId,userId:l.values.userId,zoneId:l.values.zoneId,paymentMode:l.values.paymentMode}),F(n=>n+1)},validationSchema:ve});r.useEffect(()=>{me(a==null?void 0:a.totalAmt)},[a,M]),r.useEffect(()=>{var s;ye(),he((s=l.values)==null?void 0:s.collType),I({collectionType:l.values.collType,fromDate:l.values.fromDate,uptoDate:l.values.uptoDate,wardId:l.values.wardId,userId:l.values.userId,zoneId:l.values.zoneId,paymentMode:l.values.paymentMode}),F(n=>n+1)},[]);const be=s=>{i(!0),l.setFieldValue("wardId","");let n={zoneId:s};ae.post(ne,n,_()).then(function(c){oe(c.data.data),i(!1)}).catch(function(c){i(!1)})},q=s=>{let n=s.target.name,c=s.target.value;n=="zoneId"&&be(c)},ye=()=>{ae.post(le,{},_()).then(s=>{var n,c;((n=s==null?void 0:s.data)==null?void 0:n.status)==!0&&re((c=s==null?void 0:s.data)==null?void 0:c.data),i(!1)}).catch(s=>i(!1)).finally(()=>i(!1))},De=s=>{S(s),pe()},g=["property"],N=["saf"],_e=r.useMemo(()=>Array.isArray(m)&&(m==null?void 0:m.some(s=>g==null?void 0:g.includes(s))),[g]),Ae=r.useMemo(()=>Array.isArray(m)&&(m==null?void 0:m.some(s=>N==null?void 0:N.includes(s))),[N]),Ce=[{Header:"S.No.",Cell:({row:s})=>e.jsx("div",{children:(s==null?void 0:s.index)+1}),className:"w-[5%]"},{Header:"Ward No.",accessor:"ward_no",Cell:s=>o(s==null?void 0:s.value),className:"w-[5%]"},{Header:"Holding No.",accessor:"holding_no",Cell:s=>o(s==null?void 0:s.value)},{Header:"SAF No.",accessor:"saf_no",Cell:s=>o(s==null?void 0:s.value)},{Header:"Assessment Type",accessor:"assessment_type",Cell:s=>o(s==null?void 0:s.value)},{Header:"Owner Name",accessor:"owner_name",Cell:s=>o(s==null?void 0:s.value),className:"w-1/3"},{Header:"Tran. Date",accessor:"tran_date",Cell:s=>Re(s==null?void 0:s.value)},{Header:"Financial Year",accessor:"from_upto_fy_qtr",Cell:s=>s==null?void 0:s.value},{Header:"Amount",accessor:"amount",Cell:s=>e.jsx(e.Fragment,{children:A(s==null?void 0:s.value)})},{Header:"Action",Cell:({cell:s})=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex items-center justify-center gap-2 w-full",children:e.jsx("button",{onClick:()=>{var n;return De((n=s==null?void 0:s.row)==null?void 0:n.index)},className:"px-2 py-1 rounded-md bg-indigo-500 text-white text-sm hover:bg-indigo-600",children:"View"})})})}],Te={ward_no:"Ward No",zone_name:"Zone",property_no:"Property No",holding_no:"Holding No",saf_no:"SAF No",assessment_type:"Assessment Type",type:"Property Type",owner_name:"Owner Name",mobile_no:"Mobile No",prop_address:"Property Address",from_upto_fy_qtr:"From Upto Year",bank_name:"Bank Name",cheque_no:"Cheque No",transaction_mode:"Transaction Mode",tran_date:"Transaction Date",tran_no:"Transaction No",amount:"Amount",tc_mobile:"Tc Mobile No",emp_name:"Collector Name"},Se=()=>{B(!0)},E=()=>{i(!0),B(!1),Ye.post(C,{...v,perPage:a==null?void 0:a.total},_()).then(s=>{var n,c,u;((n=s==null?void 0:s.data)==null?void 0:n.status)==!0&&(je(Ie((u=(c=s==null?void 0:s.data)==null?void 0:c.data)==null?void 0:u.data)),Se()),i(!1)}).catch(s=>{i(!1)})},Ie=s=>s==null?void 0:s.map((c,u)=>{let p={};for(const[f,b]of Object.entries(Te))b!=="Action"&&b!=="S.No."&&(p[b]=f in c?c[f]:u+1);return p});return e.jsxs(e.Fragment,{children:[ue&&e.jsx(ze,{}),e.jsxs("form",{onChange:l.handleChange,onSubmit:l.handleSubmit,className:"mb-4 bg-white shadow-lg rounded-md ",children:[e.jsx("h1",{className:"text-xl w-full font-bold px-8 pt-4 text-gray-700",children:"Search Collection Report"}),e.jsxs("div",{className:"flex flex-wrap flex-row justify-start w-full gap-x-6 gap-y-2 text-sm 3xl:text-base p-4 px-8",children:[e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:"Collection Type :"}),e.jsxs("div",{className:"col-span-6 flex items-center justify-start gap-4 bg-green-100 shadow-md px-2 py-1.5 rounded-md border border-green-300 shadow-green-100",children:[e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("label",{htmlFor:"1",children:"Property"}),e.jsx("input",{className:"",type:"checkbox",name:"collType",id:"1",value:"property",checked:l.values.collType.includes("property"),onChange:l.handleChange})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("label",{htmlFor:"2",children:"SAF"}),e.jsx("input",{className:"",type:"checkbox",name:"collType",id:"2",value:"saf",checked:l.values.collType.includes("saf"),onChange:l.handleChange,defaultChecked:!0})]})]}),e.jsx("div",{className:"col-span-12 text-start",children:l.touched.collType&&l.errors.collType&&e.jsx(e.Fragment,{children:e.jsx("span",{className:"text-red-600 text-xs",children:l.errors.collType})})})]}),e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:"From Date :"}),e.jsx("div",{className:"col-span-6",children:e.jsx("input",{type:"date",name:"fromDate",value:l.values.fromDate,id:"",className:x,defaultValue:k})}),e.jsx("div",{className:"col-span-12 text-end",children:l.touched.fromDate&&l.errors.fromDate&&e.jsx(e.Fragment,{children:e.jsx("span",{className:"text-red-600 text-xs",children:l.errors.fromDate})})})]}),e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:"Upto Date :"}),e.jsx("div",{className:"col-span-6",children:e.jsx("input",{type:"date",name:"uptoDate",value:l.values.uptoDate,id:"",className:x,defaultValue:k})}),e.jsx("div",{className:"col-span-12 text-end",children:l.touched.uptoDate&&l.errors.uptoDate&&e.jsx(e.Fragment,{children:e.jsx("span",{className:"text-red-600 text-xs",children:l.errors.uptoDate})})})]}),e.jsxs("div",{className:'className="flex flex-col w-full md:w-[20%]',children:[e.jsxs("div",{className:"col-span-6 font-semibold",children:[d("tranActualTaxBillPage.zoneLabel.label"),e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsxs("select",{name:"zoneId",onChange:q,className:x,children:[e.jsx("option",{value:"",children:d("tranActualTaxBillPage.AllZones.label")}),e.jsx("option",{value:"1",children:d("tranActualTaxBillPage.ZoneAEast.label")}),e.jsx("option",{value:"2",children:d("tranActualTaxBillPage.ZoneBWest.label")}),e.jsx("option",{value:"3",children:d("tranActualTaxBillPage.ZoneCNorth.label")}),e.jsx("option",{value:"4",children:d("tranActualTaxBillPage.ZoneDSouth.label")})]}),e.jsx("p",{className:"text-red-500 text-xs",children:l.touched.zoneId&&l.errors.zoneId?l.errors.zoneId:null})]}),e.jsxs("div",{className:'className="flex flex-col w-full md:w-[20%]',children:[e.jsxs("div",{className:"col-span-6 font-semibold",children:[d("tranActualTaxBillPage.wardNoLabel.label"),e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsxs("select",{name:"wardId",onChange:q,className:x,children:[e.jsx("option",{value:"",children:d("tranActualTaxBillPage.AllWard.label")}),j==null?void 0:j.map((s,n)=>e.jsx("option",{value:s.id,children:s.ward_name},n))]}),e.jsx("p",{className:"text-red-500 text-xs",children:l.touched.wardNo&&l.errors.wardNo?l.errors.wardNo:null})]}),e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:"Collector List :"}),e.jsx("div",{className:"col-span-6",children:e.jsxs("select",{name:"userId",id:"",className:x,children:[e.jsx("option",{value:"",children:"All"}),w==null?void 0:w.map((s,n)=>e.jsx(e.Fragment,{children:e.jsx("option",{value:s==null?void 0:s.id,children:e.jsx("span",{className:"capitalize",children:s==null?void 0:s.user_name})},n)}))]})})]}),e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:"Payment Mode :"}),e.jsx("div",{className:"col-span-6",children:e.jsxs("select",{name:"paymentMode",id:"",className:x,children:[e.jsx("option",{value:"",children:"All"}),e.jsx("option",{value:"CASH",children:"Cash"}),e.jsx("option",{value:"CHEQUE",children:"Cheque"}),e.jsx("option",{value:"DD",children:"DD"}),e.jsx("option",{value:"ONLINE",children:"Online"}),e.jsx("option",{value:"NEFT",children:"NEFT"})]})})]}),e.jsx("div",{className:"w-full md:w-[20%] flex justify-start items-center",children:e.jsxs("button",{type:"submit",className:"flex flex-row items-center border border-green-600 bg-green-600 hover:bg-green-400 text-white hover:text-black shadow-lg rounded-sm text-sm font-semibold px-5 py-1 w-max",children:[" ",e.jsx("span",{className:"mr-2",children:e.jsx(He,{})}),"Search"]})})]})]}),e.jsx("div",{children:e.jsx("button",{className:"font-semibold px-6 py-2 p-4 mb-4 bg-orange-500 text-white text-sm leading-tight uppercase rounded hover:bg-orange-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-140 ease-in-out shadow-xl border border-white mr-2",onClick:E,data:P,children:"Export All Data"})}),we&&e.jsx(Oe,{data:P}),xe!=="gbSaf"&&e.jsxs("div",{className:"w-full text-end",children:[_e&&e.jsx("button",{type:"Property",className:"font-semibold px-6 py-2 bg-indigo-500 text-white text-sm leading-tight uppercase rounded hover:bg-indigo-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-140 ease-in-out shadow-xl border border-white mr-2",onClick:()=>h("/payment-mode-wise-summary/property"),children:"Payment Mode Wise Property Summary"}),Ae&&e.jsx("button",{type:"Property",className:"font-semibold px-6 py-2 bg-indigo-500 text-white text-sm leading-tight uppercase rounded hover:bg-indigo-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-140 ease-in-out shadow-xl border border-white",onClick:()=>h("/payment-mode-wise-summary/saf"),children:"Payment Mode Wise SAF Summary"})]}),v!=null&&e.jsxs("div",{className:"relative",children:[((z=a==null?void 0:a.data)==null?void 0:z.length)>1&&e.jsxs("div",{className:"absolute top-11 right-0",children:["Total Amount : ",e.jsx("span",{className:"font-semibold",children:A(ie)})]}),e.jsx(Ze,{getData:!0,allData:s=>de(s),api:C,columns:Ce,requestBody:v,changeData:M})]}),e.jsx("div",{className:"h-[20vh]"}),e.jsx(Ve,{isOpen:te,onAfterOpen:ge,className:"z-20 h-screen w-screen backdrop-blur-sm flex flex-row justify-center items-center sm:ml-10 overflow-auto",contentLabel:"Example Modal",children:e.jsxs("div",{class:" rounded-lg shadow-lg shadow-indigo-300 md:w-[73%] mt-16 sm:h-max w-full relative border-2 border-indigo-400 bg-gray-40 px-6 py-4 h-[88vh] border-t-2 border-l-2 overflow-auto",children:[e.jsx("div",{className:"absolute top-2 z-10 bg-red-200 hover:bg-red-300 right-2 rounded-md px-2 text-xl cursor-pointer",onClick:fe,children:"×"}),e.jsx("div",{children:e.jsx("button",{className:"font-semibold px-6 py-2 p-4  bg-orange-500 text-white text-sm leading-tight uppercase rounded hover:bg-orange-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-140 ease-in-out shadow-xl border border-white mr-2",onClick:E,children:"Export All Data"})}),e.jsx("div",{className:"2xl:mt-6 mt-3 bg-indigo-400 text-white flex flex-row md:justify-evenly items-center justify-center uppercase text-base poppins mb-4 shadow-md py-2 rounded-md",children:e.jsx("div",{className:"flex items-center gap-2",children:e.jsx("span",{className:"font-semibold poppins 2xl:text-xl text-base sm:text-lg",children:"View Details"})})}),e.jsxs("div",{className:"flex flex-col sm:flex-row gap-2 flex-wrap items-center justify-evenly w-full relative",children:[e.jsx("button",{className:"text-xs px-2 py-1 bg-green-400 hover:bg-green-500 rounded-md shadow-md shadow-green-100 absolute bottom-0 right-0 transition-all duration-150 ",onClick:()=>{var s,n,c,u,p,f;((s=a==null?void 0:a.data[t])==null?void 0:s.type)=="property"&&h("/holdingPropertyDetails/"+((n=a==null?void 0:a.data[t])==null?void 0:n.id)),((c=a==null?void 0:a.data[t])==null?void 0:c.type)=="saf"&&h("/propApplicationDetails/"+((u=a==null?void 0:a.data[t])==null?void 0:u.id)),((p=a==null?void 0:a.data[t])==null?void 0:p.type)=="gbsaf"&&h("/gbsaf-details/"+((f=a==null?void 0:a.data[t])==null?void 0:f.id))},children:"View More"}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsx("span",{className:"col-span-6 items-center",children:"Collector Name : "}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:o((H=a==null?void 0:a.data[t])==null?void 0:H.emp_name)})]}),((O=a==null?void 0:a.data[t])==null?void 0:O.type)!="property"&&e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsx("span",{className:"col-span-6 items-center",children:"Assesment Type : "}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:o((V=a==null?void 0:a.data[t])==null?void 0:V.assessment_type)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsx("span",{className:"col-span-6 items-center",children:"Ward No. : "}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:o((W=a==null?void 0:a.data[t])==null?void 0:W.ward_no)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsx("span",{className:"col-span-6 items-center",children:"Holding No. : "}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:o((R=a==null?void 0:a.data[t])==null?void 0:R.holding_no)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsx("span",{className:"col-span-6 items-center",children:"SAF No. : "}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:o((Y=a==null?void 0:a.data[t])==null?void 0:Y.saf_no)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsx("span",{className:"col-span-6 items-center",children:"Owner Name : "}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:o((Z=a==null?void 0:a.data[t])==null?void 0:Z.owner_name)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsx("span",{className:"col-span-6 items-center",children:"Mobile No. : "}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:o((U=a==null?void 0:a.data[t])==null?void 0:U.mobile_no)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsx("span",{className:"col-span-6 items-center",children:"Payment (From-Upto) : "}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:o(($=a==null?void 0:a.data[t])==null?void 0:$.from_upto_fy_qtr)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsx("span",{className:"col-span-6 items-center",children:"Transaction No. : "}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:o((Q=a==null?void 0:a.data[t])==null?void 0:Q.tran_no)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsx("span",{className:"col-span-6 items-center",children:"Transaction Date : "}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:o((G=a==null?void 0:a.data[t])==null?void 0:G.tran_date)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsx("span",{className:"col-span-6 items-center",children:"Transaction Mode : "}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:o((J=a==null?void 0:a.data[t])==null?void 0:J.transaction_mode)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsx("span",{className:"col-span-6 items-center",children:"Transaction Amount : "}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:A((K=a==null?void 0:a.data[t])==null?void 0:K.amount)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsx("span",{className:"col-span-6 items-center",children:"Cheque No. : "}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:o((X=a==null?void 0:a.data[t])==null?void 0:X.cheque_no)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsx("span",{className:"col-span-6 items-center",children:"Bank Name : "}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:o((L=a==null?void 0:a.data[t])==null?void 0:L.bank_name)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsx("span",{className:"col-span-6 items-center",children:"Branch Name : "}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:o((ee=a==null?void 0:a.data[t])==null?void 0:ee.branch_name)})]}),((se=a==null?void 0:a.data[t])==null?void 0:se.type)!="property"&&e.jsx("div",{className:"w-full sm:w-[40%] grid grid-cols-12"})]})]})})]})};export{Ge as default};