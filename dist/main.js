(()=>{"use strict";const t="https://us-central1-insider-integrations.cloudfunctions.net/cart-api-fullstack-test",e=async(e,a)=>{try{(await fetch(`${t}/cart/${e}/${a}`,{method:"DELETE",headers:{"Content-Type":"application/json"}})).ok&&n()}catch(t){console.log(t)}},n=async()=>{const n=await(async()=>{try{const e=JSON.parse(window.localStorage.getItem("token"));if(e){const n=await fetch(`${t}/cart/${e}`);return await n.json()}}catch(t){console.log(t)}})(),{products:a}=n,c=document.getElementById("js-cart-list"),o=document.getElementById("js-cart-header"),i=document.getElementById("js-cart-footer"),s=document.getElementById("js-cart-header-counter"),d=document.getElementById("js-cart-footer-total"),r=document.getElementById("js-cart-empty");if(0===a.length)o.classList.remove("active"),i.classList.remove("active"),r.classList.add("active");else{o.classList.add("active"),i.classList.add("active"),r.classList.remove("active");const t=a.reduce(((t,e)=>t+e.quantity),0),e=a.reduce(((t,e)=>t+e.valor*e.quantity),0);d.innerText=`total: R$ ${e.toFixed(2).replace(".",",")}`,s.innerText=`Sua cesta tem ${t} item`}n&&c&&(c.innerHTML=a.map((({codigo:t,nome:e,valor:n,imagem:a,quantity:c})=>` <li class="cart-item" id="${t}">\n          <div class="cart-image">\n            <img src="${a}" alt="${e}">\n          </div>\n          <div class="cart-info">\n            <h2>${e}</h2>\n            <span>${c} x R$ ${n.toFixed(2).replace(".",",")}</span>\n            <button>remover</button>\n          </div>\n        </li>`)).join(" "),(t=>{document.querySelectorAll(".cart-item button").forEach((n=>{n.addEventListener("click",(()=>{const a=n.parentElement.parentElement,c=t.products.find((t=>t.codigo===a.id));e(t.token,c.codigo)}))}))})(n))};n(),(async()=>{const e=await(async()=>{try{const e=await fetch(t+"/products");return await e.json()}catch(t){console.log(t)}})();document.getElementById("js-products-list").innerHTML=e.map((({codigo:t,imagem:e,valor:n,nome:a})=>`\n    <li class="card" id="${t}">\n      <div class="card-image">\n        <img width="450" height="450" src="${e}" alt="${a}">\n      </div>\n      <div class="card-info">\n        <h2>${a}</h2>\n        <span>R$ ${n.toFixed(2).replace(".",",")}</span>\n        <button>Adicionar</button>\n      </div>\n    </li>`)).join(" "),(e=>{document.querySelectorAll(".card button").forEach((a=>{a.addEventListener("click",(()=>{const c=a.parentElement.parentElement,o=e.find((t=>t.codigo===c.id)),{codigo:i}=o;(async e=>{try{const a=JSON.parse(window.localStorage.getItem("token")),c=a?`${t}/cart/${a}`:`${t}/cart`,o=await fetch(c,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(o.ok){const t=await o.json();window.localStorage.setItem("token",JSON.stringify(t.token)),n()}}catch(t){console.log(t)}})({codigo:i,quantidade:1})}))}))})(e)})(),(()=>{const t=document.getElementById("js-menu-button"),e=document.getElementById("js-back-button"),n=document.getElementById("js-cart");var a,c;a=n,c=e,t.addEventListener("click",(()=>{a.classList.add("active"),c.classList.add("active")})),c.addEventListener("click",(()=>{a.classList.remove("active"),c.classList.remove("active")}))})()})();