import{a as S,i as C,S as v,N as m,P as y}from"./assets/vendor-8y-lWpHi.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function a(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=a(s);fetch(s.href,i)}})();const B="https://deserts-store.b.goit.study/api",P="/desserts",T="/categories",M="/feedbacks",p=S.create({baseURL:B,headers:{"Content-Type":"application/json"}}),I=(t={})=>p.get(P,{params:t}),O=()=>p.get(T),N=()=>p.get(M),w=document.getElementById("loader");let l=0;function _(){l+=1,w.classList.remove("hidden")}function E(){l-=1,l<=0&&(l=0,w.classList.add("hidden"))}function L(t){C.error({title:"Помилка",message:t,position:"topRight"})}const k="/sweet-deploy-team/assets/icons-CnkChGia.svg";class A{constructor(e,{options:a=[],placeholder:o="Оберіть один...",onChange:s}={}){this.container=e,this.options=a,this.placeholder=o,this.onChange=s,this.selected=null,this._render(),this._bindEvents()}_render(){this.container.innerHTML=`
      <div class="sel-wrap">
        <div class="sel-box" tabindex="0" role="combobox" aria-expanded="false" aria-haspopup="listbox">
          <span class="sel-label sel-placeholder">${this.placeholder}</span>
          <span class="sel-chevron" aria-hidden="true">
            <svg class="select-icon" width="24" height="24">
          <use href="${k}#icon-keyboard_arrow_down"></use>
        </svg>
          </span>
        </div>
        <div class="sel-dropdown" role="listbox">
          ${this.options.map(e=>`
            <div class="sel-opt" role="option" data-value="${e.value}">${e.label}</div>
          `).join("")}
        </div>
      </div>
    `,this._box=this.container.querySelector(".sel-box"),this._label=this.container.querySelector(".sel-label"),this._chevron=this.container.querySelector(".sel-chevron"),this._dropdown=this.container.querySelector(".sel-dropdown"),this._opts=this.container.querySelectorAll(".sel-opt")}_bindEvents(){this._box.addEventListener("click",e=>{e.stopPropagation(),this._isOpen()?this._close():this._open()}),this._opts.forEach(e=>{e.addEventListener("click",a=>{a.stopPropagation(),this._select(e.dataset.value,e.textContent),this._close()})}),this._box.addEventListener("keydown",e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this._isOpen()?this._close():this._open()),e.key==="Escape"&&this._close()}),document.addEventListener("click",()=>this._close())}_isOpen(){return this._dropdown.classList.contains("open")}_open(){this._box.classList.add("open"),this._dropdown.classList.add("open"),this._chevron.classList.add("rotated"),this._box.setAttribute("aria-expanded","true")}_close(){this._box.classList.remove("open"),this._dropdown.classList.remove("open"),this._chevron.classList.remove("rotated"),this._box.setAttribute("aria-expanded","false")}_select(e,a,o=!0){this._opts.forEach(i=>i.classList.remove("selected"));const s=this.container.querySelector(`[data-value="${e}"]`);s&&s.classList.add("selected"),this._label.textContent=a,this._label.classList.remove("sel-placeholder"),this.selected={value:e,label:a},o&&this.onChange&&this.onChange(e,a)}getValue(){return this.selected}setValue(e){const a=this.options.find(o=>o.value===e);a&&this._select(a.value,a.label,!1)}reset(){this._opts.forEach(e=>e.classList.remove("selected")),this._label.textContent=this.placeholder,this._label.classList.add("sel-placeholder"),this.selected=null}}let d=null;const g=8;let c=1,r="all",b=0;const h=document.getElementById("dessert-list"),f=document.getElementById("load-more-btn"),$=document.getElementById("category-desktop"),D=document.getElementById("category-mobile");function q(t){const e=t.map(({_id:a,image:o,category:s,name:i,description:n,price:x})=>`
    <li class="dessert-item" data-id="${a}">
      <img
        src="${o}"
        alt="${i}"
        class="dessert-image"
        width="303"
        height="228"
        loading="lazy"
        decoding="async"
      />
      <div class="dessert-content-wrapper">
        <div class="dessert-header-content">
          <p class="dessert-category-name">${s.name}</p>
          <h3 class="dessert-name">${i}</h3>
          <p class="dessert-description">${n}</p>
        </div>
        <div class="dessert-footer-content">
          <p class="dessert-price">${x} грн</p>
          <button class="dessert-modal-btn" data-id="${a}">
            <svg class="btn-open-modal-icon" width="24" height="24" aria-label="open full product">
              <use href="${k}#icon-arrow_outward"></use>
            </svg>
          </button>
        </div>
      </div>
    </li>
  `).join("");h.insertAdjacentHTML("beforeend",e)}function R(t){const e=[`<label class="category-btn">
      <input type="radio" name="category" value="all" checked hidden />
      Всі десерти
    </label>`,...t.map(({_id:o,name:s})=>`
      <label class="category-btn">
        <input type="radio" name="category" value="${o}" hidden />
        ${s}
      </label>`)].join("");$.innerHTML=e;const a=[{value:"all",label:"Всі десерти",checked:!0},...t.map(({_id:o,name:s})=>({value:o,label:s}))];d=new A(D,{placeholder:"Оберіть категорію",options:a,onChange:async o=>{r=o,await u(!0)}}),d.setValue("all")}async function u(t=!1){try{_(),t&&(h.innerHTML="",c=1);const{data:e}=await I({page:c,limit:g,...r!=="all"&&{category:r}});b=e.totalItems,q(e.desserts);const a=c*g;f.classList.toggle("load-more-hidden",a>=b)}catch{L("Не вдалося завантажити десерти")}finally{E()}}f.addEventListener("click",async()=>{c+=1,await u()});$.addEventListener("change",async t=>{t.target.name==="category"&&(r=t.target.value,d&&d.setValue(r),await u(!0))});h.addEventListener("click",t=>{const e=t.target.closest(".dessert-modal-btn");if(!e)return;const a=e.dataset.id;console.log(a)});async function G(){try{_();const{data:t}=await O();R(t),await u(),f.classList.remove("load-more-hidden")}catch(t){console.error(t),L("Щось пішло не так. Спробуйте пізніше!")}finally{E()}}G();const V=(t,e=200)=>{let a;return(...o)=>{clearTimeout(a),a=setTimeout(()=>t.apply(void 0,o),e)}};document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".about-us-swiper");if(!t)return;let e=null;const a=()=>{e=new v(t,{modules:[m,y],slidesPerView:2,slidesPerGroup:2,spaceBetween:24,grabCursor:!0,navigation:{nextEl:".about-us-nav-btn-next",prevEl:".about-us-nav-btn-prev"},pagination:{el:".about-us-pagination",clickable:!0,dynamicBullets:!0}})},o=()=>{e&&(e.destroy(!0,!0),e=null)},s=()=>{window.innerWidth<=768?o():e||a()};s(),window.addEventListener("resize",V(s,150))});const H=document.getElementById("feedback-list");function j(t,e){const a=parseFloat(t)||0,o=Math.round(a*2)/2;let s="";const i="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z";for(let n=1;n<=5;n++)o>=n?s+=`
        <svg class="star-icon is-active" width="20" height="19" viewBox="0 0 20 19">
          <path d="${i}"/>
        </svg>`:o===n-.5?s+=`
        <svg class="star-icon is-half" width="20" height="19" viewBox="0 0 20 19">
          <defs>
            <linearGradient id="fatStarGrad-${e}-${n}">
              <stop offset="50%" stop-color="var(--color-neutral-darkest, #080c0c)"/>
              <stop offset="50%" stop-color="var(--color-neutral-lighter, #e3e3e3)"/>
            </linearGradient>
          </defs>
          <path fill="url(#fatStarGrad-${e}-${n})" d="${i}"/>
        </svg>`:s+=`
        <svg class="star-icon" width="20" height="19" viewBox="0 0 20 19">
          <path d="${i}"/>
        </svg>`;return s}function F(t){H.innerHTML=t.map(({_id:e,rate:a,author:o,description:s})=>{const i=j(a,e);return`
        <li class="feedback-card swiper-slide" data-id="${e}">
          <div class="feedback-raty-stars">
            <div class="star-rating-container">
              ${i}
            </div>
          </div>
          <div class="feedback-scroll-wrap">
             <p class="feedback-description">"${s}"</p>
          </div>
          <p class="feedback-author">${o}</p>
        </li>
      `}).join("")}function z(){new v(".feedback-slider-container",{modules:[m,y],slidesPerView:1,spaceBetween:20,allowTouchMove:!0,grabCursor:!0,autoHeight:!1,navigation:{nextEl:".feedback-arrow-next, .feedback-mobile-arrow-next",prevEl:".feedback-arrow-prev, .feedback-mobile-arrow-prev"},pagination:{el:".feedback-pagination",clickable:!0,dynamicBullets:!0,dynamicMainBullets:4},on:{breakpoint:function(t){setTimeout(()=>{t.pagination.destroy(),t.pagination.init(),t.pagination.render(),t.pagination.update()},10)},resize:function(t){t.pagination.update()}},breakpoints:{768:{slidesPerView:3,spaceBetween:24,pagination:{dynamicBullets:!1}},1440:{slidesPerView:3,spaceBetween:24,pagination:{dynamicBullets:!1}}}})}async function U(){try{const e=(await N({page:1,limit:10})).data.feedbacks;if(!e||e.length===0)return;F(e),z()}catch(t){console.error("Помилка завантаження відгуків:",t)}}U();
//# sourceMappingURL=index.js.map
