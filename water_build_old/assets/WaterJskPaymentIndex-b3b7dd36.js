import{l as d,y as z,m as U,z as G,W as J,B as V,D as N,E as K,q as O,j as t,o as M,a4 as X,k as a,G as Q,a5 as Y,x as Z,v as D,A as F}from"./index-264f52bb.js";function ee(o){const[W,H]=d.useState(""),[x,e]=d.useState("no");d.useState();const[p,B]=d.useState(),[R,L]=d.useState(0),[T,m]=d.useState();d.useState();const[v,h]=d.useState(!1),{notify:b}=d.useContext(z);d.useState(!1),d.useState(!1);const w=U(),c=o==null?void 0:o.data,i=o==null?void 0:o.installment,_=o==null?void 0:o.applicationId,k=o==null?void 0:o.connCat,g=o==null?void 0:o.amount;G("Payment Page");const{api_waterPayConnectionCharges:I,header:S}=J(),C=V({paymentMode:N().required("select payment mode"),remarks:N().required("Enter remarks"),branchName:N(),cheque_dd_no:N(),cheque_dd_date:N()}),n=K({enableReinitialize:!0,initialValues:{paymentMode:"",remarks:"",bankName:"",branchName:"",cheque_dd_no:"",cheque_dd_date:"",applicationId:_,chargeCategory:k,selectInstallment:"",isInstallmentRadio:"no"},onSubmit:(s,r)=>{A(s),h(!0)},validationSchema:C}),A=s=>{console.log("items",s);const r={paymentMode:s==null?void 0:s.paymentMode,remarks:s==null?void 0:s.remarks,bankName:s==null?void 0:s.bankName,branchName:s==null?void 0:s.branchName,chequeNo:s==null?void 0:s.cheque_dd_no,chequeDate:s==null?void 0:s.cheque_dd_date,amount:g,isInstallment:x,penaltyAmount:c==null?void 0:c.penalty,applicationId:s==null?void 0:s.applicationId,penaltyIds:T,chargeCategory:s==null?void 0:s.chargeCategory};console.log("Final Payload",r),O.post(I,r,S).then(l=>{var u,f,y;((u=l==null?void 0:l.data)==null?void 0:u.status)==!0?(h(!1),w(`/water-payment-receipt/${(y=(f=l==null?void 0:l.data)==null?void 0:f.data)==null?void 0:y.tranNo}/application`),console.log("Payment Done",l),b("Payment Done Successfully","success")):(h(!1),b("Error While Payment","error"))}).catch(l=>{h(!1),b("Something Went Wrong","error"),console.log("Expecption while payment",l)})},P=s=>{console.log("This..",s.target.selectedIndex,i[0].id),s.target.selectedIndex==1&&m([i[0].id]),s.target.selectedIndex==2&&m([i[0].id,i[1].id]),s.target.selectedIndex==3&&(m([i[0].id,i[1].id,i[2].id]),e("no"),m(void 0))},q=s=>{let r=s.target.name,l=s.target.value;console.log(r,l),r=="paymentMode"&&B(l),r=="selectInstallment"&&P(s),r=="selectInstallment"&&s.target.selectedIndex==3&&e("no"),r=="selectInstallment"&&L(Number(l)),r=="isInstallmentRadio"&&e(s.target.value)};return W==!0?t(M,{children:t(X,{})}):(console.log("connId",o.connId),a(M,{children:[v&&t(Q,{}),t(Y,{position:"top-right",autoClose:2e3}),t("div",{className:" block p-4 mt-4 w-full md:py-4 md:px-40 md:pb-0 md:pt-0 rounded-lg shadow-lg bg-white md:w-full mx-auto  overflow-x-auto mb-20 ",children:t("div",{className:" block p-4 w-full md:py-6 rounded-lg bg-white mx-auto ",children:a("form",{onSubmit:n.handleSubmit,onChange:q,className:"p-4 relative",children:[(c==null?void 0:c.chargeCatagoryId)===2&&(c==null?void 0:c.paidStatus)==0&&t("div",{className:"text-center text-green-600 font-semibold pb-2",children:"Note: 10% rebate on penalty in case whole penalty is paid"}),a("div",{className:"grid grid-cols-12",children:[a("div",{className:"bg-white col-span-12 grid grid-cols-12 pt-6 mb-4 border border-gray-200",children:[a("div",{className:"form-group mb-6 col-span-12 md:col-span-6 md:px-4",children:[t("span",{children:"Connection Fee :"})," ",t("span",{className:"font-mono font-semibold",children:g})]}),t("div",{className:"form-group mb-6 col-span-12 md:col-span-6 md:px-4",children:a("div",{className:"w-full",children:[t("span",{children:"Total Payable Amount :"})," ",a("span",{className:"font-mono font-semibold text-xl",children:[" ₹",g]})]})})]}),a("div",{className:"form-group mb-6 col-span-12 md:col-span-6 md:px-4",children:[a("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[t("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),"Payment Mode"]}),a("select",{...n.getFieldProps("paymentMode"),type:"text",className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",children:[t("option",{value:"",children:"Select"}),t("option",{value:"CASH",children:"Cash"}),t("option",{value:"CHEQUE",children:"Cheque"}),t("option",{value:"DD",children:"DD"})]}),t("span",{className:"text-red-600 absolute text-xs",children:n.touched.paymentMode&&n.errors.paymentMode?n.errors.paymentMode:null})]}),a("div",{className:"form-group mb-6 col-span-12 md:col-span-6 md:px-4",children:[a("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[t("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),"Remarks"]}),t("input",{...n.getFieldProps("remarks"),type:"text",className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md cursor-pointer",placeholder:"Enter remarks"}),t("span",{className:"text-red-600 absolute text-xs",children:n.touched.remarks&&n.errors.remarks?n.errors.remarks:null})]}),(p=="CHEQUE"||p=="DD")&&a(M,{children:[a("div",{className:"form-group mb-6 col-span-12 md:col-span-6 md:px-4",children:[a("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[t("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),"Bank Name"]}),t("input",{...n.getFieldProps("bankName"),type:"text",className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",placeholder:"Enter Bank Name."}),t("span",{className:"text-red-600 absolute text-xs",children:n.touched.bankName&&n.errors.bankName?n.errors.bankName:null})]}),a("div",{className:"form-group mb-6 col-span-12 md:col-span-6 md:px-4",children:[a("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[t("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),"Branch Name"]}),t("input",{...n.getFieldProps("branchName"),type:"text",className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",placeholder:"Enter Branch Name"}),t("span",{className:"text-red-600 absolute text-xs",children:n.touched.branchName&&n.errors.branchName?n.errors.branchName:null})]}),a("div",{className:"form-group mb-6 col-span-12 md:col-span-6 md:px-4",children:[a("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[t("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),"Cheque/DD No"]}),t("input",{...n.getFieldProps("cheque_dd_no"),type:"text",placeholder:"Enter Check/DD",className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),t("span",{className:"text-red-600 absolute text-xs",children:n.touched.cheque_dd_no&&n.errors.cheque_dd_no?n.errors.cheque_dd_no:null})]}),a("div",{className:"form-group mb-6 col-span-12 md:col-span-6 md:px-4",children:[a("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[t("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),"Cheque/DD Date"]}),t("input",{...n.getFieldProps("cheque_dd_date"),type:"date",className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md cursor-pointer",placeholder:"Enter new ward no."}),t("span",{className:"text-red-600 absolute text-xs",children:n.touched.cheque_dd_date&&n.errors.cheque_dd_date?n.errors.cheque_dd_date:null})]})]}),t("div",{className:"col-span-12"}),t("div",{className:"col-span-12 grid grid-cols-2 mt-10",children:t("div",{className:""})})]}),t("div",{className:"md:pl-10 flex justify-between",children:t("button",{type:"submit",className:" px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight  rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out cursor-pointer ml-[80%]",children:"Pay Tax"})})]})})})]}))}function se(o){var m,v,h,b,w,c,i,_,k,g,I,S,C,n,A,P,q,s,r,l,u,f,y,j,$;const{t:W}=Z(),[H,x]=d.useState(!1),[e,p]=d.useState(),{id:B}=D(),{notify:R}=d.useContext(z),{api_WaterGetDetailsById:L}=J();G(`${W("tranWaterHomePage.waterApplicationPaymentLabel.label")}`);const T=()=>{x(!0),console.log("before fetch property details in deactivation"),O.post(L,{applicationId:B},F()).then(function(E){console.log("view water details by id...",E.data.data),p(E.data.data),x(!1)}).catch(function(E){console.log("==2 details by id error...",E),x(!1),R("Something Went Wrong","error")})};return d.useEffect(()=>{T()},[]),console.log("applicationFullData?.applicationDetails",(m=e==null?void 0:e.applicationDetails)==null?void 0:m.connection_type_id),a(M,{children:[H&&t(Q,{}),t("div",{className:"w-full bg-white shadow-xl mb-6",children:t("div",{className:"",children:a("div",{className:"py-6 mt-2 bg-white rounded-lg shadow-lg p-4",children:[a("div",{className:"flex space-x-5 pl-4 ",children:[a("div",{className:"flex-1",children:[t("div",{className:"font-bold text-sm",children:(v=e==null?void 0:e.applicationDetails)!=null&&v.application_no?(h=e==null?void 0:e.applicationDetails)==null?void 0:h.application_no:"N/A"}),t("div",{className:"text-gray-500 text-xs",children:"Application No"})]}),a("div",{className:"flex-1",children:[t("div",{className:"font-bold text-sm",children:(b=e==null?void 0:e.applicationDetails)!=null&&b.category?(w=e==null?void 0:e.applicationDetails)==null?void 0:w.category:"N/A"}),t("div",{className:"text-gray-500 text-xs",children:"Category"})]}),a("div",{className:"flex-1",children:[a("div",{className:"font-semibold text-md",children:[(c=e==null?void 0:e.applicationDetails)!=null&&c.address?(i=e==null?void 0:e.applicationDetails)==null?void 0:i.address:"N/A"," "]}),t("div",{className:"text-gray-500 text-xs",children:"Address"})]}),a("div",{className:"flex-1",children:[t("div",{className:"font-semibold text-md",children:(_=e==null?void 0:e.applicationDetails)!=null&&_.charge_category?(k=e==null?void 0:e.applicationDetails)==null?void 0:k.charge_category:"N/A"}),t("div",{className:"text-gray-500 text-xs",children:"Charge Category"})]}),a("div",{className:"flex-1",children:[t("div",{className:"font-bold text-sm",children:(g=e==null?void 0:e.applicationDetails)!=null&&g.property_no?(I=e==null?void 0:e.applicationDetails)==null?void 0:I.property_no:"N/A"}),t("div",{className:"text-gray-500 text-xs",children:"Property No"})]})]}),a("div",{className:"flex space-x-10  pl-4 mt-4",children:[a("div",{className:"flex-1",children:[t("div",{className:"font-bold text-sm",children:(S=e==null?void 0:e.applicationDetails)!=null&&S.mobile_no?(C=e==null?void 0:e.applicationDetails)==null?void 0:C.mobile_no:"N/A"}),t("div",{className:"text-gray-500 text-xs",children:"Mobile No"})]}),a("div",{className:"flex-1",children:[t("div",{className:"font-bold text-sm",children:(n=e==null?void 0:e.applicationDetails)!=null&&n.apply_date?(A=e==null?void 0:e.applicationDetails)==null?void 0:A.apply_date:"N/A"}),t("div",{className:"text-gray-500 text-xs",children:"Apply Date"})]}),a("div",{className:"flex-1",children:[t("div",{className:"font-semibold text-md",children:(P=e==null?void 0:e.applicationDetails)!=null&&P.landmark?(q=e==null?void 0:e.applicationDetails)==null?void 0:q.landmark:"N/A"}),t("div",{className:"text-gray-500 text-xs",children:"Land Mark"})]}),a("div",{className:"flex-1",children:[t("div",{className:"font-semibold text-md",children:(s=e==null?void 0:e.applicationDetails)!=null&&s.amount?(r=e==null?void 0:e.applicationDetails)==null?void 0:r.amount:"N/A"}),t("div",{className:"text-gray-500 text-xs",children:"Amount"})]}),a("div",{className:"flex-1",children:[t("div",{className:"font-semibold text-md",children:(l=e==null?void 0:e.applicationDetails)!=null&&l.building_type?(u=e==null?void 0:e.applicationDetails)==null?void 0:u.building_type:"N/A"}),t("div",{className:"text-gray-500 text-xs",children:"Building Type"})]})]})]})})}),t("div",{children:t(ee,{amount:(f=e==null?void 0:e.applicationDetails)==null?void 0:f.amount,connId:(y=e==null?void 0:e.applicationDetails)==null?void 0:y.connection_type_id,connCat:(j=e==null?void 0:e.applicationDetails)==null?void 0:j.connection_type,applicationId:($=e==null?void 0:e.applicationDetails)==null?void 0:$.id,installment:e==null?void 0:e.penaltyInstallments,data:e==null?void 0:e.calculation})}),t("div",{className:"w-full h-40 md:none"})]})}export{se as default};