// utils/toast.js
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export function showSuccessToast(message) {
  iziToast.success({
    title: 'Успіх',
    message,
    position: 'topRight',
  });
}

export function showErrorToast(message) {
  iziToast.error({
    title: 'Помилка',
    message,
    position: 'topRight',
  });
}

export function showInfoToast(message) {
  iziToast.info({
    title: 'Інфо',
    message,
    position: 'topRight',
  });
}
