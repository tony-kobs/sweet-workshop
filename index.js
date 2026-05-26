import{r as e}from"./assets/rolldown-runtime-QTnfLwEv.js";import{a as t,i as n,n as r,r as i,t as a}from"./assets/vendor-Cu9r9Tjc.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})(),document.addEventListener(`DOMContentLoaded`,()=>{let e=document.getElementById(`burgerToggle`),t=document.getElementById(`burgerClose`),n=document.getElementById(`menu`),r=document.body;function i(){n.classList.add(`open`),r.classList.add(`no-scroll`)}function a(){n.classList.remove(`open`),r.classList.remove(`no-scroll`)}n&&(e&&e.addEventListener(`click`,i),t&&t.addEventListener(`click`,a),n.querySelectorAll(`.nav-link, .btn-action`).forEach(e=>{e.addEventListener(`click`,a)}),document.querySelectorAll(`.logo-link`).forEach(e=>{e.addEventListener(`click`,a)}),window.addEventListener(`keydown`,e=>{e.key===`Escape`&&a()}),window.addEventListener(`resize`,()=>{window.innerWidth>767&&a()}))});var o=`https://deserts-store.b.goit.study/api`,ee=`/desserts/{id}`,s=`/desserts`,c=`/categories`,te=`/orders`,ne=`/feedbacks`,l=n.create({baseURL:o,headers:{"Content-Type":`application/json`}}),u=(e={})=>l.get(s,{params:e}),d=e=>l.get(ee.replace(`{id}`,e)),re=()=>l.get(c),ie=e=>l.post(te,e),f=()=>l.get(ne),p=`/sweet-deploy-team/assets/icons-CnkChGia.svg`,m=24,ae={378:{slidesPerView:1,spaceBetween:m},768:{slidesPerView:2,spaceBetween:m},1440:{slidesPerView:3,spaceBetween:m}};function oe(e={}){return{init(t){e?.init?.(t)},slideChange(t){e?.slideChange?.(t)},resize(t){e?.resize?.(t)},breakpoint(t){e?.breakpoint?.(t)}}}function h(e,n={}){return new t(e,{slidesPerView:1,spaceBetween:20,grabCursor:!0,watchOverflow:!0,pagination:{clickable:!0},...n})}function se(e){return h(e,{observer:!0,observeParents:!0,resizeObserver:!0,navigation:{nextEl:`.popular-nav-btn-next`,prevEl:`.popular-nav-btn-prev`},pagination:{el:`.popular-pagination`,clickable:!0,dynamicBullets:!0,dynamicMainBullets:4},breakpoints:ae})}function ce(e,t={}){return h(e,{noSwiping:!1,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!1},navigation:{nextEl:`.feedback-arrow-next, .feedback-mobile-arrow-next`,prevEl:`.feedback-arrow-prev, .feedback-mobile-arrow-prev`},pagination:{el:`.feedback-pagination`,clickable:!0,dynamicBullets:!0,dynamicMainBullets:4},breakpoints:{320:{slidesPerView:1,spaceBetween:m},768:{slidesPerView:3,spaceBetween:m}},on:oe(t)})}function le(e){return h(e,{slidesPerView:2,slidesPerGroup:2,spaceBetween:m,navigation:{nextEl:`.about-us-nav-btn-next`,prevEl:`.about-us-nav-btn-prev`},pagination:{el:`.about-us-pagination`,clickable:!0,dynamicBullets:!0}})}function g(e){e&&typeof e.destroy==`function`&&e.destroy(!0,!0)}var _=document.getElementById(`popular-products-list`),v=null;function y(e){return String(e??``).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`)}function b(e){return Array.isArray(e?.desserts)?e.desserts:Array.isArray(e)?e:[]}function x(e){return e.map(({_id:e,image:t,category:n,name:r,description:i,price:a})=>`
        <div class="swiper-slide">
          <article class="dessert-item" data-id="${y(e)}">
            <img
              src="${y(t)}"
              alt="${y(r)}"
              class="dessert-image"
              width="303"
              height="228"
              loading="lazy"
              decoding="async"
            />
            <div class="dessert-content-wrapper">
              <div class="dessert-header-content">
                <p class="dessert-category-name">${y(n?.name??n)}</p>
                <h3 class="dessert-name">${y(r)}</h3>
                <p class="dessert-description">${y(i)}</p>
              </div>
              <div class="dessert-footer-content">
                <p class="dessert-price">${y(a)} грн</p>
                <button class="dessert-modal-btn" data-id="${y(e)}">
                  <svg class="btn-open-modal-icon" width="24" height="24" aria-label="open full product">
                    <use href="${p}#icon-arrow_outward"></use>
                  </svg>
                </button>
              </div>
            </div>
          </article>
        </div>
      `).join(``)}function ue(){g(v);let e=document.querySelector(`.popular-swiper`);e&&(v=se(e))}async function S(){if(_)try{let e=b((await u({type:`popular`})).data);if(e.length<3){showInfoToast(`Отримано менше 3-х популярних товарів`);return}_.innerHTML=x(e),requestAnimationFrame(ue)}catch(e){showErrorToast(`Помилка при завантаженні популярних товарів:`,e)}}document.addEventListener(`DOMContentLoaded`,S);var C=document.getElementById(`loader`),w=0;function T(){w+=1,C.classList.remove(`hidden`)}function E(){--w,w<=0&&(w=0,C.classList.add(`hidden`))}var D=e(i(),1);function de(e){D.default.success({title:`Успіх`,message:e,position:`topRight`})}function O(e){D.default.error({title:`Помилка`,message:e,position:`topRight`})}var fe=class{constructor(e,{options:t=[],placeholder:n=`Оберіть один...`,onChange:r}={}){this.container=e,this.options=t,this.placeholder=n,this.onChange=r,this.selected=null,this._render()}_render(){let e=document.createElement(`select`);this.container.appendChild(e),this._choices=new r(e,{choices:this.options.map(e=>({value:e.value,label:e.label,selected:e.value===`all`})),placeholder:!0,placeholderValue:this.placeholder,searchEnabled:!1,itemSelectText:``,shouldSort:!1,classNames:{containerOuter:[`choices`,`sel-wrap`],containerInner:[`choices__inner`,`sel-box`],list:[`choices__list`],listItems:[`choices__list--multiple`],listSingle:[`choices__list--single`],listDropdown:[`choices__list--dropdown`,`sel-dropdown`],item:[`choices__item`],itemSelectable:[`choices__item--selectable`],selectedState:[`is-selected`],placeholder:[`choices__placeholder`,`sel-placeholder`]}}),this.container.querySelector(`.choices__inner`).insertAdjacentHTML(`beforeend`,`<span class="sel-chevron" aria-hidden="true">
        <svg class="select-icon" width="24" height="24">
          <use href="${p}#icon-keyboard_arrow_down"></use>
        </svg>
      </span>`),e.addEventListener(`change`,()=>{let e=this._choices.getValue(!0),t=this.options.find(t=>t.value===e)?.label??``;this.selected={value:e,label:t},this.onChange&&this.onChange(e,t)})}getValue(){return this.selected}setValue(e){this._choices.setChoiceByValue(e);let t=this.options.find(t=>t.value===e)?.label??``;this.selected={value:e,label:t}}reset(){this._choices.setChoiceByValue(``),this.selected=null}};function pe(){document.body.style.overflow=`hidden`}function k(){document.body.style.overflow=``}function A(e,t=``,{width:n=20,height:r=19}={}){let i=Math.round((parseFloat(e)||0)*2)/2,a=``,o=`M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z`;for(let e=1;e<=5;e++)if(i>=e)a+=`
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
        </svg>`;return a}var j=document.querySelector(`body`),M=[`name`,`phone`,`comment`],N,P=e=>{e.target===document.querySelector(`.modal-order-overlay`)&&R(),e.target.closest(`.modal-order-close-btn`)&&R()},F=e=>{e.key===`Escape`&&R()},I=async e=>{e.preventDefault();let t=new FormData(e.target),n=!0;if(M.forEach(e=>{if(t.get(`${e}`))document.querySelector(`#${e}`).classList.remove(`emptyInput`);else return document.querySelector(`#${e}`).classList.add(`emptyInput`),n=!1;if(document.querySelector(`#${e}`).validity.valid)document.querySelector(`#${e}`).classList.remove(`invalidInput`);else return document.querySelector(`#${e}`).classList.add(`invalidInput`),n=!1}),!n)return;let r={name:t.get(`name`),phone:t.get(`phone`),comment:t.get(`comment`),dessertId:N};try{T();let{data:t}=await ie(r);de(`Номер замовлення: ${t.orderNum}`),e.target.reset(),R()}catch(e){O(e.response?.data?.message||`Щось пішло не так. Спробуйте ще раз.`)}finally{E()}};function L(e){N=e,!document.querySelector(`.modal-order-overlay`)&&(j.style.overflow=`hidden`,document.body.insertAdjacentHTML(`beforeend`,`<div class="modal-order-overlay">
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
</div>`),document.addEventListener(`click`,P),document.addEventListener(`keydown`,F),document.querySelector(`.modal-order-form`).addEventListener(`submit`,I))}function R(){document.querySelector(`.modal-order-overlay`).remove(),document.removeEventListener(`click`,P),document.removeEventListener(`keydown`,F),j.style.overflow=``}async function z(e){if(document.querySelector(`.modal-backdrop`))return;document.body.insertAdjacentHTML(`beforeend`,`
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
  `),pe();let t=document.querySelector(`.modal-backdrop`),n=t.querySelector(`.modal-content`),r=t.querySelector(`.modal-close-btn`);function i(){t.remove(),k(),document.removeEventListener(`keydown`,a)}function a(e){e.key===`Escape`&&i()}document.addEventListener(`keydown`,a),t.addEventListener(`click`,e=>{e.target===t&&i()}),r.addEventListener(`click`,i);try{let{data:t}=await d(e);n.innerHTML=`
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
      ${A(t.rate,`modal-${t._id||e}`,{width:18,height:18})}
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
`,n.querySelector(`.order-btn`).addEventListener(`click`,()=>{i(),L(e)})}catch{n.innerHTML=`
      <p>
        Не вдалося завантажити десерт
      </p>
    `}}var B=null,V=8,H=1,U=`all`,W=0,G=document.getElementById(`dessert-list`),K=document.getElementById(`load-more-btn`),q=document.getElementById(`category-desktop`),me=document.getElementById(`category-mobile`);function he(e){let t=e.map(({_id:e,image:t,category:n,name:r,description:i,price:a})=>`
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
  `).join(``);G.insertAdjacentHTML(`beforeend`,t)}function ge(e){q.innerHTML=[`<label class="category-btn">
      <input type="radio" name="category" value="all" checked hidden />
      Всі десерти
    </label>`,...e.map(({_id:e,name:t})=>`
      <label class="category-btn">
        <input type="radio" name="category" value="${e}" hidden />
        ${t}
      </label>`)].join(``),B=new fe(me,{placeholder:`Оберіть категорію`,options:[{value:`all`,label:`Всі десерти`,checked:!0},...e.map(({_id:e,name:t})=>({value:e,label:t}))],onChange:async e=>{U=e,await J(!0)}}),B.setValue(`all`)}async function J(e=!1){try{T(),e&&(G.innerHTML=``,H=1);let{data:t}=await u({page:H,limit:V,...U!==`all`&&{category:U}});W=t.totalItems,he(t.desserts);let n=H*V;K.classList.toggle(`load-more-hidden`,n>=W)}catch{O(`Не вдалося завантажити десерти`)}finally{E()}}K.addEventListener(`click`,async()=>{H+=1,await J()}),q.addEventListener(`change`,async e=>{e.target.name===`category`&&(U=e.target.value,B&&B.setValue(U),await J(!0))}),document.addEventListener(`click`,e=>{let t=e.target.closest(`.dessert-modal-btn`);if(!t)return;let n=t.dataset.id;console.log(n),z(n)});var Y=window.matchMedia(`(min-width: 1440px)`);function _e(){if(Y.matches){let e=q.querySelector(`input[value="${U}"]`);e&&(e.checked=!0)}else B&&B.setValue(U)}Y.addEventListener(`change`,_e);async function ve(){try{T();let{data:e}=await re();ge(e),await J(),K.classList.remove(`load-more-hidden`)}catch(e){console.error(e),O(`Щось пішло не так. Спробуйте пізніше!`)}finally{E()}}ve();var ye=769,be=(e,t=200)=>{let n;return(...r)=>{clearTimeout(n),n=setTimeout(()=>e(...r),t)}};document.addEventListener(`DOMContentLoaded`,()=>{let e=document.querySelector(`.about-us-swiper`);if(!e)return;let t=null,n=()=>{t=le(e)},r=()=>{g(t),t=null},i=()=>{let e=window.innerWidth>=ye;e&&!t?n():!e&&t&&r()};i(),window.addEventListener(`resize`,be(i,150))});var xe=10,Se=1,X=document.getElementById(`feedback-list`),Z=null;function Q(e){return String(e??``).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`)}function Ce(e){return[e?.data?.feedbacks,e?.feedbacks,e?.data,e].find(Array.isArray)??[]}function $(e){return e.map(({_id:e,rate:t,author:n,description:r})=>{let i=A(t,e);return`
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
      `}).join(``)}function we(e){let t=e.activeIndex>(e.previousIndex??0)?`.feedback-arrow-next, .feedback-mobile-arrow-next`:`.feedback-arrow-prev, .feedback-mobile-arrow-prev`,n=document.querySelectorAll(t);n.forEach(e=>e.classList.add(`is-active`)),setTimeout(()=>{n.forEach(e=>e.classList.remove(`is-active`))},200)}function Te(){g(Z),Z=null,Z=ce(`.feedback-slider-container`,{slideChange:we})}function Ee(){X&&(X.innerHTML=``);let e=document.querySelector(`.feedback-pagination`);e&&(e.innerHTML=``)}function De(e){return e?.response?.status??e?.status??e?.code??`Network Error`}async function Oe(){T(),Ee();try{let e=Ce(await f({page:Se,limit:xe}));if(!e.length){E();return}X.innerHTML=$(e),requestAnimationFrame(()=>{Te(),E()})}catch(e){O(`Не вдалося завантажити відгуки клієнтів. Спробуйте пізніше. (${De(e)})`),E()}}Oe();var ke=e(a(),1);function Ae(){let e=document.getElementById(`faqAccordion`);return e?(document.querySelectorAll(`.ac-trigger`).forEach(e=>{e.querySelector(`.faq-icon`)||e.insertAdjacentHTML(`beforeend`,`
      <svg class="faq-icon" width="32" height="32" viewBox="0 0 32 32">
        <use href="${p}#icon-keyboard_arrow_down"></use>
      </svg>
    `)}),new ke.default(e,{duration:380,showMultiple:!1,collapse:!0,ariaEnabled:!0,onlyChildNodes:!0,openOnInit:[],elementClass:`ac`,triggerClass:`ac-trigger`,panelClass:`ac-panel`,activeClass:`is-active`})):(showInfoToast(`FAQ акордеон: контейнер #faqAccordion не знайдено`),null)}Ae();
//# sourceMappingURL=index.js.map