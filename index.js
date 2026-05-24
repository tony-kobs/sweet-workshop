import{r as e}from"./assets/rolldown-runtime-QTnfLwEv.js";import{a as t,c as n,i as r,n as i,o as a,r as o,s,t as c}from"./assets/vendor-o1m5MCqf.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})(),document.addEventListener(`DOMContentLoaded`,()=>{let e=document.getElementById(`burgerToggle`),t=document.getElementById(`burgerClose`),n=document.getElementById(`menu`),r=document.body;function i(){n.classList.add(`open`),r.classList.add(`no-scroll`)}function a(){n.classList.remove(`open`),r.classList.remove(`no-scroll`)}n&&(e&&e.addEventListener(`click`,i),t&&t.addEventListener(`click`,a),n.querySelectorAll(`.nav-link, .btn-action`).forEach(e=>{e.addEventListener(`click`,a)}),document.querySelectorAll(`.logo-link`).forEach(e=>{e.addEventListener(`click`,a)}),window.addEventListener(`keydown`,e=>{e.key===`Escape`&&a()}))});var ee=`https://deserts-store.b.goit.study/api`,l=`/desserts/{id}`,u=`/desserts`,d=`/categories`,f=`/orders`,te=`/feedbacks`,p=s.create({baseURL:ee,headers:{"Content-Type":`application/json`}}),m=(e={})=>p.get(u,{params:e}),h=e=>p.get(l.replace(`{id}`,e)),g=()=>p.get(d),_=e=>p.post(f,e),ne=()=>p.get(te),v=`/sweet-deploy-team/assets/icons-CnkChGia.svg`,y=document.getElementById(`popular-products-list`);function b(){let e=document.querySelector(`.popular-swiper`);e&&new n(e,{modules:[t,r],observer:!0,observeParents:!0,resizeObserver:!0,slidesPerView:1,spaceBetween:20,grabCursor:!0,navigation:{nextEl:`.popular-nav-btn-next`,prevEl:`.popular-nav-btn-prev`},pagination:{el:`.popular-pagination`,clickable:!0},breakpoints:{768:{slidesPerView:2,spaceBetween:24},1440:{slidesPerView:3,spaceBetween:24}}})}async function x(){if(y)try{let e=await m({type:`popular`}),t=e.data.desserts||e.data;if(!t||t.length<3){console.warn(`Отримано менше 3-х популярних товарів`);return}y.innerHTML=t.map(({_id:e,image:t,category:n,name:r,description:i,price:a})=>`
          <div class="swiper-slide">
            <article class="dessert-item" data-id="${e}" style="width: 100%;">
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
                  <p class="dessert-category-name">${n?.name||n||``}</p>
                  <h3 class="dessert-name">${r}</h3>
                  <p class="dessert-description">${i}</p>
                </div>
                <div class="dessert-footer-content">
                  <p class="dessert-price">${a} грн</p>
                  <button class="dessert-modal-btn" data-id="${e}">
                    <svg class="btn-open-modal-icon" width="24" height="24" aria-label="open full product">
                                  <use href="${v}#icon-arrow_outward"></use>
                                </svg>
                  </button>
                </div>
              </div>
            </article>
          </div>
        `).join(``),b()}catch(e){console.error(`Помилка при завантаженні популярних товарів:`,e)}}document.addEventListener(`DOMContentLoaded`,()=>{x()});var S=document.getElementById(`loader`),C=0;function w(){C+=1,S.classList.remove(`hidden`)}function T(){--C,C<=0&&(C=0,S.classList.add(`hidden`))}var E=e(o(),1);function D(e){E.default.success({title:`Успіх`,message:e,position:`topRight`})}function O(e){E.default.error({title:`Помилка`,message:e,position:`topRight`})}var k=class{constructor(e,{options:t=[],placeholder:n=`Оберіть один...`,onChange:r}={}){this.container=e,this.options=t,this.placeholder=n,this.onChange=r,this.selected=null,this._render()}_render(){let e=document.createElement(`select`);this.container.appendChild(e),this._choices=new i(e,{choices:this.options.map(e=>({value:e.value,label:e.label,selected:e.value===`all`})),placeholder:!0,placeholderValue:this.placeholder,searchEnabled:!1,itemSelectText:``,shouldSort:!1,classNames:{containerOuter:[`choices`,`sel-wrap`],containerInner:[`choices__inner`,`sel-box`],list:[`choices__list`],listItems:[`choices__list--multiple`],listSingle:[`choices__list--single`],listDropdown:[`choices__list--dropdown`,`sel-dropdown`],item:[`choices__item`],itemSelectable:[`choices__item--selectable`],selectedState:[`is-selected`],placeholder:[`choices__placeholder`,`sel-placeholder`]}}),this.container.querySelector(`.choices__inner`).insertAdjacentHTML(`beforeend`,`<span class="sel-chevron" aria-hidden="true">
        <svg class="select-icon" width="24" height="24">
          <use href="${v}#icon-keyboard_arrow_down"></use>
        </svg>
      </span>`),e.addEventListener(`change`,()=>{let e=this._choices.getValue(!0),t=this.options.find(t=>t.value===e)?.label??``;this.selected={value:e,label:t},this.onChange&&this.onChange(e,t)})}getValue(){return this.selected}setValue(e){this._choices.setChoiceByValue(e);let t=this.options.find(t=>t.value===e)?.label??``;this.selected={value:e,label:t}}reset(){this._choices.setChoiceByValue(``),this.selected=null}};function A(){document.body.style.overflow=`hidden`}function j(){document.body.style.overflow=``}function M(e,t=``,{width:n=20,height:r=19}={}){let i=Math.round((parseFloat(e)||0)*2)/2,a=``,o=`M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z`;for(let e=1;e<=5;e++)if(i>=e)a+=`
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
        </svg>`;return a}var N=document.querySelector(`body`),P=[`name`,`phone`,`comment`],F,I=e=>{e.target===document.querySelector(`.modal-order-overlay`)&&B(),e.target.closest(`.modal-order-close-btn`)&&B()},L=e=>{e.key===`Escape`&&B()},R=async e=>{e.preventDefault();let t=new FormData(e.target),n=!0;if(P.forEach(e=>{if(t.get(`${e}`))document.querySelector(`#${e}`).classList.remove(`emptyInput`);else return document.querySelector(`#${e}`).classList.add(`emptyInput`),n=!1;if(document.querySelector(`#${e}`).validity.valid)document.querySelector(`#${e}`).classList.remove(`invalidInput`);else return document.querySelector(`#${e}`).classList.add(`invalidInput`),n=!1}),!n)return;let r={name:t.get(`name`),phone:t.get(`phone`),comment:t.get(`comment`),dessertId:F};try{w();let{data:t}=await _(r);D(`Номер замовлення: ${t.orderNum}`),e.target.reset(),B()}catch(e){O(e.response?.data?.message||`Щось пішло не так. Спробуйте ще раз.`)}finally{T()}};function z(e){F=e,!document.querySelector(`.modal-order-overlay`)&&(N.style.overflow=`hidden`,document.body.insertAdjacentHTML(`beforeend`,`<div class="modal-order-overlay">
    <div class="modal-order">
        <button class="modal-order-close-btn">
            <svg 
                class="modal-order-close-svg"
                viewBox="0 0 24 24"
                width="24"
                height="24">
            <use href="${v}#icon-close"></use></svg>
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
</div>`),document.addEventListener(`click`,I),document.addEventListener(`keydown`,L),document.querySelector(`.modal-order-form`).addEventListener(`submit`,R))}function B(){document.querySelector(`.modal-order-overlay`).remove(),document.removeEventListener(`click`,I),document.removeEventListener(`keydown`,L),N.style.overflow=``}async function V(e){if(document.querySelector(`.modal-backdrop`))return;document.body.insertAdjacentHTML(`beforeend`,`
    <div class="modal-backdrop">
      <div class="dessert-modal">

        <button
          class="modal-close-btn"
          aria-label="Close modal"
        >
          <svg width="24" height="24">
            <use href="${v}#icon-close"></use>
          </svg>
        </button>

        <div class="modal-content">
          Loading...
        </div>

      </div>
    </div>
  `),A();let t=document.querySelector(`.modal-backdrop`),n=t.querySelector(`.modal-content`),r=t.querySelector(`.modal-close-btn`);function i(){t.remove(),j(),document.removeEventListener(`keydown`,a)}function a(e){e.key===`Escape`&&i()}document.addEventListener(`keydown`,a),t.addEventListener(`click`,e=>{e.target===t&&i()}),r.addEventListener(`click`,i);try{let{data:t}=await h(e);n.innerHTML=`
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
      ${M(t.rate,`modal-${t._id||e}`,{width:18,height:18})}
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
`,n.querySelector(`.order-btn`).addEventListener(`click`,()=>{i(),z(e)})}catch{n.innerHTML=`
      <p>
        Не вдалося завантажити десерт
      </p>
    `}}var H=null,U=8,W=1,G=`all`,K=0,q=document.getElementById(`dessert-list`),J=document.getElementById(`load-more-btn`),Y=document.getElementById(`category-desktop`),X=document.getElementById(`category-mobile`);function re(e){let t=e.map(({_id:e,image:t,category:n,name:r,description:i,price:a})=>`
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
              <use href="${v}#icon-arrow_outward"></use>
            </svg>
          </button>
        </div>
      </div>
    </li>
  `).join(``);q.insertAdjacentHTML(`beforeend`,t)}function ie(e){Y.innerHTML=[`<label class="category-btn">
      <input type="radio" name="category" value="all" checked hidden />
      Всі десерти
    </label>`,...e.map(({_id:e,name:t})=>`
      <label class="category-btn">
        <input type="radio" name="category" value="${e}" hidden />
        ${t}
      </label>`)].join(``),H=new k(X,{placeholder:`Оберіть категорію`,options:[{value:`all`,label:`Всі десерти`,checked:!0},...e.map(({_id:e,name:t})=>({value:e,label:t}))],onChange:async e=>{G=e,await Z(!0)}}),H.setValue(`all`)}async function Z(e=!1){try{w(),e&&(q.innerHTML=``,W=1);let{data:t}=await m({page:W,limit:U,...G!==`all`&&{category:G}});K=t.totalItems,re(t.desserts);let n=W*U;J.classList.toggle(`load-more-hidden`,n>=K)}catch{O(`Не вдалося завантажити десерти`)}finally{T()}}J.addEventListener(`click`,async()=>{W+=1,await Z()}),Y.addEventListener(`change`,async e=>{e.target.name===`category`&&(G=e.target.value,H&&H.setValue(G),await Z(!0))}),document.addEventListener(`click`,e=>{let t=e.target.closest(`.dessert-modal-btn`);if(!t)return;let n=t.dataset.id;console.log(n),V(n)});async function ae(){try{w();let{data:e}=await g();ie(e),await Z(),J.classList.remove(`load-more-hidden`)}catch(e){console.error(e),O(`Щось пішло не так. Спробуйте пізніше!`)}finally{T()}}ae();var oe=(e,t=200)=>{let n;return(...r)=>{clearTimeout(n),n=setTimeout(()=>e.apply(void 0,r),t)}};document.addEventListener(`DOMContentLoaded`,()=>{let e=document.querySelector(`.about-us-swiper`);if(!e)return;let i=null,a=()=>{i=new n(e,{modules:[t,r],slidesPerView:2,slidesPerGroup:2,spaceBetween:24,grabCursor:!0,navigation:{nextEl:`.about-us-nav-btn-next`,prevEl:`.about-us-nav-btn-prev`},pagination:{el:`.about-us-pagination`,clickable:!0,dynamicBullets:!0}})},o=()=>{i&&=(i.destroy(!0,!0),null)},s=()=>{window.innerWidth<=768?o():i||a()};s(),window.addEventListener(`resize`,oe(s,150))});var Q=10,se=1,$=document.getElementById(`feedback-list`);function ce(e){$.innerHTML=e.map(({_id:e,rate:t,author:n,description:r})=>`
        <li class="feedback-card swiper-slide" data-id="${e}">
          <div class="feedback-raty-stars">
            <div class="star-rating-container">
              ${M(t,e)}
            </div>
          </div>
          <div class="feedback-scroll-wrap swiper-no-swiping">
            <p class="feedback-description">"${r.trim()}"</p>
          </div>
          <p class="feedback-author">${n}</p>
        </li>
      `).join(``)}function le(){window.feedbackSwiperInstance&&typeof window.feedbackSwiperInstance.destroy==`function`&&(window.feedbackSwiperInstance.destroy(!0,!0),window.feedbackSwiperInstance=null);let e=n||window.Swiper;e&&(window.feedbackSwiperInstance=new e(`.feedback-slider-container`,{modules:[t,r,a],slidesPerView:1,spaceBetween:20,allowTouchMove:!0,grabCursor:!0,autoHeight:!1,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!1},navigation:{nextEl:`.feedback-arrow-next, .feedback-mobile-arrow-next`,prevEl:`.feedback-arrow-prev, .feedback-mobile-arrow-prev`},pagination:{el:`.feedback-pagination`,clickable:!0},breakpoints:{320:{slidesPerView:1,spaceBetween:24},768:{slidesPerView:3,spaceBetween:24},1440:{slidesPerView:3,spaceBetween:24}},on:{paginationRender:function(e,t){if(t){let e=t.querySelectorAll(`.swiper-pagination-bullet`);if(e.length>Q)for(let t=Q;t<e.length;t++)e[t].remove()}}}}))}async function ue(){try{w(),$&&($.innerHTML=``);let e=document.querySelector(`.feedback-pagination`);e&&(e.innerHTML=``);let t=await ne({page:Number(se),limit:Number(Q)}),n=t?.data?.feedbacks||t?.feedbacks||t?.data||t;Array.isArray(n)&&n.length>0&&(ce(n),le())}catch(e){O(`Не вдалося завантажити відгуки клієнтів. Спробуйте пізніше. (${e?.response?.status||e?.status||e?.code||`Network Error`})`)}finally{T()}}ue();var de=e(c(),1);function fe(){let e=document.getElementById(`faqAccordion`);if(!e)return console.warn(`FAQ акордеон: контейнер #faqAccordion не знайдено`),null;document.querySelectorAll(`.ac-trigger`).forEach(e=>{e.querySelector(`.faq-icon`)||e.insertAdjacentHTML(`beforeend`,`
      <svg class="faq-icon" width="32" height="32" viewBox="0 0 32 32">
        <use href="${v}#icon-keyboard_arrow_down"></use>
      </svg>
    `)});let t=new de.default(e,{duration:380,showMultiple:!1,collapse:!0,ariaEnabled:!0,onlyChildNodes:!0,openOnInit:[],elementClass:`ac`,triggerClass:`ac-trigger`,panelClass:`ac-panel`,activeClass:`is-active`});return console.log(`✅ FAQ акордеон успішно ініціалізовано`),t}fe();
//# sourceMappingURL=index.js.map