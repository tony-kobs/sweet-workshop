import{a as x,i as S,S as C,N as $,P}from"./assets/vendor-8y-lWpHi.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(t){if(t.ep)return;t.ep=!0;const n=s(t);fetch(t.href,n)}})();const I="https://deserts-store.b.goit.study/api",T="/desserts",k="/categories",f=x.create({baseURL:I,headers:{"Content-Type":"application/json"}}),O=(o={})=>f.get(T,{params:o}),M=()=>f.get(k),b=document.getElementById("loader");let l=0;function v(){l+=1,b.classList.remove("hidden")}function y(){l-=1,l<=0&&(l=0,b.classList.add("hidden"))}function _(o){S.error({title:"Помилка",message:o,position:"topRight"})}const w="/sweet-deploy-team/assets/icons-CnkChGia.svg";class q{constructor(e,{options:s=[],placeholder:i="Оберіть один...",onChange:t}={}){this.container=e,this.options=s,this.placeholder=i,this.onChange=t,this.selected=null,this._render(),this._bindEvents()}_render(){this.container.innerHTML=`
      <div class="sel-wrap">
        <div class="sel-box" tabindex="0" role="combobox" aria-expanded="false" aria-haspopup="listbox">
          <span class="sel-label sel-placeholder">${this.placeholder}</span>
          <span class="sel-chevron" aria-hidden="true">
            <svg class="select-icon" width="24" height="24">
          <use href="${w}#icon-keyboard_arrow_down"></use>
        </svg>
          </span>
        </div>
        <div class="sel-dropdown" role="listbox">
          ${this.options.map(e=>`
            <div class="sel-opt" role="option" data-value="${e.value}">${e.label}</div>
          `).join("")}
        </div>
      </div>
    `,this._box=this.container.querySelector(".sel-box"),this._label=this.container.querySelector(".sel-label"),this._chevron=this.container.querySelector(".sel-chevron"),this._dropdown=this.container.querySelector(".sel-dropdown"),this._opts=this.container.querySelectorAll(".sel-opt")}_bindEvents(){this._box.addEventListener("click",e=>{e.stopPropagation(),this._isOpen()?this._close():this._open()}),this._opts.forEach(e=>{e.addEventListener("click",s=>{s.stopPropagation(),this._select(e.dataset.value,e.textContent),this._close()})}),this._box.addEventListener("keydown",e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this._isOpen()?this._close():this._open()),e.key==="Escape"&&this._close()}),document.addEventListener("click",()=>this._close())}_isOpen(){return this._dropdown.classList.contains("open")}_open(){this._box.classList.add("open"),this._dropdown.classList.add("open"),this._chevron.classList.add("rotated"),this._box.setAttribute("aria-expanded","true")}_close(){this._box.classList.remove("open"),this._dropdown.classList.remove("open"),this._chevron.classList.remove("rotated"),this._box.setAttribute("aria-expanded","false")}_select(e,s,i=!0){this._opts.forEach(n=>n.classList.remove("selected"));const t=this.container.querySelector(`[data-value="${e}"]`);t&&t.classList.add("selected"),this._label.textContent=s,this._label.classList.remove("sel-placeholder"),this.selected={value:e,label:s},i&&this.onChange&&this.onChange(e,s)}getValue(){return this.selected}setValue(e){const s=this.options.find(i=>i.value===e);s&&this._select(s.value,s.label,!1)}reset(){this._opts.forEach(e=>e.classList.remove("selected")),this._label.textContent=this.placeholder,this._label.classList.add("sel-placeholder"),this.selected=null}}let d=null;const m=8;let c=1,r="all",g=0;const h=document.getElementById("dessert-list"),p=document.getElementById("load-more-btn"),L=document.getElementById("category-desktop"),A=document.getElementById("category-mobile");function B(o){const e=o.map(({_id:s,image:i,category:t,name:n,description:a,price:E})=>`
    <li class="dessert-item" data-id="${s}">
      <img
        src="${i}"
        alt="${n}"
        class="dessert-image"
        width="303"
        height="228"
        loading="lazy"
        decoding="async"
      />
      <div class="dessert-content-wrapper">
        <div class="dessert-header-content">
          <p class="dessert-category-name">${t.name}</p>
          <h3 class="dessert-name">${n}</h3>
          <p class="dessert-description">${a}</p>
        </div>
        <div class="dessert-footer-content">
          <p class="dessert-price">${E} грн</p>
          <button class="dessert-modal-btn" data-id="${s}">
            <svg class="btn-open-modal-icon" width="24" height="24" aria-label="open full product">
              <use href="${w}#icon-arrow_outward"></use>
            </svg>
          </button>
        </div>
      </div>
    </li>
  `).join("");h.insertAdjacentHTML("beforeend",e)}function N(o){const e=[`<label class="category-btn">
      <input type="radio" name="category" value="all" checked hidden />
      Всі десерти
    </label>`,...o.map(({_id:i,name:t})=>`
      <label class="category-btn">
        <input type="radio" name="category" value="${i}" hidden />
        ${t}
      </label>`)].join("");L.innerHTML=e;const s=[{value:"all",label:"Всі десерти",checked:!0},...o.map(({_id:i,name:t})=>({value:i,label:t}))];d=new q(A,{placeholder:"Оберіть категорію",options:s,onChange:async i=>{r=i,await u(!0)}}),d.setValue("all")}async function u(o=!1){try{v(),o&&(h.innerHTML="",c=1);const{data:e}=await O({page:c,limit:m,...r!=="all"&&{category:r}});g=e.totalItems,B(e.desserts);const s=c*m;p.classList.toggle("load-more-hidden",s>=g)}catch{_("Не вдалося завантажити десерти")}finally{y()}}p.addEventListener("click",async()=>{c+=1,await u()});L.addEventListener("change",async o=>{o.target.name==="category"&&(r=o.target.value,d&&d.setValue(r),await u(!0))});h.addEventListener("click",o=>{const e=o.target.closest(".dessert-modal-btn");if(!e)return;const s=e.dataset.id;console.log(s)});async function D(){try{v();const{data:o}=await M();N(o),await u(),p.classList.remove("load-more-hidden")}catch(o){console.error(o),_("Щось пішло не так. Спробуйте пізніше!")}finally{y()}}D();const R=(o,e=200)=>{let s;return(...i)=>{clearTimeout(s),s=setTimeout(()=>o.apply(void 0,i),e)}};document.addEventListener("DOMContentLoaded",()=>{const o=document.querySelector(".about-us-swiper");if(!o)return;let e=null;const s=()=>{e=new C(o,{modules:[$,P],slidesPerView:2,slidesPerGroup:2,spaceBetween:24,grabCursor:!0,navigation:{nextEl:".about-us-nav-btn-next",prevEl:".about-us-nav-btn-prev"},pagination:{el:".about-us-pagination",clickable:!0,dynamicBullets:!0}})},i=()=>{e&&(e.destroy(!0,!0),e=null)},t=()=>{window.innerWidth<=768?i():e||s()};t(),window.addEventListener("resize",R(t,150))});
//# sourceMappingURL=index.js.map
