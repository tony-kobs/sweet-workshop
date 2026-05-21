import{a as b}from"./assets/vendor-BoNCB7p8.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const v="https://deserts-store.b.goit.study/api",E="/desserts",L="/categories",m=b.create({baseURL:v,headers:{"Content-Type":"application/json"}}),$=(t={})=>m.get(E,{params:t}),I=()=>m.get(L),p=8;let i=1,c="all",g=0;const l=document.getElementById("dessert-list"),u=document.getElementById("load-more-btn"),f=document.getElementById("category-desktop"),y=document.getElementById("category-mobile");function M(t){const o=t.map(({_id:r,image:n,category:e,name:s,description:a,price:h})=>`
    <li class="dessert-item" data-id="${r}">
      <img
        src="${n}"
        alt="${s}"
        class="dessert-image"
        width="303"
        height="228"
        loading="lazy"
        decoding="async"
      />
      <div class="dessert-content-wrapper">
        <div class="dessert-header-content">
          <p class="dessert-category-name">${e.name}</p>
          <h3 class="dessert-name">${s}</h3>
          <p class="dessert-description">${a}</p>
        </div>
        <div class="dessert-footer-content">
          <p class="dessert-price">${h} грн</p>
          <button class="dessert-modal-btn" data-id="${r}">
            <svg class="btn-open-modal-icon" width="24" height="24" aria-label="open full product">
              <use href="./img/icons.svg#icon-arrow_outward"></use>
            </svg>
          </button>
        </div>
      </div>
    </li>
  `).join("");l.insertAdjacentHTML("beforeend",o)}function T(t){const o=[`
    <label class="category-btn">
      <input type="radio" name="category" value="all" checked hidden />
      Всі десерти
    </label>
  `,...t.map(({_id:n,name:e})=>`
    <label class="category-btn">
      <input type="radio" name="category" value="${n}" hidden />
      ${e}
    </label>
  `)].join("");f.innerHTML=o;const r=t.map(({_id:n,name:e})=>`<option value="${n}">${e}</option>`).join("");y.insertAdjacentHTML("beforeend",r)}async function d(t=!1){t&&(l.innerHTML="",i=1);const{data:o}=await $({page:i,limit:p,...c!=="all"&&{category:c}});g=o.totalItems,M(o.desserts);const r=i*p;u.classList.toggle("load-more-hidden",r>=g)}u.addEventListener("click",()=>{i+=1,d()});f.addEventListener("change",t=>{t.target.name==="category"&&(c=t.target.value,d(!0))});y.addEventListener("change",t=>{c=t.target.value,d(!0)});l.addEventListener("click",t=>{const o=t.target.closest(".dessert-modal-btn");o&&o.dataset.id});async function w(){const{data:t}=await I();T(t),await d(),u.classList.remove("load-more-hidden")}w();
//# sourceMappingURL=index.js.map
