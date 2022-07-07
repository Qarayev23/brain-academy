var program = new Swiper(".universities__slide", {
    slidesPerView: 1,
    spaceBetween: 25,
    speed: 1000,
    loop: true,
    navigation: {
        nextEl: ".universities-slide-wrapper .swiper-button-next",
        prevEl: ".universities-slide-wrapper .swiper-button-prev",
    },
    pagination: {
        el: ".universities-slide-wrapper .swiper-pagination",
        clickable: true,
    },
    autoplay: {
        pauseOnMouseEnter: true,
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
        1320: {
            slidesPerView: 4,
        },
        991: {
            slidesPerView: 3,
        },
        576: {
            slidesPerView: 2,
        },
    }
});