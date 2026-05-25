import Swiper from 'swiper';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination'; // Додайте цей рядок під базовим CSS Swiper
import { fetchFeedbacks } from './services/api/api.js';
import { getUnifiedPaginationConfig } from './utils/common-swiper.js';

import { generateStarsTemplate } from './utils/stars.js';
import { showLoader, hideLoader } from './utils/loader.js';
import { showErrorToast } from './utils/toast.js';

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
  // Зберігаємо та знищуємо екземпляр через об'єкт window
  // Це єдиний залізобетонний захист від дублювання крапок та зависання запитів при HMR оновленнях
  if (
    window.feedbackSwiperInstance &&
    typeof window.feedbackSwiperInstance.destroy === 'function'
  ) {
    window.feedbackSwiperInstance.destroy(true, true);
    window.feedbackSwiperInstance = null;
  }

  // Викликаємо конструктор екземпляра Swiper підстраховуючись глобальним класом window
  const SwiperConstructor = Swiper || window.Swiper;

  if (!SwiperConstructor) {
    return;
  }

  // Створюємо чистий слайдер строго під отриманий масив даних
  window.feedbackSwiperInstance = new SwiperConstructor(
    '.feedback-slider-container',
    {
      modules: [Navigation, Pagination, Keyboard],
      slidesPerView: 1,
      spaceBetween: 20,
      allowTouchMove: true,
      grabCursor: true,
      autoHeight: false,

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
          spaceBetween: 24,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
        1440: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
      },

      // Об'єкт подій Swiper v12
      on: {
        // Видаляє фантомні крапки пагінації при первинній появі в HTML
        paginationRender: function (swiper, paginationEl) {
          if (paginationEl) {
            const bullets = paginationEl.querySelectorAll(
              '.swiper-pagination-bullet'
            );
            if (bullets.length > FEEDBACKS_LIMIT) {
              for (let i = FEEDBACKS_LIMIT; i < bullets.length; i++) {
                bullets[i].remove();
              }
            }
          }
        },
        // ДОДАНO: Слухач події перемикання слайдів для будь-якого способу навігації (клавіатура, крапки, тач)
        slideChange: function (swiper) {
          // Визначаємо, в який бік змістився індекс слайдера
          const isNext = swiper.activeIndex > (swiper.previousIndex || 0);

          // Шукаємо активну пару стрілок (десктопні або мобільні) залежно від напрямку руху
          const activeArrows = isNext
            ? document.querySelectorAll(
                '.feedback-arrow-next, .feedback-mobile-arrow-next'
              )
            : document.querySelectorAll(
                '.feedback-arrow-prev, .feedback-mobile-arrow-prev'
              );

          // Додаємо тимчасовий кастомний CSS-клас стану АКТИВ (.is-active) на стрілки
          activeArrows.forEach(arrow => arrow.classList.add('is-active'));

          // Через 200 мілісекунд плавно прибираємо підсвітку, імітуючи чистий клік
          setTimeout(() => {
            activeArrows.forEach(arrow => arrow.classList.remove('is-active'));
          }, 200);
        },
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

// Запуск головного асинхронного процесу завантаження
loadFeedbacks();
