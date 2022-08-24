
// header burger

$('.burger').on('click',function(){
  $('.burger__span-one').toggleClass('burger__span-one--active');
  $('.burger__span-two').toggleClass('burger__span-two--active');
  $('.burger__span-three').toggleClass('burger__span-three--active');
  $('.nav__menu').toggleClass('nav__menu--transform');
  $('body').toggleClass('no-scroll');
});