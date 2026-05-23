document.addEventListener('DOMContentLoaded', () => {
  const burgerToggle = document.getElementById('burgerToggle'); // Кнопка открытия (3 полоски)
  const burgerClose = document.getElementById('burgerClose');   // Кнопка закрытия (крестик)
  const menu = document.getElementById('menu');                 // Контейнер навигации
  const body = document.body;

  // Открыть мобильное полноэкранное меню
  function openMenu() {
    menu.classList.add('open');
    body.classList.add('no-scroll'); // Запрещаем скроллить сайт на фоне открытого меню
  }

  // Закрыть мобильное меню
  function closeMenu() {
    menu.classList.remove('open');
    body.classList.remove('no-scroll'); // Возвращаем скролл сайту
  }

  // Защита кода: активируем логику только если меню найдено в DOM-структуре
  if (menu) {
    // 1. Клик по бургеру открывает окно
    if (burgerToggle) {
      burgerToggle.addEventListener('click', openMenu);
    }

    // 2. Клик по крестику закрывает окно
    if (burgerClose) {
      burgerClose.addEventListener('click', closeMenu);
    }

    // 3. Клик по любой ссылке навигации или по розовой кнопке закрывает меню (для плавного перехода)
    menu.querySelectorAll('.nav-link, .btn-action').forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    // 4. Клик по любому из логотипов (в основной шапке или внутри меню) закрывает окно
    document.querySelectorAll('.logo-link').forEach(logo => {
      logo.addEventListener('click', closeMenu);
    });

    // 5. Нажатие на клавишу Escape на клавиатуре закрывает меню (требование ТЗ)
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeMenu();
      }
    });
  }
});