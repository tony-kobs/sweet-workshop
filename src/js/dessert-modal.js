import { fetchDessertById } from './services/api/api.js';
import { lockScroll, unlockScroll } from './utils/scroll-lock.js';
import { generateStarsTemplate } from './utils/stars.js';
import { openOrderModal } from './contact-modal.js';
import iconsUrl from '../img/icons.svg';

function renderStars(rate) {
  return Array(5)
    .fill('')
    .map(
      (_, i) => `
        <span class="${i < rate ? 'star filled' : 'star'}">
          ★
        </span>
      `
    )
    .join('');
}

export async function openDessertModal(id) {

  if (document.querySelector('.modal-backdrop')) {
    return;
  }

  document.body.insertAdjacentHTML(
    'beforeend',
    `
    <div class="modal-backdrop">
      <div class="dessert-modal">

        <button
          class="modal-close-btn"
          aria-label="Close modal"
        >
          <svg class="close-icon" width="24" height="24">
            <use href="${iconsUrl}#icon-close"></use>
          </svg>
        </button>

        <div class="modal-content">
          <div class="modal-loader-wrapper">
            <span class="loader"></span>
            </div>
        </div>

      </div>
    </div>
  `
  );

  lockScroll();

  const backdrop = document.querySelector('.modal-backdrop');

  const modalContent = backdrop.querySelector('.modal-content');

  const closeBtn = backdrop.querySelector('.modal-close-btn');

  function closeModal() {
    backdrop.remove();

    unlockScroll();

    document.removeEventListener('keydown', handleEsc);
  }

  function handleEsc(e) {
    if (e.key === 'Escape') {
      closeModal();
    }
  }

  document.addEventListener('keydown', handleEsc);

  backdrop.addEventListener('click', e => {
    if (e.target === backdrop) {
      closeModal();
    }
  });

  closeBtn.addEventListener('click', closeModal);

  try {
    const { data } = await fetchDessertById(id);

    modalContent.innerHTML = `
  <img loading="lazy"
    src="${data.image}"
    alt="${data.name}"
    class="modal-image"
  />

  <div class="modal-info">

    <h2 class="modal-title">
      ${data.name}
    </h2>

    <p class="modal-price">
      ${data.price} грн
    </p>

    <div class="modal-rating">
      ${generateStarsTemplate(data.rate, `modal-${data._id || id}`, {
        width: 18,
        height: 18,
      })}
    </div>

    <p class="modal-description">
      ${data.description}
    </p>

    <div class="modal-composition-wrapper">
      <span class="composition-title">
        Склад:
      </span>
      ${data.composition}
    </div>

    <button class="order-btn">
      Перейти до замовлення
    </button>

  </div>
`;

    const orderBtn = modalContent.querySelector('.order-btn');

    orderBtn.addEventListener('click', () => {
      closeModal();

      openOrderModal(id);
    });
  } catch (error) {
    modalContent.innerHTML = `
      <p>
        Не вдалося завантажити десерт
      </p>
    `;
  }
}
