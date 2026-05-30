import{r as e}from"./assets/rolldown-runtime-QTnfLwEv.js";import{a as t,i as n,n as r,o as i,r as a,t as o}from"./assets/vendor-DvwDd8eO.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var s=e(t(),1);document.addEventListener(`DOMContentLoaded`,()=>{let e=document.getElementById(`burgerToggle`),t=document.getElementById(`burgerClose`),n=document.getElementById(`menu`),r=document.body;function i(){n.classList.add(`open`),r.classList.add(`no-scroll`)}function a(){n.classList.remove(`open`),r.classList.remove(`no-scroll`)}n&&(e&&e.addEventListener(`click`,i),t&&t.addEventListener(`click`,a),n.querySelectorAll(`.nav-link, .link-action`).forEach(e=>{e.addEventListener(`click`,a)}),document.querySelectorAll(`.logo-link`).forEach(e=>{e.addEventListener(`click`,a)}),window.addEventListener(`keydown`,e=>{e.key===`Escape`&&a()}),window.addEventListener(`resize`,()=>{window.innerWidth>767&&a()}))});var ee=`https://deserts-store.b.goit.study/api`,te=`/desserts/{id}`,ne=`/desserts`,re=`/categories`,c=`/orders`,l=`/feedbacks`,u=n.create({baseURL:ee,headers:{"Content-Type":`application/json`}}),d=(e={})=>u.get(ne,{params:e}),ie=e=>u.get(te.replace(`{id}`,e)),f=()=>u.get(re),ae=e=>u.post(c,e),oe=()=>u.get(l),p=`/sweet-deploy-team/assets/icons-CnkChGia.svg`,m=24,se={378:{slidesPerView:1,spaceBetween:m},768:{slidesPerView:2,spaceBetween:m},1440:{slidesPerView:3,spaceBetween:m}};function ce(e={}){return{init(t){e?.init?.(t)},slideChange(t){e?.slideChange?.(t)},resize(t){e?.resize?.(t)},breakpoint(t){e?.breakpoint?.(t)}}}function h(e,t={}){return new i(e,{slidesPerView:1,spaceBetween:20,grabCursor:!0,watchOverflow:!0,pagination:{clickable:!0},...t})}function le(e){return h(e,{observer:!0,observeParents:!0,resizeObserver:!0,navigation:{nextEl:`.popular-nav-btn-next`,prevEl:`.popular-nav-btn-prev`},pagination:{el:`.popular-pagination`,clickable:!0,dynamicBullets:!0,dynamicMainBullets:1},breakpoints:se})}function ue(e,t={}){return h(e,{noSwiping:!1,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!1},navigation:{nextEl:`.feedback-arrow-next, .feedback-mobile-arrow-next`,prevEl:`.feedback-arrow-prev, .feedback-mobile-arrow-prev`},pagination:{el:`.feedback-pagination`,clickable:!0,dynamicBullets:!0,dynamicMainBullets:1},breakpoints:{320:{slidesPerView:1,spaceBetween:m},768:{slidesPerView:3,spaceBetween:m}},on:ce(t)})}function de(e){return h(e,{slidesPerView:2,slidesPerGroup:2,spaceBetween:m,navigation:{nextEl:`.about-us-nav-btn-next`,prevEl:`.about-us-nav-btn-prev`},pagination:{el:`.about-us-pagination`,clickable:!0,dynamicBullets:!0}})}function g(e){e&&typeof e.destroy==`function`&&e.destroy(!0,!0)}var _=document.getElementById(`popular-products-list`),v=null;function y(e){return String(e??``).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`)}function b(e){return Array.isArray(e?.desserts)?e.desserts:Array.isArray(e)?e:[]}function x(e){return e.map(({_id:e,image:t,category:n,name:r,description:i,price:a})=>`
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
      `).join(``)}function S(){g(v);let e=document.querySelector(`.popular-swiper`);e&&(v=le(e))}async function C(){if(_)try{let e=b((await d({type:`popular`})).data);if(e.length<3){showInfoToast(`Отримано менше 3-х популярних товарів`);return}_.innerHTML=x(e),requestAnimationFrame(S)}catch(e){showErrorToast(`Помилка при завантаженні популярних товарів:`,e)}}document.addEventListener(`DOMContentLoaded`,C);var w=document.getElementById(`loader`),T=0;function E(){T+=1,w.classList.remove(`hidden`)}function D(){--T,T<=0&&(T=0,w.classList.add(`hidden`))}var O=e(a(),1);function fe(e){O.default.success({title:`Успіх`,message:e,position:`topRight`})}function k(e){O.default.error({title:`Помилка`,message:e,position:`topRight`})}var pe=class{constructor(e,{options:t=[],placeholder:n=`Оберіть один...`,onChange:r}={}){this.container=e,this.options=t,this.placeholder=n,this.onChange=r,this.selected=null,this._render()}_render(){let e=document.createElement(`select`);this.container.appendChild(e),this._choices=new r(e,{choices:this.options.map(e=>({value:e.value,label:e.label,selected:e.value===`all`})),placeholder:!0,placeholderValue:this.placeholder,searchEnabled:!1,itemSelectText:``,shouldSort:!1,classNames:{containerOuter:[`choices`],containerInner:[`choices__inner`],list:[`choices__list`],listItems:[`choices__list--multiple`],listSingle:[`choices__list--single`],listDropdown:[`choices__list--dropdown`],item:[`choices__item`],itemSelectable:[`choices__item--selectable`],selectedState:[`is-selected`],placeholder:[`choices__placeholder`]}}),this.container.querySelector(`.choices__inner`).insertAdjacentHTML(`beforeend`,`<span class="sel-chevron" aria-hidden="true">
        <svg class="select-icon" width="24" height="24">
          <use href="${p}#icon-keyboard_arrow_down"></use>
        </svg>
      </span>`);let t=this.container.querySelector(`.choices`);this._choices.getValue(!0)!==`all`&&t.classList.add(`selected-value`),e.addEventListener(`change`,()=>{let e=this._choices.getValue(!0),n=this.options.find(t=>t.value===e)?.label??``;this.selected={value:e,label:n},e===`all`?t.classList.remove(`selected-value`):t.classList.add(`selected-value`),this.onChange&&this.onChange(e,n)})}getValue(){return this.selected}setValue(e){this._choices.setChoiceByValue(e);let t=this.options.find(t=>t.value===e)?.label??``;this.selected={value:e,label:t};let n=this.container.querySelector(`.choices`);e===`all`?n.classList.remove(`selected-value`):n.classList.add(`selected-value`)}reset(){this._choices.setChoiceByValue(``),this.selected=null,this.container.querySelector(`.choices`).classList.remove(`selected-value`)}};function me(){let e=window.innerWidth-document.documentElement.clientWidth;document.documentElement.style.setProperty(`--scrollbar-width`,`${e}px`),document.body.style.overflow=`hidden`}function he(){document.body.style.overflow=``,document.documentElement.style.setProperty(`--scrollbar-width`,`0px`)}function A(e,t=``,{width:n=20,height:r=19}={}){let i=Math.round((parseFloat(e)||0)*2)/2,a=``,o=`M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z`;for(let e=1;e<=5;e++)if(i>=e)a+=`
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
        </svg>`;return a}var j=document.querySelector(`body`),M=[`name`,`phone`,`comment`],N,P=e=>{e.target===document.querySelector(`.modal-order-overlay`)&&z(),e.target.closest(`.modal-order-close-btn`)&&z()},F=e=>{e.key===`Escape`&&z()},I=e=>{M.forEach(e=>{document.querySelector(`#${e}`).validity.valid&&(document.querySelector(`#${e}`).classList.remove(`invalidInput`),document.querySelector(`.modal-order-submit-btn`).classList.remove(`disabled`))})},L=async e=>{e.preventDefault();let t=new FormData(e.target),n=!0;if(M.forEach(e=>{if(document.querySelector(`#${e}`).validity.valid)document.querySelector(`#${e}`).classList.remove(`invalidInput`);else return document.querySelector(`#${e}`).classList.add(`invalidInput`),n=!1}),n)document.querySelector(`.modal-order-submit-btn`).classList.remove(`disabled`);else{document.querySelector(`.modal-order-submit-btn`).classList.add(`disabled`);return}let r={name:t.get(`name`),phone:t.get(`phone`),comment:t.get(`comment`),dessertId:N};try{E();let{data:t}=await ae(r);fe(`Номер замовлення: ${t.orderNum}`),e.target.reset(),z()}catch(e){k(e.response?.data?.message||`Щось пішло не так. Спробуйте ще раз.`)}finally{D()}};function R(e){N=e,!document.querySelector(`.modal-order-overlay`)&&(j.style.overflow=`hidden`,document.body.insertAdjacentHTML(`beforeend`,`<div class="modal-order-overlay">
        <div class="modal-order">
            <button class="modal-order-close-btn">
                <svg 
                class="modal-order-close-svg close-icon"                    viewBox="0 0 24 24"
                width="24"
                height="24">
                <use href="${p}#icon-close"></use></svg>
            </button>
        <div class="modal-order-content">
            <h2 class="modal-order-title" data-aos="fade-right" data-aos-delay="200">Оформлення замовлення</h2>
            <form class="modal-order-form" novalidate data-aos="fade-left" data-aos-delay="400">
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
    </div>
