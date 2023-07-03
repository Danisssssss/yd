let topSwiper = new Swiper(".top-slider", {
    slidesPerView: 1,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        pauseOnMouseEnter: true,
        delay: 5000,
    },
});