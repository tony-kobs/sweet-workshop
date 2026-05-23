import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import { fetchFeedbacks } from './services/api/api.js';

import { generateStarsTemplate } from './utils/stars.js';

const listEl = document.getElementById('feedback-list');


/**
 * Динамічний рендеринг карток з інтегрованими SVG зірочками
 */
function renderCards(items) {
  listEl.innerHTML = items
    .map(({ _id, rate, author, description }) => {
      const starsTemplate = generateStarsTemplate(rate, _id);

      return `
        <li class="feedback-card swiper-slide" data-id="${_id}">
          <div class="feedback-raty-stars">
            <div class="star-rating-container">
              ${starsTemplate}
            </div>
          </div>
          <div class="feedback-scroll-wrap">
             <p class="feedback-description">"${description}"</p>
          </div>
          <p class="feedback-author">${author}</p>
        </li>
      `;
    })
    .join('');
}

/**
 * Ініціалізація Swiper.js з повною автоматизацією станів disabled для навігації
 */
function initFeedbackSlider() {
  new Swiper('.feedback-slider-container', {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    spaceBetween: 20,
    allowTouchMove: true,
    grabCursor: true,
    autoHeight: false,

    // Swiper автоматично деактивує кнопки на краях для обох класів через кому
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

    on: {
      breakpoint: function (swiper) {
        setTimeout(() => {
          swiper.pagination.destroy();
          swiper.pagination.init();
          swiper.pagination.render();
          swiper.pagination.update();
        }, 10);
      },
      resize: function (swiper) {
        swiper.pagination.update();
      },
    },

    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 24,
        pagination: {
          dynamicBullets: false,
        },
      },
      1440: {
        slidesPerView: 3,
        spaceBetween: 24,
        pagination: {
          dynamicBullets: false,
        },
      },
    },
  });
}

async function loadFeedbacks() {
  try {
    const response = await fetchFeedbacks({ page: 1, limit: 10 });
    const feedbacks = response.data.feedbacks;

    if (!feedbacks || feedbacks.length === 0) return;

    renderCards(feedbacks);
    initFeedbackSlider();
  } catch (error) {
    console.error('Помилка завантаження відгуків:', error);
  }
}

loadFeedbacks();
