System.register(["./index-legacy-F9uaGzah.js","./moment-legacy-DC8SbIhK.js","./index-legacy-gbmSx7Gb.js","./OverLayLoader-legacy-39WmvQoQ.js","./module-legacy-fvHIAAPk.js"],(function(l,n){"use strict";var a,e,d,i,o,t,s,u;return{setters:[function(l){a=l.m,e=l.a,d=l.l,i=l.R,o=l.j,t=l.w},null,function(l){s=l.P},function(l){u=l.O},null],execute:function(){l("default",(function(){var l,n,c,v,r,m,N,h,x,j,p,A,b,M,y,C,D,T,w,g,f,R,q,P,k,E,F,W,L,S,B,I,K,V,_,O,Y,z,G,H,U,Z,J,Q,X,$,ll,nl,al,el,dl,il,ol,tl,sl,ul,cl,vl,rl=a().id,ml=e(),Nl=d({api:t.waterPaymentReceipt,config:{transactionNo:rl},value:[rl],options:{enabled:!!rl}}),hl=Nl.data,xl=Nl.isLoading,jl=i.useCallback((function(){var l,n,a,e,d,i,o,t,s,u,c,v,r;return"Cheque"===(null==hl||null===(l=hl.data)||void 0===l?void 0:l.paymentMode)?"Payment Mode: "+(null==hl||null===(n=hl.data)||void 0===n?void 0:n.paymentMode)+"\nBank Name: "+(null==hl||null===(a=hl.data)||void 0===a?void 0:a.bankName)+"\nBranch Name: "+(null==hl||null===(e=hl.data)||void 0===e?void 0:e.branchName)+"\nCheque no: "+(null==hl||null===(d=hl.data)||void 0===d?void 0:d.chequeNo)+"\nCheque Date: "+(null==hl||null===(i=hl.data)||void 0===i?void 0:i.chequeDate):"DD"===(null==hl||null===(o=hl.data)||void 0===o?void 0:o.paymentMode)?"Payment Mode: "+(null==hl||null===(t=hl.data)||void 0===t?void 0:t.paymentMode)+"\nBank Name: "+(null==hl||null===(s=hl.data)||void 0===s?void 0:s.bankName)+"\nBranch Name: "+(null==hl||null===(u=hl.data)||void 0===u?void 0:u.branchName)+"\nCheque no: "+(null==hl||null===(c=hl.data)||void 0===c?void 0:c.chequeNo)+"\nCheque Date: "+(null==hl||null===(v=hl.data)||void 0===v?void 0:v.chequeDate):"Payment Mode: "+(null==hl||null===(r=hl.data)||void 0===r?void 0:r.paymentMode)}),[null==hl||null===(l=hl.data)||void 0===l?void 0:l.receiptDtls]),pl="  "+(null==hl||null===(n=hl.data)||void 0===n?void 0:n.ulbName)+"\n[C]WATER USER CHARGE\n[C]PAYMENT RECEIPT\n****************************************************\nTransaction No : "+(null==hl||null===(c=hl.data)||void 0===c?void 0:c.transactionNo)+"\nReceived From Mr/Mrs/Miss : "+(null==hl||null===(v=hl.data)||void 0===v?void 0:v.customerName)+"\nDepartment/Section : "+(null==hl||null===(r=hl.data)||void 0===r?void 0:r.accountDescription)+"\nAccount Description : "+(null==hl||null===(m=hl.data)||void 0===m?void 0:m.description)+"\nZone : "+(null==hl||null===(N=hl.data)||void 0===N?void 0:N.zoneName)+"\nWard No : "+(null==hl||null===(h=hl.data)||void 0===h?void 0:h.WardNo)+"\nConsumer No: "+(null==hl||null===(x=hl.data)||void 0===x?void 0:x.consumerNo)+"\nDate : "+(null==hl||null===(j=hl.data)||void 0===j?void 0:j.transactionDate)+"\nTransaction Time : "+(null==hl||null===(p=hl.data)||void 0===p?void 0:p.transactionTime)+"\nMobile No : "+(null==hl||null===(A=hl.data)||void 0===A?void 0:A.customerMobile)+"\nAddress : "+(null==hl||null===(b=hl.data)||void 0===b?void 0:b.address)+"\nSession : "+(null==hl||null===(M=hl.data)||void 0===M?void 0:M.session)+"\nAmount : "+Math.round(null==hl||null===(y=hl.data)||void 0===y?void 0:y.demandAmount).toFixed(2)+"\nPenalty : "+Math.round(null==hl||null===(C=hl.data)||void 0===C?void 0:C.penaltyAmount).toFixed(2)+"\nDue Amount : "+Math.round(null==hl||null===(D=hl.data)||void 0===D?void 0:D.dueAmount).toFixed(2)+"\n(in words) :"+(null==hl||null===(T=hl.data)||void 0===T?void 0:T.paidAmtInWords)+"\nTowards : "+(null==hl||null===(w=hl.data)||void 0===w?void 0:w.towards)+"\n"+jl()+"\nWater Consumed (in K.L.) : "+(null==hl||null===(g=hl.data)||void 0===g?void 0:g.waterConsumed)+"\nLast Meter Reading (in K.L.) : "+(null==hl||null===(f=hl.data)||void 0===f?void 0:f.unitConsumed)+"\n****************************************************\nTc Name : "+(null==hl||null===(R=hl.data)||void 0===R?void 0:R.empName)+"\nTc Mobile No. : "+(null==hl||null===(q=hl.data)||void 0===q?void 0:q.empMobile)+"\n[C]Thank You!\n[C]For More Details Please\n[C]Visit: "+(null==hl||null===(P=hl.data)||void 0===P?void 0:P.currentWebSite)+"\n****************************************************\n";return o.jsxs(s,{title:"Payment Receipt",children:[xl&&o.jsx(u,{}),o.jsxs("div",{className:"p-4",children:[o.jsx("div",{className:" border-dashed text-[14px]  bg-white text-gray-700  border-2 font-Lato  w-full p-3  mt-4 border-gray-700 ",children:o.jsx("div",{className:" text-justify font-poppins ",children:o.jsxs("div",{className:" text-gray-700  text-xs",children:[o.jsx("div",{className:"text-center",children:o.jsx("img",{src:"/amc_icon.png",className:"w-12 mx-auto"})}),o.jsx("div",{className:"text-center  font-semibold uppercase",children:(null==hl||null===(k=hl.data)||void 0===k?void 0:k.ulbName)||"NA"}),o.jsx("div",{className:"text-center text-xs",children:"WATER USER CHARGE"}),o.jsx("div",{className:"text-center text-xs",children:"PAYMENT RECEIPT"}),o.jsxs("div",{className:"mt-4",children:["Transaction No : ",(null==hl||null===(E=hl.data)||void 0===E?void 0:E.transactionNo)||"NA"]}),o.jsxs("div",{className:"",children:["Received From Mr/Mrs/Miss : ",(null==hl||null===(F=hl.data)||void 0===F?void 0:F.customerName)||"NA"]}),o.jsxs("div",{className:"",children:["Department/Section : ",(null==hl||null===(W=hl.data)||void 0===W?void 0:W.accountDescription)||"NA"]}),o.jsxs("div",{className:"",children:["Account Description : ",(null==hl||null===(L=hl.data)||void 0===L?void 0:L.description)||"NA"]}),o.jsxs("div",{className:"",children:["Zone : ",(null==hl||null===(S=hl.data)||void 0===S?void 0:S.zoneName)||"NA"]}),o.jsxs("div",{className:"",children:["Ward No : ",(null==hl||null===(B=hl.data)||void 0===B?void 0:B.WardNo)||"NA"]}),o.jsxs("div",{className:"",children:["Consumer No: ",null==hl||null===(I=hl.data)||void 0===I?void 0:I.consumerNo]}),o.jsxs("div",{className:"",children:["Date : ",null==hl||null===(K=hl.data)||void 0===K?void 0:K.transactionDate]}),o.jsxs("div",{className:"",children:["Transaction Time : ",null==hl||null===(V=hl.data)||void 0===V?void 0:V.transactionTime]}),o.jsxs("div",{className:"",children:["Mobile No : ",(null==hl||null===(_=hl.data)||void 0===_?void 0:_.customerMobile)||"NA"]}),o.jsxs("div",{className:"",children:["Address : ",null==hl||null===(O=hl.data)||void 0===O?void 0:O.address]}),o.jsxs("div",{className:"w-80",children:["Session : ",(null==hl||null===(Y=hl.data)||void 0===Y?void 0:Y.session)||"NA"]}),o.jsxs("div",{className:"",children:["Amount :"," ",Math.round(null==hl||null===(z=hl.data)||void 0===z?void 0:z.demandAmount).toFixed(2)||"NA"]}),o.jsxs("div",{className:"",children:["Penalty :"," ",Math.round(null==hl||null===(G=hl.data)||void 0===G?void 0:G.penaltyAmount).toFixed(2)||"NA"]}),o.jsxs("div",{className:"",children:["Due Amount :"," ",Math.round(null==hl||null===(H=hl.data)||void 0===H?void 0:H.dueAmount).toFixed(2)||"NA"]}),o.jsxs("div",{className:"",children:["(in words) :",(null==hl||null===(U=hl.data)||void 0===U?void 0:U.paidAmtInWords)||"NA"]}),o.jsxs("div",{className:"",children:["Towards :"," ",null==hl||null===(Z=hl.data)||void 0===Z?void 0:Z.towards]}),o.jsxs("div",{className:"",children:["Vide : ",null==hl||null===(J=hl.data)||void 0===J?void 0:J.paymentMode]}),o.jsxs("div",{className:"w-80",children:["Water Consumed (in K.L.) : ",(null==hl||null===(Q=hl.data)||void 0===Q?void 0:Q.waterConsumed)||"NA"]}),o.jsxs("div",{className:"w-80",children:["Last Meter Reading (in K.L.) :"," ",(null==hl||null===(X=hl.data)||void 0===X?void 0:X.unitConsumed)||"NA"]}),"Cheque"==(null==hl||null===($=hl.data)||void 0===$?void 0:$.paymentMode)&&o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"",children:["Bank name : ",(null==hl||null===(ll=hl.data)||void 0===ll?void 0:ll.bankName)||"NA"]}),o.jsxs("div",{className:"",children:["Branch name : ",(null==hl||null===(nl=hl.data)||void 0===nl?void 0:nl.branchName)||"NA"]}),o.jsxs("div",{className:"",children:["Cheque no. : ",(null==hl||null===(al=hl.data)||void 0===al?void 0:al.chequeNo)||"NA"]}),o.jsxs("div",{className:"",children:["Cheque date : ",(null==hl||null===(el=hl.data)||void 0===el?void 0:el.chequeDate)||"NA"]})]}),"DD"==(null==hl||null===(dl=hl.data)||void 0===dl?void 0:dl.paymentMode)&&o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"",children:["Bank name : ",(null==hl||null===(il=hl.data)||void 0===il?void 0:il.bank_name)||"NA"]}),o.jsxs("div",{className:"",children:["Branch name : ",(null==hl||null===(ol=hl.data)||void 0===ol?void 0:ol.branchName)||"NA"]}),o.jsxs("div",{className:"",children:["Cheque no. : ",(null==hl||null===(tl=hl.data)||void 0===tl?void 0:tl.chequeNo)||"NA"]}),o.jsxs("div",{className:"",children:["Cheque date : ",(null==hl||null===(sl=hl.data)||void 0===sl?void 0:sl.chequeDate)||"NA"]})]}),o.jsx("div",{className:"text-center mt-2",children:"****************************************************"}),o.jsxs("div",{className:"",children:["Tc Name : ",null==hl||null===(ul=hl.data)||void 0===ul?void 0:ul.empName]}),o.jsxs("div",{className:"",children:["Tc Mobile No. : ",null==hl||null===(cl=hl.data)||void 0===cl?void 0:cl.empMobile]}),o.jsx("div",{className:"text-center font-semibold capitalize mt-6",children:"Thank You!"}),o.jsx("div",{className:"text-center font-semibold  ",children:"For More Details Please"}),o.jsxs("div",{className:"text-center font-semibold  ",children:["Visit: ",(null==hl||null===(vl=hl.data)||void 0===vl?void 0:vl.currentWebSite)||"NA"]})]})})}),o.jsxs("div",{className:"text-center mt-4 flex justify-center items-center gap-4",children:[o.jsx("button",{className:"bg-blue-500 text-white px-4 py-1 rounded-md",onClick:function(){return ml("/amc-app/water/search-consumer")},children:"Search Consumer"}),o.jsx("button",{className:"bg-blue-500 text-white px-4 py-1 rounded-md",onClick:function(){var l;window.ReactNativeWebView&&window.ReactNativeWebView.postMessage(JSON.stringify({Key:"PRINT_FOR_BT_PRINTER",keyData:{charPerLine:32,printTxt:pl}})),console.log(null===(l=hl.data)||void 0===l?void 0:l.receiptDtls)},children:"Print"})]})]})]})}))}}}));