export function lockScroll() {
  const scrollbarWidth =
    window.innerWidth - document.documentElement.clientWidth;
  document.body.style.paddingRight = `${scrollbarWidth}px`;
  document.body.style.overflow = 'hidden';

  const header = document.querySelector('.header'); // ← твій клас хедера
  if (header) header.style.paddingRight = `${scrollbarWidth}px`;
}

export function unlockScroll() {
  document.body.style.overflow = '';
  document.body.style.paddingRight = '';

  const header = document.querySelector('.header');
  if (header) header.style.paddingRight = '';
}
