import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {initSwiper} from './vendor';
// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {
  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  const MENU_BUTTON = document.querySelector('[data-open-menu]');
  const PAGE_HEADER = document.querySelector('.page-header');

  MENU_BUTTON.addEventListener('click', function () {
    if (PAGE_HEADER.classList.contains('page-header--closed')) {
      PAGE_HEADER.classList.remove('page-header--closed');
      PAGE_HEADER.classList.add('page-header--opened');
      document.body.style.overflow = 'hidden';
    } else {
      PAGE_HEADER.classList.remove('page-header--opened');
      PAGE_HEADER.classList.add('page-header--closed');
      document.body.style.overflow = '';
    }
  });

  const ACCORDION_BUTTONS = document.querySelectorAll('[data-closed-accordion]');
  const ACCORDION_CLOSE_BUTTONS = document.querySelectorAll('[data-accorion-btn]');

  ACCORDION_CLOSE_BUTTONS.forEach((ACCORDION_CLOSE_BUTTON) => {
    ACCORDION_CLOSE_BUTTON.addEventListener('click', function () {
      let contentBlock = ACCORDION_CLOSE_BUTTON.closest('[data-accodion-item]');

      if (contentBlock.classList.contains('questions__item--opened')) {
        contentBlock.classList.remove('questions__item--opened');
        contentBlock.classList.add('questions__item--closed');
      } else {
        contentBlock.classList.remove('questions__item--closed');
        contentBlock.classList.add('questions__item--opened');
      }
    });
  });

  ACCORDION_BUTTONS.forEach((ACCORDION_BUTTON) => {
    ACCORDION_BUTTON.addEventListener('click', function () {
      let contentBlock = ACCORDION_BUTTON.closest('[data-accodion-item]');

      if (contentBlock.classList.contains('questions__item--opened')) {
        contentBlock.classList.remove('questions__item--opened');
        contentBlock.classList.add('questions__item--closed');
      } else {
        contentBlock.classList.remove('questions__item--closed');
        contentBlock.classList.add('questions__item--opened');
      }
    });
  });

  const FILTER_BUTTONS = document.querySelectorAll('[data-open-filter-list]');

  FILTER_BUTTONS.forEach((FILTER_BUTTON) => {
    FILTER_BUTTON.addEventListener('click', function () {
      let filterBlock = FILTER_BUTTON.closest('[data-filter-button]');

      if (filterBlock.classList.contains('catalog-filter__fildset--opened')) {
        filterBlock.classList.remove('catalog-filter__fildset--opened');
        filterBlock.classList.add('catalog-filter__fildset--closed');
      } else {
        filterBlock.classList.remove('catalog-filter__fildset--closed');
        filterBlock.classList.add('catalog-filter__fildset--opened');
      }
    });
  });

  const FILTER_OPEN_BUTTONS = document.querySelectorAll('[data-open-filter]');
  const FILTER = document.querySelector('.catalog-filter');
  const FILTER_CLOSE_BUTTONS = document.querySelectorAll('[data-close-filter]');
  const FILTER_OVERLAY = document.querySelector('[data-close-modal-filter]');

  let showFilter = function () {
    FILTER.classList.remove('catalog-filter--closed');
    FILTER.classList.add('catalog-filter--opened');
    document.body.style.overflow = 'hidden';
  };

  let closeFilter = function () {
    FILTER.classList.remove('catalog-filter--opened');
    FILTER.classList.add('catalog-filter--closed');
    document.body.style.overflow = '';
  };

  FILTER_OPEN_BUTTONS.forEach((FILTER_OPEN_BUTTON) => {
    FILTER_OPEN_BUTTON.addEventListener('click', function () {
      if (FILTER.classList.contains('catalog-filter--closed')) {
        showFilter();
      }
    });
  });

  FILTER_CLOSE_BUTTONS.forEach((FILTER_CLOSE_BUTTON) => {
    FILTER_CLOSE_BUTTON.addEventListener('click', function () {
      if (FILTER.classList.contains('catalog-filter--opened')) {
        closeFilter();
      }
    });
  });

  window.addEventListener('keydown', function (evt) {
    const isEscKey = evt.key === 'Escape' || evt.key === 'Esc';
    if (isEscKey) {
      evt.preventDefault();
      closeFilter();
    }
  });

  if (FILTER_OVERLAY) {
    FILTER_OVERLAY.addEventListener('click', function () {
      closeFilter();
    });
  }
  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана

  window.addEventListener('load', () => {
    initModals();
    initSwiper();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используейтся matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
