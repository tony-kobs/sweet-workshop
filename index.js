import{r as e}from"./assets/rolldown-runtime-QTnfLwEv.js";import{a as t,c as n,i as r,n as i,o as a,r as o,s as ee,t as te}from"./assets/vendor-BGcUWCvz.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})(),document.addEventListener(`DOMContentLoaded`,()=>{let e=document.getElementById(`burgerToggle`),t=document.getElementById(`burgerClose`),n=document.getElementById(`menu`),r=document.body;function i(){n.classList.add(`open`),r.classList.add(`no-scroll`)}function a(){n.classList.remove(`open`),r.classList.remove(`no-scroll`)}n&&(e&&e.addEventListener(`click`,i),t&&t.addEventListener(`click`,a),n.querySelectorAll(`.nav-link, .btn-action`).forEach(e=>{e.addEventListener(`click`,a)}),document.querySelectorAll(`.logo-link`).forEach(e=>{e.addEventListener(`click`,a)}),window.addEventListener(`keydown`,e=>{e.key===`Escape`&&a()}))});var ne=`https://deserts-store.b.goit.study/api`,re=`/desserts/{id}`,s=`/desserts`,c=`/categories`,l=`/orders`,u=`/feedbacks`,d=ee.create({baseURL:ne,headers:{"Content-Type":`application/json`}}),f=(e={})=>d.get(s,{params:e}),ie=e=>d.get(re.replace(`{id}`,e)),ae=()=>d.get(c),oe=e=>d.post(l,e),se=()=>d.get(u),p=`/sweet-deploy-team/assets/icons-CnkChGia.svg`,ce=6,m=24,h={378:{slidesPerView:1,spaceBetween:m},768:{slidesPerView:2,spaceBetween:m},1440:{slidesPerView:3,spaceBetween:m}};function g(e){if(!e?.pagination?.el)return;let t=[...e.pagination.el.querySelectorAll(`.swiper-pagination-bullet`)],n=e.realIndex,r=Math.floor(ce/2),i=n-r,a=n+r;i<0&&(a+=Math.abs(i),i=0),a>=t.length&&(i=Math.max(0,i-(a-t.length+1)),a=t.length-1),t.forEach((e,t)=>{let r=Math.abs(t-n);if(e.classList.remove(`bullet-active`,`bullet-near`,`bullet-far`),t<i||t>a){e.style.display=`none`;return}e.style.display=`inline-block`,r===0?e.classList.add(`bullet-active`):r===1?e.classList.add(`bullet-near`):e.classList.add(`bullet-far`)})}function _(e={}){return{init(t){g(t),e?.init?.(t)},slideChange(t){g(t),e?.slideChange?.(t)},resize(t){g(t),e?.resize?.(t)},breakpoint(t){g(t),e?.breakpoint?.(t)}}}function v(e,i={}){return new n(e,{modules:[t,r,a],slidesPerView:1,spaceBetween:20,grabCursor:!0,watchOverflow:!0,pagination:{clickable:!0},...i})}function y(e){return v(e,{observer:!0,observeParents:!0,resizeObserver:!0,navigation:{nextEl:`.popular-nav-btn-next`,prevEl:`.popular-nav-btn-prev`},pagination:{el:`.popular-pagination`,clickable:!0},breakpoints:h,on:_()})}function b(e,t={}){return v(e,{noSwiping:!1,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!1},navigation:{nextEl:`.feedback-arrow-next, .feedback-mobile-arrow-next`,prevEl:`.feedback-arrow-prev, .feedback-mobile-arrow-prev`},pagination:{el:`.feedback-pagination`,clickable:!0},breakpoints:{320:{slidesPerView:1,spaceBetween:m},...h},on:_(t)})}function le(e){return v(e,{slidesPerView:2,slidesPerGroup:2,spaceBetween:m,navigation:{nextEl:`.about-us-nav-btn-next`,prevEl:`.about-us-nav-btn-prev`},pagination:{el:`.about-us-pagination`,clickable:!0,dynamicBullets:!0}})}function x(e){e&&typeof e.destroy==`function`&&e.destroy(!0,!0)}var S=document.getElementById(`popular-products-list`),C=null;function w(e){return String(e??``).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`)}function ue(e){return Array.isArray(e?.desserts)?e.desserts:Array.isArray(e)?e:[]}function de(e){return e.map(({_id:e,image:t,category:n,name:r,description:i,price:a})=>`
        <div class="swiper-slide">
          <article class="dessert-item" data-id="${w(e)}">
            <img
              src="${w(t)}"
              alt="${w(r)}"
              class="dessert-image"
              width="303"
              height="228"
              loading="lazy"
              decoding="async"
            />
            <div class="dessert-content-wrapper">
              <div class="dessert-header-content">
                <p class="dessert-category-name">${w(n?.name??n)}</p>
                <h3 class="dessert-name">${w(r)}</h3>
                <p class="dessert-description">${w(i)}</p>
              </div>
              <div class="dessert-footer-content">
                <p class="dessert-price">${w(a)} грн</p>
                <button class="dessert-modal-btn" data-id="${w(e)}">
                  <svg class="btn-open-modal-icon" width="24" height="24" aria-label="open full product">
                    <use href="${p}#icon-arrow_outward"></use>
                  </svg>
                </button>
              </div>
            </div>
          </article>
        </div>
      `).join(``)}function fe(){x(C);let e=document.querySelector(`.popular-swiper`);e&&(C=y(e))}async function pe(){if(S)try{let e=ue((await f({type:`popular`})).data);if(e.length<3){console.warn(`Отримано менше 3-х популярних товарів`);return}S.innerHTML=de(e),requestAnimationFrame(fe)}catch(e){console.error(`Помилка при завантаженні популярних товарів:`,e)}}document.addEventListener(`DOMContentLoaded`,pe);var T=document.getElementById(`loader`),E=0;function D(){E+=1,T.classList.remove(`hidden`)}function O(){--E,E<=0&&(E=0,T.classList.add(`hidden`))}var k=e(o(),1);function me(e){k.default.success({title:`Успіх`,message:e,position:`topRight`})}function A(e){k.default.error({title:`Помилка`,message:e,position:`topRight`})}var j=class{constructor(e,{options:t=[],placeholder:n=`Оберіть один...`,onChange:r}={}){this.container=e,this.options=t,this.placeholder=n,this.onChange=r,this.selected=null,this._render()}_render(){let e=document.createElement(`select`);this.container.appendChild(e),this._choices=new i(e,{choices:this.options.map(e=>({value:e.value,label:e.label,selected:e.value===`all`})),placeholder:!0,placeholderValue:this.placeholder,searchEnabled:!1,itemSelectText:``,shouldSort:!1,classNames:{containerOuter:[`choices`,`sel-wrap`],containerInner:[`choices__inner`,`sel-box`],list:[`choices__list`],listItems:[`choices__list--multiple`],listSingle:[`choices__list--single`],listDropdown:[`choices__list--dropdown`,`sel-dropdown`],item:[`choices__item`],itemSelectable:[`choices__item--selectable`],selectedState:[`is-selected`],placeholder:[`choices__placeholder`,`sel-placeholder`]}}),this.container.querySelector(`.choices__inner`).insertAdjacentHTML(`beforeend`,`<span class="sel-chevron" aria-hidden="true">
        <svg class="select-icon" width="24" height="24">
          <use href="${p}#icon-keyboard_arrow_down"></use>
        </svg>
      </span>`),e.addEventListener(`change`,()=>{let e=this._choices.getValue(!0),t=this.options.find(t=>t.value===e)?.label??``;this.selected={value:e,label:t},this.onChange&&this.onChange(e,t)})}getValue(){return this.selected}setValue(e){this._choices.setChoiceByValue(e);let t=this.options.find(t=>t.value===e)?.label??``;this.selected={value:e,label:t}}reset(){this._choices.setChoiceByValue(``),this.selected=null}};function M(){document.body.style.overflow=`hidden`}function N(){document.body.style.overflow=``}function P(e,t=``,{width:n=20,height:r=19}={}){let i=Math.round((parseFloat(e)||0)*2)/2,a=``,o=`M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z`;for(let e=1;e<=5;e++)if(i>=e)a+=`
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
        </svg>`;return a}var F=document.querySelector(`body`),I=[`name`,`phone`,`comment`],L,R=e=>{e.target===document.querySelector(`.modal-order-overlay`)&&B(),e.target.closest(`.modal-order-close-btn`)&&B()},z=e=>{e.key===`Escape`&&B()},he=async e=>{e.preventDefault();let t=new FormData(e.target),n=!0;if(I.forEach(e=>{if(t.get(`${e}`))document.querySelector(`#${e}`).classList.remove(`emptyInput`);else return document.querySelector(`#${e}`).classList.add(`emptyInput`),n=!1;if(document.querySelector(`#${e}`).validity.valid)document.querySelector(`#${e}`).classList.remove(`invalidInput`);else return document.querySelector(`#${e}`).classList.add(`invalidInput`),n=!1}),!n)return;let r={name:t.get(`name`),phone:t.get(`phone`),comment:t.get(`comment`),dessertId:L};try{D();let{data:t}=await oe(r);me(`Номер замовлення: ${t.orderNum}`),e.target.reset(),B()}catch(e){A(e.response?.data?.message||`Щось пішло не так. Спробуйте ще раз.`)}finally{O()}};function ge(e){L=e,!document.querySelector(`.modal-order-overlay`)&&(F.style.overflow=`hidden`,document.body.insertAdjacentHTML(`beforeend`,`<div class="modal-order-overlay">
    <div class="modal-order">
        <button class="modal-order-close-btn">
            <svg 
                class="modal-order-close-svg"
                viewBox="0 0 24 24"
                width="24"
                height="24">
            <use href="${p}#icon-close"></use></svg>
        </button>
        <h2 class="modal-order-title">Оформлення замовлення</h2>
        <form class="modal-order-form" novalidate>
            <div class="modal-order-form-input-block">
                <label class="modal-order-label" for="name">Ім'я*</label>
                <input id="name" class="modal-order-input" type="text" name="name" placeholder="Вікторія" minlength="2" maxlength="48" required>
            </div>
            <div class="modal-order-form-input-block">
                <label class="modal-order-label" for="phone">Телефон*</label>
                <input id="phone" class="modal-order-input" type="tel" name="phone" placeholder="38 0__ _______" pattern="[0-9]{12}" required>
            </div>
            <div class="modal-order-form-input-block">
                <label class="modal-order-label" for="comment">Коментар*</label>
                <textarea id="comment" class="modal-order-textarea" name="comment" placeholder="Ваш коментар" minlength="2" maxlength="256" required></textarea>
            </div>
            <button class="modal-order-submit-btn" name="submit" type="submit">Надіслати заявку</button>
        </form>
    </div>
