import{a as I,u as z,b as B,p as u,j as s,r as o}from"./index-ZKPC99vf.js";import{u as C}from"./formik.esm-cgRYB5or.js";import{c as _,a as Z}from"./index.esm-YWhi1h0e.js";import{U as A,P as D}from"./index-KlXviWlo.js";import{F as $}from"./FormProvider-ghVijPrZ.js";import{T as k}from"./TextField-0EDUL-CF.js";import{L as E}from"./LoaderButton-Bud8I305.js";import{S as i}from"./SelectField-rj_28Upi.js";import"./index-ntdqGHBn.js";import{S as L}from"./index-Qq32NGy1.js";import"./ArrowRightIcon-cx1jRnXJ.js";const c=[{id:1,label:"Old Property No",value:"propertyNo"},{id:2,label:"Holding No",value:"holdingNo"},{id:3,label:"Mobile",value:"mobileNo"},{id:4,label:"Owner Name",value:"ownerName"}],O=[{id:1,label:"Zone A-East",value:"1"},{id:2,label:"Zone B-West",value:"2"},{id:3,label:"Zone C-North",value:"3"},{id:4,label:"Zone D-South",value:"4"}],R=_().shape({filteredBy:Z().required("Filter By is required")});function te(){var x,h,b,j,f,y,N,m,g,P,v,w,S;const l=I(),r=z();A("Search Holding");const{data:a,isPending:q,isLoading:M,isError:T,error:U,refetch:F,isRefetching:W,isFetching:p,isFetched:H}=B({api:u.getFilterPropDetails,config:r==null?void 0:r.searchProperty,value:[(x=r==null?void 0:r.searchProperty)==null?void 0:x.filteredBy,(h=r==null?void 0:r.searchProperty)==null?void 0:h.parameter,(b=r==null?void 0:r.searchProperty)==null?void 0:b.zoneId,(j=r==null?void 0:r.searchProperty)==null?void 0:j.wardId,(f=r==null?void 0:r.searchProperty)==null?void 0:f.page,(y=r==null?void 0:r.searchProperty)==null?void 0:y.perPage],options:{enabled:!!((N=r==null?void 0:r.searchProperty)!=null&&N.filteredBy)}}),n=C({enableReinitialize:!0,initialValues:r==null?void 0:r.searchProperty,validationSchema:R,onSubmit:async e=>{r==null||r.setSearchProperty({...r==null?void 0:r.searchProperty,filteredBy:e==null?void 0:e.filteredBy,parameter:e==null?void 0:e.parameter,zoneId:e==null?void 0:e.zoneId,wardId:e==null?void 0:e.wardId}),F()}}),{values:d}=n,{data:t,isPending:G,isError:J,error:K,isLoading:Q}=B({api:u.getWardByZone,config:{zoneId:d==null?void 0:d.zoneId},value:[d==null?void 0:d.zoneId],options:{enabled:!!(d!=null&&d.zoneId)}});return s.jsx(D,{title:"Search Holding",children:s.jsx("div",{className:"px-4 py-4 flex-1",children:s.jsxs($,{formik:n,children:[s.jsx(o.Card,{className:"w-full",children:s.jsxs(o.CardBody,{children:[s.jsx("div",{className:"flex justify-between items-center",children:s.jsx("h1",{className:"text-sm font-semibold",children:"Search Holding"})}),s.jsx("div",{className:"my-4 border-b-2"}),s.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[s.jsxs(i,{label:"Filter By",name:"filteredBy",formik:n,children:[s.jsx("option",{value:"",children:"select"}),c==null?void 0:c.map(e=>s.jsx("option",{value:e==null?void 0:e.value,children:e==null?void 0:e.label},e==null?void 0:e.id))]}),s.jsxs(i,{label:"Zone",name:"zoneId",formik:n,children:[s.jsx("option",{value:"",children:"select"}),O.map(e=>s.jsx("option",{value:e==null?void 0:e.value,children:e==null?void 0:e.label},e==null?void 0:e.id))]}),s.jsxs(i,{label:"select",formik:n,name:"wardId",children:[s.jsx("option",{value:"1",children:"select"}),(m=t==null?void 0:t.data)==null?void 0:m.map(e=>s.jsx("option",{value:e==null?void 0:e.id,children:e==null?void 0:e.ward_name},e==null?void 0:e.id))]}),s.jsx(k,{label:"Parameter",name:"parameter",type:"text",formik:n})]}),s.jsx("div",{className:"flex justify-center mt-2",children:s.jsx(E,{type:"submit",disabled:p,loading:p,children:"Search"})})]})}),H?s.jsx(s.Fragment,{children:((P=(g=a==null?void 0:a.data)==null?void 0:g.data)==null?void 0:P.length)>0?s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"my-4 border-b-2"}),(w=(v=a==null?void 0:a.data)==null?void 0:v.data)==null?void 0:w.map(e=>s.jsx(o.Card,{className:"w-full mb-5",children:s.jsxs(o.CardBody,{children:[s.jsx("div",{className:"flex items-center justify-between -mt-1",children:s.jsx("div",{className:"flex items-center",children:s.jsx("h1",{className:"font-bold text-sm",children:"Details"})})}),s.jsx("div",{className:"my-2 border-b-2 bg-indigo-800 text-blue-gray-600"}),s.jsxs("div",{className:"flex items-center justify-between mb-1",children:[s.jsx("h1",{className:"text-sm font-semibold",children:"Holding No:"}),s.jsx("p",{className:"text-sm text-end",children:e==null?void 0:e.holding_no})]}),s.jsxs("div",{className:"flex items-center justify-between mb-1",children:[s.jsx("h1",{className:"text-sm font-semibold",children:"Property No:"}),s.jsx("p",{className:"text-sm text-end",children:e==null?void 0:e.property_no})]}),s.jsxs("div",{className:"flex items-center justify-between mb-1",children:[s.jsx("h1",{className:"text-sm font-semibold",children:"Zone:"}),s.jsx("p",{className:"text-sm text-end",children:e==null?void 0:e.zone_name})]}),s.jsxs("div",{className:"flex items-center justify-between mb-1",children:[s.jsx("h1",{className:"text-sm font-semibold",children:"Address:"}),s.jsx("p",{className:"text-sm text-end truncate w-60",children:e==null?void 0:e.prop_address})]}),s.jsxs("div",{className:"flex items-center justify-between mb-1",children:[s.jsx("h1",{className:"text-sm font-semibold",children:"Mobile No:"}),s.jsx("p",{className:"text-sm text-end",children:e==null?void 0:e.mobile_no})]}),s.jsxs("div",{className:"flex items-center justify-between mb-1",children:[s.jsx("h1",{className:"text-sm font-semibold",children:"Owner Name:"}),s.jsx("p",{className:"text-sm text-end truncate w-60",children:e==null?void 0:e.owner_name})]}),s.jsxs("div",{className:"flex items-center justify-between mb-1",children:[s.jsx("h1",{className:"text-sm font-semibold",children:"Payment Status:"}),s.jsx("p",{className:"text-sm font-semibold ".concat((e==null?void 0:e.paid_status)===1?"text-green-500":"text-red-500"),children:(e==null?void 0:e.paid_status)===1?"Paid":"Pending"})]}),s.jsx("div",{className:"my-2 border-b-2 bg-indigo-800 text-blue-gray-600"}),s.jsxs("div",{className:"flex items-center justify-around mt-4 -mb-1 gap-6",children:[s.jsx("div",{onClick:()=>l("/amc-app/property/pro-basic-details/".concat(e==null?void 0:e.id)),className:"text-xs font-bold text-blue-600",children:"Basic Details"}),s.jsx("div",{onClick:()=>l("/amc-app/property/demand-details/".concat(e==null?void 0:e.id)),className:"text-xs font-bold text-blue-600",children:"Demand Details"}),s.jsx("div",{onClick:()=>l("/amc-app/property/payment-history/".concat(e==null?void 0:e.id)),className:"text-xs font-bold text-blue-600",children:"Payment History"})]})]})},e==null?void 0:e.id)),s.jsx("div",{className:"my-4 border-b-2"}),s.jsx(L,{active:r==null?void 0:r.searchProperty,setActive:r==null?void 0:r.setSearchProperty,noOfPage:(S=a==null?void 0:a.data)==null?void 0:S.last_page})]}):s.jsx("div",{className:"text-center py-52",children:"No Record Found!"})}):s.jsx("div",{className:"text-center py-52",children:"Loading..."})]})})})}export{te as default};