var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  // 슬라이드 무한루프
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // 좌우 버튼
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
