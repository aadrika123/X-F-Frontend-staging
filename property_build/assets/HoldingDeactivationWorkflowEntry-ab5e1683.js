import{a as D,j as e,f,W as a,g as H,P as v}from"./index-c55ddaa6.js";import{P as x}from"./PilotWorkflowIndex-905fbde6.js";import"./PilotWorkflowListBox-4aa79579.js";/* empty css             */import"./index.esm-56626ec9.js";import"./PilotWorkflowDocumentRow-77f82960.js";import"./index.esm-9f6d4b9d.js";import"./photo-f9d7c0b5.js";import"./index.esm-2d29a625.js";import"./SwitchBase-ca1c6b81.js";import"./useFormControl-a4f5a916.js";import"./Typography-0be44ab4.js";import"./useTimeout-91dc071d.js";import"./EmptyDetailsIllustration-ed85cba0.js";import"./notfound1-b58e95b5.js";import"./moment-77ab3113.js";import"./Tabs-d6fc70b7.js";import"./react-is.production.min-d422a9a9.js";function V(){D("Holding Deactivation Workflow");const{post_HoldingDeactivationIndependentComment:i,api_workflowInfo:l,api_verifyDocuments:n,api_postDepartmental:r,api_getDepartmentalData:p}=H(),{get_HoldingDeactivationInbox:s,get_HoldingDeactivationOutbox:d,post_HoldingDeactivationApprovalRejection:m,get_HoldingDeactivationDetailsById:c,post_HoldingDeactivationNextLevel:_,post_HoldingDeactivationEscalate:u,get_HoldingDeactivationUploadedDocuments:g,get_HoldingDeactivationSpecial:h}=v(),w={api:{api_inboxList:{method:"post",url:s},api_outboxList:{method:"post",url:d},api_specialList:{method:"post",url:h},apt_btcList:{method:"post",url:""},api_fieldVerificationList:{method:"post",url:""},api_details:{method:"post",url:c},api_workflowInfo:{method:"post",url:l},api_independentComment:{method:"post",url:i},api_sendLevel:{method:"post",url:_},api_escalate:{method:"post",url:u},api_btc:{method:"post",url:""},api_approveReject:{method:"post",url:m},api_postDepartmentalData:{method:"post",url:r},api_getDepartmentalData:{method:"post",url:p},api_uploadDocumentShow:{method:"post",url:""},api_uploadDocument:{method:"post",url:""},api_verifyDocuments:{method:"post",url:n},api_documentList:{method:"post",url:g},documentBaseUrl:f},workflow:{workflowName:"Holding-Deactivation-Workflow",workflowId:8,moduleId:1},tableColumns:[{Header:"#",Cell:({row:t})=>e.jsx("div",{className:"pr-2",children:t.index+1})},{Header:"Owner's Name",accessor:"owner_name",Cell:({cell:t})=>{var o;return e.jsx("span",{children:a((o=t.row.original)==null?void 0:o.owner_name)})}},{Header:"Application No.",accessor:"application_no",Cell:({cell:t})=>{var o;return e.jsx("span",{children:a((o=t.row.original)==null?void 0:o.application_no)})}},{Header:"Guardian Name",accessor:"guardian_name",Cell:({cell:t})=>{var o;return e.jsx("span",{children:a((o=t.row.original)==null?void 0:o.guardian_name)})}},{Header:"Holding No.",accessor:"new_holding_no",Cell:({cell:t})=>{var o;return e.jsx("span",{children:a((o=t.row.original)==null?void 0:o.new_holding_no)})}},{Header:"Mobile No.",accessor:"mobile_no",Cell:({cell:t})=>{var o;return e.jsx("span",{children:a((o=t.row.original)==null?void 0:o.mobile_no)})}},{Header:"Apply Date",accessor:"apply_date",Cell:({cell:t})=>{var o;return e.jsx("span",{children:a((o=t.row.original)==null?void 0:o.apply_date)})}}],customTabs:null,hasBTC:!1,hasFieldVerification:!1};return e.jsx(x,{workflowData:w})}export{V as default};