import{v as $,r as n,u as q,a as H,b2 as U,cn as x,A as M,c as z,Z as Q,d as Z,b as J,j as e,p as K,aI as i,a2 as X,m as F}from"./index-b83b7b39.js";import{W as ee}from"./WaterTopButtons-7a11cd5f.js";function le(ae){var j,y,v,w,D,I;const{t}=$(),[W,m]=n.useState(!1),[s,L]=n.useState(),[r,A]=n.useState(),[f,b]=n.useState(!1),[p,_]=n.useState(!1),[N,se]=n.useState(!1),[u,R]=n.useState(),[E,Y]=n.useState(!1),{id:o}=q(),S=H(),{api_waterApprovedApplicationDetails:k,api_waterListDemand:P,api_waterselfDemandGenration:C,header:h}=U(),G=a=>{X.success("Demand Genearted successfully!",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),F.post(C,c,h).then(l=>{l.data.status?console.log("Demand Generate Date Saved",l):(console.log("Error Demand Generate",l),b(l.data.message))}).catch(l=>{console.log("Exception While going to generate Demand",l.response.data),b(l.response.data)})},T=x(Date()).format("DD-MMM-yy"),V=()=>{m(!0),M.post(k,{id:o},h).then(function(a){console.log("water Approved Application Details",a.data.data),L(a.data.data),m(!1)}).catch(function(a){console.log("Error : water Approved Application Details",a),m(!1)})};n.useEffect(()=>{M.post(P,{ConsumerId:o},h).then(a=>{a.data.status?(console.log("Fetched Water Demand List",a.data.data),A(a.data.data)):console.log("Demand not found")}).catch(a=>{console.log("Exception while fetching Water Demand",a)})},[o]),n.useEffect(()=>{V()},[o]);const B=z().shape({meterReading:Q().required("Enter Meter Reading"),meterImage:Z().required("Select a meter Image")}),d=J({enableReinitialize:!0,initialValues:{meterReading:"",meterImage:""},onSubmit:(a,{resetForm:l})=>{G(),l()},validationSchema:B}),O=a=>{let l=a.target.name,g=a.target.value;console.log("formik.values.meterReading",g),b(!1),_(""),l==="meterReading"&&(Y(g),d.setFieldValue("meterReading",g)),l==="meterImage"&&R(a.target.files[0]),console.log("docPath",u)};let c=new FormData;return c.append("id",o),c.append("finalReading",E),c.append("document",u),e.jsxs(e.Fragment,{children:[W&&e.jsx(K,{}),e.jsx(ee,{active:"demand",consumerNo:s==null?void 0:s.consumer_no}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-2 container mx-auto w-full",children:e.jsx("div",{className:"col-span-12 rounded-lg",children:e.jsxs("div",{className:"",children:[e.jsxs("div",{className:"",children:[e.jsxs("h1",{className:"px-1 font-semibold font-serif  text-gray-500",children:[e.jsx(i,{className:"inline"})," ",t("tranWaterDashboardIndex.basicDetailsLabel.label")]}),e.jsx("div",{className:"py-6 mt-2 bg-white rounded-lg shadow-xl",children:e.jsxs("div",{className:"flex flex-wrap gap-5 pl-4 ",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-sm",children:s!=null&&s.ulb_name?s==null?void 0:s.ulb_name:"N/A"}),e.jsx("div",{className:"text-gray-500 text-xs",children:t("tranWaterDashboardIndex.ulbNameLabel.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:s!=null&&s.ward_name?s==null?void 0:s.ward_name:"N/A"}),e.jsx("div",{className:"text-gray-500 text-xs",children:t("tranWaterDashboardIndex.wardNoLabel.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:s!=null&&s.consumer_no?s==null?void 0:s.consumer_no:"N/A"}),e.jsxs("div",{className:"text-gray-500 text-xs",children:[" ",t("tranWaterDashboardIndex.consumerNoLabel.label")]})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-md",children:s!=null&&s.property_no?s==null?void 0:s.property_no:"N/A"}),e.jsx("div",{className:"text-gray-500 text-xs",children:t("tranWaterDashboardIndex.holdingNoLabel.label")})]})]})})]}),e.jsx("div",{children:e.jsxs("div",{className:"p-4",children:[e.jsxs("h1",{className:"px-1 font-semibold font-serif  text-gray-500 mt-3 mr-[60%]",children:[e.jsx(i,{className:"inline"}),t("tranWaterDashboardIndex.basicDetailsOfMeterLabel.label")," "]}),e.jsx("div",{className:"py-6 mt-2 bg-white rounded-lg shadow-xl",children:e.jsxs("div",{className:"flex flex-wrap gap-5 pl-4 ",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-sm",children:(s==null?void 0:s.connectionName)||"N/A"}),e.jsx("div",{className:"text-gray-500 text-xs",children:t("tranWaterDashboardIndex.connectionTypeLabel.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:((j=s==null?void 0:s.meterDetails)==null?void 0:j.meter_no)||"N/A"}),e.jsx("div",{className:"text-gray-500 text-xs",children:t("tranWaterDashboardIndex.meterNoLabel.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:s!=null&&s.lastMeterReading?s==null?void 0:s.lastMeterReading:"N/A"}),e.jsx("div",{className:"text-gray-500 text-xs",children:t("tranWaterDashboardIndex.lastMeterReadingLabel.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:((y=s==null?void 0:s.meterDetails)==null?void 0:y.connection_date)||"N/A"}),e.jsx("div",{className:"text-gray-500 text-xs",children:t("tranWaterDashboardIndex.connectionDateLabel.label")})]})]})})]})}),e.jsxs("h1",{className:"px-1 font-semibold font-serif text-gray-500",children:[e.jsx(i,{className:"inline"}),t("tranWaterDashboardIndex.selfDemandGeneratedLabel.label")]}),e.jsx("div",{className:"mt-6 py-6  bg-white rounded-lg shadow-xl p-3",children:e.jsxs("form",{onSubmit:d.handleSubmit,onChange:O,className:"p-4 relative",children:[e.jsxs("div",{className:"flex space-x-5 pl-4 ",children:[e.jsx("div",{className:"flex-1",children:e.jsxs("div",{className:"form-group mb-6 col-span-12 md:col-span-6 md:px-4",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[t("tranWaterDashboardIndex.uploadMeterImageLabel.label"),e.jsx("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),e.jsx("input",{type:"file",className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md cursor-pointer",...d.getFieldProps("meterImage")}),d.errors.meterImage&&d.touched.meterImage&&e.jsx(e.Fragment,{children:e.jsx("p",{className:"text-[red]",children:d.errors.meterImage})})]})}),e.jsx("div",{className:"flex-1",children:e.jsxs("div",{className:"form-group mb-6 col-span-12 md:col-span-6 md:px-4",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[t("tranWaterDashboardIndex.finalMeterReadingLabel.label")," ",e.jsx("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),e.jsx("input",{type:"text",className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 disabled:bg-gray-100 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md cursor-auto",placeholder:"Enter Meter Reading",...d.getFieldProps("meterReading")}),d.errors.meterReading&&d.touched.meterReading&&e.jsx(e.Fragment,{children:e.jsx("p",{className:"text-[red]",children:d.errors.meterReading})})]})}),e.jsx("div",{className:"flex-1",children:e.jsxs("div",{className:"form-group mb-6 col-span-12 md:col-span-6 md:px-4",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-900 text-sm font-semibold",children:[" ",t("tranWaterDashboardIndex.dateLabel.label")]}),e.jsx("p",{className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 disabled:bg-gray-100 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md  text-center cursor-default",children:T})]})})]}),e.jsx("p",{className:"text-red-500 text-center font-semibold  ",children:f&&"Error : "+f}),e.jsxs("p",{className:"text-red-500 text-center font-semibold  ",children:[p&&p,N&&N]}),e.jsx("div",{className:"flex justify-end mr-5",children:e.jsx("button",{type:"submit",className:"bg-indigo-700 px-3 py-2 text-white rounded",children:t("tranWaterDashboardIndex.generateDemandLabel.label")})})]})}),r?e.jsxs("div",{children:[e.jsxs("div",{className:"flex flex-wrap w-full space-x-0 my-5",children:[e.jsxs("div",{className:"grow",children:[e.jsxs("span",{className:"text-sm",children:[" ",t("tranWaterDashboardIndex.totalDuesLabel.label"),":"]})," ",e.jsxs("span",{className:"font-semibold text-gray-700 text-lg",children:["₹ ",r==null?void 0:r.totalSumDemand]})]}),e.jsxs("div",{className:"grow",children:[e.jsxs("span",{className:"text-sm",children:[" ",t("tranWaterDashboardIndex.dueFromLabel.label"),":"]})," ",e.jsxs("span",{className:"font-semibold text-gray-700 text-lg",children:[x((v=r==null?void 0:r.consumerDemands[0])==null?void 0:v.demand_from,"YYYY-MM-DD").format("DD-MMM-yy")," "]})]}),e.jsxs("div",{className:"grow",children:[e.jsxs("span",{className:"text-sm",children:[" ",t("tranWaterDashboardIndex.dueUptoLabel.label"),":"]})," ",e.jsxs("span",{className:"font-semibold text-gray-700 text-lg",children:[x((w=r==null?void 0:r.consumerDemands.at(-1))==null?void 0:w.demand_upto,"YYYY-MM-DD").format("DD-MMM-yy")," "]})]}),e.jsxs("div",{className:"grow",children:[e.jsxs("span",{className:"text-sm",children:[" ",t("tranWaterDashboardIndex.totalDueMonthsLabel.label"),":"]})," ",e.jsx("span",{className:"font-semibold text-gray-700 text-lg",children:(D=r==null?void 0:r.consumerDemands)==null?void 0:D.length})]})]}),e.jsxs("div",{className:"mt-5",style:{maxHeight:"300px",overflowY:"auto"},children:[e.jsxs("h1",{className:"px-1 font-semibold font-serif text-gray-500",children:[e.jsx(i,{className:"inline"})," ",t("tranWaterDashboardIndex.demandDetailsLabel.label")]}),e.jsxs("table",{className:"min-w-full leading-normal mt-2 bg-white rounded-lg shadow-xl p-4",children:[e.jsx("thead",{className:"font-bold text-left text-sm border text-gray-800 bg-white",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"#"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:t("tranWaterDashboardIndex.demandFromLabel.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:t("tranWaterDashboardIndex.demandUptoLabel.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:t("tranWaterDashboardIndex.demandAmountLabel.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:t("tranWaterDashboardIndex.penaltyLabel.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:t("tranWaterDashboardIndex.connectionTypeLabel.label")}),e.jsxs("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:[t("tranWaterDashboardIndex.payableAmountLabel.label")," "]})]})}),e.jsx("tbody",{className:"text-sm",children:e.jsx(e.Fragment,{children:(I=r==null?void 0:r.consumerDemands)==null?void 0:I.map((a,l)=>e.jsxs("tr",{className:"bg-white shadow-xl border-b border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:l+1}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:a!=null&&a.demand_from?x(a==null?void 0:a.demand_from,"YYYY-MM-DD").format("DD-MMM-yy"):"N/A"}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:a!=null&&a.demand_upto?x(a==null?void 0:a.demand_upto,"YYYY-MM-DD").format("DD-MMM-yy"):"N/A"}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:a!=null&&a.balance_amount?a==null?void 0:a.balance_amount:"N/A"}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:a!=null&&a.penalty?a==null?void 0:a.penalty:"N/A"}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:a!=null&&a.connection_type?a==null?void 0:a.connection_type:"N/A"}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:a!=null&&a.amount?"₹ "+(a==null?void 0:a.amount):"N/A"})]}))})})]})]}),e.jsxs("div",{className:"mt-6 mx-3",children:[e.jsxs("div",{className:"float-left flex space-x-8",children:[e.jsx("p",{className:"text-gray-600 text-xl font-semibold",children:t("tranWaterDashboardIndex.totalPayableAmountLabel.label")}),e.jsxs("p",{className:"text-black text-3xl font-semibold",children:["₹ ",r==null?void 0:r.totalSumDemand]})]}),e.jsx("div",{className:"float-right",children:e.jsx("button",{onClick:()=>S(`/waterDemandPayment/${o}`),className:"bg-indigo-700 hover:bg-indigo-600 px-4 py-2 rounded shadow-2xl text-white text-sm",children:t("tranWaterDashboardIndex.payNowLabel.label")})})]})]}):e.jsx("div",{className:"text-center mt-5 border border-indigo-300 shadow-md rounded py-2 font-semibold text-red-600",children:t("tranWaterDashboardIndex.demandNotFoundLabel.label")})]})})}),e.jsx("div",{className:"w-full h-60"})]})}export{le as default};