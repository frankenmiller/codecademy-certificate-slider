var swiper = new Swiper('.swiper', {
  effect: 'coverflow',
  grabCursor: true,
  //paginationClickable: true,
  speed: 2500,
  centeredSlides: true,
  slidesPerView: 'auto',
  loop: true,
  followFinger: true,
  coverflowEffect: {
    rotate: 25,
    stretch: -200,
    depth: 500,
    modifier: 1,
    slideShadows: true,
  },
  autoplay: {
    delay: 3000,
    transition: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  }
});