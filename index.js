import{r as e}from"./assets/rolldown-runtime-QTnfLwEv.js";import{a as t,i as n,n as r,o as i,r as a,s as o,t as s}from"./assets/vendor-DoKxmcX6.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var c=`https://deserts-store.b.goit.study/api`,l=`/desserts/{id}`,u=`/desserts`,d=`/categories`,f=`/feedbacks`,p=i.create({baseURL:c,headers:{"Content-Type":`application/json`}}),m=(e={})=>p.get(u,{params:e}),h=e=>p.get(l.replace(`{id}`,e)),g=()=>p.get(d),_=()=>p.get(f),v=document.getElementById(`loader`),y=0;function b(){y+=1,v.classList.remove(`hidden`)}function x(){--y,y<=0&&(y=0,v.classList.add(`hidden`))}var S=e(t(),1);function C(e){S.default.error({title:`Помилка`,message:e,position:`topRight`})}var w=`/sweet-deploy-team/assets/icons-CnkChGia.svg`,T=class{constructor(e,{options:t=[],placeholder:n=`Оберіть один...`,onChange:r}={}){this.container=e,this.options=t,this.placeholder=n,this.onChange=r,this.selected=null,this._render()}_render(){let e=document.createElement(`select`);this.container.appendChild(e),this._choices=new n(e,{choices:this.options.map(e=>({value:e.value,label:e.label,selected:e.value===`all`})),placeholder:!0,placeholderValue:this.placeholder,searchEnabled:!1,itemSelectText:``,shouldSort:!1,classNames:{containerOuter:[`choices`,`sel-wrap`],containerInner:[`choices__inner`,`sel-box`],list:[`choices__list`],listItems:[`choices__list--multiple`],listSingle:[`choices__list--single`],listDropdown:[`choices__list--dropdown`,`sel-dropdown`],item:[`choices__item`],itemSelectable:[`choices__item--selectable`],selectedState:[`is-selected`],placeholder:[`choices__placeholder`,`sel-placeholder`]}}),this.container.querySelector(`.choices__inner`).insertAdjacentHTML(`beforeend`,`<span class="sel-chevron" aria-hidden="true">
        <svg class="select-icon" width="24" height="24">
          <use href="${w}#icon-keyboard_arrow_down"></use>
        </svg>
      </span>`),e.addEventListener(`change`,()=>{let e=this._choices.getValue(!0),t=this.options.find(t=>t.value===e)?.label??``;this.selected={value:e,label:t},this.onChange&&this.onChange(e,t)})}getValue(){return this.selected}setValue(e){this._choices.setChoiceByValue(e);let t=this.options.find(t=>t.value===e)?.label??``;this.selected={value:e,label:t}}reset(){this._choices.setChoiceByValue(``),this.selected=null}};function E(){document.body.style.overflow=`hidden`}function D(){document.body.style.overflow=``}function O(e,t=``,{width:n=20,height:r=19}={}){let i=Math.round((parseFloat(e)||0)*2)/2,a=``,o=`M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z`;for(let e=1;e<=5;e++)if(i>=e)a+=`
        <svg
          class="star-icon is-active"
          width="${n}"
          height="${r}"
          viewBox="0 0 20 19"
        >
          <path d="${o}"/>
        </svg>`;else if(i===e-.5){let i=t?`fatStarGrad-${t}-${e}`:`fatStarGrad-${e}`;a+=`
        <svg
          class="star-icon is-half"
          width="${n}"
          height="${r}"
          viewBox="0 0 20 19"
        >
          <defs>
            <linearGradient id="${i}">
              <stop
                offset="50%"
                stop-color="var(--color-neutral-darkest, #080c0c)"
              />
              <stop
                offset="50%"
                stop-color="transparent"
              />
            </linearGradient>
          </defs>

          <path
            fill="url(#${i})"
            d="${o}"
          />
        </svg>`}else a+=`
        <svg
          class="star-icon"
          width="${n}"
          height="${r}"
          viewBox="0 0 20 19"
        >
          <path fill="transparent" d="${o}"/>
        </svg>`;return a}async function k(e){if(document.querySelector(`.modal-backdrop`))return;document.body.insertAdjacentHTML(`beforeend`,`
    <div class="modal-backdrop">
      <div class="dessert-modal">

        <button
          class="modal-close-btn"
          aria-label="Close modal"
        >
          <svg width="24" height="24">
            <use href="${w}#icon-close"></use>
          </svg>
        </button>

        <div class="modal-content">
          Loading...
        </div>

      </div>
    </div>
  `),E();let t=document.querySelector(`.modal-backdrop`),n=t.querySelector(`.modal-content`),r=t.querySelector(`.modal-close-btn`);function i(){t.remove(),D(),document.removeEventListener(`keydown`,a)}function a(e){e.key===`Escape`&&i()}document.addEventListener(`keydown`,a),t.addEventListener(`click`,e=>{e.target===t&&i()}),r.addEventListener(`click`,i);try{let{data:t}=await h(e);n.innerHTML=`
  <img
    src="${t.image}"
    alt="${t.name}"
    class="modal-image"
  />

  <div class="modal-info">

    <h2 class="modal-title">
      ${t.name}
    </h2>

    <p class="modal-price">
      ${t.price} грн
    </p>

    <div class="modal-rating">
      ${O(t.rate,`modal-${t._id||e}`,{width:18,height:18})}
    </div>

    <p class="modal-description">
      ${t.description}
    </p>

    <div class="modal-composition-wrapper">
      <span class="composition-title">
        Склад:
      </span>
      ${t.composition}
    </div>

    <button class="order-btn">
      Перейти до замовлення
    </button>

  </div>
