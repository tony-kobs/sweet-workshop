
import { fetchDesserts } from './services/api/api.js';
import iconsUrl from '../img/icons.svg';
import { createPopularSlider, destroySwiper } from './utils/common-swiper.js';

const popularList = document.getElementById('popular-products-list');

let popularSwiperInstance = null;

function escapeHtml(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function parseDesserts(data) {
  if (Array.isArray(data?.desserts)) return data.desserts;
  if (Array.isArray(data)) return data;
  return [];
}

function buildMarkup(desserts) {
  return desserts
    .map(
      ({ _id, image, category, name, description, price }) => `
        <div class="swiper-slide">
          <article class="dessert-item" data-id="${escapeHtml(_id)}">
            <img
              src="${escapeHtml(image)}"
              alt="${escapeHtml(name)}"
              class="dessert-image"
              width="303"
              height="228"
              loading="lazy"
              decoding="async"
            />
            <div class="dessert-content-wrapper">
              <div class="dessert-header-content">
                <p class="dessert-category-name">${escapeHtml(category?.name ?? category)}</p>
                <h3 class="dessert-name">${escapeHtml(name)}</h3>
                <p class="dessert-description">${escapeHtml(description)}</p>
              </div>
              <div class="dessert-footer-content">
                <p class="dessert-price">${escapeHtml(price)} грн</p>
                <button class="dessert-modal-btn" data-id="${escapeHtml(_id)}">
                  <svg class="btn-open-modal-icon" width="24" height="24" aria-label="open full product">
                    <use href="${iconsUrl}#icon-arrow_outward"></use>
                  </svg>
                </button>
              </div>
            </div>
          </article>
        </div>
      `
    )
    .join('');
}

function initPopularSlider() {
  destroySwiper(popularSwiperInstance);

  const swiperContainer = document.querySelector('.popular-swiper');
  if (!swiperContainer) return;

  popularSwiperInstance = createPopularSlider(swiperContainer);
}

async function renderPopularProducts() {
  if (!popularList) return;

  try {
    const response = await fetchDesserts({ type: 'popular' });
    const desserts = parseDesserts(response.data);

    if (desserts.length < 3) {
      console.warn('Отримано менше 3-х популярних товарів');
      return;
    }

    popularList.innerHTML = buildMarkup(desserts);

    requestAnimationFrame(initPopularSlider);
  } catch (error) {
    console.error('Помилка при завантаженні популярних товарів:', error);
  }
}

document.addEventListener('DOMContentLoaded', renderPopularProducts);
