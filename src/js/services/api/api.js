import axios from 'axios';

const BASE_URL = 'https://deserts-store.b.goit.study/api';
const END_POINT_DESSERTS_ID = '/desserts/{id}';
const END_POINT_DESSERTS = '/desserts';
const END_POINT_CATEGORIES = '/categories';
const END_POINT_ORDERS = '/orders';
const END_POINT_FEEDBACKS = '/feedbacks';

// Базовий екземпляр axios
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// ── Desserts ──────────────────────────────────────────────
export const fetchDesserts = () => api.get(END_POINT_DESSERTS);

export const fetchDessertById = id =>
  api.get(END_POINT_DESSERTS_ID.replace('{id}', id));

// ── Categories ────────────────────────────────────────────
export const fetchCategories = () => api.get(END_POINT_CATEGORIES);

// ── Orders ────────────────────────────────────────────────
export const createOrder = orderData => api.post(END_POINT_ORDERS, orderData);

// ── Feedbacks ─────────────────────────────────────────────
export const fetchFeedbacks = () => api.get(END_POINT_FEEDBACKS);

export const createFeedback = feedbackData =>
  api.post(END_POINT_FEEDBACKS, feedbackData);

export default api;

/* Використання у компонентах:
import { fetchDesserts, fetchDessertById, createOrder } from './api';

// Отримати всі десерти
const { data } = await fetchDesserts();

// Отримати десерт за ID
const { data } = await fetchDessertById('123');

// Створити замовлення
const { data } = await createOrder({ items: [...], total: 299 });
Ключові моменти:
axios.create() — створює екземпляр із налаштованим baseURL та заголовками, щоб не повторювати їх у кожному запиті
replace('{id}', id) — підставляє реальний ID у шаблон ендпоінта
Кожна функція повертає Promise, тому використовуй async/await або .then() */
