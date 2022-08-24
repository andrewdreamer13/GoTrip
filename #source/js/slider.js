
// destination slider

var owl = $('.owl-carousel');
  $(".owl-carousel").owlCarousel({
    center: true,
    loop: true,
    startPosition: 1,
    items: 3,
    margin:25,
   
  })

  $('.prev-btn').click(function () {
    owl.trigger('next.owl.carousel');
  })

  $('.next-btn').click(function () {

    owl.trigger('prev.owl.carousel', [300]);
  })

