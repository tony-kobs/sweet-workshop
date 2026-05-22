import{a as $,i as I}from"./assets/vendor-RCRoCjUD.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function a(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=a(t);fetch(t.href,o)}})();const T="https://deserts-store.b.goit.study/api",M="/desserts",O="/categories",f=$.create({baseURL:T,headers:{"Content-Type":"application/json"}}),P=(e={})=>f.get(M,{params:e}),C=()=>f.get(O),y=document.getElementById("loader");let i=0;function h(){i+=1,y.classList.remove("hidden")}function b(){i-=1,i<=0&&(i=0,y.classList.add("hidden"))}function v(e){I.error({title:"Помилка",message:e,position:"topRight"})}const B="/sweet-deploy-team/assets/icons-CnkChGia.svg",g=8;let c=1,d="all",m=0;const u=document.getElementById("dessert-list"),p=document.getElementById("load-more-btn"),E=document.getElementById("category-desktop"),L=document.getElementById("category-mobile");function N(e){const s=e.map(({_id:a,image:r,category:t,name:o,description:n,price:w})=>`
    <li class="dessert-item" data-id="${a}">
      <img
        src="${r}"
        alt="${o}"
        class="dessert-image"
        width="303"
        height="228"
        loading="lazy"
        decoding="async"
      />
      <div class="dessert-content-wrapper">
        <div class="dessert-header-content">
          <p class="dessert-category-name">${t.name}</p>
          <h3 class="dessert-name">${o}</h3>
          <p class="dessert-description">${n}</p>
        </div>
        <div class="dessert-footer-content">
          <p class="dessert-price">${w} грн</p>
          <button class="dessert-modal-btn" data-id="${a}">
            <svg class="btn-open-modal-icon" width="24" height="24" aria-label="open full product">
              <use href="${B}#icon-arrow_outward"></use>
            </svg>
          </button>
        </div>
      </div>
    </li>
  `).join("");u.insertAdjacentHTML("beforeend",s)}function R(e){const s=[`<label class="category-btn">
      <input type="radio" name="category" value="all" checked hidden />
      Всі десерти
    </label>`,...e.map(({_id:r,name:t})=>`
    <label class="category-btn">
      <input type="radio" name="category" value="${r}" hidden />
      ${t}
    </label>`)].join("");E.innerHTML=s;const a=e.map(({_id:r,name:t})=>`<option value="${r}">${t}</option>`).join("");L.insertAdjacentHTML("beforeend",a)}async function l(e=!1){try{h(),e&&(u.innerHTML="",c=1);const{data:s}=await P({page:c,limit:g,...d!=="all"&&{category:d}});m=s.totalItems,N(s.desserts);const a=c*g;p.classList.toggle("load-more-hidden",a>=m)}catch{v("Не вдалося завантажити десерти")}finally{b()}}p.addEventListener("click",async()=>{c+=1,await l()});E.addEventListener("change",async e=>{e.target.name==="category"&&(d=e.target.value,await l(!0))});L.addEventListener("change",async e=>{d=e.target.value,await l(!0)});u.addEventListener("click",e=>{const s=e.target.closest(".dessert-modal-btn");if(!s)return;const a=s.dataset.id;console.log(a)});async function S(){try{h();const{data:e}=await C();R(e),await l(),p.classList.remove("load-more-hidden")}catch{v("Щось пішло не так. Спробуйте пізніше!")}finally{b()}}S();
//# sourceMappingURL=index.js.map
