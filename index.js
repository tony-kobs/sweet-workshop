import{a as x,i as $}from"./assets/vendor-7frk0oZ2.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=s(t);fetch(t.href,i)}})();const C="https://deserts-store.b.goit.study/api",S="/desserts",k="/categories",m=x.create({baseURL:C,headers:{"Content-Type":"application/json"}}),I=(o={})=>m.get(S,{params:o}),O=()=>m.get(k),v=document.getElementById("loader");let l=0;function y(){l+=1,v.classList.remove("hidden")}function b(){l-=1,l<=0&&(l=0,v.classList.add("hidden"))}function _(o){$.error({title:"Помилка",message:o,position:"topRight"})}const L="/sweet-deploy-team/assets/icons-CnkChGia.svg";class T{constructor(e,{options:s=[],placeholder:a="Оберіть один...",onChange:t}={}){this.container=e,this.options=s,this.placeholder=a,this.onChange=t,this.selected=null,this._render(),this._bindEvents()}_render(){this.container.innerHTML=`
      <div class="sel-wrap">
        <div class="sel-box" tabindex="0" role="combobox" aria-expanded="false" aria-haspopup="listbox">
          <span class="sel-label sel-placeholder">${this.placeholder}</span>
          <span class="sel-chevron" aria-hidden="true">
            <svg class="select-icon" width="24" height="24">
          <use href="${L}#icon-keyboard_arrow_down"></use>
        </svg>
          </span>
        </div>
        <div class="sel-dropdown" role="listbox">
          ${this.options.map(e=>`
            <div class="sel-opt" role="option" data-value="${e.value}">${e.label}</div>
          `).join("")}
        </div>
      </div>
    `,this._box=this.container.querySelector(".sel-box"),this._label=this.container.querySelector(".sel-label"),this._chevron=this.container.querySelector(".sel-chevron"),this._dropdown=this.container.querySelector(".sel-dropdown"),this._opts=this.container.querySelectorAll(".sel-opt")}_bindEvents(){this._box.addEventListener("click",e=>{e.stopPropagation(),this._isOpen()?this._close():this._open()}),this._opts.forEach(e=>{e.addEventListener("click",s=>{s.stopPropagation(),this._select(e.dataset.value,e.textContent),this._close()})}),this._box.addEventListener("keydown",e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this._isOpen()?this._close():this._open()),e.key==="Escape"&&this._close()}),document.addEventListener("click",()=>this._close())}_isOpen(){return this._dropdown.classList.contains("open")}_open(){this._box.classList.add("open"),this._dropdown.classList.add("open"),this._chevron.classList.add("rotated"),this._box.setAttribute("aria-expanded","true")}_close(){this._box.classList.remove("open"),this._dropdown.classList.remove("open"),this._chevron.classList.remove("rotated"),this._box.setAttribute("aria-expanded","false")}_select(e,s){this._opts.forEach(t=>t.classList.remove("selected"));const a=this.container.querySelector(`[data-value="${e}"]`);a&&a.classList.add("selected"),this._label.textContent=s,this._label.classList.remove("sel-placeholder"),this.selected={value:e,label:s},this.onChange&&this.onChange(e,s)}getValue(){return this.selected}setValue(e){const s=this.options.find(a=>a.value===e);s&&this._select(s.value,s.label)}reset(){this._opts.forEach(e=>e.classList.remove("selected")),this._label.textContent=this.placeholder,this._label.classList.add("sel-placeholder"),this.selected=null}}let d=null;const f=8;let c=1,r="all",g=0;const p=document.getElementById("dessert-list"),u=document.getElementById("load-more-btn"),E=document.getElementById("category-desktop"),P=document.getElementById("category-mobile");function M(o){const e=o.map(({_id:s,image:a,category:t,name:i,description:n,price:w})=>`
    <li class="dessert-item" data-id="${s}">
      <img
        src="${a}"
        alt="${i}"
        class="dessert-image"
        width="303"
        height="228"
        loading="lazy"
        decoding="async"
      />
      <div class="dessert-content-wrapper">
        <div class="dessert-header-content">
          <p class="dessert-category-name">${t.name}</p>
          <h3 class="dessert-name">${i}</h3>
          <p class="dessert-description">${n}</p>
        </div>
        <div class="dessert-footer-content">
          <p class="dessert-price">${w} грн</p>
          <button class="dessert-modal-btn" data-id="${s}">
            <svg class="btn-open-modal-icon" width="24" height="24" aria-label="open full product">
              <use href="${L}#icon-arrow_outward"></use>
            </svg>
          </button>
        </div>
      </div>
    </li>
  `).join("");p.insertAdjacentHTML("beforeend",e)}function q(o){const e=[`<label class="category-btn">
      <input type="radio" name="category" value="all" checked hidden />
      Всі десерти
    </label>`,...o.map(({_id:a,name:t})=>`
      <label class="category-btn">
        <input type="radio" name="category" value="${a}" hidden />
        ${t}
      </label>`)].join("");E.innerHTML=e;const s=[{value:"all",label:"Всі десерти",checked:!0},...o.map(({_id:a,name:t})=>({value:a,label:t}))];d=new T(P,{placeholder:"Оберіть категорію",options:s,onChange:async a=>{r=a,await h(!0)}}),d.setValue("all")}async function h(o=!1){try{y(),o&&(p.innerHTML="",c=1);const{data:e}=await I({page:c,limit:f,...r!=="all"&&{category:r}});g=e.totalItems,M(e.desserts);const s=c*f;u.classList.toggle("load-more-hidden",s>=g)}catch{_("Не вдалося завантажити десерти")}finally{b()}}u.addEventListener("click",async()=>{c+=1,await h()});E.addEventListener("change",async o=>{o.target.name==="category"&&(r=o.target.value,d&&d.setValue(r),await h(!0))});p.addEventListener("click",o=>{const e=o.target.closest(".dessert-modal-btn");if(!e)return;const s=e.dataset.id;console.log(s)});async function A(){try{y();const{data:o}=await O();q(o),await h(),u.classList.remove("load-more-hidden")}catch{_("Щось пішло не так. Спробуйте пізніше!")}finally{b()}}A();
//# sourceMappingURL=index.js.map
