export const menu = () => {
  const body = document.querySelector('body');
  const scrollbarWidth = (window.innerWidth - document.body.clientWidth) + 'px';

  const burgerBtn = document.querySelector('[data-menu-burger]');
  const closeIcon = document.querySelector('[data-menu-close]');
  const menuMobile = document.querySelector('[data-menu-mobile]');
  burgerBtn.addEventListener('click', () => {
    if (window.innerWidth < 1600) {
      body.style.overflow = 'hidden';
      body.style['padding-right'] = scrollbarWidth;
      menuMobile.classList.add('_open');
    }

  });
  closeIcon.addEventListener('click', () => {
    body.style.overflow = null;
    body.style['padding-right'] = null;
    menuMobile.classList.remove('_open');
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 1600) {
      body.style.overflow = null;
      body.style['padding-right'] = null;
      menuMobile.classList.remove('_open');
    }
  });


};
