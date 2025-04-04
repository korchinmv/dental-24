// Подключение свайпера
import Swiper from "swiper";
import { Navigation, Pagination, Thumbs, Autoplay } from "swiper/modules";
Swiper.use([Navigation, Pagination, Thumbs, Autoplay]);

const serviceSwiper = new Swiper(".popular-service__swiper", {
  slidesPerView: 1.1,
  spaceBetween: 20,
  pagination: {
    el: ".popular-service__pagination",
    type: "progressbar",
  },
  breakpoints: {
    // when window width is >= 990px
    990: {
      slidesPerView: 4,
      spaceBetween: 24,
    },

    630: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});
