/*===========슬라이드================*/

var visual = new Swiper(".visual_container", {
    slidesPerView: 1,
    loop: 'true',
    allowTouchMove : false,
    navigation: {
      prevEl: '.button-prev',
      nextEl: '.button-next',
    },
    autoplay: {
       delay: 5000,
       disableOnInteraction: 'false',
    },
    breakpoints: {
      300 : {
        slidesPerView: 1,
        spaceBetween: 1000,
      },
    }
  });