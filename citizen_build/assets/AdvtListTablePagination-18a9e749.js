import{cT as R,j as t,ak as u,c3 as T,r as i,cU as h,cV as V,cW as E,cX as M,cY as B}from"./index-b83b7b39.js";const D=R(t.jsx("path",{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"}),"Refresh");function z(e){const g=()=>{var s,x,r,d;let n=document.getElementById("searchValue").value;if(console.log("value",n),n!=""&&(n==null?void 0:n.length)>4){console.log("val greater",n),(s=e==null?void 0:e.values)==null||s.setsearchValue(n),(x=e==null?void 0:e.values)==null||x.setcurrentPageIndex(1);return}if(n!=""&&(n==null?void 0:n.length)>=1&&(n==null?void 0:n.length)<=3){console.log("val middle",n);return}else{console.log("val empty",n),(r=e==null?void 0:e.values)==null||r.setsearchValue(""),(d=e==null?void 0:e.values)==null||d.setcurrentPageIndex(1);return}};return t.jsxs("div",{className:"w-full",children:[t.jsxs("div",{className:"grid grid-cols-1 md:flex ",children:[t.jsx("label",{htmlFor:"search",children:" Search : "}),t.jsx("input",{className:"border border-gray-400 px-2 mx-1  bg-gray-100 py-1",type:"text",id:"searchValue",value:e==null?void 0:e.filter,onChange:n=>{e==null||e.setFilter(n.target.value)}}),t.jsx(u,{anchorId:"searchGlobal"}),t.jsxs("button",{type:"button",id:"searchGlobal","data-tooltip-content":"Search your input globally",className:" whitespace-nowrap border bg-sky-400  hover:bg-sky-500 text-white rounded-md px-2 text-xs",onClick:g,children:[t.jsx(T,{fontSize:"medium"}),"Search Globally"]})]}),t.jsx("div",{children:t.jsxs("p",{className:"text-xs  text-gray-500 font-poppins mt-4",children:[t.jsx("strong",{children:"Note : "})," If you don't find your search result in the box, ",t.jsx("span",{className:"text-blue-500 capitalize",children:" Search Globally"})," to get result from the server."]})})]})}function Y(e){var o,N,P,w,I;const[g,n]=i.useState("hidden"),s=i.useMemo(()=>e==null?void 0:e.columns,[]),x=i.useMemo(()=>e==null?void 0:e.dataList,[e==null?void 0:e.dataList]);i.useEffect(()=>{var a,l;(a=e==null?void 0:e.values)!=null&&a.pageLength?b((l=e==null?void 0:e.values)==null?void 0:l.pageLength):b(5)},[(o=e==null?void 0:e.values)==null?void 0:o.pageLength]),i.useState("");const{getTableProps:r,getTableBodyProps:d,headerGroups:v,page:m,nextPage:O,previousPage:H,prepareRow:S,pageOptions:q,gotoPage:U,pageCount:W,setPageSize:b,state:L,setGlobalFilter:C}=h.useTable({columns:s,data:x,initialState:{pageIndex:0}},h.useGlobalFilter,h.useSortBy,h.usePagination),{globalFilter:G,pageSize:j}=L,f=()=>{var a,l;return((a=e==null?void 0:e.values)==null?void 0:a.currentPageIndex)!=((l=e==null?void 0:e.values)==null?void 0:l.lastPageIndex)},y=()=>{var a;return((a=e==null?void 0:e.values)==null?void 0:a.currentPageIndex)!=1},A=()=>{var a,l;(a=e==null?void 0:e.values)==null||a.setcurrentPageIndex(c=>c-1),(l=e==null?void 0:e.values)==null||l.setpageLength(j)},F=()=>{var a,l;(a=e==null?void 0:e.values)==null||a.setcurrentPageIndex(c=>c+1),(l=e==null?void 0:e.values)==null||l.setpageLength(j)};return t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 pr-4",children:[t.jsx("div",{className:"col-span-1 md:col-span-2",children:t.jsx(z,{filter:G,setFilter:C,values:e==null?void 0:e.values})}),t.jsxs("div",{className:"flex justify-end ",children:[t.jsx("div",{className:"",children:t.jsxs("button",{className:"bg-sky-400 px-3 pr-3  shadow-lg rounded py-1 text-white hover:shadow-2xl hover:bg-green-600 text-center relative",onMouseEnter:()=>n(""),onMouseLeave:()=>n("hidden"),children:[t.jsx(V,{data:e==null?void 0:e.dataList,children:"Export"}),t.jsx("div",{className:g+" absolute h-full top-3 text-sm left-0 text-center animate-bounce",children:t.jsx(E,{})})]})}),t.jsx("div",{className:"",children:e==null?void 0:e.children}),(e==null?void 0:e.canRefresh)&&t.jsx("div",{className:"",children:t.jsxs("div",{className:"flex",children:[t.jsx(u,{anchorId:"refresh"}),t.jsx("div",{className:`${(N=e==null?void 0:e.values)!=null&&N.refreshStatus?"animate-spin":""} h-8 w-8 bg-gray-300 shadow-lg cursor-pointer text-green-900 text-xs font-semibold text-center p-1 rounded-full flex-initial ml-4 `,"data-tooltip-content":"Refresh all data",id:"refresh",onClick:()=>{var a,l,c;(a=e==null?void 0:e.values)==null||a.fetchInboxList(1,10,""),(l=e==null?void 0:e.values)==null||l.setcurrentPageIndex(1),(c=e==null?void 0:e.values)==null||c.setsearchValue("")},children:t.jsx(D,{})})]})})]})]}),t.jsx("div",{className:" py-2 overflow-x-auto bg-white",children:t.jsxs("div",{className:"inline-block min-w-full rounded-lg overflow-hidden bg-white",children:[t.jsxs("table",{...d,className:"min-w-full leading-normal",children:[t.jsx("thead",{className:"font-bold text-left text-sm bg-gray-100 hover:bg-gray-200",children:v==null?void 0:v.map(a=>t.jsx("tr",{...a.getHeaderGroupProps(),children:a.headers.map(l=>t.jsxs("th",{...l.getHeaderProps(l.getSortByToggleProps()),className:"px-2 py-3 border-b border-gray-200 text-gray-800  text-left text-xs uppercase ",children:[l.render("Header"),t.jsx("span",{children:l.isSorted?l.isSortedDesc?"⬆️":"⬇️":""})]}))}))}),t.jsxs("tbody",{...d(),className:"text-sm",children:[m==null?void 0:m.map((a,l)=>{var c;return S(a),t.jsx("tr",{...a.getRowProps(),className:"bg-white shadow-md border border-slate-100 hover:bg-slate-50 ",children:(c=a==null?void 0:a.cells)==null?void 0:c.map(k=>t.jsx("td",{...k.getCellProps(),className:"px-2 py-2 text-sm text-left",children:k.render("Cell")}))})}),t.jsx("tr",{children:t.jsx("td",{})})]})]}),t.jsxs("div",{className:"mt-3 grid grid-cols-3 w-full",children:[t.jsx("div",{className:"",children:t.jsxs("div",{className:"flex",children:[t.jsx("select",{className:"h-10 w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mx-2",value:j,onChange:a=>{var l,c;b(Number(a.target.value)),(l=e==null?void 0:e.values)==null||l.setpageLength(a.target.value),(c=e==null?void 0:e.values)==null||c.setcurrentPageIndex(1)},children:[5,10,25,50].map(a=>t.jsxs("option",{value:a,children:["show ",a]},a))}),t.jsxs("div",{className:"flex space-x-2",children:[t.jsx("input",{className:"border border-gray-400 h-10 rounded-md w-32 text-xs px-2",placeholder:"Go to page",type:"text",onBlur:a=>{var l;return(l=e==null?void 0:e.values)==null?void 0:l.setcurrentPageIndex(a.target.value)}}),t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-8 h-8 bg-indigo-500 text-white p-1 rounded-md mt-1",children:t.jsx("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5"})})]})]})}),t.jsx("div",{className:"  text-center",children:t.jsxs("span",{children:["page ","",t.jsxs("strong",{children:[(P=e==null?void 0:e.values)==null?void 0:P.currentPageIndex," of ",(w=e==null?void 0:e.values)==null?void 0:w.lastPageIndex]}),"","  --- ",t.jsxs("strong",{children:["Total "," ",(I=e==null?void 0:e.values)==null?void 0:I.totalDataCount," records"]})]})}),t.jsx(u,{anchorId:"firstPage"}),t.jsx(u,{anchorId:"lastPage"}),t.jsxs("div",{className:" w-full text-right",children:[t.jsxs("button",{id:"firstPage","data-tooltip-content":"Go to First Page",className:"cursor-pointer hover:bg-sky-300 p-2 hover:text-white",onClick:()=>{var a;return(a=e==null?void 0:e.values)==null?void 0:a.setcurrentPageIndex(1)},disabled:!y(),children:[t.jsx(M,{})," "]}),t.jsx("button",{className:(y()?"opacity-100":"opacity-50")+" text-xl hover:bg-sky-300 hover:text-white",onClick:A,disabled:!y(),children:"⬅️"}),t.jsx("button",{className:(f()?"opacity-100":"opacity-50")+" text-xl hover:bg-sky-300 hover:text-white",onClick:F,disabled:!f(),children:"➡️"}),t.jsxs("button",{id:"lastPage","data-tooltip-content":"Go to Last Page",className:"cursor-pointer hover:bg-sky-300 p-2 hover:text-white",onClick:()=>{var a,l;return(l=e==null?void 0:e.values)==null?void 0:l.setcurrentPageIndex((a=e==null?void 0:e.values)==null?void 0:a.lastPageIndex)},disabled:!f(),children:["  ",t.jsx(B,{})]})]})]})]})})]})}export{Y as A};