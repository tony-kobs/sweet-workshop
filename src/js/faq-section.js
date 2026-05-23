// import Accordion from 'accordion-js';
// import 'accordion-js/dist/accordion.min.css';

// export function initFaqAccordion() {
//   const accordionContainer = document.getElementById('faqAccordion');

//   if (!accordionContainer) {
//     console.warn('FAQ акордеон: контейнер #faqAccordion не знайдено');
//     return null;
//   }

//   const accordion = new Accordion(accordionContainer, {
//     duration: 380,
//     showMultiple: false,
//     collapse: true,
//     ariaEnabled: true,
//     onlyChildNodes: true,
//     openOnInit: [],
//     elementClass: 'ac',
//     triggerClass: 'ac-trigger',
//     panelClass: 'ac-panel',
//     activeClass: 'is-active',
//     onOpen: currentElement => {},
//     onClose: currentElement => {},
//   });

//   console.log('✅ FAQ акордеон успішно ініціалізовано');
//   return accordion;
// }

// export function autoInitFaq() {
//   if (document.readyState === 'loading') {
//     document.addEventListener('DOMContentLoaded', initFaqAccordion);
//   } else {
//     initFaqAccordion();
//   }
// }

// export default { initFaqAccordion, autoInitFaq };

// СТАБІЛЬНАВЕРСІЯ З ДОДАННЯМ ІКОНКИ ЧЕРЕЗ СПРАЙТ---------------------------------------------

// import Accordion from 'accordion-js';
// import 'accordion-js/dist/accordion.min.css';

// export function initFaqAccordion() {
//   const accordionContainer = document.getElementById('faqAccordion');

//   if (!accordionContainer) {
//     console.warn('FAQ акордеон: контейнер #faqAccordion не знайдено');
//     return null;
//   }

//   // ========== ДОДАЄМО SVG ІКОНКИ ЧЕРЕЗ СПРАЙТ ==========
//   const allTriggers = document.querySelectorAll('.ac-trigger');

//   allTriggers.forEach(trigger => {
//     if (trigger.querySelector('.faq-icon')) return;

//     trigger.insertAdjacentHTML(
//       'beforeend',
//       `
//       <svg class="faq-icon" width="32" height="32" viewBox="0 0 32 32">
//         <use href="/img/icons.svg#icon-keyboard_arrow_down"></use>
//       </svg>
//     `
//     );
//   });
//   // ====================================================

//   // Ініціалізуємо акордеон
//   const accordion = new Accordion(accordionContainer, {
//     duration: 380,
//     showMultiple: false,
//     collapse: true,
//     ariaEnabled: true,
//     onlyChildNodes: true,
//     openOnInit: [],
//     elementClass: 'ac',
//     triggerClass: 'ac-trigger',
//     panelClass: 'ac-panel',
//     activeClass: 'is-active',
//   });

//   return accordion;
// }

// export function autoInitFaq() {
//   if (document.readyState === 'loading') {
//     document.addEventListener('DOMContentLoaded', initFaqAccordion);
//   } else {
//     initFaqAccordion();
//   }
// }

// export default { initFaqAccordion, autoInitFaq };
// test new version ---------------------------------------------------------------------
import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
// Імпортуємо SVG спрайт
import iconsUrl from '../img/icons.svg';

export function initFaqAccordion() {
  const accordionContainer = document.getElementById('faqAccordion');

  if (!accordionContainer) {
    console.warn('FAQ акордеон: контейнер #faqAccordion не знайдено');
    return null;
  }

  // Додаємо SVG іконки
  const allTriggers = document.querySelectorAll('.ac-trigger');

  allTriggers.forEach(trigger => {
    if (trigger.querySelector('.faq-icon')) return;

    trigger.insertAdjacentHTML(
      'beforeend',
      `
      <svg class="faq-icon" width="32" height="32" viewBox="0 0 32 32">
        <use href="${iconsUrl}#icon-keyboard_arrow_down"></use>
      </svg>
    `
    );
  });

  // Ініціалізуємо акордеон
  const accordion = new Accordion(accordionContainer, {
    duration: 380,
    showMultiple: false,
    collapse: true,
    ariaEnabled: true,
    onlyChildNodes: true,
    openOnInit: [],
    elementClass: 'ac',
    triggerClass: 'ac-trigger',
    panelClass: 'ac-panel',
    activeClass: 'is-active',
  });

  console.log('✅ FAQ акордеон успішно ініціалізовано');
  return accordion;
}

export function autoInitFaq() {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFaqAccordion);
  } else {
    initFaqAccordion();
  }
}

export default { initFaqAccordion, autoInitFaq };