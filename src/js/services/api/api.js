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

export const fetchDesserts = (params = {}) =>
  api.get(END_POINT_DESSERTS, { params });

export const fetchDessertById = id =>
  api.get(END_POINT_DESSERTS_ID.replace('{id}', id));

export const fetchCategories = () => api.get(END_POINT_CATEGORIES);

export const createOrder = orderData => api.post(END_POINT_ORDERS, orderData);

export const fetchFeedbacks = () => api.get(END_POINT_FEEDBACKS);

export const createFeedback = feedbackData =>
  api.post(END_POINT_FEEDBACKS, feedbackData);

export default api;
