import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import { fetchFeedbacks } from './services/api/api.js';

const listEl = document.getElementById('feedback-list');

/**
 * Автоматична генерація ЖИРНИХ inline-SVG зірочок суворо з кроком округлення 0.5 за ТЗ
 */
function generateStarsTemplate(rate, slideId) {
  const numericRate = parseFloat(rate) || 0;
  const roundedRate = Math.round(numericRate * 2) / 2;
  let starsHtml = '';

  const fatStarPath =
    'M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z';

  for (let i = 1; i <= 5; i++) {
    if (roundedRate >= i) {
      starsHtml += `
        <svg class="star-icon is-active" width="20" height="19" viewBox="0 0 20 19">
          <path d="${fatStarPath}"/>
        </svg>`;
    } else if (roundedRate === i - 0.5) {
      starsHtml += `
        <svg class="star-icon is-half" width="20" height="19" viewBox="0 0 20 19">
          <defs>
            <linearGradient id="fatStarGrad-${slideId}-${i}">
              <stop offset="50%" stop-color="var(--color-neutral-darkest, #080c0c)"/>
              <stop offset="50%" stop-color="var(--color-neutral-lighter, #e3e3e3)"/>
            </linearGradient>
          </defs>
          <path fill="url(#fatStarGrad-${slideId}-${i})" d="${fatStarPath}"/>
        </svg>`;
    } else {
      starsHtml += `
        <svg class="star-icon" width="20" height="19" viewBox="0 0 20 19">
          <path d="${fatStarPath}"/>
        </svg>`;
    }
  }
  return starsHtml;
}

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
