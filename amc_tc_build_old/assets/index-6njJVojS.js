import{c as Re,f as fe,j as s}from"./index-dwKkay3R.js";import{e as Fe,u as ke,d as We}from"./router-vn-0iGwJ.js";import"./moment-UBOc2Xni.js";import{P as qe}from"./index-9kt2-pTt.js";import{O as Ee}from"./OverLayLoader-5ejD9ZPZ.js";import"./reactQuery-VYMV1vFj.js";import"./reactQueryDevtools-6dm9iask.js";import"./axios-lPgvryBG.js";import"./tailwind-umh7vczy.js";import"./reactIcons-lANGEfNm.js";import"./headlessui-pLs_kC1m.js";import"./module-ynV3wrTW.js";function Ue(){var o,c,r,t,m,a,l,d,N,u,h,x,p,A,j,v,M,b,D,y,P,C,T,w,g,R,f,F,k,W,q,E,L,B,S,I,K,V,_,z,O,Y,G,H,U,Z,J,Q,X,$,ee,se,ne,ie,oe,ce,re,te,me,ae,le;const{id:n}=Fe(),Pe=ke(),{data:e,isLoading:Ce}=Re({api:fe.waterPaymentReceipt,config:{tranId:n},value:[n],options:{enabled:!!n}}),Te=We.useCallback(()=>{var de,Ne,ue,he,xe,pe,Ae,je,ve,Me,be,De,ye;return((de=e==null?void 0:e.data)==null?void 0:de.paymentMode)=="Cheque"?"Payment Mode: "+((Ne=e==null?void 0:e.data)==null?void 0:Ne.paymentMode)+"\nBank Name: "+((ue=e==null?void 0:e.data)==null?void 0:ue.bankName)+"\nBranch Name: "+((he=e==null?void 0:e.data)==null?void 0:he.branchName)+"\nCheque no: "+((xe=e==null?void 0:e.data)==null?void 0:xe.chequeNo)+"\nCheque Date: "+((pe=e==null?void 0:e.data)==null?void 0:pe.chequeDate):((Ae=e==null?void 0:e.data)==null?void 0:Ae.paymentMode)=="DD"?"Payment Mode: "+((je=e==null?void 0:e.data)==null?void 0:je.paymentMode)+"\nBank Name: "+((ve=e==null?void 0:e.data)==null?void 0:ve.bankName)+"\nBranch Name: "+((Me=e==null?void 0:e.data)==null?void 0:Me.branchName)+"\nDD No: "+((be=e==null?void 0:e.data)==null?void 0:be.chequeNo)+"\nDD Date: "+((De=e==null?void 0:e.data)==null?void 0:De.chequeDate):"Payment Mode: "+((ye=e==null?void 0:e.data)==null?void 0:ye.paymentMode)},[e==null?void 0:e.data]),we="  "+((o=e==null?void 0:e.data)==null?void 0:o.ulbName)+"\n[C]WATER USER CHARGE\n[C]PAYMENT RECEIPT\n********************************\nTransaction No : "+((c=e==null?void 0:e.data)==null?void 0:c.transactionNo)+"\nReceived From Mr/Mrs/Miss : "+((r=e==null?void 0:e.data)==null?void 0:r.customerName)+"\nDepartment/Section : "+((t=e==null?void 0:e.data)==null?void 0:t.accountDescription)+"\nAccount Description : "+((m=e==null?void 0:e.data)==null?void 0:m.description)+"\nZone : "+((a=e==null?void 0:e.data)==null?void 0:a.zoneName)+"\nWard No : "+((l=e==null?void 0:e.data)==null?void 0:l.WardNo)+"\nConsumer No: "+((d=e==null?void 0:e.data)==null?void 0:d.consumerNo)+"\nDate : "+((N=e==null?void 0:e.data)==null?void 0:N.transactionDate)+"\nTransaction Time : "+((u=e==null?void 0:e.data)==null?void 0:u.transactionTime)+"\nMobile No : "+((h=e==null?void 0:e.data)==null?void 0:h.customerMobile)+"\nAddress : "+((x=e==null?void 0:e.data)==null?void 0:x.address)+"\nSession : "+((p=e==null?void 0:e.data)==null?void 0:p.session)+"\nPenalty : "+Math.round((A=e==null?void 0:e.data)==null?void 0:A.penaltyAmount).toFixed(2)+"\nAdvance Amount : "+Math.round((j=e==null?void 0:e.data)==null?void 0:j.advancePaidAmount).toFixed(2)+"\nAdjust Amount : "+Math.round((v=e==null?void 0:e.data)==null?void 0:v.adjustAmount).toFixed(2)+"\nDue Amount : "+Math.round((M=e==null?void 0:e.data)==null?void 0:M.dueAmount).toFixed(2)+"\nPaid Amount : "+Math.round((b=e==null?void 0:e.data)==null?void 0:b.totalPaidAmount).toFixed(2)+"\n(in words) :"+((D=e==null?void 0:e.data)==null?void 0:D.paidAmtInWords)+"\nTowards : "+((y=e==null?void 0:e.data)==null?void 0:y.towards)+"\n"+Te()+"\nWater Consumed (in K.L.) : "+((P=e==null?void 0:e.data)==null?void 0:P.waterConsumed)+"\nLast Meter Reading (in K.L.) : "+((C=e==null?void 0:e.data)==null?void 0:C.unitConsumed)+"\n********************************\nTc Name : "+((T=e==null?void 0:e.data)==null?void 0:T.empName)+"\nTc Mobile No. : "+((w=e==null?void 0:e.data)==null?void 0:w.empMobile)+"\n[C]Thank You!\n[C]For More Details Please\n[C]Visit: "+((g=e==null?void 0:e.data)==null?void 0:g.currentWebSite)+"\n********************************\n",ge=()=>{window.ReactNativeWebView&&window.ReactNativeWebView.postMessage(JSON.stringify({Key:"PRINT_FOR_BT_PRINTER",keyData:{charPerLine:32,printTxt:we}}))};return s.jsxs(qe,{title:"Payment Receipt",children:[Ce&&s.jsx(Ee,{}),s.jsxs("div",{className:"p-4",children:[s.jsx("div",{className:" border-dashed text-[14px]  bg-white text-gray-700  border-2 font-Lato  w-full p-3  mt-4 border-gray-700 ",children:s.jsx("div",{className:" text-justify font-poppins ",children:s.jsxs("div",{className:" text-gray-700  text-xs",children:[s.jsx("div",{className:"text-center",children:s.jsx("img",{src:"/amc_icon.png",className:"w-12 mx-auto",alt:"Akola Municipal Corporation",loading:"lazy"})}),s.jsx("div",{className:"text-center  font-semibold uppercase",children:((R=e==null?void 0:e.data)==null?void 0:R.ulbName)||"NA"}),s.jsx("div",{className:"text-center text-xs",children:"WATER USER CHARGE"}),s.jsx("div",{className:"text-center text-xs",children:"PAYMENT RECEIPT"}),s.jsxs("div",{className:"mt-4",children:["Transaction No : ",((f=e==null?void 0:e.data)==null?void 0:f.transactionNo)||"NA"]}),s.jsxs("div",{className:"",children:["Received From Mr/Mrs/Miss : ",((F=e==null?void 0:e.data)==null?void 0:F.customerName)||"NA"]}),s.jsxs("div",{className:"",children:["Department/Section : ",((k=e==null?void 0:e.data)==null?void 0:k.accountDescription)||"NA"]}),s.jsxs("div",{className:"",children:["Account Description : ",((W=e==null?void 0:e.data)==null?void 0:W.description)||"NA"]}),s.jsxs("div",{className:"",children:["Zone : ",((q=e==null?void 0:e.data)==null?void 0:q.zoneName)||"NA"]}),s.jsxs("div",{className:"",children:["Ward No : ",((E=e==null?void 0:e.data)==null?void 0:E.WardNo)||"NA"]}),s.jsxs("div",{className:"",children:["Consumer No: ",(L=e==null?void 0:e.data)==null?void 0:L.consumerNo]}),s.jsxs("div",{className:"",children:["Date : ",(B=e==null?void 0:e.data)==null?void 0:B.transactionDate]}),s.jsxs("div",{className:"",children:["Transaction Time : ",(S=e==null?void 0:e.data)==null?void 0:S.transactionTime]}),s.jsxs("div",{className:"",children:["Mobile No : ",((I=e==null?void 0:e.data)==null?void 0:I.customerMobile)||"NA"]}),s.jsxs("div",{className:"",children:["Address : ",(K=e==null?void 0:e.data)==null?void 0:K.address]}),s.jsxs("div",{className:"w-80",children:["Session : ",((V=e==null?void 0:e.data)==null?void 0:V.session)||"NA"]}),s.jsxs("div",{className:"",children:["Penalty :"," ",Math.round((_=e==null?void 0:e.data)==null?void 0:_.penaltyAmount).toFixed(2)||"NA"]}),s.jsxs("div",{className:"",children:["Advance Amount :"," ",Math.round((z=e==null?void 0:e.data)==null?void 0:z.advancePaidAmount).toFixed(2)||"NA"]}),s.jsxs("div",{className:"",children:["Adjust Amount :"," ",Math.round((O=e==null?void 0:e.data)==null?void 0:O.adjustAmount).toFixed(2)||"NA"]}),s.jsxs("div",{className:"",children:["Paid Amount :"," ",Math.round((Y=e==null?void 0:e.data)==null?void 0:Y.totalPaidAmount).toFixed(2)||"NA"]}),s.jsxs("div",{className:"",children:["(in words) :",((G=e==null?void 0:e.data)==null?void 0:G.paidAmtInWords)||"NA"]}),s.jsxs("div",{className:"",children:["Due Amount :"," ",Math.round((H=e==null?void 0:e.data)==null?void 0:H.dueAmount).toFixed(2)||"NA"]}),s.jsxs("div",{className:"",children:["Towards :"," ",(U=e==null?void 0:e.data)==null?void 0:U.towards]}),s.jsxs("div",{className:"",children:["Vide : ",(Z=e==null?void 0:e.data)==null?void 0:Z.paymentMode]}),s.jsxs("div",{className:"w-80",children:["Water Consumed (in K.L.) : ",((J=e==null?void 0:e.data)==null?void 0:J.waterConsumed)||"NA"]}),s.jsxs("div",{className:"w-80",children:["Last Meter Reading (in K.L.) :"," ",((Q=e==null?void 0:e.data)==null?void 0:Q.unitConsumed)||"NA"]}),((X=e==null?void 0:e.data)==null?void 0:X.paymentMode)=="Cheque"&&s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"",children:["Bank name : ",(($=e==null?void 0:e.data)==null?void 0:$.bankName)||"NA"]}),s.jsxs("div",{className:"",children:["Branch name : ",((ee=e==null?void 0:e.data)==null?void 0:ee.branchName)||"NA"]}),s.jsxs("div",{className:"",children:["Cheque no. : ",((se=e==null?void 0:e.data)==null?void 0:se.chequeNo)||"NA"]}),s.jsxs("div",{className:"",children:["Cheque date : ",((ne=e==null?void 0:e.data)==null?void 0:ne.chequeDate)||"NA"]})]}),((ie=e==null?void 0:e.data)==null?void 0:ie.paymentMode)=="DD"&&s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"",children:["Bank name : ",((oe=e==null?void 0:e.data)==null?void 0:oe.bank_name)||"NA"]}),s.jsxs("div",{className:"",children:["Branch name : ",((ce=e==null?void 0:e.data)==null?void 0:ce.branchName)||"NA"]}),s.jsxs("div",{className:"",children:["DD No. : ",((re=e==null?void 0:e.data)==null?void 0:re.chequeNo)||"NA"]}),s.jsxs("div",{className:"",children:["DD Date : ",((te=e==null?void 0:e.data)==null?void 0:te.chequeDate)||"NA"]})]}),s.jsx("div",{className:"text-center mt-2",children:"****************************************************"}),s.jsxs("div",{className:"",children:["Tc Name : ",(me=e==null?void 0:e.data)==null?void 0:me.empName]}),s.jsxs("div",{className:"",children:["Tc Mobile No. : ",(ae=e==null?void 0:e.data)==null?void 0:ae.empMobile]}),s.jsx("div",{className:"text-center font-semibold capitalize mt-6",children:"Thank You!"}),s.jsx("div",{className:"text-center font-semibold  ",children:"For More Details Please"}),s.jsxs("div",{className:"text-center font-semibold  ",children:["Visit: ",((le=e==null?void 0:e.data)==null?void 0:le.currentWebSite)||"NA"]})]})})}),s.jsxs("div",{className:"text-center mt-4 flex justify-center items-center gap-4",children:[s.jsx("button",{className:"bg-blue-500 text-white px-4 py-1 rounded-md",onClick:()=>Pe("/amc-app/water/search-consumer"),children:"Search Consumer"}),s.jsx("button",{className:"bg-blue-500 text-white px-4 py-1 rounded-md",onClick:()=>{var i;ge(),console.log((i=e.data)==null?void 0:i.receiptDtls)},children:"Print"})]})]})]})}export{Ue as default};