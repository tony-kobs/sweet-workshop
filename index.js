import{a as w}from"./assets/vendor-BoNCB7p8.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const $="https://deserts-store.b.goit.study/api",I="/desserts",M="/categories",f=w.create({baseURL:$,headers:{"Content-Type":"application/json"}}),T=(t={})=>f.get(I,{params:t}),O=()=>f.get(M),y=document.getElementById("loader");let c=0;function h(){c+=1,y.classList.remove("hidden")}function b(){c-=1,c<=0&&(c=0,y.classList.add("hidden"))}const P="/sweet-deploy-team/assets/icons-CnkChGia.svg",p=8;let d=1,l="all",m=0;const i=document.getElementById("dessert-list"),g=document.getElementById("load-more-btn"),v=document.getElementById("category-desktop"),L=document.getElementById("category-mobile");function C(t){const s=t.map(({_id:r,image:a,category:e,name:o,description:n,price:E})=>`
    <li class="dessert-item" data-id="${r}">
      <img
        src="${a}"
        alt="${o}"
        class="dessert-image"
        width="303"
        height="228"
        loading="lazy"
        decoding="async"
      />
      <div class="dessert-content-wrapper">
        <div class="dessert-header-content">
          <p class="dessert-category-name">${e.name}</p>
          <h3 class="dessert-name">${o}</h3>
          <p class="dessert-description">${n}</p>
        </div>
        <div class="dessert-footer-content">
          <p class="dessert-price">${E} грн</p>
          <button class="dessert-modal-btn" data-id="${r}">
            <svg class="btn-open-modal-icon" width="24" height="24" aria-label="open full product">
              <use href="${P}#icon-arrow_outward"></use>
            </svg>
          </button>
        </div>
      </div>
    </li>
  `).join("");i.insertAdjacentHTML("beforeend",s)}function B(t){const s=[`<label class="category-btn">
      <input type="radio" name="category" value="all" checked hidden />
      Всі десерти
    </label>`,...t.map(({_id:a,name:e})=>`
    <label class="category-btn">
      <input type="radio" name="category" value="${a}" hidden />
      ${e}
    </label>`)].join("");v.innerHTML=s;const r=t.map(({_id:a,name:e})=>`<option value="${a}">${e}</option>`).join("");L.insertAdjacentHTML("beforeend",r)}async function u(t=!1){try{h(),t&&(i.innerHTML="",d=1);const{data:s}=await T({page:d,limit:p,...l!=="all"&&{category:l}});m=s.totalItems,C(s.desserts);const r=d*p;g.classList.toggle("load-more-hidden",r>=m)}catch(s){console.error("Помилка завантаження десертів:",s),i.innerHTML='<li class="error-message">Не вдалося завантажити десерти</li>'}finally{b()}}g.addEventListener("click",async()=>{d+=1,await u()});v.addEventListener("change",async t=>{t.target.name==="category"&&(l=t.target.value,await u(!0))});L.addEventListener("change",async t=>{l=t.target.value,await u(!0)});i.addEventListener("click",t=>{const s=t.target.closest(".dessert-modal-btn");if(!s)return;const r=s.dataset.id;console.log(r)});async function N(){try{h();const{data:t}=await O();B(t),await u(),g.classList.remove("load-more-hidden")}catch(t){console.error("Помилка ініціалізації:",t),i.innerHTML='<li class="error-message">Щось пішло не так</li>'}finally{b()}}N();
//# sourceMappingURL=index.js.map
