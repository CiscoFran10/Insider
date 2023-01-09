(()=>{"use strict";var t={10:function(t,e,n){var o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const i=o(n(394)),c=o(n(78)),a=o(n(42));(0,i.default)(),(0,c.default)(),(0,a.default)()},156:function(t,e,n){var o=this&&this.__awaiter||function(t,e,n,o){return new(n||(n=Promise))((function(i,c){function a(t){try{r(o.next(t))}catch(t){c(t)}}function d(t){try{r(o.throw(t))}catch(t){c(t)}}function r(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,d)}r((o=o.apply(t,e||[])).next())}))},i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.deleteProduct=e.addProduct=e.getCart=e.getProducts=void 0;const c="https://us-central1-insider-integrations.cloudfunctions.net/cart-api-fullstack-test",a=i(n(394));e.getProducts=()=>o(void 0,void 0,void 0,(function*(){try{const t=yield fetch(c+"/products");return yield t.json()}catch(t){console.log(t)}})),e.getCart=()=>o(void 0,void 0,void 0,(function*(){try{const t=JSON.parse(window.localStorage.getItem("token")||"");if(t){const e=yield fetch(`${c}/cart/${t}`);return yield e.json()}}catch(t){console.log(t)}})),e.addProduct=t=>o(void 0,void 0,void 0,(function*(){try{const e=JSON.parse(window.localStorage.getItem("token")||""),n=e?`${c}/cart/${e}`:`${c}/cart`,o=yield fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(o.ok){const t=yield o.json();window.localStorage.setItem("token",JSON.stringify(t.token)),(0,a.default)()}}catch(t){console.log("ola"+t)}})),e.deleteProduct=(t,e)=>o(void 0,void 0,void 0,(function*(){try{(yield fetch(`${c}/cart/${t}/${e}`,{method:"DELETE",headers:{"Content-Type":"application/json"}})).ok&&(0,a.default)()}catch(t){console.log(t)}}))},394:function(t,e,n){var o=this&&this.__awaiter||function(t,e,n,o){return new(n||(n=Promise))((function(i,c){function a(t){try{r(o.next(t))}catch(t){c(t)}}function d(t){try{r(o.throw(t))}catch(t){c(t)}}function r(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,d)}r((o=o.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0});const i=n(156);e.default=()=>o(void 0,void 0,void 0,(function*(){const t=yield(0,i.getCart)(),e=null==t?void 0:t.products,n=document.getElementById("js-cart-header"),o=document.getElementById("js-cart-footer"),c=document.getElementById("js-cart-empty"),a=document.getElementById("js-cart-counter");if(e&&n&&o&&c&&a)if(0===e.length)n.classList.remove("active"),o.classList.remove("active"),c.classList.add("active"),a.innerText="0";else{n.classList.add("active"),o.classList.add("active"),c.classList.remove("active");const t=e.reduce(((t,e)=>t+e.quantity),0),i=e.reduce(((t,e)=>t+e.valor*e.quantity),0);o.innerHTML=`\n\t\t\t\t<h3>total: R$ ${i.toFixed(2).replace(".",",")}</h3>`,n.innerHTML=`\n\t\t\t\t<img width="24" height="24" src="./assets/shopping-bag.svg" alt="icone de bolsa de compras">\n\t\t\t\t<h3>Sua cesta tem ${t} item</h3>\n\t\t\t\t`,a.innerText=`${t}`}t&&(t=>{const e=document.getElementById("js-cart-list");t&&e&&(e.innerHTML=t.products.map((({codigo:t,nome:e,valor:n,imagem:o,quantity:i})=>` <li class="cart-item" id="${t}">\n\t\t\t\t\t<div class="cart-image">\n\t\t\t\t\t\t<img src="${o}" alt="${e}">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="cart-info">\n\t\t\t\t\t\t<h2>${e}</h2>\n\t\t\t\t\t\t<span>${i} x R$ ${n.toFixed(2).replace(".",",")}</span>\n\t\t\t\t\t\t<button>remover</button>\n\t\t\t\t\t</div>\n\t\t\t\t</li>`)).join(" "),(t=>{document.querySelectorAll(".cart-item button").forEach((e=>{e.addEventListener("click",(()=>{var n;const o=null===(n=null==e?void 0:e.parentElement)||void 0===n?void 0:n.parentElement,c=t.products.find((t=>t.codigo===o.id));c&&(0,i.deleteProduct)(t.token,c.codigo)}))}))})(t))})(t)}))},42:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.default=()=>{const t=document.getElementById("js-menu-button"),e=document.getElementById("js-back-button"),n=document.getElementById("js-cart");var o,i;n&&e&&t&&(o=n,i=e,t.addEventListener("click",(()=>{o.classList.add("active"),i.classList.add("active")})),i.addEventListener("click",(()=>{o.classList.remove("active"),i.classList.remove("active")})))}},78:function(t,e,n){var o=this&&this.__awaiter||function(t,e,n,o){return new(n||(n=Promise))((function(i,c){function a(t){try{r(o.next(t))}catch(t){c(t)}}function d(t){try{r(o.throw(t))}catch(t){c(t)}}function r(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,d)}r((o=o.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0});const i=n(156);e.default=()=>o(void 0,void 0,void 0,(function*(){const t=yield(0,i.getProducts)(),e=document.getElementById("js-products-list");e&&t&&(e.innerHTML=t.map((({codigo:t,imagem:e,valor:n,nome:o})=>`\n    <li class="card" id="${t}">\n      <div class="card-image">\n        <img width="450" height="450" src="${e}" alt="${o}">\n      </div>\n      <div class="card-info">\n        <h2>${o}</h2>\n        <span>R$ ${n.toFixed(2).replace(".",",")}</span>\n        <button>Adicionar</button>\n      </div>\n    </li>`)).join(" "),(t=>{document.querySelectorAll(".card button").forEach((e=>{e.addEventListener("click",(()=>{var n;const o=null===(n=null==e?void 0:e.parentElement)||void 0===n?void 0:n.parentElement,c=t.find((t=>t.codigo===(null==o?void 0:o.id))),a=null==c?void 0:c.codigo;a&&(0,i.addProduct)({codigo:a,quantidade:1})}))}))})(t))}))}},e={};!function n(o){var i=e[o];if(void 0!==i)return i.exports;var c=e[o]={exports:{}};return t[o].call(c.exports,c,c.exports,n),c.exports}(10)})();