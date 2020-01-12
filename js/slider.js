$('.similar-layout').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '<div class="slide-prev"></div>',
  nextArrow: '<div class="slide-next"></div>',
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<div class="slide-prev"></div>',
        nextArrow: '<div class="slide-next"></div>',
      }
    },
    {
      breakpoint: 9999,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        dots: false,
        prevArrow: '<div class="slide-prev"></div>',
        nextArrow: '<div class="slide-next"></div>',
      }
    },
  ]
});
