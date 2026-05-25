// utils/common-swiper.js

import Swiper from 'swiper';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const VISIBLE_BULLETS = 5;
const DEFAULT_SPACE = 24;

const DEFAULT_BREAKPOINTS = {
  768: {
    slidesPerView: 2,
    spaceBetween: DEFAULT_SPACE,
  },

  1440: {
    slidesPerView: 3,
    spaceBetween: DEFAULT_SPACE,
  },
};

/**
 * Єдина кастомна pagination логіка
 */
function updateBullets(swiper) {
  if (!swiper?.pagination?.el) return;

  const bullets = [
    ...swiper.pagination.el.querySelectorAll('.swiper-pagination-bullet'),
  ];

  const active = swiper.realIndex;
  const half = Math.floor(VISIBLE_BULLETS / 2);

  let start = active - half;
  let end = active + half;

  if (start < 0) {
    end += Math.abs(start);
    start = 0;
  }

  if (end >= bullets.length) {
    start = Math.max(0, start - (end - bullets.length + 1));
    end = bullets.length - 1;
  }

  bullets.forEach((bullet, index) => {
    const dist = Math.abs(index - active);

    bullet.classList.remove('bullet-active', 'bullet-near', 'bullet-far');

    if (index < start || index > end) {
      bullet.style.display = 'none';
      return;
    }

    bullet.style.display = 'inline-block';

    if (dist === 0) {
      bullet.classList.add('bullet-active');
    } else if (dist === 1) {
      bullet.classList.add('bullet-near');
    } else {
      bullet.classList.add('bullet-far');
    }
  });
}

/**
 * Shared events
 */
function createSharedEvents(customEvents = {}) {
  return {
    init(swiper) {
      updateBullets(swiper);

      customEvents?.init?.(swiper);
    },

    slideChange(swiper) {
      updateBullets(swiper);

      customEvents?.slideChange?.(swiper);
    },
  };
}

/**
 * Base factory
 */
function createBaseSwiper(selector, options = {}) {
  return new Swiper(selector, {
    modules: [Navigation, Pagination, Keyboard],

    slidesPerView: 1,
    spaceBetween: 20,

    grabCursor: true,
    watchOverflow: true,

    pagination: {
      clickable: true,
    },

    ...options,
  });
}

/**
 * Popular slider
 */
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
    },

    breakpoints: DEFAULT_BREAKPOINTS,

    on: createSharedEvents(),
  });
}

/**
 * Feedback slider
 */
export function createFeedbackSlider(selector, customEvents = {}) {
  return createBaseSwiper(selector, {
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
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: DEFAULT_SPACE,
      },

      ...DEFAULT_BREAKPOINTS,
    },

    on: createSharedEvents(customEvents),
  });
}

/**
 * About slider
 */
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

/**
 * Destroy helper
 */
export function destroySwiper(instance) {
  if (instance && typeof instance.destroy === 'function') {
    instance.destroy(true, true);
  }
}
