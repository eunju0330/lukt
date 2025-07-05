let adSwiper = new Swiper('.adSwiper',{
    direction:'horizontal',
    autoplay:{delay:1000,}
})
new Swiper('.saleSwiper', {
    slidesPerView: 3,
    spaceBetween:17,
    navigation: {
        nextEl: '.sale_next',
        prevEl: '.sale_prev',
    },
});
