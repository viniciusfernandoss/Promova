const swiperTwo = new Swiper('.swiper-portifolio-redes-mobile', {
    slidesPerView: 1,
    // navigation: {
    //         nextEl: '.swiper-case-sucesso-mobile .swiper-button-next',
    //         prevEl: '.swiper-case-sucesso-mobile .swiper-button-prev',
    // },
    spaceBetween: 30, // Espaço entre os slides
    loop: true,
    pagination: {
      el: '.swiper-portifolio-redes-mobile .swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
});