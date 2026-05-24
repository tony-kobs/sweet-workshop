import { fetchDesserts } from './services/api/api.js'; 
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import iconsUrl from '../img/icons.svg';

const popularList = document.getElementById('popular-products-list');

function initPopularSlider() {
  const swiperContainer = document.querySelector('.popular-swiper');
  if (!swiperContainer) return;

  new Swiper(swiperContainer, {
    modules: [Navigation, Pagination],
    
    
    observer: true,
    observeParents: true,
    resizeObserver: true,

    slidesPerView: 1,        
    spaceBetween: 20,       
    grabCursor: true,
    
    navigation: {
      nextEl: '.popular-nav-btn-next',
      prevEl: '.popular-nav-btn-prev',
    },
    pagination: {
      el: '.popular-pagination',
      clickable: true,
    },
    
    
    breakpoints: {
      768: { 
        slidesPerView: 2,   
        spaceBetween: 24
      },
      1440: { 
        slidesPerView: 3,    
        spaceBetween: 24 
      }
    }
  });
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
      .map(({ _id, image, category, name, description, price }) => {
        return `
          <div class="swiper-slide">
            <article class="dessert-item" data-id="${_id}" style="width: 100%;">
              <img
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
        `;
      })
      .join('');

    popularList.innerHTML = markup;

    
    initPopularSlider();

  } catch (error) {
    console.error('Помилка при завантаженні популярних товарів:', error);
  }
}


document.addEventListener('DOMContentLoaded', () => {
  renderPopularProducts();
});