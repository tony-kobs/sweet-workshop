// utils/common-swiper.js
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const VISIBLE_BULLETS = 6;
const DEFAULT_SPACE = 24;

const DEFAULT_BREAKPOINTS = {
  378: { slidesPerView: 1, spaceBetween: DEFAULT_SPACE },
  768: { slidesPerView: 2, spaceBetween: DEFAULT_SPACE },
  1440: { slidesPerView: 3, spaceBetween: DEFAULT_SPACE },
};

function createSharedEvents(customEvents = {}) {
  return {
    init(swiper) {
      customEvents?.init?.(swiper);
    },
    slideChange(swiper) {
      customEvents?.slideChange?.(swiper);
    },
    resize(swiper) {
      customEvents?.resize?.(swiper);
    },
    breakpoint(swiper) {
      customEvents?.breakpoint?.(swiper);
    },
  };
}

function createBaseSwiper(selector, options = {}) {
  return new Swiper(selector, {
    slidesPerView: 1,
    spaceBetween: 20,
    grabCursor: true,
    watchOverflow: true,
    pagination: { clickable: true },
    ...options,
  });
}

export function createPopularSlider(selector) {
  return createBaseSwiper(selector, {
    observer: true,
    observeParents: true,
    resizeObserver: true,
    navigation: {
      nextEl: '.popular-nav-btn-next',
      prevEl: '.popular-nav-btn-prev',
    },
    pagination: {
      el: '.popular-pagination',
      clickable: true,
      dynamicBullets: true,
      dynamicMainBullets: 4,
    },
    breakpoints: DEFAULT_BREAKPOINTS,
  });
}

export function createFeedbackSlider(selector, customEvents = {}) {
  return createBaseSwiper(selector, {
    noSwiping: false,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: false,
    },
    navigation: {
      nextEl: '.feedback-arrow-next, .feedback-mobile-arrow-next',
      prevEl: '.feedback-arrow-prev, .feedback-mobile-arrow-prev',
    },
    pagination: {
      el: '.feedback-pagination',
      clickable: true,
      dynamicBullets: true,
      dynamicMainBullets: 4,
    },
    breakpoints: {
      320: { slidesPerView: 1, spaceBetween: DEFAULT_SPACE },
      768: { slidesPerView: 3, spaceBetween: DEFAULT_SPACE },
    },
    on: createSharedEvents(customEvents),
  });
}

export function createAboutSlider(selector) {
  return createBaseSwiper(selector, {
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: DEFAULT_SPACE,
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
}

export function destroySwiper(instance) {
  if (instance && typeof instance.destroy === 'function') {
    instance.destroy(true, true);
  }
}
