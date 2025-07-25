/* 1.광고배너 */
const adSwiper = new Swiper('#adSwiper',{
    direction:'horizontal',
    autoplay:{delay:2000,},
    loop:true,
})

/* 세일 */
const saleSwiper = new Swiper('#saleSwiper', {
    slidesPerView:3,
    spaceBetween:17,
    navigation:{
        prevEl:'.sale_prev',
        nextEl:'.sale_next',
    },
});

/* 리뷰 */
new Swiper('#reviewSwiper', {
    loop: true,
    slidesPerView: 1,
    pagination: {
        el:'.swiper-pagination',
        clickable: true,
    },
});

/* 비디오 */
const videoLeftSwiper = new Swiper('#videoLeftSwiper', {
    initialSlide:3,
    allowTouchMove:false,
    loop:true,
});
const videoSwiper = new Swiper('#videoSwiper', {
    initialSlide:3,
    slidesPerView:1,
    allowTouchMove:false,
    loop:true,
});
const tabPrev = document.querySelector('.tab_prev');
const tabNext = document.querySelector('.tab_next');
const tabs = document.querySelectorAll('.tab_menu .tab button');

tabPrev.addEventListener('click', () => {
    videoSwiper.slidePrev();
    videoLeftSwiper.slidePrev();
});
tabNext.addEventListener('click', () => {
    videoSwiper.slideNext();
    videoLeftSwiper.slideNext();
});

function setActiveTab(i) {
    tabs.forEach((tab, idx) => {
        tab.classList.toggle('active', idx === i);
    });
}

tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => {
        videoSwiper.slideToLoop(i);
        videoLeftSwiper.slideToLoop(i);
    });
});

videoSwiper.on('slideChange', () => {
    setActiveTab(videoSwiper.realIndex);
});

setActiveTab(videoSwiper.realIndex);