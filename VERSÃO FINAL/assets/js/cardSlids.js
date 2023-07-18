var swiper = new Swiper(".slide__content", {
    slidesPerView: 1,
    spaceBetween: 39,
    loop: true,
    centerSlid: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },

      440: {
        slidesPerView: 2,
      },

      800: {
        slidesPerView: 3,
      },
    },
  });