let adSwiper = new Swiper('.adSwiper',{
    direction:'horizontal',
    autoplay:{delay:1000,}
})
new Swiper('.saleSwiper', {
    slidesPerView: 3,
    spaceBetween:17,
    navigation: {
        nextEl:'.sale_next',
        prevEl:'.sale_prev',
    },
});
const videoLeftSwiper = new Swiper('.videoLeftSwiper', {
    allowTouchMove:false,
    effect:'fade',
});

const videoRightSwiper = new Swiper('.videoSwiper', {
  initialSlide:3, // Kids가 보이게
    navigation:{
        nextEl:'.tab_next',
        prevEl:'.tab_prev',
    },
    on:{
        slideChange:function(){
        videoLeftSwiper.slideTo(this.activeIndex);
        }
    }
});
