import{Y as D,a as x,f as v,j as i,n as t,C as L,g as b}from"./index-bf609e3d.js";import{P as C}from"./PilotWorkflowIndex-eaab615c.js";import"./PilotWorkflowListBox-0365eb06.js";/* empty css             */import"./index.esm-a1668627.js";import"./PilotWorkflowDocumentRow-f64501ed.js";import"./index.esm-eaeeb29a.js";import"./photo-f9d7c0b5.js";import"./index.esm-d3875e3b.js";import"./SwitchBase-ca08656a.js";import"./useFormControl-41b49288.js";import"./Typography-5fa6da46.js";import"./useTimeout-d7c9c8ed.js";import"./EmptyDetailsIllustration-41b88da4.js";import"./notfound1-b58e95b5.js";import"./moment-f3e1919c.js";import"./Tabs-066676cc.js";import"./react-is.production.min-56269800.js";function ia(){const{t:e}=D();x("Waiver Workflow");const{api_safInboxList:j,api_safOutboxList:y,api_getsafSpecialList:H,api_safBTCList:k,api_postEscalateStatus:A,api_postComment:n,api_postApplicationToLevel:P,api_approveRejectForm:T,api_backToCitizen:B,api_getSafDetailsById:I,api_workflowInfo:m,api_verifyDocumentsSaf:S,api_postDepartmental:d,api_uploadDocument:c,api_getDepartmentalData:_,getDocumentList:W,api_uploadDocumentShow:N,api_fieldVerificationList:$,post_waiverDocList:r,post_waiverDocVerify:u,post_waiverFinalApproval:w,post_waiverInbox:f,post_waiverApprovedList:p,post_waiverApplicationDetails:g}=b(),h={api:{api_inboxList:{method:"get",url:f},api_outboxList:{method:"get",url:p},api_specialList:{method:"get",url:p},apt_btcList:{method:"post",url:p},api_fieldVerificationList:{method:"post",url:p},api_details:{method:"post",url:g},api_workflowInfo:{method:"post",url:m},api_independentComment:{method:"post",url:n},api_approveReject:{method:"post",url:w},api_postDepartmentalData:{method:"post",url:d},api_getDepartmentalData:{method:"post",url:_},api_uploadDocumentShow:{method:"post",url:r},api_uploadDocument:{method:"post",url:c},api_verifyDocuments:{method:"post",url:u},api_documentList:{method:"post",url:r},documentBaseUrl:v},tableColumns:[{Header:"#",Cell:({row:o})=>i.jsx("div",{className:"pr-2",children:o.index+1})},{Header:`${e("mainHoldingPage.holdingWardNumber.label")}`,accessor:"ward_no",Cell:({cell:o})=>{var a,l,s;return i.jsx("span",{children:t((a=o.row.original)==null?void 0:a.old_ward_no)=="NA"?t((l=o.row.original)==null?void 0:l.new_ward_no):t((s=o.row.original)==null?void 0:s.old_ward_no)})}},{Header:`${e("mainHoldingPage.applicationNum.label")}`,accessor:"application_no",Cell:({cell:o})=>{var a;return i.jsx("span",{children:t((a=o.row.original)==null?void 0:a.application_no)})}},{Header:`${e("mainHoldingPage.propertyApplicantNm.label")}`,accessor:"applicant_name",Cell:({cell:o})=>{var a;return i.jsx("span",{children:t((a=o.row.original)==null?void 0:a.applicant_name)})}},{Header:`${e("mainHoldingPage.propertyAppliType.label")}`,accessor:"application_type",Cell:({cell:o})=>{var a;return i.jsx("span",{children:t((a=o.row.original)==null?void 0:a.application_type)})}},{Header:`${e("mainHoldingPage.propertyApplyDate.label")}`,accessor:"application_date",Cell:({cell:o})=>{var a;return i.jsx("span",{children:t((a=o.row.original)==null?void 0:a.application_date)})}}],customTabs:null,hasBTC:!0,hasFieldVerification:!0};return i.jsx(L,{errorMsg:"Bug in PilotWorkflowIndex",children:i.jsx(C,{workflowData:h})})}export{ia as default};