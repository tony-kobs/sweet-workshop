import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import iconsUrl from '../img/icons.svg';

export function initFaqAccordion() {
  const accordionContainer = document.getElementById('faqAccordion');

  if (!accordionContainer) {
    console.warn('FAQ акордеон: контейнер #faqAccordion не знайдено');
    return null;
  }

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