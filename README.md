# 🍰 Солодка Майстерня — Sweet Workshop

> Інтерактивний каталог десертів з онлайн-замовленням

[![Deploy](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-brightgreen?style=flat-square&logo=github)](https://tony-kobs.github.io/sweet-deploy-team/)
[![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES2022-F7DF1E?style=flat-square&logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

## 📖 Про проєкт

**Солодка Майстерня** — це односторінковий сайт кондитерської, де користувач
може переглядати каталог десертів, фільтрувати їх за категорією, читати відгуки
та оформити замовлення онлайн.

### Що вирішує

- Надає зручний каталог продукції з фільтрацією та пагінацією
- Дозволяє переглянути детальну картку кожного десерту
- Реалізує форму замовлення з валідацією
- Відображає відгуки реальних покупців

### Живий сайт

🔗
[tony-kobs.github.io/sweet-deploy-team](https://tony-kobs.github.io/sweet-deploy-team/)

---

## ✨ Функціональність

- 📦 **Каталог десертів** — завантаження з API, пагінація (8 карток за раз),
  фільтр за категорією
- 🔍 **Модальне вікно десерту** — повна інформація, рейтинг зірками, кнопка
  замовлення
- 🛒 **Форма замовлення** — валідація полів, відправка на бекенд,
  toast-сповіщення
- ⭐ **Відгуки** — слайдер з реальними відгуками та рейтингом
- 🎠 **Слайдер бестселерів** — популярні товари з кастомною пагінацією
- ❓ **FAQ** — акордеон з відповідями на питання
- 📱 **Повна адаптивність** — mobile / tablet / desktop

---

## 🛠 Технології

| Категорія   | Технологія                                             |
| ----------- | ------------------------------------------------------ |
| Збірка      | [Vite 8](https://vitejs.dev/)                          |
| Мова        | Vanilla JavaScript (ES Modules)                        |
| HTTP-клієнт | [Axios](https://axios-http.com/)                       |
| Слайдер     | [Swiper.js 12](https://swiperjs.com/)                  |
| Select      | [Choices.js 11](https://choices-js.github.io/Choices/) |
| Акордеон    | [Accordion.js](https://github.com/michu2k/Accordion)   |
| Сповіщення  | [iziToast](https://izitoast.marcelodolza.com/)         |
| CSS         | Vanilla CSS, Mobile-first                              |
| PostCSS     | postcss-sort-media-queries                             |
| Деплой      | GitHub Pages + GitHub Actions                          |

---

## 🚀 Запуск проєкту

### Вимоги

- Node.js LTS (v18+)
- npm

### Встановлення

```bash
# 1. Клонуй репозиторій
git clone https://github.com/tony-kobs/sweet-deploy-team.git

# 2. Перейди в папку
cd sweet-deploy-team

# 3. Встанови залежності
npm install

# 4. Запусти dev-сервер
npm run dev
```

Сайт буде доступний за адресою `http://localhost:5173/`

### Доступні команди

```bash
npm run dev      # запуск локального сервера з HMR
npm run build    # продакшн-збірка в папку /dist
npm run preview  # превью продакшн-збірки локально
```

---

## 📁 Структура проєкту

```
sweet-deploy-team/
├── src/
│   ├── css/              # стилі по секціях
│   │   ├── base.css
│   │   ├── header.css
│   │   ├── dessert-list.css
│   │   └── ...
│   ├── js/
│   │   ├── components/   # кастомні UI компоненти
│   │   │   └── custom-select.js
│   │   ├── services/
│   │   │   └── api/
│   │   │       └── api.js     # всі запити до бекенду
│   │   ├── utils/             # допоміжні утиліти
│   │   │   ├── loader.js
│   │   │   ├── toast.js
│   │   │   ├── scroll-lock.js
│   │   │   └── stars.js
│   │   ├── dessert-list.js
│   │   ├── dessert-modal.js
│   │   ├── popular-products.js
│   │   ├── feedback-section.js
│   │   ├── contact-modal.js
│   │   ├── about-us.js
│   │   ├── header.js
│   │   └── faq-section.js
│   ├── partials/         # HTML секції
│   ├── img/              # зображення та іконки
│   ├── main.js
│   └── index.html
├── .github/
│   └── workflows/
│       └── deploy.yml    # автодеплой на GitHub Pages
├── vite.config.js
└── package.json
```

---

## 🌐 API

Проєкт використовує REST API:

**Base URL:** `https://deserts-store.b.goit.study/api`

| Метод | Endpoint        | Опис                                |
| ----- | --------------- | ----------------------------------- |
| GET   | `/desserts`     | список десертів (пагінація, фільтр) |
| GET   | `/desserts/:id` | десерт за ID                        |
| GET   | `/categories`   | список категорій                    |
| GET   | `/feedbacks`    | відгуки                             |
| POST  | `/orders`       | створити замовлення                 |
| POST  | `/feedbacks`    | залишити відгук                     |

---

## 👥 Команда

Проєкт розроблено командою в рамках командного навчального проєкту.

| Роль      | Учасник                                               | Секція                   |
| --------- | ----------------------------------------------------- | ------------------------ |
| Team Lead | [Антон](https://github.com/tony-kobs)                 | архітектура, dessert     |
| Scrum     | [Валентин](https://github.com/groteskzp)              | order modal              |
| Developer | [Олександр](https://github.com/AlexandrPavlenko-ctrl) | header, popular products |
| Developer | [Аліна](https://github.com/alinakvitochka)            | dessert modal            |
| Developer | [Константин](https://github.com/Meth0ne)              | hero                     |
| Developer | [Віктор](https://github.com/ViktorMatviichuk)         | about                    |
| Developer | [Анна](https://github.com/KiraSpace777)               | feedback                 |
| Developer | [Адам](https://github.com/AdamPershyi)                | FAQ                      |
| Developer | [Володимир](https://github.com/volodymyrzhurakivskyi) | footer                   |

---

## 📋 Workflow команди

- `main` — стабільна гілка, лише перевірений код
- Нова гілка на кожну фічу: `feature/назва-секції`
- Pull Request → рев'ю колеги → merge
- Автодеплой при мержі в `main` через GitHub Actions

---

## 📄 Ліцензія

ISC © Sweet Deploy Team
