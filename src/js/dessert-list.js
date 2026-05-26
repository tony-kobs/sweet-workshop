import { fetchDesserts, fetchCategories } from './services/api/api.js';
import { showLoader, hideLoader } from './utils/loader.js';
import { showErrorToast } from './utils/toast.js';
import iconsUrl from '../img/icons.svg';
import { CustomSelect } from './components/custom-select.js';
import { openDessertModal } from './dessert-modal.js';

let mobileSelect = null;

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
          <p class="dessert-category-name">${category.name}</p>
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
    </li>
  `
    )
    .join('');

  listEl.insertAdjacentHTML('beforeend', markup);
}

function renderCategories(categories) {
  const radioMarkup = [
    `<label class="category-btn">
      <input type="radio" name="category" value="all" checked hidden />
      Всі десерти
    </label>`,
    ...categories.map(
      ({ _id, name }) => `
      <label class="category-btn">
        <input type="radio" name="category" value="${_id}" hidden />
        ${name}
      </label>`
    ),
  ].join('');

  categoryDesktop.innerHTML = radioMarkup;

  const options = [
    { value: 'all', label: 'Всі десерти', checked: true },
    ...categories.map(({ _id, name }) => ({ value: _id, label: name })),
  ];

  mobileSelect = new CustomSelect(categoryMobile, {
    placeholder: 'Оберіть категорію',
    options,
    onChange: async value => {
      currentCategory = value;
      await loadDesserts(true);
    },
  });

  mobileSelect.setValue('all');
}

async function loadDesserts(reset = false) {
  try {
    showLoader();

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
  } catch (error) {
    showErrorToast('Не вдалося завантажити десерти');
  } finally {
    hideLoader();
  }
}

loadMoreBtn.addEventListener('click', async () => {
  currentPage += 1;
  await loadDesserts();
});

categoryDesktop.addEventListener('change', async e => {
  if (e.target.name !== 'category') return;
  currentCategory = e.target.value;

  if (mobileSelect) mobileSelect.setValue(currentCategory);

  await loadDesserts(true);
});

document.addEventListener('click', e => {
  const btn = e.target.closest('.dessert-modal-btn');
  if (!btn) return;
  const id = btn.dataset.id;
  console.log(id);
  openDessertModal(id);
});

// Після всіх існуючих addEventListener

const desktopMediaQuery = window.matchMedia('(min-width: 1440px)');

function syncCategoryState() {
  if (desktopMediaQuery.matches) {
    // Перехід на десктоп — синхронізуємо radio з поточною категорією
    const radio = categoryDesktop.querySelector(
      `input[value="${currentCategory}"]`
    );
    if (radio) radio.checked = true;
  } else {
    // Перехід на планшет/мобайл — синхронізуємо select з поточною категорією
    if (mobileSelect) mobileSelect.setValue(currentCategory);
  }
}

desktopMediaQuery.addEventListener('change', syncCategoryState);

async function init() {
  try {
    showLoader();
    const { data: categories } = await fetchCategories();
    renderCategories(categories);
    await loadDesserts();
    loadMoreBtn.classList.remove('load-more-hidden');
  } catch (error) {
    console.error(error);
    showErrorToast('Щось пішло не так. Спробуйте пізніше!');
  } finally {
    hideLoader();
  }
}

init();
