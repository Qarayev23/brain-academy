var program = new Swiper(".universities-logo__slide", {
    slidesPerView: 3,
    spaceBetween: 20,
    speed: 1000,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
        1200: {
            slidesPerView: 8,
        },
       800: {
            slidesPerView: 6,
        },
        480: {
            slidesPerView: 4,
        },
    }
});