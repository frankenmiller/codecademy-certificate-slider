let distance;

if (window.innerWidth < 810) {
  distance = -75
} else if (window.innerWidth > 810) {
  distance = -200
};

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
    stretch: distance,
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