</div>`),requestAnimationFrame(()=>{document.querySelector(`.modal-order-overlay`).classList.add(`is-open`)}),document.addEventListener(`click`,P),document.addEventListener(`keydown`,F),document.addEventListener(`input`,I),document.querySelector(`.modal-order-form`).addEventListener(`submit`,L))}function z(){let e=document.querySelector(`.modal-order-overlay`);e.classList.remove(`is-open`),e.addEventListener(`transitionend`,()=>{e.remove(),j.style.overflow=``},{once:!0}),document.removeEventListener(`click`,P),document.removeEventListener(`keydown`,F),document.removeEventListener(`input`,I)}async function B(e){if(document.querySelector(`.modal-backdrop`))return;document.body.insertAdjacentHTML(`beforeend`,`
    <div class="modal-backdrop">
      <div class="dessert-modal">

        <button
          class="modal-close-btn"
          aria-label="Close modal"
        >
          <svg class="close-icon" width="24" height="24">
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
  `),me();let t=document.querySelector(`.modal-backdrop`);requestAnimationFrame(()=>{t.classList.add(`is-open`)});let n=t.querySelector(`.modal-content`),r=t.querySelector(`.modal-close-btn`);function i(){t.classList.remove(`is-open`),t.addEventListener(`transitionend`,()=>{t.remove(),he(),document.removeEventListener(`keydown`,a)},{once:!0}),r.removeEventListener(`click`,i),t.removeEventListener(`click`,o)}function a(e){e.key===`Escape`&&i()}let o=e=>{e.target===t&&i()};document.addEventListener(`keydown`,a),t.addEventListener(`click`,o),r.addEventListener(`click`,i);try{let{data:t}=await ie(e);n.innerHTML=`
  <img loading="lazy"
    src="${t.image}"
    alt="${t.name}"
    class="modal-image"
    data-aos="fade-right" data-aos-delay="200"
  />

  <div class="modal-info" data-aos="fade-left" data-aos-delay="400">

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
`,n.querySelector(`.order-btn`).addEventListener(`click`,()=>{i(),R(e)})}catch{n.innerHTML=`
      <p>
        Не вдалося завантажити десерт
      </p>
    `}}var V=null,H=8,U=1,W=`all`,G=0,K=document.getElementById(`dessert-list`),q=document.getElementById(`load-more-btn`),J=document.getElementById(`category-desktop`),ge=document.getElementById(`category-mobile`);function _e(e){let t=e.map(({_id:e,image:t,category:n,name:r,description:i,price:a})=>`
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
  `).join(``);K.insertAdjacentHTML(`beforeend`,t)}function ve(e){J.innerHTML=[`<label class="category-btn">
      <input type="radio" name="category" value="all" checked hidden />
      Всі десерти
    </label>`,...e.map(({_id:e,name:t})=>`
      <label class="category-btn">
        <input type="radio" name="category" value="${e}" hidden />
        ${t}
      </label>`)].join(``),V=new pe(ge,{placeholder:`Оберіть категорію`,options:[{value:`all`,label:`Всі десерти`,checked:!0},...e.map(({_id:e,name:t})=>({value:e,label:t}))],onChange:async e=>{W=e,await Y(!0)}}),V.setValue(`all`)}async function Y(e=!1){try{E(),e&&(K.innerHTML=``,U=1);let{data:t}=await d({page:U,limit:H,...W!==`all`&&{category:W}});G=t.totalItems,_e(t.desserts);let n=U*H;q.classList.toggle(`load-more-hidden`,n>=G)}catch{k(`Не вдалося завантажити десерти`)}finally{D()}}q.addEventListener(`click`,async()=>{U+=1,await Y()}),J.addEventListener(`change`,async e=>{e.target.name===`category`&&(W=e.target.value,V&&V.setValue(W),await Y(!0))}),document.addEventListener(`click`,e=>{let t=e.target.closest(`.dessert-modal-btn`);if(!t)return;let n=t.dataset.id;B(n)});var X=window.matchMedia(`(min-width: 1440px)`);function ye(){if(X.matches){let e=J.querySelector(`input[value="${W}"]`);e&&(e.checked=!0)}else V&&V.setValue(W)}X.addEventListener(`change`,ye);async function be(){try{E();let{data:e}=await f();ve(e),await Y(),q.classList.remove(`load-more-hidden`)}catch(e){console.error(e),k(`Щось пішло не так. Спробуйте пізніше!`)}finally{D()}}be();var xe=769,Se=(e,t=200)=>{let n;return(...r)=>{clearTimeout(n),n=setTimeout(()=>e(...r),t)}};document.addEventListener(`DOMContentLoaded`,()=>{let e=document.querySelector(`.about-us-swiper`);if(!e)return;let t=null,n=()=>{t=de(e)},r=()=>{g(t),t=null},i=()=>{let e=window.innerWidth>=xe;e&&!t?n():!e&&t&&r()};i(),window.addEventListener(`resize`,Se(i,150))});var Ce=10,we=1,Z=document.getElementById(`feedback-list`),Q=null;function $(e){return String(e??``).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`)}function Te(e){return[e?.data?.feedbacks,e?.feedbacks,e?.data,e].find(Array.isArray)??[]}function Ee(e){return e.map(({_id:e,rate:t,author:n,description:r})=>{let i=A(t,e);return`
        <li class="feedback-card swiper-slide" data-id="${$(e)}">
          <div class="feedback-raty-stars">
            <div class="star-rating-container">
              ${i}
            </div>
          </div>
          <div class="feedback-scroll-wrap swiper-no-swiping">
            <p class="feedback-description">"${$(r.trim())}"</p>
          </div>
          <p class="feedback-author">${$(n)}</p>
        </li>
      `}).join(``)}function De(e){let t=e.activeIndex>(e.previousIndex??0)?`.feedback-arrow-next, .feedback-mobile-arrow-next`:`.feedback-arrow-prev, .feedback-mobile-arrow-prev`,n=document.querySelectorAll(t);n.forEach(e=>e.classList.add(`is-active`)),setTimeout(()=>{n.forEach(e=>e.classList.remove(`is-active`))},200)}function Oe(){g(Q),Q=null,Q=ue(`.feedback-slider-container`,{slideChange:De})}function ke(){Z&&(Z.innerHTML=``);let e=document.querySelector(`.feedback-pagination`);e&&(e.innerHTML=``)}function Ae(e){return e?.response?.status??e?.status??e?.code??`Network Error`}async function je(){E(),ke();try{let e=Te(await oe({page:we,limit:Ce}));if(!e.length){D();return}Z.innerHTML=Ee(e),requestAnimationFrame(()=>{Oe(),D()})}catch(e){k(`Не вдалося завантажити відгуки клієнтів. Спробуйте пізніше. (${Ae(e)})`),D()}}je();var Me=e(o(),1);function Ne(){let e=document.getElementById(`faqAccordion`);return e?(document.querySelectorAll(`.ac-trigger`).forEach(e=>{e.querySelector(`.faq-icon`)||e.insertAdjacentHTML(`beforeend`,`
      <svg class="faq-icon" width="32" height="32" viewBox="0 0 32 32">
        <use href="${p}#icon-keyboard_arrow_down"></use>
      </svg>
    `)}),new Me.default(e,{duration:380,showMultiple:!1,collapse:!0,ariaEnabled:!0,onlyChildNodes:!0,openOnInit:[],elementClass:`ac`,triggerClass:`ac-trigger`,panelClass:`ac-panel`,activeClass:`is-active`})):(showInfoToast(`FAQ акордеон: контейнер #faqAccordion не знайдено`),null)}Ne(),document.addEventListener(`DOMContentLoaded`,async()=>{s.default.init({duration:800,once:!0,offset:80}),setTimeout(()=>s.default.refresh(),1e3)});
//# sourceMappingURL=index.js.map