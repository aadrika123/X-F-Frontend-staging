import{u as B,a as V,r as s,j as e}from"./index-71152db0.js";import{P as $}from"./ProjectApiList-ce784c76.js";import{A as M}from"./ApiHeader-6d683756.js";import{B as U}from"./BarLoader-301c5830.js";import{C as te,B as H}from"./BottomErrorCard-825f4fe1.js";import{d as S,n as N,i as ae}from"./PowerupFunctions-cfb479d2.js";import{A}from"./AxiosInterceptors-cc0f4fac.js";import{M as ne}from"./index-5bd5b265.js";import{c as oe,a as y,u as le}from"./formik.esm-ed701252.js";import{_ as se}from"./index-7a1f39f8.js";import{u as ie}from"./useSetTitle-b277aff6.js";import{F as re}from"./index.esm-9d640d9e.js";import{a as de}from"./index.esm-43b7e04d.js";import"./index-387d7a00.js";import"./iconBase-e64775eb.js";const ce="/logo1.png";async function me(n,r){console.log("the order id is....",n);var f={description:"Test payment",image:ce,currency:"INR",key:"rzp_test_NXHWEn0nSMDcnm",amount:5e3,name:"Fines",order_id:n,prefill:{email:"abc@gmail.com",contact:"9123254999",name:"Mark Test"},theme:{color:"#3399cc"},handler:d=>{console.log("Payment success:",d),console.log("payment response...."),r(d)}};const c=new Razorpay(f);c.on("payment.failed",function(d){console.log("payment failed....",d)}),c.open()}const ue={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",backgroundColor:"white",border:"none"}};function xe(n){var O,q,D,L;const{id:r}=B(),{api_challanOfflinePayment:f,api_generateOrderId:c,api_getTransactionNo:d,api_sendOnlineResponse:a}=$(),b=V(),[C,E]=s.useState(!1),[k,g]=s.useState(!1),[p,P]=s.useState(!1),[l,m]=s.useState(!1),[v,I]=s.useState(null),[_,Y]=s.useState(null),[Q,G]=s.useState(!1);s.useState();const J=`upi://pay?pa=your-vpa@provider&pn=MerchantName&mc=1234&tid=1234567890&tr=order-id&tn=Payment%20Description&am=${(O=n==null?void 0:n.demand)==null?void 0:O.total_payable_amount}&cu=INR`;let W=oe({paymentMode:y().required("select payment mode"),remarks:y(),bankName:y(),branchName:y(),cheque_dd_no:y(),cheque_dd_date:y()});le({initialValues:{paymentMode:"CASH",remarks:"",bankName:"",branchName:"",cheque_dd_no:"",cheque_dd_date:"",payAdvance:"",advanceAmount:""},validationSchema:W,onSubmit:t=>{console.log("values at submit payment",t),X(t)&&R()}});const u=(t,i)=>{Y(i),P(t)},F=()=>m(!1),X=t=>{if(console.log("vlaues at ruleset..",t),t.paymentMode=="CHEQUE"||t.paymentMode=="DD"){if(t.bankName==""||t.bankName==null)return u(!0,"Please enter bank name"),!1;if(t.branchName==""||t.branchName==null)return u(!0,"Please enter branch name"),!1;if(t.cheque_dd_no==""||t.cheque_dd_no==null)return u(!0,"Please enter cheque/dd no."),!1;if(t.cheque_dd_date==""||t.cheque_dd_date==null)return u(!0,"Please enter cheque/dd date"),!1}return!0},R=async t=>{var x,h;g(!0);let i={amount:(x=n==null?void 0:n.demand)==null?void 0:x.amount,challanId:r,applicationId:(h=n==null?void 0:n.demand)==null?void 0:h.application_id};console.log("orderidpayload at payment before...",i),A.post(c,i,M()).then(o=>{var j,w,T,z;console.log("Order Id Response ",o==null?void 0:o.data),((j=o==null?void 0:o.data)==null?void 0:j.status)===!0?(console.log("OrderId Generated True",(w=o==null?void 0:o.data)==null?void 0:w.data),me((z=(T=o==null?void 0:o.data)==null?void 0:T.data)==null?void 0:z.order_id,K)):u(!0,"Error occured. Please try again later.")}).catch(o=>{u(!0,"Error occured. Please try again later."),console.log("ERROR :-  Unable to Generate Order Id ",o)}).finally(()=>{g(!1)})};function Z(){const t=new Date,i=t.getFullYear(),x=String(t.getMonth()+1).padStart(2,"0"),h=String(t.getDate()).padStart(2,"0");return i+"-"+x+"-"+h}const K=t=>{var x,h;console.log("payment response....",t),g(!0);let i={applicationId:(x=n==null?void 0:n.demand)==null?void 0:x.application_id,challanId:r,amount:(h=n==null?void 0:n.demand)==null?void 0:h.amount,date:Z(),transactionId:t==null?void 0:t.razorpay_payment_id,status:!0,authCode:t==null?void 0:t.razorpay_signature,orderId:t==null?void 0:t.razorpay_order_id,status:"AUTHORIZED",mid:"web",paymentId:t==null?void 0:t.razorpay_payment_id};console.log("======== 2 before sending response of onlie payment...",i),A.post(a,i,M()).then(o=>{var j,w;console.log("===== 3 response after onlin payment api....",JSON.stringify(o==null?void 0:o.data,null,2)),((j=o==null?void 0:o.data)==null?void 0:j.status)===!0?(b("/search-challan/direct"),console.log("payment success")):console.log("Login Failed",(w=o==null?void 0:o.data)==null?void 0:w.message)}).catch(o=>{console.log("-Exception--",o)}).finally(()=>{g(!1)})},ee=()=>{m(!1),R()};return k?e.jsx(e.Fragment,{children:e.jsx(U,{})}):C==!0?e.jsx(e.Fragment,{children:e.jsx("div",{className:"w-full h-full bg-white sm:p-20 p-2",children:e.jsxs("div",{children:[e.jsx("div",{className:"text-center font-semibold text-3xl",children:"Your payment has been successfully done !"}),e.jsxs("div",{className:"text-center mt-6",children:[e.jsx("button",{className:"mr-4 bg-indigo-500  text-white px-6 py-1 shadow-lg hover:scale-105 rounded-sm",onClick:()=>b(`/fp-receipt/${encodeURIComponent(v)}`),children:"View Receipt"}),e.jsx("button",{className:"mr-4 bg-white border border-indigo-500 text-indigo-500 px-4 py-1 shadow-lg hover:scale-105 rounded-sm",onClick:()=>b(`/challan/${r}`),children:"View Challan"})]})]})})}):Q?e.jsx(te,{children:e.jsxs("div",{className:"relative bg-white w-[90vw] md:w-[50vw] h-[80vh] md:h-[35vw] py-8 gap-8 border rounded-md shadow-lg shadow-indigo-50 border-indigo-600 flex flex-col justify-center items-center",children:[e.jsx("button",{className:"absolute top-4 right-4 font-bold bg-red-200 p-2 rounded-full shadow-sm hover:bg-red-400",onClick:()=>G(!1),children:e.jsx(de,{})}),e.jsx("div",{className:"flex justify-center",children:e.jsx("span",{className:"font-semibold border-b text-xl uppercase",children:"Scan To Pay"})}),e.jsx(se,{value:J}),e.jsx("div",{className:" font-semibold bg-green-300 px-8 py-1.5 rounded-sm",children:S((q=n==null?void 0:n.demand)==null?void 0:q.total_payable_amount)})]})}):e.jsxs(e.Fragment,{children:[p&&e.jsx(H,{activateBottomErrorCard:u,errorTitle:_}),e.jsx("div",{className:" block sm:p-4 mt-4 w-full md:py-4 md:px-40 md:pb-0 md:pt-0 rounded-lg  bg-white md:w-full mx-auto  overflow-x-auto mb-20 ",children:e.jsxs("div",{className:"p-4 w-full md:py-6 rounded-lg bg-white mx-auto flex justify-center items-center flex-col",children:[e.jsxs("div",{className:"md:px-4",children:[e.jsx("span",{children:"Total Payable Amount :"})," ",e.jsx("span",{className:"font-mono font-bold text-xl",children:S((D=n==null?void 0:n.demand)==null?void 0:D.amount)})]}),e.jsx("div",{className:"mt-4",children:e.jsxs("button",{onClick:R,type:"button",className:"sm:ml-4 font-bold px-6 py-3 md:py-2 bg-indigo-500 text-white text-xs sm:text-sm leading-tight uppercase rounded  hover:bg-indigo-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out shadow-xl border border-white",children:[e.jsx("span",{className:"sm:mr-2 mr-1",children:"Pay "}),S((L=n==null?void 0:n.demand)==null?void 0:L.amount)]})})]})}),e.jsx(ne,{isOpen:l,onRequestClose:F,style:ue,contentLabel:"Example Modal",children:e.jsxs("div",{class:"relative bg-white rounded-lg shadow-xl border-2 border-gray-50",children:[e.jsx("button",{onClick:F,type:"button",class:"absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white",children:e.jsx("svg",{class:"w-5 h-5",fill:"currentColor",children:e.jsx("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})})}),e.jsxs("div",{class:"p-6 text-center",children:[e.jsxs("div",{className:"w-full flex h-10",children:[" ",e.jsx("span",{className:"mx-auto",children:e.jsx(re,{size:30})})]}),e.jsx("h3",{class:"mb-5 text-lg font-normal text-gray-500 dark:text-gray-400",children:"Confirm Payment"}),e.jsx("button",{type:"button",class:"text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2",onClick:ee,children:"Yes, I'm sure"})]})]})})]})}const Ie=()=>{ie("Fines & Penalties Payment");const{api_getChallanById:n}=$(),{id:r}=B(),f=V(),[c,d]=s.useState(!1),[a,b]=s.useState(null),[C,E]=s.useState(!1),[k,g]=s.useState(""),p=(l,m)=>{g(m),E(l),l||window.history.back()},P=()=>{d(!0),A.post(n,{challanId:r},M()).then(l=>{var m,v,I,_;console.log("getting response of user data => ",l),(m=l==null?void 0:l.data)!=null&&m.status?(console.log("user data => ",(v=l==null?void 0:l.data)==null?void 0:v.data),b((I=l==null?void 0:l.data)==null?void 0:I.data)):p(!0,(_=l==null?void 0:l.data)==null?void 0:_.message)}).catch(l=>{console.log("getting error user details marriage => ",l),p(!0,"Error getting user details, please try again later !")}).finally(()=>{d(!1)})};return s.useEffect(()=>{P()},[]),e.jsx(e.Fragment,{children:e.jsx("div",{className:"w-full h-screen md:pt-10",children:e.jsxs("div",{className:"md:w-4/5 mx-auto shadow-xl bg-gray-50 md:py-10",children:[c&&e.jsx(U,{}),C&&e.jsx(H,{activateBottomErrorCard:p,errorTitle:k}),!c&&e.jsxs("div",{className:"animate__animated animate__fadeIn animate__faster overflow-x-hidden overflow-y-scroll w-[99%] mx-auto rounded-md gap-6 h-full p-[1vw]",children:[e.jsx("div",{className:"flex justify-center mb-6",children:e.jsx("h1",{className:"bg-white shadow-lg shadow-indigo-300 text-indigo-400 w-max font-semibold text-2xl px-6 py-2 border border-indigo-400",children:"Fines & Penalties Payment"})}),e.jsxs("div",{className:"flex items-center flex-wrap w-full text-sm bg-white p-4  gap-2 mt-4",children:[e.jsxs("div",{className:"flex flex-col flex-wrap justify-center w-full md:w-[27%]",children:[e.jsx("div",{children:"Name"}),e.jsx("div",{className:"font-semibold text-base",children:N(a==null?void 0:a.full_name)})]}),e.jsxs("div",{className:"flex flex-col flex-wrap justify-center w-full md:w-[22%]",children:[e.jsx("div",{children:"Mobile No."}),e.jsx("div",{className:"font-semibold text-base",children:N(a==null?void 0:a.mobile)})]}),e.jsxs("div",{className:"flex flex-col flex-wrap justify-center w-full md:w-[22%]",children:[e.jsx("div",{children:"Challan No. "}),e.jsx("div",{className:"font-semibold text-base",children:N(a==null?void 0:a.challan_no)})]}),e.jsxs("div",{className:"flex flex-col flex-wrap justify-center w-full md:w-[22%]",children:[e.jsx("div",{children:"Challan Date "}),e.jsx("div",{className:"font-semibold text-base",children:ae(a==null?void 0:a.challan_date)})]}),e.jsxs("div",{className:"hidden md:flex flex-col flex-wrap justify-center w-full",children:[e.jsx("div",{children:"Violation Made "}),e.jsx("div",{className:"font-semibold text-base",children:N(a==null?void 0:a.violation_name)})]}),e.jsxs("div",{className:"flex flex-col flex-wrap justify-center w-full md:w-[22%]",children:[e.jsx("div",{children:"Violation Section "}),e.jsx("div",{className:"font-semibold text-base",children:N(a==null?void 0:a.violation_section)})]}),e.jsxs("div",{className:"flex flex-col flex-wrap justify-center w-full md:w-[22%]",children:[e.jsx("div",{children:"Penalty Amount "}),e.jsx("div",{className:"font-bold text-base",children:S(a==null?void 0:a.amount)})]})]}),e.jsx("div",{children:a!=null&&a.is_bpl?e.jsx(e.Fragment,{children:e.jsx("div",{className:"w-full h-full bg-white sm:p-20 p-2",children:e.jsxs("div",{children:[e.jsx("div",{className:"text-center font-semibold text-3xl",children:"As you belongs to BPL category, so you don't need to pay. And your application is sent for verification."}),e.jsx("div",{className:"text-center mt-6",children:e.jsx("button",{className:"mr-4 bg-white border border-indigo-500 text-indigo-500 px-4 py-1 shadow-lg hover:scale-105 rounded-sm",onClick:()=>f(`/fp-details/${r}`),children:"View Application"})})]})})}):e.jsx(e.Fragment,{children:a!=null&&a.payment_status?e.jsx("div",{className:"w-full h-full bg-white sm:p-20 p-2",children:e.jsxs("div",{children:[e.jsx("div",{className:"text-center font-semibold text-3xl",children:"Payment Already Done. You can view your receipt or challan."}),e.jsxs("div",{className:"text-center mt-6",children:[e.jsx("button",{className:"mr-4 bg-indigo-500  text-white px-6 py-1 shadow-lg hover:scale-105 rounded-sm",onClick:()=>f(`/fp-receipt/${encodeURIComponent(a==null?void 0:a.tran_no)}`),children:"View Receipt"}),e.jsx("button",{className:"mr-4 bg-white border border-indigo-500 text-indigo-500 px-4 py-1 shadow-lg hover:scale-105 rounded-sm",onClick:()=>f(`/challan/${r}`),children:"View Challan"})]})]})}):e.jsx(xe,{demand:a})})})]})]})})})};export{Ie as default};