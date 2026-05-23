document.addEventListener('DOMContentLoaded', () => {
  const burgerToggle = document.getElementById('burgerToggle'); 
  const burgerClose = document.getElementById('burgerClose');   
  const menu = document.getElementById('menu');                
  const body = document.body;

  
  function openMenu() {
    menu.classList.add('open');
    body.classList.add('no-scroll'); 
  }


  function closeMenu() {
    menu.classList.remove('open');
    body.classList.remove('no-scroll'); 
  }

  
  if (menu) {
    
    if (burgerToggle) {
      burgerToggle.addEventListener('click', openMenu);
    }

    if (burgerClose) {
      burgerClose.addEventListener('click', closeMenu);
    }

  
    menu.querySelectorAll('.nav-link, .btn-action').forEach(link => {
      link.addEventListener('click', closeMenu);
    });

  
    document.querySelectorAll('.logo-link').forEach(logo => {
      logo.addEventListener('click', closeMenu);
    });

    
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeMenu();
      }
    });
  }
});