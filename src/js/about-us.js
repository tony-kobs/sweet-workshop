import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

const debounce = (func, delay = 200) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
};

document.addEventListener('DOMContentLoaded', () => {
  const swiperContainer = document.querySelector('.about-us-swiper');
  if (!swiperContainer) return;

  let aboutSwiperInstance = null;

  const initSwiper = () => {
    aboutSwiperInstance = new Swiper(swiperContainer, {
      modules: [Navigation, Pagination],
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 24,
      grabCursor: true,
      navigation: {
        nextEl: '.about-us-nav-btn-next',
        prevEl: '.about-us-nav-btn-prev',
      },
      pagination: {
        el: '.about-us-pagination',
        clickable: true,
        dynamicBullets: true,
      },
    });
  };

  const destroySwiper = () => {
    if (aboutSwiperInstance) {
      aboutSwiperInstance.destroy(true, true);
      aboutSwiperInstance = null;
    }
  };

  const manageAboutSwiper = () => {
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
      destroySwiper();
    } else if (!aboutSwiperInstance) {
      initSwiper();
    }
  };

  manageAboutSwiper();

  window.addEventListener('resize', debounce(manageAboutSwiper, 150));
});
