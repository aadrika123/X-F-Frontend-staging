import{x as F,l as d,y as ee,v as ae,m as te,z as re,W as se,B as ne,X as le,Y as de,E as oe,q as b,k as r,o as v,j as a,G as ce,M,h as m,Z as ie,$ as me}from"./index-aafdb8b6.js";import{W as xe}from"./WaterTopButtons-8ceeacdf.js";function Ne(ge){var W,_,Y,R,I,U,E,k,C,D;const{t:s}=F(),[j,c]=d.useState(!1),[e,$]=d.useState(),[n,w]=d.useState(),[A,T]=d.useState(),[V,G]=d.useState(0),[f,p]=d.useState(),[S,g]=d.useState(!1);d.useState(!1);const[he,N]=d.useState(!1);d.useState(!1),d.useState(!1);const{notify:y}=d.useContext(ee),[be,q]=d.useState(!1),{id:x}=ae(),P=te();re(`${s("tranWaterApplicationSearchPage.waterConsumerDemandDetailsLabel.label")}`);const{api_waterApprovedApplicationDetails:B,api_calculateMeterFixedReading:z,api_waterListDemand:X,api_waterGenerateDemand:Z,header:h}=se(),H=t=>{if(console.log("Function called",t),(e==null?void 0:e.connectionId)==3&&t.demandUpto=="")return N("Please select demand up date");if((e==null?void 0:e.connectionId)==1&&(t.demandUpto==""||t.meterReading==""||t.meterImage==""))return N("Field(s) Require");let o=new FormData;o.append("consumerId",x),o.append("demandUpto",t.demandUpto),o.append("finalRading",t.meterReading),o.append("document",A),console.log("Final Payload of Meter Reading",o),c(!0),b.post(Z,o,h).then(i=>{i.data.status?(G(Q=>Q+1),c(!1),console.log("Demand Generate Date Saved",i),y("Demand Generated","success")):(c(!1),y("Error in Demand Generated","error"),console.log("Error Demand Generate",i),g(i.data.message))}).catch(i=>{c(!1),y("Something went wrong!","error"),console.log("Exception While going to generate Demand",i.response.data),g(i.response.data)})};let u=ne().shape({});(e==null?void 0:e.connection_type)!==3&&(u=u.shape({meterReading:le().required("Enter Meter Reading").min(((W=n==null?void 0:n.meterDetails)==null?void 0:W.final_meter_reading)+1||1e-6,`Reading must be greater than or equal to ${((_=n==null?void 0:n.meterDetails)==null?void 0:_.final_meter_reading)||1e-6}`),meterImage:de().required("Upload Meter Image")}));const l=oe({enableReinitialize:!0,initialValues:{demandUpto:"",meterReading:"",meterImage:""},onSubmit:(t,{resetForm:o})=>{H(t),q(!0),o()},validationSchema:u}),J=t=>{let o=t.target.name,i=t.target.value;console.log("formik.values.meterReading",i),g(!1),N(""),o=="meterReading"&&l.setFieldValue("meterReading",ie(i,l.values.meterReading,20)),o=="demandUpto"&&l.setFieldValue("demandUpto",me(i,l.values.demandUpto)),o=="meterImage"&&T(t.target.files[0]),console.log("docPath",A)};console.log("formik.values.demandUpto",l.values.demandUpto);const L=d.useMemo(()=>()=>{if((e==null?void 0:e.connectionId)!=4)return null;b.post(z,{consumerId:x,uptoData:l.values.demandUpto},h).then(t=>{t.data.status?(c(!1),p(t.data.data),console.log("this",t)):(g(t.data.message),p(!1))}).catch(t=>{p(!1),c(!1),console.log("Error while while calculate",t)})},[l.values.demandUpto]);d.useEffect(()=>{L()},[L]);const K=()=>{c(!0),b.post(B,{applicationId:x},h).then(function(t){console.log("water Approved Application Details",t.data.data),$(t.data.data),c(!1)}).catch(function(t){console.log("Error : water Approved Application Details",t),c(!1)})},O=()=>{b.post(X,{ConsumerId:x},h).then(t=>{t.data.status?(console.log("Fetched Water Demand List",t.data.data),c(!1),w(t.data.data)):(w(!1),c(!1))}).catch(t=>{console.log("Exception while fetching Water Demand",t)})};return d.useEffect(()=>{O(),K()},[x,V]),console.log("applicationFullData?.connectionId",e,e==null?void 0:e.connectionId,typeof(e==null?void 0:e.connectionId)),r(v,{children:[j&&a(ce,{}),a(xe,{active:"demand",consumerNo:e==null?void 0:e.consumer_no}),a("div",{className:"grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-2 container mx-auto w-full",children:a("div",{className:"col-span-12 rounded-lg p-4",children:r("div",{className:"p-4",children:[r("div",{className:"",children:[r("h1",{className:"px-1 font-semibold font-serif  text-gray-500",children:[a(M,{className:"inline"}),s("tranWaterApplicationSearchPage.basicDetailsLabel.label")]}),a("div",{className:"py-6 mt-2 bg-white border rounded-lg shadow-xl p-4",children:r("div",{className:"flex space-x-5 pl-4 ",children:[r("div",{className:"flex-1",children:[a("div",{className:"font-bold text-sm",children:e!=null&&e.folio_no?e==null?void 0:e.folio_no:"N/A"}),a("div",{className:"text-gray-500 text-xs",children:"Property No"})]}),r("div",{className:"flex-1",children:[a("div",{className:"font-bold text-sm",children:e!=null&&e.consumer_no?e==null?void 0:e.consumer_no:"N/A"}),a("div",{className:"text-gray-500 text-xs",children:s("tranWaterApplicationSearchPage.consumerNoLabel.label")})]}),r("div",{className:"flex-1",children:[a("div",{className:"font-semibold text-md",children:e!=null&&e.reading_date?e==null?void 0:e.reading_date:"N/A"}),a("div",{className:"text-gray-500 text-xs",children:"Reading Date"})]})]})})]}),(n==null?void 0:n.totalSumDemand)>0?r("div",{children:[r("div",{className:"flex flex-wrap w-full space-x-0 my-5",children:[r("div",{className:"grow",children:[r("span",{className:"text-sm",children:[" ",s("tranWaterApplicationSearchPage.totalDuesLabel.label"),":"]})," ",r("span",{className:"font-semibold text-gray-700 text-lg",children:["₹ ",n==null?void 0:n.totalSumDemand]})]}),r("div",{className:"grow",children:[r("span",{className:"text-sm",children:[" ",s("tranWaterApplicationSearchPage.dueFromLabel.label"),":"]})," ",r("span",{className:"font-semibold text-gray-700 text-lg",children:[m((Y=n==null?void 0:n.consumerDemands)==null?void 0:Y.demand_from,"YYYY-MM-DD").format("MMM-yy")," "]})]}),r("div",{className:"grow",children:[r("span",{className:"text-sm",children:[" ",s("tranWaterApplicationSearchPage.dueUptoLabel.label"),":"]})," ",r("span",{className:"font-semibold text-gray-700 text-lg",children:[m((I=(R=n==null?void 0:n.consumerDemands)==null?void 0:R.at(-1))==null?void 0:I.demand_upto,"YYYY-MM-DD").format("MMM-yy")," "]})]}),r("div",{className:"grow",children:[a("span",{className:"text-sm",children:" Total Due Demand:"})," ",a("span",{className:"font-semibold text-gray-700 text-lg",children:(U=n==null?void 0:n.consumerDemands)==null?void 0:U.length})]})]}),r("div",{className:"mt-6 mx-3 space-y-4 sm:space-y-0 sm:flex sm:justify-between sm:items-center",children:[r("div",{className:"text-center sm:text-left",children:[a("p",{className:"text-gray-600 text-xl font-semibold",children:s("tranWaterApplicationSearchPage.totalPayableAmountLabel.label")}),r("p",{className:"text-black text-2xl font-semibold",children:["₹ ",n==null?void 0:n.totalSumDemand]})]}),r("div",{className:"space-y-2 sm:space-y-0 sm:space-x-3",children:[a("button",{onClick:()=>P(`/water-demand-payment/${x}`),className:"bg-indigo-700 hover:bg-indigo-600 px-4 py-2 rounded shadow-2xl text-white text-sm",children:s("tranWaterApplicationSearchPage.payDemandLabel.label")}),a("button",{onClick:()=>P(`/waterdemndbill/${x}`),className:"bg-indigo-700 hover:bg-indigo-600 px-4 py-2 rounded shadow-2xl text-white text-sm",children:"View Bill"})]})]}),a("br",{}),r("div",{className:"mt-5",children:[r("h1",{className:"px-1 font-semibold font-serif text-gray-500",children:[a(M,{className:"inline"})," ",s("tranWaterApplicationSearchPage.demandDetailsLabel.label")]}),r("table",{className:"min-w-full leading-normal mt-2 bg-white rounded-lg shadow-xl p-4",children:[a("thead",{className:"font-bold text-left text-sm border text-gray-800 bg-white",children:r("tr",{children:[a("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"#"}),a("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:s("tranWaterApplicationSearchPage.demandFromLabel.label")}),a("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:s("tranWaterApplicationSearchPage.demandUptoLabel.label")}),a("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:s("tranWaterApplicationSearchPage.demandAmountLabel.label")}),a("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:s("tranWaterApplicationSearchPage.penaltyLabel.label")}),a("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:s("tranWaterApplicationSearchPage.connectionTypeLabel.label")}),a("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:s("tranWaterApplicationSearchPage.payableAmountLabel.label")})]})}),a("tbody",{className:"text-sm",children:a(v,{children:(E=n==null?void 0:n.consumerDemands)==null?void 0:E.map((t,o)=>r("tr",{className:"bg-white shadow-xl border-b border-gray-200",children:[a("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:o+1}),a("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:t!=null&&t.demand_from?m(t==null?void 0:t.demand_from,"YYYY-MM-DD").format("DD-MMM-yy"):"N/A"}),a("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:t!=null&&t.demand_upto?m(t==null?void 0:t.demand_upto,"YYYY-MM-DD").format("DD-MMM-yy"):"N/A"}),a("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:t!=null&&t.balance_amount?t==null?void 0:t.balance_amount:"N/A"}),a("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:t!=null&&t.penalty?t==null?void 0:t.penalty:"N/A"}),a("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:t!=null&&t.connection_type?t==null?void 0:t.connection_type:"N/A"}),a("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:t!=null&&t.due_balance_amount?"₹ "+(t==null?void 0:t.due_balance_amount):"N/A"})]}))})})]})]})]}):a("div",{className:"w-full mt-20 text-center",children:a("span",{className:"text-xl text-red-500 border border-red-500 font-semibold px-4 py-2",children:s("tranWaterApplicationSearchPage.demandNotFoundLabel.label")})}),r("div",{className:"mt-5",children:[r("h1",{className:"px-1 font-semibold font-serif  text-gray-500",children:[a(M,{className:"inline"})," ",s("tranWaterApplicationSearchPage.meterFixedConnectionDetailsLabel.label")]}),r("div",{className:"py-6 mt-2 border bg-white rounded-lg shadow-xl p-4",children:[r("div",{className:"flex space-x-5 pl-4 ",children:[r("div",{className:"flex-1",children:[a("div",{className:"font-bold text-sm",children:((k=e==null?void 0:e.meterDetails)==null?void 0:k.connectionName)||"N/A"}),a("div",{className:"text-gray-500 text-xs",children:"Connection Type"})]}),(e==null?void 0:e.connectionId)!=3&&r(v,{children:[r("div",{className:"flex-1",children:[a("div",{className:"font-bold text-sm",children:((C=e==null?void 0:e.meterDetails)==null?void 0:C.meter_no)||"N/A"}),a("div",{className:"text-gray-500 text-xs",children:s("tranWaterApplicationSearchPage.meterNoLabel.label")})]}),r("div",{className:"flex-1",children:[a("div",{className:"font-bold text-sm",children:e!=null&&e.finalReading?e==null?void 0:e.finalReading:"N/A"}),a("div",{className:"text-gray-500 text-xs",children:s("tranWaterApplicationSearchPage.lastMeterReadingLabel.label")})]}),r("div",{className:"flex-1",children:[a("div",{className:"font-bold text-sm",children:e!=null&&e.readingdate?e==null?void 0:e.readingdate:"N/A"}),a("div",{className:"text-gray-500 text-xs",children:"Reading Date"})]})]}),r("div",{className:"flex-1",children:[r("div",{className:"font-semibold text-md",children:[((D=e==null?void 0:e.meterDetails)==null?void 0:D.connection_date)||"N/A"," "]}),r("div",{className:"text-gray-500 text-xs",children:[" ",s("tranWaterApplicationSearchPage.connectionDateLabel.label")]})]})]}),(e==null?void 0:e.connectionId)==4&&a("div",{className:"py-6 mt-2",children:r("div",{className:"flex space-x-5 pl-4 ",children:[r("div",{className:"flex-1",children:[r("div",{className:"font-semibold text-md",children:[m(e==null?void 0:e.demandFrom,"YYYY-MM-DD").format("DD-MMM-yy")+":"+m(e==null?void 0:e.demandUpto,"YYYY-MM-DD").format("DD-MMM-yy")," "]}),a("div",{className:"text-gray-500 text-xs",children:s("tranWaterApplicationSearchPage.periodLabel.label")})]}),r("div",{className:"flex-1",children:[r("div",{className:"font-semibold text-md",children:[e==null?void 0:e.lastConsumedUnit," "]}),a("div",{className:"text-gray-500 text-xs",children:s("tranWaterApplicationSearchPage.lastConsumedUnitLabel.label")})]}),r("div",{className:"flex-1",children:[r("div",{className:"font-semibold text-md",children:[e==null?void 0:e.avgReading," "]}),a("div",{className:"text-gray-500 text-xs",children:s("tranWaterApplicationSearchPage.avgReadingPerDateLabel.label")})]}),r("div",{className:"flex-1",children:[r("div",{className:"font-semibold text-md",children:[(f==null?void 0:f.diffInDays)||"N/A"," ",r("span",{className:"text-xs",children:["(",m(e==null?void 0:e.demandUpto,"YYYY-MM-DD").format("DD-MMM-yy")," : ",m(l.values.demandUpto,"YYYY-MM-DD").format("DD-MMM-yy"),")"]})," "]}),a("div",{className:"text-gray-500 text-xs",children:s("tranWaterApplicationSearchPage.dayDifferenceLabel.label")})]})]})})]}),a("div",{className:"py-6 mt-2 bg-white rounded-lg shadow-xl p-4",children:r("form",{onSubmit:l.handleSubmit,onChange:J,className:"p-4 relative",children:[r("div",{className:"flex flex-col sm:flex-row space-y-4 sm:space-y-0",children:[(e==null?void 0:e.connection_type)===3?null:a("div",{className:"flex-1",children:r("div",{className:"form-group mb-6 col-span-12 md:col-span-6 md:px-4",children:[r("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[s("tranWaterApplicationSearchPage.uploadMeterImageLabel.label"),a("small",{className:"mt-1 text-sm font-semibold text-red-600 inline",children:"*"})]}),a("input",{...l.getFieldProps("meterImage"),type:"file",className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md cursor-pointer",placeholder:"Enter Meter Reading"}),a("span",{className:"text-red-600 absolute text-xs",children:l.touched.meterImage&&l.errors.meterImage?l.errors.meterImage:null})]})}),(e==null?void 0:e.connection_type)!==3&&a("div",{className:"flex-1",children:r("div",{className:"form-group mb-6 col-span-12 md:col-span-6 md:px-4",children:[r("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[s("tranWaterApplicationSearchPage.finalMeterReadingLabel.label"),a("small",{className:"mt-1 text-sm font-semibold text-red-600 inline",children:"*"})]}),a("input",{...l.getFieldProps("meterReading"),value:l.values.meterReading,onChange:l.handleChange,type:"text",className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 disabled:bg-gray-100 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md cursor-pointer",placeholder:"Enter Meter Reading"}),a("span",{className:"text-red-600 absolute text-xs",children:l.touched.meterReading&&l.errors.meterReading?l.errors.meterReading:null})]})}),a("div",{className:"flex-1",children:r("div",{className:"form-group mb-6 col-span-12 md:col-span-6 md:px-4",children:[r("label",{className:"form-label inline-block mb-1 text-gray-900 text-sm font-semibold",children:[s("tranWaterApplicationSearchPage.demandUptoDateLabel.label"),a("small",{className:"mt-1 text-sm font-semibold text-red-600 inline",children:"*"})]}),a("input",{...l.getFieldProps("demandUpto"),type:"date",className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md cursor-pointer bg-gray-200"}),a("span",{className:"text-red-600 absolute text-xs",children:l.touched.demandUpto&&l.errors.demandUpto?l.errors.demandUpto:null})]})})]}),a("p",{className:"text-red-500 text-center font-semibold",children:S&&""+S}),(e==null?void 0:e.connection_type)===1?a("div",{className:"flex justify-center md:justify-end mr-5",children:a("button",{type:"submit",className:"bg-indigo-700 px-3 py-2 text-white rounded",children:s("tranWaterApplicationSearchPage.generateDemandLabel.label")})}):a("div",{className:"flex justify-center md:justify-end mr-5",children:a("button",{type:"submit",className:"bg-indigo-700 px-3 py-2 text-white rounded",children:s("tranWaterApplicationSearchPage.generateDemandLabel.label")})})]})})]}),a("div",{className:"mt-6",children:" "})]})})}),a("div",{className:"w-full h-60"})]})}export{Ne as default};