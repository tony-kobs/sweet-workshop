import { fetchDesserts, fetchCategories } from './services/api/api.js';

const ITEMS_PER_PAGE = 8;
let currentPage = 1;
let currentCategory = 'all';
let totalItems = 0;

const listEl = document.getElementById('dessert-list');
const loadMoreBtn = document.getElementById('load-more-btn');
const categoryDesktop = document.getElementById('category-desktop');
const categoryMobile = document.getElementById('category-mobile');

function renderCards(items) {
  const markup = items
    .map(
      ({ _id, image, category, name, description, price }) => `
    <li class="dessert-item" data-id="${_id}">
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
          <p class="dessert-category-name">${category.name}</p>
          <h3 class="dessert-name">${name}</h3>
          <p class="dessert-description">${description}</p>
        </div>
        <div class="dessert-footer-content">
          <p class="dessert-price">${price} грн</p>
          <button class="dessert-modal-btn" data-id="${_id}">
            <svg class="btn-open-modal-icon" width="24" height="24" aria-label="open full product">
              <use href="/img/icons.svg#icon-arrow_outward"></use>
            </svg>
          </button>
        </div>
      </div>
    </li>
  `
    )
    .join('');

  listEl.insertAdjacentHTML('beforeend', markup);
}

function renderCategories(categories) {
  const radioMarkup = [
    `
    <label class="category-btn">
      <input type="radio" name="category" value="all" checked hidden />
      Всі десерти
    </label>
  `,
    ...categories.map(
      ({ _id, name }) => `
    <label class="category-btn">
      <input type="radio" name="category" value="${_id}" hidden />
      ${name}
    </label>
  `
    ),
  ].join('');

  categoryDesktop.innerHTML = radioMarkup;

  const optionMarkup = categories
    .map(({ _id, name }) => `<option value="${_id}">${name}</option>`)
    .join('');

  categoryMobile.insertAdjacentHTML('beforeend', optionMarkup);
}

async function loadDesserts(reset = false) {
  if (reset) {
    listEl.innerHTML = '';
    currentPage = 1;
  }

  const { data } = await fetchDesserts({
    page: currentPage,
    limit: ITEMS_PER_PAGE,
    ...(currentCategory !== 'all' && { category: currentCategory }),
  });

  totalItems = data.totalItems;
  renderCards(data.desserts);

  const loaded = currentPage * ITEMS_PER_PAGE;
  loadMoreBtn.classList.toggle('load-more-hidden', loaded >= totalItems);
}

loadMoreBtn.addEventListener('click', () => {
  currentPage += 1;
  loadDesserts();
});

categoryDesktop.addEventListener('change', e => {
  if (e.target.name !== 'category') return;
  currentCategory = e.target.value;
  loadDesserts(true);
});

categoryMobile.addEventListener('change', e => {
  currentCategory = e.target.value;
  loadDesserts(true);
});

listEl.addEventListener('click', e => {
  const btn = e.target.closest('.dessert-modal-btn');
  if (!btn) return;
  const id = btn.dataset.id;
});

async function init() {
  const { data: categories } = await fetchCategories();
  renderCategories(categories);
  await loadDesserts();
  loadMoreBtn.classList.remove('load-more-hidden');
}

init();
