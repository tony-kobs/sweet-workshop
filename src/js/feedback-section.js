import Swiper from 'swiper';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination'; // Додайте цей рядок під базовим CSS Swiper
import { fetchFeedbacks } from './services/api/api.js';

import { generateStarsTemplate } from './utils/stars.js';
import { showLoader, hideLoader } from './utils/loader.js';
import { showErrorToast } from './utils/toast.js';

// КОНСТАНТИ ДЛЯ ЗРУЧНОГО КЕРУВАННЯ ДАНИМИ З БЕКЕНДУ
const FEEDBACKS_LIMIT = 10; // Кількість відгуків (карток)
const FEEDBACKS_PAGE = 1; // Поточна сторінка запиту

// Глобальна змінна для контролю єдиного екземпляра слайдера у Vite
let feedbackSwiperInstance = null;

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

  // Викликаємо构造тор екземпляра Swiper, який був імпортований з бібліотеки,
  // або підстраховуємося глобальним класом window.Swiper для повної сумісності зі збіркою Vite
  const SwiperConstructor = Swiper || window.Swiper;

  if (!SwiperConstructor) {
    return;
  }

  // Створюємо чистий слайдер строго під отриманий масив даних
  window.feedbackSwiperInstance = new SwiperConstructor(
    '.feedback-slider-container',
    {
      modules: [Navigation, Pagination, Keyboard], // Модуль активовано
      slidesPerView: 1,
      spaceBetween: 20,
      allowTouchMove: true,
      grabCursor: true,
      autoHeight: false,

      // Параметри керування стрілками клавіатури
      keyboard: {
        enabled: true, // Дозволяє гортати слайди
        onlyInViewport: true, // Працює тільки коли користувач бачить секцію
        pageUpDown: false, // Захищає від стрибків сторінки
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

      // Використовуємо єдину правильну подію Swiper v12 — paginationRender
      // Вона спрацьовує строго ПІСЛЯ появи тегів у HTML і гарантовано видаляє фантоми до 10 штук при будь-якому ресайзі
      on: {
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
      },
    }
  );
}

async function loadFeedbacks() {
  try {
    showLoader(); // Вмикаємо лоадер на початку асинхронного процесу

    // Очищаємо статичну картку-заглушку з HTML, щоб лоадер крутився на порожньому місці
    if (listEl) {
      listEl.innerHTML = '';
    }

    // Примусово очищаємо HTML-контейнер пагінації перед новим запуском
    const paginationEl = document.querySelector('.feedback-pagination');
    if (paginationEl) {
      paginationEl.innerHTML = '';
    }

    // Передаємо параметри у первісному плоскому вигляді, як вимагає ваш кастомний api.js
    const response = await fetchFeedbacks({
      page: Number(FEEDBACKS_PAGE),
      limit: Number(FEEDBACKS_LIMIT),
    });

    // Гнучко розпаковуємо масив відгуків від вашого сервісу Axios
    const feedbacks =
      response?.data?.feedbacks ||
      response?.feedbacks ||
      response?.data ||
      response;

    // Якщо дані успішно прийшли та розпарсилися в масив
    if (Array.isArray(feedbacks) && feedbacks.length > 0) {
      // Малюємо динамічні картки та запускаємо чисту пагінацію Swiper
      renderCards(feedbacks);
      initFeedbackSlider();
    }
  } catch (error) {
    //Динамічно витягуємо код помилки (наприклад, 400, 404, 500) або системний статус мережі
    const errorCode =
      error?.response?.status ||
      error?.status ||
      error?.code ||
      'Network Error';

    showErrorToast(
      `Не вдалося завантажити відгуки клієнтів. Спробуйте пізніше. (${errorCode})`
    );
  } finally {
    hideLoader();
  }
}

// Запуск головного асинхронного процесу завантаження
loadFeedbacks();
