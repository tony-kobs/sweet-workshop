import{r as e}from"./assets/rolldown-runtime-QTnfLwEv.js";import{a as t,i as n,n as r,o as i,r as a,t as o}from"./assets/vendor-DUEQ-rrA.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var s=`https://deserts-store.b.goit.study/api`,c=`/desserts`,l=`/categories`,u=`/feedbacks`,d=t.create({baseURL:s,headers:{"Content-Type":`application/json`}}),f=(e={})=>d.get(c,{params:e}),p=()=>d.get(l),m=()=>d.get(u),h=document.getElementById(`loader`),g=0;function _(){g+=1,h.classList.remove(`hidden`)}function v(){--g,g<=0&&(g=0,h.classList.add(`hidden`))}var y=e(n(),1);function b(e){y.default.error({title:`Помилка`,message:e,position:`topRight`})}var x=`/sweet-deploy-team/assets/icons-CnkChGia.svg`,S=class{constructor(e,{options:t=[],placeholder:n=`Оберіть один...`,onChange:r}={}){this.container=e,this.options=t,this.placeholder=n,this.onChange=r,this.selected=null,this._render(),this._bindEvents()}_render(){this.container.innerHTML=`
      <div class="sel-wrap">
        <div class="sel-box" tabindex="0" role="combobox" aria-expanded="false" aria-haspopup="listbox">
          <span class="sel-label sel-placeholder">${this.placeholder}</span>
          <span class="sel-chevron" aria-hidden="true">
            <svg class="select-icon" width="24" height="24">
          <use href="${x}#icon-keyboard_arrow_down"></use>
        </svg>
          </span>
        </div>
        <div class="sel-dropdown" role="listbox">
          ${this.options.map(e=>`
            <div class="sel-opt" role="option" data-value="${e.value}">${e.label}</div>
          `).join(``)}
        </div>
      </div>
    `,this._box=this.container.querySelector(`.sel-box`),this._label=this.container.querySelector(`.sel-label`),this._chevron=this.container.querySelector(`.sel-chevron`),this._dropdown=this.container.querySelector(`.sel-dropdown`),this._opts=this.container.querySelectorAll(`.sel-opt`)}_bindEvents(){this._box.addEventListener(`click`,e=>{e.stopPropagation(),this._isOpen()?this._close():this._open()}),this._opts.forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation(),this._select(e.dataset.value,e.textContent),this._close()})}),this._box.addEventListener(`keydown`,e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),this._isOpen()?this._close():this._open()),e.key===`Escape`&&this._close()}),document.addEventListener(`click`,()=>this._close())}_isOpen(){return this._dropdown.classList.contains(`open`)}_open(){this._box.classList.add(`open`),this._dropdown.classList.add(`open`),this._chevron.classList.add(`rotated`),this._box.setAttribute(`aria-expanded`,`true`)}_close(){this._box.classList.remove(`open`),this._dropdown.classList.remove(`open`),this._chevron.classList.remove(`rotated`),this._box.setAttribute(`aria-expanded`,`false`)}_select(e,t,n=!0){this._opts.forEach(e=>e.classList.remove(`selected`));let r=this.container.querySelector(`[data-value="${e}"]`);r&&r.classList.add(`selected`),this._label.textContent=t,this._label.classList.remove(`sel-placeholder`),this.selected={value:e,label:t},n&&this.onChange&&this.onChange(e,t)}getValue(){return this.selected}setValue(e){let t=this.options.find(t=>t.value===e);t&&this._select(t.value,t.label,!1)}reset(){this._opts.forEach(e=>e.classList.remove(`selected`)),this._label.textContent=this.placeholder,this._label.classList.add(`sel-placeholder`),this.selected=null}},C=null,w=8,T=1,E=`all`,D=0,O=document.getElementById(`dessert-list`),k=document.getElementById(`load-more-btn`),A=document.getElementById(`category-desktop`),j=document.getElementById(`category-mobile`);function M(e){let t=e.map(({_id:e,image:t,category:n,name:r,description:i,price:a})=>`
    <li class="dessert-item" data-id="${e}">
      <img
        src="${t}"
        alt="${r}"
        class="dessert-image"
        width="303"
        height="228"
        loading="lazy"
        decoding="async"
      />
      <div class="dessert-content-wrapper">
        <div class="dessert-header-content">
          <p class="dessert-category-name">${n.name}</p>
          <h3 class="dessert-name">${r}</h3>
          <p class="dessert-description">${i}</p>
        </div>
        <div class="dessert-footer-content">
          <p class="dessert-price">${a} грн</p>
          <button class="dessert-modal-btn" data-id="${e}">
            <svg class="btn-open-modal-icon" width="24" height="24" aria-label="open full product">
              <use href="${x}#icon-arrow_outward"></use>
            </svg>
          </button>
        </div>
      </div>
    </li>
  `).join(``);O.insertAdjacentHTML(`beforeend`,t)}function N(e){A.innerHTML=[`<label class="category-btn">
      <input type="radio" name="category" value="all" checked hidden />
      Всі десерти
    </label>`,...e.map(({_id:e,name:t})=>`
      <label class="category-btn">
        <input type="radio" name="category" value="${e}" hidden />
        ${t}
      </label>`)].join(``),C=new S(j,{placeholder:`Оберіть категорію`,options:[{value:`all`,label:`Всі десерти`,checked:!0},...e.map(({_id:e,name:t})=>({value:e,label:t}))],onChange:async e=>{E=e,await P(!0)}}),C.setValue(`all`)}async function P(e=!1){try{_(),e&&(O.innerHTML=``,T=1);let{data:t}=await f({page:T,limit:w,...E!==`all`&&{category:E}});D=t.totalItems,M(t.desserts);let n=T*w;k.classList.toggle(`load-more-hidden`,n>=D)}catch{b(`Не вдалося завантажити десерти`)}finally{v()}}k.addEventListener(`click`,async()=>{T+=1,await P()}),A.addEventListener(`change`,async e=>{e.target.name===`category`&&(E=e.target.value,C&&C.setValue(E),await P(!0))}),O.addEventListener(`click`,e=>{let t=e.target.closest(`.dessert-modal-btn`);if(!t)return;let n=t.dataset.id;console.log(n)});async function F(){try{_();let{data:e}=await p();N(e),await P(),k.classList.remove(`load-more-hidden`)}catch(e){console.error(e),b(`Щось пішло не так. Спробуйте пізніше!`)}finally{v()}}F();var I=(e,t=200)=>{let n;return(...r)=>{clearTimeout(n),n=setTimeout(()=>e.apply(void 0,r),t)}};document.addEventListener(`DOMContentLoaded`,()=>{let e=document.querySelector(`.about-us-swiper`);if(!e)return;let t=null,n=()=>{t=new i(e,{modules:[a,r],slidesPerView:2,slidesPerGroup:2,spaceBetween:24,grabCursor:!0,navigation:{nextEl:`.about-us-nav-btn-next`,prevEl:`.about-us-nav-btn-prev`},pagination:{el:`.about-us-pagination`,clickable:!0,dynamicBullets:!0}})},o=()=>{t&&=(t.destroy(!0,!0),null)},s=()=>{window.innerWidth<=768?o():t||n()};s(),window.addEventListener(`resize`,I(s,150))}),document.querySelector(`.modal-order-close-svg use`).setAttribute(`href`,`${x}#icon-close`);var L=document.getElementById(`feedback-list`);function R(e,t){let n=Math.round((parseFloat(e)||0)*2)/2,r=``,i=`M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z`;for(let e=1;e<=5;e++)n>=e?r+=`
        <svg class="star-icon is-active" width="20" height="19" viewBox="0 0 20 19">
          <path d="${i}"/>
        </svg>`:n===e-.5?r+=`
        <svg class="star-icon is-half" width="20" height="19" viewBox="0 0 20 19">
          <defs>
            <linearGradient id="fatStarGrad-${t}-${e}">
              <stop offset="50%" stop-color="var(--color-neutral-darkest, #080c0c)"/>
              <stop offset="50%" stop-color="var(--color-neutral-lighter, #e3e3e3)"/>
            </linearGradient>
          </defs>
          <path fill="url(#fatStarGrad-${t}-${e})" d="${i}"/>
        </svg>`:r+=`
        <svg class="star-icon" width="20" height="19" viewBox="0 0 20 19">
          <path d="${i}"/>
        </svg>`;return r}function z(e){L.innerHTML=e.map(({_id:e,rate:t,author:n,description:r})=>`
        <li class="feedback-card swiper-slide" data-id="${e}">
          <div class="feedback-raty-stars">
            <div class="star-rating-container">
              ${R(t,e)}
            </div>
          </div>
          <div class="feedback-scroll-wrap">
             <p class="feedback-description">"${r}"</p>
          </div>
          <p class="feedback-author">${n}</p>
        </li>
      `).join(``)}function B(){new i(`.feedback-slider-container`,{modules:[a,r],slidesPerView:1,spaceBetween:20,allowTouchMove:!0,grabCursor:!0,autoHeight:!1,navigation:{nextEl:`.feedback-arrow-next, .feedback-mobile-arrow-next`,prevEl:`.feedback-arrow-prev, .feedback-mobile-arrow-prev`},pagination:{el:`.feedback-pagination`,clickable:!0,dynamicBullets:!0,dynamicMainBullets:4},on:{breakpoint:function(e){setTimeout(()=>{e.pagination.destroy(),e.pagination.init(),e.pagination.render(),e.pagination.update()},10)},resize:function(e){e.pagination.update()}},breakpoints:{768:{slidesPerView:3,spaceBetween:24,pagination:{dynamicBullets:!1}},1440:{slidesPerView:3,spaceBetween:24,pagination:{dynamicBullets:!1}}}})}async function V(){try{let e=(await m({page:1,limit:10})).data.feedbacks;if(!e||e.length===0)return;z(e),B()}catch(e){console.error(`Помилка завантаження відгуків:`,e)}}V();var H=e(o(),1);function U(){let e=document.getElementById(`faqAccordion`);if(!e)return console.warn(`FAQ акордеон: контейнер #faqAccordion не знайдено`),null;document.querySelectorAll(`.ac-trigger`).forEach(e=>{e.querySelector(`.faq-icon`)||e.insertAdjacentHTML(`beforeend`,`
      <svg class="faq-icon" width="32" height="32" viewBox="0 0 32 32">
        <use href="${x}#icon-keyboard_arrow_down"></use>
      </svg>
    `)});let t=new H.default(e,{duration:380,showMultiple:!1,collapse:!0,ariaEnabled:!0,onlyChildNodes:!0,openOnInit:[],elementClass:`ac`,triggerClass:`ac-trigger`,panelClass:`ac-panel`,activeClass:`is-active`});return console.log(`✅ FAQ акордеон успішно ініціалізовано`),t}U();
//# sourceMappingURL=index.js.map