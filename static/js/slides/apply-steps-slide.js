var program = new Swiper(".apply-section-step__slide", {
  slidesPerView: 3,
  spaceBetween: 12,
  speed: 1000,
  breakpoints: {
    991: {
      slidesPerView: 5,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 50
    },
  }
});