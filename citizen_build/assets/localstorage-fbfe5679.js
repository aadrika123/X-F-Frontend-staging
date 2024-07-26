const r=t=>{const e=localStorage.getItem(t);return e||null},a=t=>{const e=localStorage.getItem(t);try{return e?JSON.parse(e):null}catch{return null}},l=t=>{localStorage.clear()};export{a,r as g,l};
