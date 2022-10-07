import Swiper from 'https://unpkg.com/browse/swiper@8.4.3/swiper-bundle.esm.js';
import 'https://unpkg.com/browse/swiper@8.4.3/swiper-bundle.css';            
var swiper = new Swiper('.swiper', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: '.swiper-pagination',
  },
});