var program = new Swiper(".what-we-offer__slide", {
    slidesPerView: 1,
    spaceBetween: 24,
    speed: 1000,
    breakpoints: {
        1200: {
            slidesPerView: 4,
        },
        991: {
            slidesPerView: 3,
        },
        600: {
            slidesPerView: 2,
        },
    }
});