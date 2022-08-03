import './index.css';

const mobaileMenuButton = document.querySelector('.header__button-menu');
const mobaileCloseButton = document.querySelector('.mobile-menu__close');

const popupMenu = document.querySelector('.mobile-menu');

const mobaileMenu = () => {
  popupMenu.classList.add('mobile-menu_is-open');
}

const closeMenu = () => {
  popupMenu.classList.remove('mobile-menu_is-open');
}

mobaileMenuButton.addEventListener('click', mobaileMenu);
mobaileCloseButton.addEventListener('click', closeMenu);