import './index.css';

const mobaileMenuButton = document.querySelector('.header__button-menu');
const mobaileCloseButton = document.querySelector('.mobile-menu__close');

const popupMenu = document.querySelector('.mobile-menu');

const mobaileMenu = () => {
  setTimeout(() => {
    popupMenu.classList.add('mobile-menu_is-open');
  }, 300)
}

const closeMenu = () => {
  setTimeout(() => {
    popupMenu.classList.remove('mobile-menu_is-open');
  }, 300)  
}

mobaileMenuButton.addEventListener('click', mobaileMenu);
mobaileCloseButton.addEventListener('click', closeMenu);