import { fetchFeedbacks } from './services/api/api.js';
import { generateStarsTemplate } from './utils/stars.js';
import { showLoader, hideLoader } from './utils/loader.js';
import { showErrorToast } from './utils/toast.js';
import { createFeedbackSlider, destroySwiper } from './utils/common-swiper.js';

const FEEDBACKS_LIMIT = 10;
const FEEDBACKS_PAGE = 1;

const listEl = document.getElementById('feedback-list');

let feedbackSwiperInstance = null;

function escapeHtml(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function parseFeedbacks(data) {
  const candidates = [
    data?.data?.feedbacks,
    data?.feedbacks,
    data?.data,
    data,
  ];

  return candidates.find(Array.isArray) ?? [];
}

function buildCardsMarkup(items) {
  return items
    .map(({ _id, rate, author, description }) => {
      const starsTemplate = generateStarsTemplate(rate, _id);

      return `
        <li class="feedback-card swiper-slide" data-id="${escapeHtml(_id)}">
          <div class="feedback-raty-stars">
            <div class="star-rating-container">
              ${starsTemplate}
            </div>
          </div>
          <div class="feedback-scroll-wrap swiper-no-swiping">
            <p class="feedback-description">"${escapeHtml(description.trim())}"</p>
          </div>
          <p class="feedback-author">${escapeHtml(author)}</p>
        </li>
      `;
    })
    .join('');
}

function handleArrowAnimation(swiper) {
  const isNext = swiper.activeIndex > (swiper.previousIndex ?? 0);

  const selector = isNext
    ? '.feedback-arrow-next, .feedback-mobile-arrow-next'
    : '.feedback-arrow-prev, .feedback-mobile-arrow-prev';

  const arrows = document.querySelectorAll(selector);

  arrows.forEach(arrow => arrow.classList.add('is-active'));

  setTimeout(() => {
    arrows.forEach(arrow => arrow.classList.remove('is-active'));
  }, 200);
}

function initFeedbackSlider() {
  destroySwiper(feedbackSwiperInstance);
  feedbackSwiperInstance = null;

  feedbackSwiperInstance = createFeedbackSlider('.feedback-slider-container', {
    slideChange: handleArrowAnimation,
  });
}

function clearUI() {
  if (listEl) listEl.innerHTML = '';

  const paginationEl = document.querySelector('.feedback-pagination');
  if (paginationEl) paginationEl.innerHTML = '';
}

function getErrorCode(error) {
  return (
    error?.response?.status ?? error?.status ?? error?.code ?? 'Network Error'
  );
}

async function loadFeedbacks() {
  showLoader();
  clearUI();

  try {
    const response = await fetchFeedbacks({
      page: FEEDBACKS_PAGE,
      limit: FEEDBACKS_LIMIT,
    });

    const feedbacks = parseFeedbacks(response);

    if (!feedbacks.length) {
      hideLoader();
      return;
    }

    listEl.innerHTML = buildCardsMarkup(feedbacks);

    requestAnimationFrame(() => {
      initFeedbackSlider();
      hideLoader();
    });
  } catch (error) {
    showErrorToast(
      `Не вдалося завантажити відгуки клієнтів. Спробуйте пізніше. (${getErrorCode(error)})`
    );
    hideLoader();
  }
}

loadFeedbacks();
