// Swiper 7.4.1
import './vendor/swiper';

/* global Swiper */

const initSwiper = () => {
  let swiper = new Swiper('.preview__wrapper', {

    observer: true,
    observeParents: true,
    loop: false,

    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,


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
  window.swiper = swiper;
};

export {initSwiper};
