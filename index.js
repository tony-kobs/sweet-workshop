import{r as e}from"./assets/rolldown-runtime-QTnfLwEv.js";import{a as t,i as n,n as r,o as i,r as a,s as o,t as s}from"./assets/vendor-D5ClR1GE.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var c=`https://deserts-store.b.goit.study/api`,l=`/desserts`,u=`/categories`,d=`/feedbacks`,f=i.create({baseURL:c,headers:{"Content-Type":`application/json`}}),p=(e={})=>f.get(l,{params:e}),m=()=>f.get(u),h=()=>f.get(d),g=document.getElementById(`loader`),_=0;function v(){_+=1,g.classList.remove(`hidden`)}function y(){--_,_<=0&&(_=0,g.classList.add(`hidden`))}var b=e(t(),1);function x(e){b.default.error({title:`Помилка`,message:e,position:`topRight`})}var S=`/sweet-deploy-team/assets/icons-CnkChGia.svg`,C=class{constructor(e,{options:t=[],placeholder:n=`Оберіть один...`,onChange:r}={}){this.container=e,this.options=t,this.placeholder=n,this.onChange=r,this.selected=null,this._render()}_render(){let e=document.createElement(`select`);this.container.appendChild(e),this._choices=new n(e,{choices:this.options.map(e=>({value:e.value,label:e.label,selected:e.value===`all`})),placeholder:!0,placeholderValue:this.placeholder,searchEnabled:!1,itemSelectText:``,shouldSort:!1,classNames:{containerOuter:[`choices`,`sel-wrap`],containerInner:[`choices__inner`,`sel-box`],list:[`choices__list`],listItems:[`choices__list--multiple`],listSingle:[`choices__list--single`],listDropdown:[`choices__list--dropdown`,`sel-dropdown`],item:[`choices__item`],itemSelectable:[`choices__item--selectable`],selectedState:[`is-selected`],placeholder:[`choices__placeholder`,`sel-placeholder`]}}),this.container.querySelector(`.choices__inner`).insertAdjacentHTML(`beforeend`,`<span class="sel-chevron" aria-hidden="true">
        <svg class="select-icon" width="24" height="24">
          <use href="${S}#icon-keyboard_arrow_down"></use>
        </svg>
      </span>`),e.addEventListener(`change`,()=>{let e=this._choices.getValue(!0),t=this.options.find(t=>t.value===e)?.label??``;this.selected={value:e,label:t},this.onChange&&this.onChange(e,t)})}getValue(){return this.selected}setValue(e){this._choices.setChoiceByValue(e);let t=this.options.find(t=>t.value===e)?.label??``;this.selected={value:e,label:t}}reset(){this._choices.setChoiceByValue(``),this.selected=null}},w=null,T=8,E=1,D=`all`,O=0,k=document.getElementById(`dessert-list`),A=document.getElementById(`load-more-btn`),j=document.getElementById(`category-desktop`),M=document.getElementById(`category-mobile`);function N(e){let t=e.map(({_id:e,image:t,category:n,name:r,description:i,price:a})=>`
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
              <use href="${S}#icon-arrow_outward"></use>
            </svg>
          </button>
        </div>
      </div>
    </li>
  `).join(``);k.insertAdjacentHTML(`beforeend`,t)}function P(e){j.innerHTML=[`<label class="category-btn">
      <input type="radio" name="category" value="all" checked hidden />
      Всі десерти
    </label>`,...e.map(({_id:e,name:t})=>`
      <label class="category-btn">
        <input type="radio" name="category" value="${e}" hidden />
        ${t}
      </label>`)].join(``),w=new C(M,{placeholder:`Оберіть категорію`,options:[{value:`all`,label:`Всі десерти`,checked:!0},...e.map(({_id:e,name:t})=>({value:e,label:t}))],onChange:async e=>{D=e,await F(!0)}}),w.setValue(`all`)}async function F(e=!1){try{v(),e&&(k.innerHTML=``,E=1);let{data:t}=await p({page:E,limit:T,...D!==`all`&&{category:D}});O=t.totalItems,N(t.desserts);let n=E*T;A.classList.toggle(`load-more-hidden`,n>=O)}catch{x(`Не вдалося завантажити десерти`)}finally{y()}}A.addEventListener(`click`,async()=>{E+=1,await F()}),j.addEventListener(`change`,async e=>{e.target.name===`category`&&(D=e.target.value,w&&w.setValue(D),await F(!0))}),k.addEventListener(`click`,e=>{let t=e.target.closest(`.dessert-modal-btn`);if(!t)return;let n=t.dataset.id;console.log(n)});async function I(){try{v();let{data:e}=await m();P(e),await F(),A.classList.remove(`load-more-hidden`)}catch(e){console.error(e),x(`Щось пішло не так. Спробуйте пізніше!`)}finally{y()}}I();var L=(e,t=200)=>{let n;return(...r)=>{clearTimeout(n),n=setTimeout(()=>e.apply(void 0,r),t)}};document.addEventListener(`DOMContentLoaded`,()=>{let e=document.querySelector(`.about-us-swiper`);if(!e)return;let t=null,n=()=>{t=new o(e,{modules:[a,r],slidesPerView:2,slidesPerGroup:2,spaceBetween:24,grabCursor:!0,navigation:{nextEl:`.about-us-nav-btn-next`,prevEl:`.about-us-nav-btn-prev`},pagination:{el:`.about-us-pagination`,clickable:!0,dynamicBullets:!0}})},i=()=>{t&&=(t.destroy(!0,!0),null)},s=()=>{window.innerWidth<=768?i():t||n()};s(),window.addEventListener(`resize`,L(s,150))}),document.querySelector(`.modal-order-close-svg use`).setAttribute(`href`,`${S}#icon-close`);var R=document.getElementById(`feedback-list`);function z(e,t){let n=Math.round((parseFloat(e)||0)*2)/2,r=``,i=`M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z`;for(let e=1;e<=5;e++)n>=e?r+=`
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
        </svg>`;return r}function B(e){R.innerHTML=e.map(({_id:e,rate:t,author:n,description:r})=>`
        <li class="feedback-card swiper-slide" data-id="${e}">
          <div class="feedback-raty-stars">
            <div class="star-rating-container">
              ${z(t,e)}
            </div>
          </div>
          <div class="feedback-scroll-wrap">
             <p class="feedback-description">"${r}"</p>
          </div>
          <p class="feedback-author">${n}</p>
        </li>
      `).join(``)}function V(){new o(`.feedback-slider-container`,{modules:[a,r],slidesPerView:1,spaceBetween:20,allowTouchMove:!0,grabCursor:!0,autoHeight:!1,navigation:{nextEl:`.feedback-arrow-next, .feedback-mobile-arrow-next`,prevEl:`.feedback-arrow-prev, .feedback-mobile-arrow-prev`},pagination:{el:`.feedback-pagination`,clickable:!0,dynamicBullets:!0,dynamicMainBullets:4},on:{breakpoint:function(e){setTimeout(()=>{e.pagination.destroy(),e.pagination.init(),e.pagination.render(),e.pagination.update()},10)},resize:function(e){e.pagination.update()}},breakpoints:{768:{slidesPerView:3,spaceBetween:24,pagination:{dynamicBullets:!1}},1440:{slidesPerView:3,spaceBetween:24,pagination:{dynamicBullets:!1}}}})}async function H(){try{let e=(await h({page:1,limit:10})).data.feedbacks;if(!e||e.length===0)return;B(e),V()}catch(e){console.error(`Помилка завантаження відгуків:`,e)}}H();var U=e(s(),1);function W(){let e=document.getElementById(`faqAccordion`);if(!e)return console.warn(`FAQ акордеон: контейнер #faqAccordion не знайдено`),null;document.querySelectorAll(`.ac-trigger`).forEach(e=>{e.querySelector(`.faq-icon`)||e.insertAdjacentHTML(`beforeend`,`
      <svg class="faq-icon" width="32" height="32" viewBox="0 0 32 32">
        <use href="${S}#icon-keyboard_arrow_down"></use>
      </svg>
    `)});let t=new U.default(e,{duration:380,showMultiple:!1,collapse:!0,ariaEnabled:!0,onlyChildNodes:!0,openOnInit:[],elementClass:`ac`,triggerClass:`ac-trigger`,panelClass:`ac-panel`,activeClass:`is-active`});return console.log(`✅ FAQ акордеон успішно ініціалізовано`),t}W();
//# sourceMappingURL=index.js.map