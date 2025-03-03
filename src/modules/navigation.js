import { removeClass } from './helpers';

const navItems = {
  boxes: document.querySelectorAll('.nav__item'),
  icons: document.querySelectorAll('.nav__icon'),
  texts: document.querySelectorAll('.nav__text'),
};

// выбор элемента в навигации
navItems.boxes.forEach((navElem, index) => {
  navElem.addEventListener('click', () => {
    navItems.boxes.forEach((item) => removeClass('nav__item_active', item));
    navItems.icons.forEach((item) => removeClass('nav__icon_active', item));
    navItems.texts.forEach((item) => removeClass('nav__text_active', item));

    navElem.classList.add('nav__item_active');
    navItems.icons[index].classList.add('nav__icon_active');
    navItems.texts[index].classList.add('nav__text_active');
  });
});
