// swiper slider
const swiper = new Swiper('.swiper', {
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.advantages__slider-button--next',
      prevEl: '.advantages__slider-button--prev',
    },
  });


  // fancybox
  Fancybox.bind("[data-fancybox]", {
    // Your custom options
  });