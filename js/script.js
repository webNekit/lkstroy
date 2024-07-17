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

  // mobile menu
  document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menuBtn');
    const closeMenuBtn = document.getElementById('closeMenu');
    const navbar = document.getElementById('navbar');
    const body = document.body;

    menuBtn.addEventListener('click', function() {
        navbar.classList.add('header__navbar--open');
        body.classList.add('no-scroll');
    });

    closeMenuBtn.addEventListener('click', function() {
        navbar.classList.remove('header__navbar--open');
        body.classList.remove('no-scroll');
    });

    // Закрытие меню при клике вне его области (дополнительно, если нужно)
    document.addEventListener('click', function(event) {
        if (!navbar.contains(event.target) && !menuBtn.contains(event.target)) {
            navbar.classList.remove('header__navbar--open');
            body.classList.remove('no-scroll');
        }
    });
});

// phone mask
const element = document.getElementById('order-phone');
const maskOptions = {
  mask: '+{7}(000)000-00-00'
};
const mask = IMask(element, maskOptions);