`,n.querySelector(`.order-btn`).addEventListener(`click`,()=>{i()})}catch{n.innerHTML=`
      <p>
        Не вдалося завантажити десерт
      </p>
    `}}var A=null,j=8,M=1,N=`all`,P=0,F=document.getElementById(`dessert-list`),I=document.getElementById(`load-more-btn`),L=document.getElementById(`category-desktop`),R=document.getElementById(`category-mobile`);function z(e){let t=e.map(({_id:e,image:t,category:n,name:r,description:i,price:a})=>`
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
              <use href="${w}#icon-arrow_outward"></use>
            </svg>
          </button>
        </div>
      </div>
    </li>
  `).join(``);F.insertAdjacentHTML(`beforeend`,t)}function B(e){L.innerHTML=[`<label class="category-btn">
      <input type="radio" name="category" value="all" checked hidden />
      Всі десерти
    </label>`,...e.map(({_id:e,name:t})=>`
      <label class="category-btn">
        <input type="radio" name="category" value="${e}" hidden />
        ${t}
      </label>`)].join(``),A=new T(R,{placeholder:`Оберіть категорію`,options:[{value:`all`,label:`Всі десерти`,checked:!0},...e.map(({_id:e,name:t})=>({value:e,label:t}))],onChange:async e=>{N=e,await V(!0)}}),A.setValue(`all`)}async function V(e=!1){try{b(),e&&(F.innerHTML=``,M=1);let{data:t}=await m({page:M,limit:j,...N!==`all`&&{category:N}});P=t.totalItems,z(t.desserts);let n=M*j;I.classList.toggle(`load-more-hidden`,n>=P)}catch{C(`Не вдалося завантажити десерти`)}finally{x()}}I.addEventListener(`click`,async()=>{M+=1,await V()}),L.addEventListener(`change`,async e=>{e.target.name===`category`&&(N=e.target.value,A&&A.setValue(N),await V(!0))}),F.addEventListener(`click`,e=>{let t=e.target.closest(`.dessert-modal-btn`);if(!t)return;let n=t.dataset.id;console.log(n),k(n)});async function H(){try{b();let{data:e}=await g();B(e),await V(),I.classList.remove(`load-more-hidden`)}catch(e){console.error(e),C(`Щось пішло не так. Спробуйте пізніше!`)}finally{x()}}H();var U=(e,t=200)=>{let n;return(...r)=>{clearTimeout(n),n=setTimeout(()=>e.apply(void 0,r),t)}};document.addEventListener(`DOMContentLoaded`,()=>{let e=document.querySelector(`.about-us-swiper`);if(!e)return;let t=null,n=()=>{t=new o(e,{modules:[a,r],slidesPerView:2,slidesPerGroup:2,spaceBetween:24,grabCursor:!0,navigation:{nextEl:`.about-us-nav-btn-next`,prevEl:`.about-us-nav-btn-prev`},pagination:{el:`.about-us-pagination`,clickable:!0,dynamicBullets:!0}})},i=()=>{t&&=(t.destroy(!0,!0),null)},s=()=>{window.innerWidth<=768?i():t||n()};s(),window.addEventListener(`resize`,U(s,150))}),document.querySelector(`.modal-order-close-svg use`).setAttribute(`href`,`${w}#icon-close`);var W=document.getElementById(`feedback-list`);function G(e){W.innerHTML=e.map(({_id:e,rate:t,author:n,description:r})=>`
        <li class="feedback-card swiper-slide" data-id="${e}">
          <div class="feedback-raty-stars">
            <div class="star-rating-container">
              ${O(t,e)}
            </div>
          </div>
          <div class="feedback-scroll-wrap swiper-no-swiping">
            <p class="feedback-description">"${r.trim()}"</p>
          </div>
          <p class="feedback-author">${n}</p>
        </li>
      `).join(``)}function K(){new o(`.feedback-slider-container`,{modules:[a,r],slidesPerView:1,spaceBetween:20,allowTouchMove:!0,grabCursor:!0,autoHeight:!1,navigation:{nextEl:`.feedback-arrow-next, .feedback-mobile-arrow-next`,prevEl:`.feedback-arrow-prev, .feedback-mobile-arrow-prev`},pagination:{el:`.feedback-pagination`,clickable:!0},breakpoints:{320:{slidesPerView:1,spaceBetween:24},768:{slidesPerView:3,spaceBetween:24,dynamicBullets:!1},1440:{slidesPerView:3,spaceBetween:24,dynamicBullets:!1}}})}async function q(){try{b();let e=(await _({page:1,limit:10})).data.feedbacks;if(!e||e.length===0)return;G(e),K()}catch(e){C(`Не вдалося завантажити відгуки:`,e)}finally{x()}}q();var J=e(s(),1);function Y(){let e=document.getElementById(`faqAccordion`);if(!e)return console.warn(`FAQ акордеон: контейнер #faqAccordion не знайдено`),null;document.querySelectorAll(`.ac-trigger`).forEach(e=>{e.querySelector(`.faq-icon`)||e.insertAdjacentHTML(`beforeend`,`
      <svg class="faq-icon" width="32" height="32" viewBox="0 0 32 32">
        <use href="${w}#icon-keyboard_arrow_down"></use>
      </svg>
    `)});let t=new J.default(e,{duration:380,showMultiple:!1,collapse:!0,ariaEnabled:!0,onlyChildNodes:!0,openOnInit:[],elementClass:`ac`,triggerClass:`ac-trigger`,panelClass:`ac-panel`,activeClass:`is-active`});return console.log(`✅ FAQ акордеон успішно ініціалізовано`),t}Y();
//# sourceMappingURL=index.js.map