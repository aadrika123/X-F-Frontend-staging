import{m as i,l as h,j as e,r as n,w as x}from"./index-o2TvC3Qg.js";import{P as j}from"./index-jrXgD0bu.js";import{h as s}from"./moment-UBOc2Xni.js";function k(){var c;const{id:l}=i(),d=h({api:x.waterDemandReceipt,config:{consumerId:l},options:{enabled:!!l}}),r=(c=d==null?void 0:d.data)==null?void 0:c.data,o="  AKOLA MUNICIPAL CORPORATION\nAkola Water Supply (Water Bill)  \n********************************\nConsumer No / ग्राहक क्रमांक: "+(r==null?void 0:r.consumer_no)+"\nFrom /पासून: "+s(r==null?void 0:r.demand_from).format("MMM-yy")+"\nTo /पर्यंत: "+s(r==null?void 0:r.demand_upto).format("MMM-yy")+"\nBill No / बिल क्रमांक: "+(r==null?void 0:r.demand_no)+"\nTax No /कर क्र: "+(r==null?void 0:r.folio_no)+"\nBill Date / बिल तारीख: "+(r==null?void 0:r.billDate)+"\nBill Due Date/बिल देय तारीख: "+(r==null?void 0:r.bilDueDate)+"\nConsumer Name/ग्राहक नाव: "+(r==null?void 0:r.applicant_name)+"\nConsumer Address/ ग्राहक पत्ता: "+(r==null?void 0:r.address)+"\nConnection Dt जोडणी दिनांक: \nConnection Type जोडणीचा प्रकार: "+(r==null?void 0:r.category)+"\nTap size जोडणीचा आकार: "+(r==null?void 0:r.tab_size)+"\nZone झोन: "+(r==null?void 0:r.zone)+"\nOld Property no जुना मालमत्ता क्रमांक: "+(r==null?void 0:r.property_no)+"\nNew Property no नवीन मालमत्ता क्रमांक: "+(r==null?void 0:r.folio_no)+"\nMeter no मीटर क्र: "+(r==null?void 0:r.meter_no)+"\nCurrent Reading वर्तमान वाचन मागील: "+(r==null?void 0:r.finalReading)+"/"+(r==null?void 0:r.generation_date)+"\nPrev Reading मागील वाचन: "+(r==null?void 0:r.initialReading)+"/"+(r==null?void 0:r.arrear_demand_date)+"\nUnit वापरलेली एकूण युनिट: "+(r==null?void 0:r.unitConsumed)+"\nMeter Status मीटर स्थिती: "+(r==null?void 0:r.connection_type)+"\n**************************\nConsumer No/ग्राहक क्र: "+(r==null?void 0:r.consumer_no)+"\nMob No: "+(r==null?void 0:r.mobile_no)+"\nBill No/बिल क्र: "+(r==null?void 0:r.demand_no)+"\nConsumer Name/ग्राहकाचे नाव: "+(r==null?void 0:r.applicant_name)+"\nBill Date/ बिल तारीख: "+(r==null?void 0:r.billDate)+"\nBill Due/ बिल देय: "+(r==null?void 0:r.bilDueDate)+"\nConsumer Address/ ग्राहकाचा पत्ता: "+(r==null?void 0:r.address)+"\nMeter No/मीटर क्रमांक: "+(r==null?void 0:r.meter_no)+"\nBill Outstanding Details देय रक्कम विवरण: \n***********************\nCur Bill Amount / रक्कम चालू देयक राशी: "+Math.round(r==null?void 0:r.generate_amount).toFixed(2)+"\nCur. Year Arrer/चालू. वर्षाची थकबाकी: "+(r==null?void 0:r.current_demands)+"\nLast Year Arrer/शेवटचे वर्षाची थकबाकी: "+(r==null?void 0:r.arrear_demands)+"\nAdjustment Bill/समायोजन विधेयक: 0\nTotal Outstanding/समायोजन विधेयक: "+(r==null?void 0:r.due_balance_amount)+"\nBefore Due Dt Amt/ देय होण्यापूर्वी दि: "+(r==null?void 0:r.due_balance_amount)+"********************************\nTc Name: "+(r==null?void 0:r.tcName)+"\nTc Mobile No: "+(r==null?void 0:r.tcMobile)+"\n\n[C]Thank You!\n[C]For More Details Please\n[C]Visit:  "+(r==null?void 0:r.website)+"\n\n\n\n",b=()=>{window.ReactNativeWebView&&window.ReactNativeWebView.postMessage(JSON.stringify({Key:"PRINT_FOR_BT_PRINTER",keyData:{charPerLine:32,printTxt:o}}))};return e.jsx(j,{title:"Demand Receipt",children:e.jsxs("div",{className:"p-4",children:[e.jsx("div",{className:"flex justify-center",children:e.jsx(n.Button,{size:"sm",color:"blue",onClick:()=>b(),children:"Print Demand"})}),e.jsx("div",{className:"w-full overflow-x-scroll",children:e.jsxs("div",{children:[e.jsx("div",{className:"w-[62rem] mx-auto mt-8 bg-white p-4 border border-black",children:e.jsxs("div",{className:"flex gap-32",children:[e.jsx("div",{children:e.jsx("img",{src:"https://mahabharti.co.in/wp-content/uploads/2020/09/Akola-Municipal-Corporation.png",alt:"akola",className:"w-28 h-28"})}),e.jsxs("div",{className:"pt-2 text-center",children:[e.jsx("h1",{className:"text-2xl font-bold  rounded-md",children:"AKOLA MUNICIPAL CORPORATION"}),e.jsx("p",{className:"text-1xl mt-2 font-semibold whitespace-nowrap",children:"Akola Water Supply (Water Bill)"})]})]})}),e.jsxs("div",{className:" w-[62rem] mx-auto bg-white p-4 border border-black ",children:[e.jsxs("div",{className:"w-full  text-center ",children:[e.jsxs("table",{className:"table-auto w-full text-sm font-semibold",children:[e.jsx("thead",{children:e.jsxs("tr",{style:{height:"30px"},className:"border border-black ",children:[e.jsxs("th",{className:"border border-black",children:["Consumer No / ग्राहक क्रमांक ",e.jsx("br",{}),r==null?void 0:r.consumer_no," "]}),e.jsx("th",{className:"border border-black",children:"From /पासून "}),e.jsx("th",{className:"border border-black",children:"To /पर्यंत "}),e.jsxs("th",{className:"border border-black",children:[" ","Bill No / बिल क्रमांक"," "]}),e.jsxs("th",{className:"border border-black",children:[" ",r==null?void 0:r.demand_no," "]})]})}),e.jsx("tbody",{children:e.jsxs("tr",{style:{height:"30px"},children:[e.jsx("td",{className:"border border-black",children:"Tax No /कर क्र"}),e.jsx("td",{className:"border-r border-black",children:s(r==null?void 0:r.demand_from).format("MMM-yy")}),e.jsx("td",{className:"",children:s(r==null?void 0:r.demand_upto).format("MMM-yy")}),e.jsxs("td",{className:"border border-black",children:[" ","Bill Date / बिल तारीख"," "]}),e.jsxs("td",{className:"border border-black",children:[" ",r==null?void 0:r.billDate," "]})]})}),e.jsx("tbody",{children:e.jsxs("tr",{style:{height:"30px"},children:[e.jsxs("td",{className:"border border-black",children:[r==null?void 0:r.folio_no," "]}),e.jsx("td",{className:"border-r border-black ",children:" "}),e.jsx("td",{className:"",children:" "}),e.jsxs("td",{className:"border border-black",children:[" ","Bill Due Date/बिल देय तारीख"," "]}),e.jsxs("td",{className:"border border-black",children:[" ",r==null?void 0:r.bilDueDate," "]})]})}),e.jsx("tbody",{children:e.jsxs("tr",{style:{height:"30px"},children:[e.jsxs("td",{className:"border border-black",children:[" ","Consumer Name/ग्राहक नाव"," "]}),e.jsxs("td",{className:"border border-black",colSpan:"3",children:[r==null?void 0:r.applicant_name," "]}),e.jsxs("td",{className:"border border-black ",children:[" ","Mobile No / मोबाईल क्र"," "]})]})}),e.jsx("tbody",{children:e.jsxs("tr",{style:{height:"30px"},children:[e.jsxs("td",{className:"border border-black",children:[" ","Consumer Address/ ग्राहक पत्ता"]}),e.jsxs("td",{className:"border border-black",colSpan:"3",children:[" ",r==null?void 0:r.address]}),e.jsxs("td",{className:"border border-black ",children:[(r==null?void 0:r.mobile_no)||"N/A"," "]})]})})]}),e.jsxs("table",{className:"table-auto w-full text-sm font-semibold",children:[e.jsx("thead",{children:e.jsxs("tr",{style:{height:"30px"},className:"border border-black ",children:[e.jsx("th",{className:"border border-black",children:"जोडणी दिनांक "}),e.jsx("th",{className:"border border-black",children:"जोडणीचा प्रकार "}),e.jsx("th",{className:"border border-black",children:"जोडणीचा आकार "}),e.jsx("th",{className:"border border-black",children:"झोन"}),e.jsxs("th",{className:"border border-black",children:["जुना मालमत्ता क्रमांक"," "]}),e.jsxs("th",{className:"border border-black",children:[" ","नवीन मालमत्ता क्रमांक"," "]})]})}),e.jsx("tbody",{children:e.jsxs("tr",{style:{height:"30px"},className:"border border-black ",children:[e.jsx("th",{className:"border border-black",children:"Connection Dt. "}),e.jsx("th",{className:"border border-black",children:"Connection Type"}),e.jsx("th",{className:"border border-black",children:"Tap size"}),e.jsx("th",{className:"border border-black",children:" zone"}),e.jsx("th",{className:"border border-black",children:"Old prop No. "}),e.jsx("th",{className:"border border-black",children:"New Prop No. "})]})}),e.jsx("tbody",{children:e.jsxs("tr",{style:{height:"30px"},children:[e.jsx("td",{className:"border border-black"}),e.jsxs("td",{className:"border border-black",children:[" ",(r==null?void 0:r.category)||"N/A"," "]}),e.jsxs("td",{className:"border border-black",children:[" ",(r==null?void 0:r.tab_size)||"N/A"," "]}),e.jsxs("td",{className:"border border-black",children:[" ",(r==null?void 0:r.zone)||"N/A"," "]}),e.jsxs("td",{className:"border border-black",children:[" ",(r==null?void 0:r.property_no)||"N/A"," "]}),e.jsxs("td",{className:"border border-black",children:[" ",(r==null?void 0:r.folio_no)||"N/A"," "]})]})})]}),e.jsxs("table",{className:"table-auto w-full text-sm font-semibold",children:[e.jsx("thead",{children:e.jsxs("tr",{style:{height:"30px"},children:[e.jsx("th",{className:"border border-black",children:"मीटर क्र "}),e.jsxs("th",{className:"border border-black",children:["वर्तमान वाचन मागील"," "]}),e.jsx("th",{className:"border border-black",children:"मागील वाचन"}),e.jsxs("th",{className:"border border-black",children:["वापरलेली एकूण युनिट"," "]}),e.jsx("th",{className:"border border-black",children:" मीटर स्थिती "})]})}),e.jsx("tbody",{children:e.jsxs("tr",{style:{height:"30px"},children:[e.jsx("th",{className:"border border-black",children:"Meter No "}),e.jsx("th",{className:"border border-black",children:"Current Reading"}),e.jsx("th",{className:"border border-black",children:"Previous Reading"}),e.jsx("th",{className:"border border-black",children:"Used Total Unit"}),e.jsx("th",{className:"border border-black",children:"Meter Status"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{style:{height:"30px"},children:[e.jsx("td",{className:"border border-black",children:(r==null?void 0:r.meter_no)||"N/A"}),e.jsxs("td",{className:"border border-black",children:[" ",r==null?void 0:r.finalReading,"/",r==null?void 0:r.generation_date," "]}),e.jsxs("td",{className:"border border-black",children:[r==null?void 0:r.initialReading,"/",(r==null?void 0:r.arrear_demand_date)||"N/A"," "]}),e.jsx("td",{className:"border border-black",children:r==null?void 0:r.unitConsumed}),e.jsxs("td",{className:"border border-black",children:[" ",r==null?void 0:r.connection_type," "]})]})})]})]}),e.jsxs("div",{className:"flex m-2  w-full ml-auto",children:[e.jsx("div",{className:"w-1/3 text-center",children:e.jsxs("div",{className:"w-full h-full border border-black overflow-hidden",children:[e.jsx("h1",{className:"border-b border-black",children:"मीटरचा फोटो "}),e.jsx("img",{src:decodeURIComponent(r==null?void 0:r.meterImg),alt:"Meter Image ",className:"w-full h-60"}),e.jsxs("h1",{className:"bg-gray-200",children:[r==null?void 0:r.user_name," "]}),e.jsx("h1",{className:"bg-gray-200",children:r==null?void 0:r.generation_date})]})}),e.jsx("div",{className:"w-[35%] text-center",children:e.jsx("div",{className:"w-full h-full border border-black overflow-hidden",children:e.jsxs("table",{className:"table-auto w-full text-sm font-semibold",children:[e.jsx("thead",{children:e.jsx("tr",{className:"",children:e.jsxs("th",{className:"border border-black",colSpan:"3",children:["Prev.Read Details मागील वापराचा तपशील"," "]})})}),e.jsx("tbody",{children:e.jsxs("tr",{className:" ",children:[e.jsx("th",{className:"border border-black",children:"Bill from "}),e.jsx("th",{className:"border border-black",children:"Bill To"}),e.jsx("th",{className:"border border-black",children:"Unit Use"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{className:"border border-black",children:"N/A"}),e.jsx("td",{className:"border border-black",children:"N/A"}),e.jsx("td",{className:"border border-black",children:"N/A "})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{className:"border border-black",children:"N/A"}),e.jsx("td",{className:"border border-black",children:"N/A"}),e.jsx("td",{className:"border border-black",children:"N/A "})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{className:"border border-black",children:"N/A"}),e.jsx("td",{className:"border border-black",children:"N/A"}),e.jsx("td",{className:"border border-black",children:"N/A "})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{className:"border border-black",children:"N/A"}),e.jsx("td",{className:"border border-black",children:"N/A"}),e.jsx("td",{className:"border border-black",children:"N/A"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{className:"border border-black",children:"N/A"}),e.jsx("td",{className:"border border-black",children:"N/A"}),e.jsx("td",{className:"border border-black",children:"N/A "})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{className:"border border-black",style:{height:"60px"},children:"Bill Info"}),e.jsxs("td",{className:"border border-black",children:[" ","Adjustmnet ALERT"," "]}),e.jsx("td",{className:"border border-black",children:"Spl. ALERT "})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsxs("td",{className:"border border-black",style:{height:"60px"},children:["N/A"," "]}),e.jsx("td",{className:"border border-black",children:"LDt 00.00.00"}),e.jsx("td",{className:"border border-black",children:"LA "})]})})]})})}),e.jsx("div",{className:"w-[35%] text-center",children:e.jsx("div",{className:"w-full h-full border border-black overflow-hidden",children:e.jsxs("table",{className:"table-auto w-full text-sm font-semibold",children:[e.jsx("thead",{children:e.jsx("tr",{className:"",children:e.jsxs("th",{className:"border border-black",colSpan:"2",children:["Bill Outst Details देय रक्कम विवरण"," "]})})}),e.jsx("tbody",{children:e.jsxs("tr",{style:{height:"50px"},children:[e.jsxs("th",{className:"border border-black ",children:["Cur. Bill Amt/रक्कम चालू देयक राशी"," "]}),e.jsx("th",{className:"border border-black",children:(r==null?void 0:r.generate_amount)||"0"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{style:{height:"50px"},children:[e.jsx("td",{className:"border border-black",children:"Cur. Year Arrer/चालू. वर्षाची थकबाकी"}),e.jsx("td",{className:"border border-black",children:Math.round(r==null?void 0:r.current_demands).toFixed(2)||"0"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{style:{height:"50px"},children:[e.jsx("td",{className:"border border-black",children:"Last Year Arrer/शेवटचे वर्षाची थकबाकी"}),e.jsx("td",{className:"border border-black",children:(r==null?void 0:r.arrear_demands)||"0"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{style:{height:"50px"},children:[e.jsx("td",{className:"border border-black",children:"Adjustment Bill/समायोजन विधेयक"}),e.jsx("td",{className:"border border-black",children:"0"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{style:{height:"50px"},children:[e.jsx("td",{className:"border border-black",children:"Total Outstanding/समायोजन विधेयक"}),e.jsx("td",{className:"border border-black",children:r==null?void 0:r.due_balance_amount})]})}),e.jsx("tbody",{children:e.jsxs("tr",{style:{height:"50px"},children:[e.jsxs("td",{className:"border border-black",children:["Before Due Dt Amt/ देय होण्यापूर्वी दि"," "]}),e.jsx("td",{className:"border border-black",children:r==null?void 0:r.due_balance_amount})]})})]})})})]}),e.jsx("table",{className:"table-auto w-full text-sm font-semibold",children:e.jsx("thead",{children:e.jsxs("tr",{style:{height:"50px"},children:[e.jsx("th",{className:"border border-black uppercase",colSpan:"1",children:"Special message/विशेष संदेश/alert no applied/सूचना लागू नाही"}),e.jsxs("th",{className:"border border-black uppercase",colSpan:"1",children:["Executive engineer/कार्यकारी अभियंता"," "]})]})})}),e.jsx("h1",{children:"-----------------------------------------------------------------------------------------------------------------------------------------------------"}),e.jsxs("div",{className:"flex m-2  w-full ml-auto",children:[e.jsx("div",{className:"w-[80%] text-center",children:e.jsx("div",{className:"w-full h-full border border-black overflow-hidden",children:e.jsxs("table",{className:"table-auto w-full text-sm font-semibold",children:[e.jsx("tbody",{children:e.jsxs("tr",{style:{height:"50px"},children:[e.jsxs("td",{className:"border border-black",children:["Consumer No/ग्राहक क्र ",e.jsx("br",{}),e.jsx("span",{children:r==null?void 0:r.consumer_no})," "]}),e.jsxs("td",{className:"border border-black",children:["Mob No."," ",e.jsx("span",{children:(r==null?void 0:r.mobile_no)||"N/A"})," "]}),e.jsxs("td",{className:"border border-black",children:["Bill No/बिल क्र ",e.jsx("br",{})," ",e.jsx("span",{children:(r==null?void 0:r.demand_no)||"N/A"})]})]})}),e.jsx("tbody",{children:e.jsxs("tr",{style:{height:"50px"},children:[e.jsxs("td",{className:"border border-black",children:["Consumer Name/ग्राहकाचे नाव"," "]}),e.jsxs("td",{className:"border border-black",children:[(r==null?void 0:r.applicant_name)||"N/A"," "]}),e.jsxs("td",{className:"border border-black",children:["Bill Date/ बिल तारीख ",e.jsx("br",{})," ",e.jsx("span",{children:(r==null?void 0:r.billDate)||"N/A"})]})]})}),e.jsx("tbody",{children:e.jsxs("tr",{style:{height:"50px"},children:[e.jsxs("td",{className:"border border-black",children:["Consumer Address/ ग्राहकाचा पत्ता"," "]}),e.jsxs("td",{className:"border border-black",children:[(r==null?void 0:r.address)||"N/A"," "]}),e.jsxs("td",{className:"border border-black",children:["Bill Due/ बिल देय ",e.jsx("br",{})," ",e.jsx("span",{children:(r==null?void 0:r.bilDueDate)||"N/A"})]})]})})]})})}),e.jsx("div",{className:"w-[20%] text-center",children:e.jsx("div",{className:"w-full h-full border border-black overflow-hidden ",children:e.jsx("img",{src:"https://pngimg.com/uploads/qr_code/qr_code_PNG25.png",alt:"akola",className:"w-32 h-32 text-center ml-8 mt-2"})})})]}),e.jsxs("table",{className:"table-auto w-full text-sm font-semibold text-center",children:[e.jsx("tbody",{children:e.jsxs("tr",{style:{height:"30px"},children:[e.jsxs("td",{className:"border border-black",children:["Meter No/मीटर क्रमांक:"," "]}),e.jsxs("td",{className:"border border-black",children:[" ",(r==null?void 0:r.meter_no)||"N/A"," "]}),e.jsxs("td",{className:"border border-black",children:["Current Bill Amount / रक्कम चालू देयक राशी"," "]}),e.jsx("td",{className:"border border-black",children:r==null?void 0:r.generate_amount})]})}),e.jsx("tbody",{children:e.jsxs("tr",{style:{height:"30px"},children:[e.jsxs("td",{className:"border border-black",children:["Meter Status/मीटर स्थिती"," "]}),e.jsxs("td",{className:"border border-black",children:[(r==null?void 0:r.connection_type)||"N/A"," "]}),e.jsxs("td",{className:"border border-black",children:["Current Year Arrers / चालू वर्षांतील थकबाकी"," "]}),e.jsx("td",{className:"border border-black",children:(r==null?void 0:r.current_demands)||"0"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{style:{height:"30px"},children:[e.jsxs("td",{className:"border border-black",children:["Connection Type/जोडणीचा प्रकार"," "]}),e.jsxs("td",{className:"border border-black",children:[" ",(r==null?void 0:r.category)||"N/A"," "]}),e.jsxs("td",{className:"border border-black",children:["Last Year Arrers / गेल्या वर्षीची थकबाकी"," "]}),e.jsx("td",{className:"border border-black",children:(r==null?void 0:r.arrear_demands)||"0"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{style:{height:"30px"},children:[e.jsxs("td",{className:"border border-black",children:["Tap size/जोडणीचा आकार"," "]}),e.jsxs("td",{className:"border border-black",children:[" ",(r==null?void 0:r.tab_size)||"N/A"," "]}),e.jsxs("td",{className:"border border-black",children:["Total outstanding / एकुण थकीत रक्कम"," "]}),e.jsx("td",{className:"border border-black",children:r==null?void 0:r.due_balance_amount})]})}),e.jsx("tbody",{children:e.jsxs("tr",{style:{height:"30px"},children:[e.jsxs("td",{className:"border border-black",children:["Current Reading/चालू रिडींग"," "]}),e.jsxs("td",{className:"border border-black",children:[r==null?void 0:r.finalReading," "]}),e.jsxs("td",{className:"border border-black",children:["Before due Dt Amt /मुदती पुर्व देय रक्कम"," "]}),e.jsx("td",{className:"border border-black",children:(r==null?void 0:r.due_balance_amountt)||"0"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{style:{height:"30px"},children:[e.jsxs("td",{className:"border border-black",children:["Previous reading/ मागील रिडींग"," "]}),e.jsxs("td",{className:"border border-black",children:[r==null?void 0:r.initialReading," "]}),e.jsxs("td",{className:"border border-black",children:["Adjustment of Bill / देयक दुरुस्ती"," "]}),e.jsx("td",{className:"border border-black",children:(r==null?void 0:r.adjust)||"0"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{style:{height:"30px"},children:[e.jsxs("td",{className:"border border-black",children:["Used Total / Build Unit/ एकूण वापर"," "]}),e.jsxs("td",{className:"border border-black",children:[" ",r==null?void 0:r.unitConsumed," "]}),e.jsxs("td",{className:"border border-black",children:["Before due Date Amt/मुदती पुर्व देय रक्कम"," "]}),e.jsx("td",{className:"border border-black",children:(r==null?void 0:r.due_balance_amount)||"0"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{style:{height:"30px"},children:[e.jsxs("td",{className:"border border-black",children:["Bill Period day/बिल कालावधी दिवस"," "]}),e.jsx("td",{className:"border border-black",children:"N/A "}),e.jsxs("td",{className:"border border-black",children:["After due Dt. Amt /देयक दुरुस्ती"," "]}),e.jsx("td",{className:"border border-black",children:"-"})]})})]})]})]})})]})})}export{k as default};