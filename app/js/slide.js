

let swiper = new Swiper('.swiper-container', {
  slidesPerView: 'auto',
  // spaceBetween: 30,
  slidesPerGroup: 1,
  // effect:'coverflow'
  loop: true,
  // loopFillGroupWithBlank: true,
  speed: 600,
  parallax: true,
  keyboard: {
  enabled: true,
  },
  // coverflowEffect:{
  //   rotate: 0,
  //   stretch: 0,
  //   depth: 100,
  //   modifier: 5,
  // },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay:{
    delay: 1000,
    disableOnInteraction:true,
  },
  
});
  