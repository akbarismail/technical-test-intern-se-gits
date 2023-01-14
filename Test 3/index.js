const swiper = new Swiper('.mySwiper', {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
});

const swiperTestimonial = new Swiper('.mySwiperTestimonial', {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.button-next-testimonial',
    prevEl: '.button-prev-testimonial',
  },
});

const swiperOurProducts = new Swiper('.mySwiperOurProducts', {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.button-next-our-products',
    prevEl: '.button-prev-our-products',
  },
});
