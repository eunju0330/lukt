/* 1.광고배너 */
const adSwiper = new Swiper('.adSwiper',{
    direction:'horizontal',
    autoplay:{delay:1000,}
})

/* 세일 */
const saleSwiper = new Swiper('.saleSwiper', {
    slidesPerView:3,
    spaceBetween:17,
    navigation:{
        prevEl:'.sale_prev',
        nextEl:'.sale_next',
    },
});

/* 리뷰 */
document.addEventListener('DOMContentLoaded', ()=>{
    new Swiper('.reviewSwiper', {
        loop:true,
        slidesPerView:1,
        pagination:{
            el:'.swiper-pagination',
            clickable:true
            }
        });
});

/* 비디오 */
const videoLeftSwiper = new Swiper('.videoLeftSwiper', {
    initialSlide:3,
    allowTouchMove:false,
});
const videoSwiper = new Swiper('.videoSwiper', {
    initialSlide:3,
    slidesPerView:1,
});