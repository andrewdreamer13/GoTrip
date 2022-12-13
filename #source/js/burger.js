
// header burger

$('.burger').on('click',function(){
  $('.burger__span-one').toggleClass('burger__span-one--active');
  $('.burger__span-two').toggleClass('burger__span-two--active');
  $('.burger__span-three').toggleClass('burger__span-three--active');
  $('.hero__header .nav__menu').toggleClass('nav__menu--transform');
  $('body').toggleClass('no-scroll');
});
$('.hero__header .nav__menu-item').each(function(){
  $(this).on('click',function(){
    console.log(this)
    $('.burger__span-one').removeClass('burger__span-one--active');
  $('.burger__span-two').removeClass('burger__span-two--active');
  $('.burger__span-three').removeClass('burger__span-three--active');
  $('.hero__header .nav__menu').removeClass('nav__menu--transform');
  $('body').removeClass('no-scroll');
  })
})