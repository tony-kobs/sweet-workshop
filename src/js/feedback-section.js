import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination'; // Додайте цей рядок під базовим CSS Swiper
import { fetchFeedbacks } from './services/api/api.js';

import { generateStarsTemplate } from './utils/stars.js';
import { showLoader, hideLoader } from './utils/loader.js';
import { showErrorToast } from './utils/toast.js';
// import iconsUrl from '../img/icons.svg';

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
          <div class="feedback-scroll-wrap swiper-no-swiping">
            <p class="feedback-description">"${description.trim()}"</p>
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
    autoHeight: false, // Swiper автоматично деактивує кнопки на краях для обох класів через кому

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
        spaceBetween: 24,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 24,
        dynamicBullets: false,
      },
      1440: {
        slidesPerView: 3,
        spaceBetween: 24,
        dynamicBullets: false,
      },
    },
  });
}

async function loadFeedbacks() {
  try {
    showLoader();
    const response = await fetchFeedbacks({ page: 1, limit: 10 });
    const feedbacks = response.data.feedbacks;

    if (!feedbacks || feedbacks.length === 0) return;

    renderCards(feedbacks);
    initFeedbackSlider();
  } catch (error) {
    showErrorToast('Не вдалося завантажити відгуки:', error);
  } finally {
    hideLoader();
  }
}

loadFeedbacks();
