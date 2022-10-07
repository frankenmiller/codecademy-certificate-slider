var swiper = new Swiper('.swiper', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 80,
    stretch: 0,
    depth: 500,
    modifier: 1,
    slideShadows: true,
  }
});