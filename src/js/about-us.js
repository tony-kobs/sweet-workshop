import { createAboutSlider, destroySwiper } from './utils/common-swiper.js';

const debounce = (func, delay = 200) => {
  let timeoutId;

  return (...args) => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

document.addEventListener('DOMContentLoaded', () => {
  const swiperContainer = document.querySelector('.about-us-swiper');

  if (!swiperContainer) return;

  let aboutSwiperInstance = null;

  const initSwiper = () => {
    aboutSwiperInstance = createAboutSlider(swiperContainer);
  };

  const removeSwiper = () => {
    destroySwiper(aboutSwiperInstance);

    aboutSwiperInstance = null;
  };

  const manageAboutSwiper = () => {
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
      removeSwiper();
    } else if (!aboutSwiperInstance) {
      initSwiper();
    }
  };

  manageAboutSwiper();

  window.addEventListener('resize', debounce(manageAboutSwiper, 150));
});
