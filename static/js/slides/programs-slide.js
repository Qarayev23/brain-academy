var program = new Swiper(".programs__slide", {
    slidesPerView: 1,
    spaceBetween: 24,
    speed: 1000,
    loop: true,
    autoplay: {
        pauseOnMouseEnter: true,
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".programs .swiper-button-next",
        prevEl: ".programs .swiper-button-prev",
    },
    pagination: {
        el: ".programs .swiper-pagination",
        clickable: true,

    },
    breakpoints: {
        1200: {
            slidesPerView: 4,
        },
        768: {
            slidesPerView: 3,
        },
        576: {
            slidesPerView: 2,
        },
    }
});