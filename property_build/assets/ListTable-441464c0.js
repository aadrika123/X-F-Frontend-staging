import{r as n,cE as o,j as e,cG as B,ay as I,cH as W,cI as O,dF as z,dG as J}from"./index-9480f510.js";import{G as U}from"./GlobalFilter-236e0dc0.js";function Q(l){const[v,b]=n.useState("hidden"),N=n.useMemo(()=>l.columns,[]),y=n.useMemo(()=>l.dataList,[l.dataList]),w=async()=>{try{const t=new z("p","mm","a4"),s=document.getElementById("printableArea");if(!s)return;const a=await J(s,{scale:2,windowWidth:document.documentElement.scrollWidth,windowHeight:document.documentElement.scrollHeight});if(!a)return;const D=a.toDataURL("image/jpeg",1),F=t.internal.pageSize.getWidth(),j=t.internal.pageSize.getHeight(),i=6,f=a.width/a.height;let g=F-2*i,r=g/f;r>j-2*i&&(r=j-2*i,g=r*f);const G=i,M=i;t.addImage(D,"JPEG",G,M,g,r),t.save("DCB Report.pdf")}catch{}};n.useEffect(()=>{u(10)},[]);const{getTableProps:V,getTableBodyProps:p,headerGroups:d,page:c,nextPage:P,previousPage:k,canNextPage:x,canPreviousPage:h,prepareRow:E,pageOptions:C,gotoPage:m,pageCount:H,setPageSize:u,state:L,setGlobalFilter:R}=o.useTable({columns:N,data:y,initialState:{pageIndex:0}},o.useGlobalFilter,o.useSortBy,o.usePagination),{globalFilter:S,pageIndex:T,pageSize:A}=L;return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex mb-2 pb-2",children:[e.jsx("div",{className:"flex-initial",children:e.jsx(U,{filter:S,setFilter:R})}),e.jsx("div",{className:"flex-initial ml-2",children:e.jsxs("button",{className:"bg-sky-400 px-3 pr-3  shadow-lg rounded py-1 text-white hover:shadow-2xl hover:bg-green-600 text-center relative",onMouseEnter:()=>b(""),onMouseLeave:()=>b("hidden"),children:[e.jsx(B,{data:l.dataList,children:"Export"}),e.jsx("div",{className:v+" absolute h-full top-3 text-sm left-0 text-center animate-bounce",children:e.jsx(I,{})})]})}),e.jsx("div",{className:"ml-0 mb-2 px-6",children:e.jsx("button",{onClick:w,className:"bg-red-500 hover:bg-red-700 px-3 pr-3  shadow-lg rounded py-1 text-white font-normal ",children:"Export PDF"})}),l.assessmentType&&e.jsxs("div",{className:"flex-initial flex",children:[e.jsxs("div",{className:"flex",children:[e.jsx("div",{className:"flex-initial h-4 w-4 text-green-900 text-xs font-semibold text-center bg-green-200 rounded-full ml-4 ",children:"N"}),e.jsx("div",{className:"flex-initial text-xs ml-2",children:" New Assessment"}),e.jsx("div",{className:"flex-initial h-4 w-4 bg-blue-200  text-blue-900 text-xs font-semibold text-center rounded-full ml-4",children:"R"}),e.jsx("div",{className:"flex-initial text-xs ml-2",children:" Re-Assessment"}),e.jsx("div",{className:"flex-initial h-4 w-4 bg-red-200  text-red-900 text-xs font-semibold text-center rounded-full ml-4",children:"M"}),e.jsx("div",{className:"flex-initial text-xs ml-2",children:" Mutation"})]}),e.jsx("div",{}),e.jsx("div",{})]})]}),e.jsx("div",{className:" py-2 overflow-x-auto bg-white",children:e.jsxs("div",{className:"inline-block min-w-full rounded-lg overflow-hidden bg-white",children:[e.jsxs("table",{...p,className:"min-w-full leading-normal",id:"printableArea",children:[e.jsx("thead",{className:"font-bold text-left text-sm bg-sky-50",children:d==null?void 0:d.map(t=>e.jsx("tr",{...t.getHeaderGroupProps(),children:t.headers.map(s=>e.jsxs("th",{...s.getHeaderProps(s.getSortByToggleProps()),className:(s==null?void 0:s.className)+" px-2 py-3 border-[1px] text-center border-gray-200 text-gray-800 text-xs capitalize",children:[s.render("Header"),e.jsx("span",{children:s.isSorted?s.isSortedDesc?"⬆️":"⬇️":""})]}))}))}),e.jsxs("tbody",{...p(),className:"text-sm",children:[c==null?void 0:c.map(t=>{var s;return E(t),e.jsx("tr",{...t.getRowProps(),className:"bg-white shadow-lg border-[1px] border-gray-200",children:(s=t==null?void 0:t.cells)==null?void 0:s.map(a=>e.jsx("td",{...a.getCellProps(),className:"px-2 py-2 text-sm text-left border-[1px] border-gray-200",children:a.render("Cell")}))})}),e.jsx("tr",{children:e.jsx("td",{})})]})]}),e.jsxs("div",{className:"mt-3 grid grid-cols-12 items-center",children:[e.jsx("div",{className:"sm:col-span-2 col-span-3 flex w-full ml-1 pr-10 items-center",children:e.jsx("input",{className:"h-10 w-[90%] placeholder:text-gray-600 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-1 ",placeholder:"Go to page...",type:"text",onChange:t=>{const s=t.target.value?Number(t.target.value)-1:0;m(s)}})}),e.jsxs("div",{className:"col-span-2",children:["  ",e.jsx("select",{className:"h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ",value:A,onChange:t=>u(Number(t.target.value)),children:[5,10,25,50].map(t=>e.jsxs("option",{value:t,children:["show ",t]},t))})]}),e.jsxs("div",{className:"col-span-3 sm:col-span-4 text-center sm:col-start-5 col-start-7",children:["   ",e.jsxs("span",{children:["page ","",e.jsxs("strong",{children:[T+1," of ",C.length]}),""]})]}),e.jsxs("div",{className:"col-span-3 sm:col-span-4 text-right",children:[e.jsxs("button",{className:"cursor-pointer hover:bg-sky-300 p-2 hover:text-white",onClick:()=>m(0),disabled:!h,children:[e.jsx(W,{})," "]}),e.jsx("button",{className:(h?"opacity-100":"opacity-50")+" text-xl hover:bg-sky-300 hover:text-white",onClick:()=>k(),disabled:!h,children:"⬅️"}),e.jsx("button",{className:(x?"opacity-100":"opacity-50")+" text-xl hover:bg-sky-300 hover:text-white",onClick:()=>P(),disabled:!x,children:"➡️"}),e.jsxs("button",{className:"cursor-pointer hover:bg-sky-300 p-2 hover:text-white",onClick:()=>m(H-1),disabled:!x,children:["  ",e.jsx(O,{})]})]})]})]})})]})}export{Q as L};