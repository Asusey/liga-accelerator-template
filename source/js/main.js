import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {
  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  const menuButton = document.querySelector('[data-open-menu]');
  const pageHeader = document.querySelector('.page-header');

  menuButton.addEventListener('click', function () {
    if (pageHeader.classList.contains('page-header--closed')) {
      pageHeader.classList.remove('page-header--closed');
      pageHeader.classList.add('page-header--opened');
      document.body.style.overflow = 'hidden';
    } else {
      pageHeader.classList.remove('page-header--opened');
      pageHeader.classList.add('page-header--closed');
      document.body.style.overflow = '';
    }
  });

  let accordionButtons = document.querySelectorAll('[data-closed-accordion]');

  accordionButtons.forEach((accordionButton) => {
    accordionButton.addEventListener('click', function () {
      let contentBlock = accordionButton.closest('[data-accodion-item]');

      if (contentBlock.classList.contains('questions__item--opened')) {
        contentBlock.classList.remove('questions__item--opened');
        contentBlock.classList.add('questions__item--closed');
      } else {
        contentBlock.classList.remove('questions__item--closed');
        contentBlock.classList.add('questions__item--opened');
      }
    });
  });

  let filterButtons = document.querySelectorAll('[data-open-filter-list]');

  filterButtons.forEach((filterButton) => {
    filterButton.addEventListener('click', function () {
      let filterBlock = filterButton.closest('[data-filter-button]');

      if (filterBlock.classList.contains('catalog-filter__fildset--opened')) {
        filterBlock.classList.remove('catalog-filter__fildset--opened');
        filterBlock.classList.add('catalog-filter__fildset--closed');
      } else {
        filterBlock.classList.remove('catalog-filter__fildset--closed');
        filterBlock.classList.add('catalog-filter__fildset--opened');
      }
    });
  });

  let filterOpenButtons = document.querySelectorAll('[data-open-filter]');
  let filter = document.querySelector('.catalog-filter');
  let filterCloseButtons = document.querySelectorAll('[data-close-filter]');

  let showFilter = function () {
    filter.classList.remove('catalog-filter--closed');
    filter.classList.add('catalog-filter--opened');
    document.body.style.overflow = 'hidden';
  };

  let closeFilter = function () {
    filter.classList.remove('catalog-filter--opened');
    filter.classList.add('catalog-filter--closed');
    document.body.style.overflow = '';
  };

  filterOpenButtons.forEach((filterOpenButton) => {
    filterOpenButton.addEventListener('click', function () {
      if (filter.classList.contains('catalog-filter--closed')) {
        showFilter();
      }
    });
  });

  filterCloseButtons.forEach((filterCloseButton) => {
    filterCloseButton.addEventListener('click', function () {
      if (filter.classList.contains('catalog-filter--opened')) {
        closeFilter();
      }
    });
  });

  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      if (filter.classList.contains('modal--opened')) {
        closeFilter();
      }
    }
  });

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана

  window.addEventListener('load', () => {
    initModals();
    const swiper = new Swiper('.preview__wrapper', {
      speed: 400,
      spaceBetween: 30,
      slideClass: 'preview__new-product-item',
      wrapperClass: 'preview__new-products-list',
      navigation: {
        nextEl: '[data-next-button]',
        prevEl: '[data-prev-button]',
      },

      pagination: {
        el: '.preview__toggle-list',
        clickable: true,
        type: 'bullets',
        bulletActiveClass: 'preview__toggle-item--current',
        renderBullet(index, className) {
          // return `<span class="${className}">${index + 1}</span>`;
          return `<li class="preview__toggle-item ${className}">
          <button type="button">${index + 1}</button>
        </li>`;
        },
      },

      breakpoints: {
        320: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          allowTouchMove: true,
          pagination: {
            type: 'fraction',
            renderFraction(currentClass, totalClass) {
              return `<span class="${currentClass}"></span> of <span class="${totalClass}"></span>`;
            },
          },
        },
        768: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          allowTouchMove: true,
        },
        1024: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          allowTouchMove: false,
        },
      },
    });
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
