import { fetchDesserts } from './services/api/api.js';

import iconsUrl from '../img/icons.svg';
import { createPopularSlider } from './utils/common-swiper.js';

const popularList = document.getElementById('popular-products-list');

function initPopularSlider() {
  const swiperContainer = document.querySelector('.popular-swiper');

  if (!swiperContainer) return;

  createPopularSlider(swiperContainer);
}

async function renderPopularProducts() {
  if (!popularList) return;

  try {
    const response = await fetchDesserts({ type: 'popular' });
    const desserts = response.data.desserts || response.data;

    if (!desserts || desserts.length < 3) {
      console.warn('Отримано менше 3-х популярних товарів');
      return;
    }

    const markup = desserts
      .map(
        ({ _id, image, category, name, description, price }) => `
        <div class="swiper-slide">
          <article class="dessert-item" data-id="${_id}">
            <img loading="lazy"
              src="${image}"
              alt="${name}"
              class="dessert-image"
              width="303"
              height="228"
              loading="lazy"
              decoding="async"
            />
            <div class="dessert-content-wrapper">
              <div class="dessert-header-content">
                <p class="dessert-category-name">${category?.name || category || ''}</p>
                <h3 class="dessert-name">${name}</h3>
                <p class="dessert-description">${description}</p>
              </div>
              <div class="dessert-footer-content">
                <p class="dessert-price">${price} грн</p>
                <button class="dessert-modal-btn" data-id="${_id}">
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

    popularList.innerHTML = markup;
    initPopularSlider();
  } catch (error) {
    console.error('Помилка при завантаженні популярних товарів:', error);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const section = document.querySelector('.popular-products') || document.querySelector('#popular-products');
  if (!section) {
    renderPopularProducts();
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        renderPopularProducts();
        obs.unobserve(entry.target);
      }
    });
  }, { rootMargin: '300px' });

  observer.observe(section);
});
