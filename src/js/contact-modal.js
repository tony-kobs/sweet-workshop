import iconsUrl from '../img/icons.svg';
import { createOrder } from './services/api/api';
import { showSuccessToast, showErrorToast } from './utils/toast';
import { showLoader, hideLoader } from './utils/loader';

const body = document.querySelector('body');

let formInputs = ['name', 'phone', 'comment'];
let ids;

const handleCloseByClick = e => {
  if (e.target === document.querySelector('.modal-order-overlay')) {
    closeOrderModal();
  }
  if (e.target.closest('.modal-order-close-btn')) {
    closeOrderModal();
  }
};
const handleCloseByESC = e => {
  if (e.key === 'Escape') {
    closeOrderModal();
  }
};
const handleInput = e => {
  formInputs.forEach(input => {
    if (document.querySelector(`#${input}`).validity.valid) {
      document.querySelector(`#${input}`).classList.remove('invalidInput');
      document
        .querySelector('.modal-order-submit-btn')
        .classList.remove('disabled');
    }
  });
};

const handleSubmitOrderForm = async e => {
  e.preventDefault();
  const formData = new FormData(e.target);
  let isValid = true;
  formInputs.forEach(input => {
    if (!document.querySelector(`#${input}`).validity.valid) {
      document.querySelector(`#${input}`).classList.add('invalidInput');
      return (isValid = false);
    } else {
      document.querySelector(`#${input}`).classList.remove('invalidInput');
    }
  });
  if (!isValid) {
    document.querySelector('.modal-order-submit-btn').classList.add('disabled');
    return;
  } else {
    document
      .querySelector('.modal-order-submit-btn')
      .classList.remove('disabled');
  }

  const orderData = {
    name: formData.get('name'),
    phone: formData.get('phone'),
    comment: formData.get('comment'),
    dessertId: ids,
  };

  try {
    showLoader();
    const { data } = await createOrder(orderData);
    showSuccessToast(`Номер замовлення: ${data.orderNum}`);
    e.target.reset();
    closeOrderModal();
  } catch (error) {
    const message =
      error.response?.data?.message || 'Щось пішло не так. Спробуйте ще раз.';
    showErrorToast(message);
  } finally {
    hideLoader();
  }
};

export function openOrderModal(id) {
  ids = id;

  if (document.querySelector('.modal-order-overlay')) {
    return;
  }
  body.style.overflow = 'hidden';

  document.body.insertAdjacentHTML(
    'beforeend',
    `<div class="modal-order-overlay">
        <div class="modal-order">
            <button class="modal-order-close-btn">
                <svg 
                class="modal-order-close-svg close-icon"                    viewBox="0 0 24 24"
                width="24"
                height="24">
                <use href="${iconsUrl}#icon-close"></use></svg>
            </button>
        <div class="modal-order-content">
            <h2 class="modal-order-title" data-aos="fade-right" data-aos-delay="200">Оформлення замовлення</h2>
            <form class="modal-order-form" novalidate data-aos="fade-left" data-aos-delay="400">
                <div class="modal-order-form-input-block">
                    <label class="modal-order-label" for="name">Ім'я*</label>
                    <input id="name" class="modal-order-input" type="text" name="name" placeholder="Вікторія" minlength="2" maxlength="48" required>
                </div>
                <div class="modal-order-form-input-block">
                    <label class="modal-order-label" for="phone">Телефон*</label>
                    <input id="phone" class="modal-order-input" type="tel" name="phone" placeholder="38 0__ _______" pattern="[0-9]{12}" required>
                </div>
                <div class="modal-order-form-input-block">
                    <label class="modal-order-label" for="comment">Коментар*</label>
                    <textarea id="comment" class="modal-order-textarea" name="comment" placeholder="Ваш коментар" minlength="2" maxlength="256" required></textarea>
                </div>
                <button class="modal-order-submit-btn" name="submit" type="submit">Надіслати заявку</button>
            </form>
        </div>
    </div>
</div>`
  );

  requestAnimationFrame(() => {
    document.querySelector('.modal-order-overlay').classList.add('is-open');
  });
  document.addEventListener('click', handleCloseByClick);
  document.addEventListener('keydown', handleCloseByESC);
  document.addEventListener('input', handleInput);
  const form = document.querySelector('.modal-order-form');
  form.addEventListener('submit', handleSubmitOrderForm);
}
function closeOrderModal() {
  const overlay = document.querySelector('.modal-order-overlay');
  overlay.classList.remove('is-open');

  overlay.addEventListener(
    'transitionend',
    () => {
      overlay.remove();
      body.style.overflow = '';
    },
    { once: true }
  );

  document.removeEventListener('click', handleCloseByClick);
  document.removeEventListener('keydown', handleCloseByESC);
  document.removeEventListener('input', handleInput);
}
