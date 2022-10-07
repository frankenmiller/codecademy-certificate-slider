let distance;

if (window.innerWidth < 810) {
  distance = -75
} else if (window.innerWidth > 810 && window.innerWidth < 1150) {
  distance = -200
} else if (window.innerWidth > 1150) {
  distance = -300
};

var swiper = new Swiper('.swiper', {
  effect: 'coverflow',
  grabCursor: true,
  //paginationClickable: true,
  speed: 2200,
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
    delay: 2500,
    transition: 1800,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  }
});

window.onload = function () {
  const menu_button = document.querySelector('.hamburger');
  const mobile_menu = document.querySelector('.mobile-nav');

  menu_button.addEventListener('click', function () {
      menu_button.classList.toggle('is-active');
      mobile_menu.classList.toggle('is-active');
  });
}