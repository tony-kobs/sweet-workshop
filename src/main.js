import Swiper from 'swiper';
import 'swiper/css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './js/header.js';
import './js/popular-products.js';

import './js/dessert-list.js';
import './js/about-us.js';
import './js/contact-modal';
import './js/feedback-section.js';
import { initFaqAccordion } from './js/faq-section';
import './js/faq-section.js';
initFaqAccordion();

document.addEventListener('DOMContentLoaded', async () => {
  AOS.init({
    duration: 800,
    once: true,
    offset: 80,
  });

  setTimeout(() => AOS.refresh(), 1000);
});