</div>`),document.addEventListener(`click`,R),document.addEventListener(`keydown`,z),document.querySelector(`.modal-order-form`).addEventListener(`submit`,he))}function B(){document.querySelector(`.modal-order-overlay`).remove(),document.removeEventListener(`click`,R),document.removeEventListener(`keydown`,z),F.style.overflow=``}async function _e(e){if(document.querySelector(`.modal-backdrop`))return;document.body.insertAdjacentHTML(`beforeend`,`
    <div class="modal-backdrop">
      <div class="dessert-modal">

        <button
          class="modal-close-btn"
          aria-label="Close modal"
        >
          <svg width="24" height="24">
            <use href="${p}#icon-close"></use>
          </svg>
        </button>

        <div class="modal-content">
          <div class="modal-loader-wrapper">
            <span class="loader"></span>
            </div>
        </div>

      </div>
    </div>
  `),M();let t=document.querySelector(`.modal-backdrop`),n=t.querySelector(`.modal-content`),r=t.querySelector(`.modal-close-btn`);function i(){t.remove(),N(),document.removeEventListener(`keydown`,a)}function a(e){e.key===`Escape`&&i()}document.addEventListener(`keydown`,a),t.addEventListener(`click`,e=>{e.target===t&&i()}),r.addEventListener(`click`,i);try{let{data:t}=await ie(e);n.innerHTML=`
  <img loading="lazy"
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
      ${P(t.rate,`modal-${t._id||e}`,{width:18,height:18})}
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
`,n.querySelector(`.order-btn`).addEventListener(`click`,()=>{i(),ge(e)})}catch{n.innerHTML=`
      <p>
        Не вдалося завантажити десерт
      </p>
    `}}var V=null,H=8,U=1,W=`all`,G=0,K=document.getElementById(`dessert-list`),q=document.getElementById(`load-more-btn`),J=document.getElementById(`category-desktop`),ve=document.getElementById(`category-mobile`);function ye(e){let t=e.map(({_id:e,image:t,category:n,name:r,description:i,price:a})=>`
    <li class="dessert-item" data-id="${e}">
      <img loading="lazy"
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
              <use href="${p}#icon-arrow_outward"></use>
            </svg>
          </button>
        </div>
      </div>
    </li>
  `).join(``);K.insertAdjacentHTML(`beforeend`,t)}function be(e){J.innerHTML=[`<label class="category-btn">
      <input type="radio" name="category" value="all" checked hidden />
      Всі десерти
    </label>`,...e.map(({_id:e,name:t})=>`
      <label class="category-btn">
        <input type="radio" name="category" value="${e}" hidden />
        ${t}
      </label>`)].join(``),V=new j(ve,{placeholder:`Оберіть категорію`,options:[{value:`all`,label:`Всі десерти`,checked:!0},...e.map(({_id:e,name:t})=>({value:e,label:t}))],onChange:async e=>{W=e,await Y(!0)}}),V.setValue(`all`)}async function Y(e=!1){try{D(),e&&(K.innerHTML=``,U=1);let{data:t}=await f({page:U,limit:H,...W!==`all`&&{category:W}});G=t.totalItems,ye(t.desserts);let n=U*H;q.classList.toggle(`load-more-hidden`,n>=G)}catch{A(`Не вдалося завантажити десерти`)}finally{O()}}q.addEventListener(`click`,async()=>{U+=1,await Y()}),J.addEventListener(`change`,async e=>{e.target.name===`category`&&(W=e.target.value,V&&V.setValue(W),await Y(!0))}),document.addEventListener(`click`,e=>{let t=e.target.closest(`.dessert-modal-btn`);if(!t)return;let n=t.dataset.id;console.log(n),_e(n)});async function xe(){try{D();let{data:e}=await ae();be(e),await Y(),q.classList.remove(`load-more-hidden`)}catch(e){console.error(e),A(`Щось пішло не так. Спробуйте пізніше!`)}finally{O()}}xe();var Se=769,Ce=(e,t=200)=>{let n;return(...r)=>{clearTimeout(n),n=setTimeout(()=>e(...r),t)}};document.addEventListener(`DOMContentLoaded`,()=>{let e=document.querySelector(`.about-us-swiper`);if(!e)return;let t=null,n=()=>{t=le(e)},r=()=>{x(t),t=null},i=()=>{let e=window.innerWidth>=Se;e&&!t?n():!e&&t&&r()};i(),window.addEventListener(`resize`,Ce(i,150))});var we=10,Te=1,X=document.getElementById(`feedback-list`),Z=null;function Q(e){return String(e??``).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`)}function Ee(e){return[e?.data?.feedbacks,e?.feedbacks,e?.data,e].find(Array.isArray)??[]}function De(e){return e.map(({_id:e,rate:t,author:n,description:r})=>{let i=P(t,e);return`
        <li class="feedback-card swiper-slide" data-id="${Q(e)}">
          <div class="feedback-raty-stars">
            <div class="star-rating-container">
              ${i}
            </div>
          </div>
          <div class="feedback-scroll-wrap swiper-no-swiping">
            <p class="feedback-description">"${Q(r.trim())}"</p>
          </div>
          <p class="feedback-author">${Q(n)}</p>
        </li>
      `}).join(``)}function Oe(e){let t=e.activeIndex>(e.previousIndex??0)?`.feedback-arrow-next, .feedback-mobile-arrow-next`:`.feedback-arrow-prev, .feedback-mobile-arrow-prev`,n=document.querySelectorAll(t);n.forEach(e=>e.classList.add(`is-active`)),setTimeout(()=>{n.forEach(e=>e.classList.remove(`is-active`))},200)}function ke(){x(Z),Z=null,Z=b(`.feedback-slider-container`,{slideChange:Oe})}function Ae(){X&&(X.innerHTML=``);let e=document.querySelector(`.feedback-pagination`);e&&(e.innerHTML=``)}function $(e){return e?.response?.status??e?.status??e?.code??`Network Error`}async function je(){D(),Ae();try{let e=Ee(await se({page:Te,limit:we}));if(!e.length){O();return}X.innerHTML=De(e),requestAnimationFrame(()=>{ke(),O()})}catch(e){A(`Не вдалося завантажити відгуки клієнтів. Спробуйте пізніше. (${$(e)})`),O()}}je();var Me=e(te(),1);function Ne(){let e=document.getElementById(`faqAccordion`);if(!e)return console.warn(`FAQ акордеон: контейнер #faqAccordion не знайдено`),null;document.querySelectorAll(`.ac-trigger`).forEach(e=>{e.querySelector(`.faq-icon`)||e.insertAdjacentHTML(`beforeend`,`
      <svg class="faq-icon" width="32" height="32" viewBox="0 0 32 32">
        <use href="${p}#icon-keyboard_arrow_down"></use>
      </svg>
    `)});let t=new Me.default(e,{duration:380,showMultiple:!1,collapse:!0,ariaEnabled:!0,onlyChildNodes:!0,openOnInit:[],elementClass:`ac`,triggerClass:`ac-trigger`,panelClass:`ac-panel`,activeClass:`is-active`});return console.log(`✅ FAQ акордеон успішно ініціалізовано`),t}Ne();
//# sourceMappingURL=index.js.map