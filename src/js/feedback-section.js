import { fetchFeedbacks } from './services/api/api.js';
import { generateStarsTemplate } from './utils/stars.js';
import { showLoader, hideLoader } from './utils/loader.js';
import { showErrorToast } from './utils/toast.js';

import { createFeedbackSlider, destroySwiper } from './utils/common-swiper.js';

// КОНСТАНТИ ДЛЯ ЗРУЧНОГО КЕРУВАННЯ ДАНИМИ З БЕКЕНДУs
const FEEDBACKS_LIMIT = 10; // Кількість відгуків (карток)
const FEEDBACKS_PAGE = 1; // Поточна сторінка запиту

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
  destroySwiper(window.feedbackSwiperInstance);

  window.feedbackSwiperInstance = null;

  window.feedbackSwiperInstance = createFeedbackSlider(
    '.feedback-slider-container',
    {
      slideChange(swiper) {
        const isNext = swiper.activeIndex > (swiper.previousIndex || 0);

        const activeArrows = isNext
          ? document.querySelectorAll(
              '.feedback-arrow-next, .feedback-mobile-arrow-next'
            )
          : document.querySelectorAll(
              '.feedback-arrow-prev, .feedback-mobile-arrow-prev'
            );

        activeArrows.forEach(arrow => arrow.classList.add('is-active'));

        setTimeout(() => {
          activeArrows.forEach(arrow => arrow.classList.remove('is-active'));
        }, 200);
      },
    }
  );
}

async function loadFeedbacks() {
  try {
    showLoader(); // Вмикаємо лоадер на початку асинхронного процесу

    if (listEl) {
      listEl.innerHTML = '';
    }

    const paginationEl = document.querySelector('.feedback-pagination');
    if (paginationEl) {
      paginationEl.innerHTML = '';
    }

    const response = await fetchFeedbacks({
      page: Number(FEEDBACKS_PAGE),
      limit: Number(FEEDBACKS_LIMIT),
    });

    const feedbacks =
      response?.data?.feedbacks ||
      response?.feedbacks ||
      response?.data ||
      response;

    if (Array.isArray(feedbacks) && feedbacks.length > 0) {
      renderCards(feedbacks);
      initFeedbackSlider();
    }
  } catch (error) {
    const errorCode =
      error?.response?.status ||
      error?.status ||
      error?.code ||
      'Network Error';
    showErrorToast(
      `Не вдалося завантажити відгуки клієнтів. Спробуйте пізніше. (${errorCode})`
    );
  } finally {
    hideLoader(); // Гарантовано відключаємо лоадер після завершення процесу
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const section = document.querySelector('.feedback-section') || document.querySelector('#feedback-section') || document.querySelector('.feedback-slider-container');
  if (!section) {
    loadFeedbacks();
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        loadFeedbacks();
        obs.unobserve(entry.target);
      }
    });
  }, { rootMargin: '300px' });

  observer.observe(section);
});
