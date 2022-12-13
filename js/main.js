
//@prepros-append loader.js
//@prepros-append burger.js
//@prepros-append slider.js
//@prepros-append modals.js
//@prepros-append big-gallery.js
//@prepros-append formValidate.js
let mask = document.querySelector('.mask');
window.addEventListener('load',function(){
  mask.classList.add('hide');
  setTimeout(function(){
    mask.remove();
  },600)
});

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


/* Open modal window */

openModalWindows()

function openModalWindows() {
  var modalWindow = $('.modal-window');
  var closeButton = $('.modal-window__close');
  var openButtons = $('.modal-btn');

  openButtons.on('click', function () {
      var path = $(this).attr('data-path');
      $('.modal-window__inner').removeClass('modal-window__inner--visible');
      $(`[data-target="${path}"]`).addClass('modal-window__inner--visible');
      modalWindow.addClass('modal-window--visible');
      $('body').addClass('no-scroll');
    })    



  closeButton.on('click', function () {
    modalWindow.removeClass('modal-window--visible');
    var path = $(this).attr('data-path');
    $(`[data-target="${path}"]`).removeClass('modal-window__inner--visible');
    $('body').removeClass('no-scroll');
  })

  $(modalWindow).on('click', function (e) {
    var target = $(e.target);
    if (target.is(modalWindow)) {
      modalWindow.removeClass('modal-window--visible');
      var path = $(this).attr('data-path');
      $(`[data-target="${path}"]`).removeClass('modal-window__inner--visible');
      $('body').removeClass('no-scroll');
    }
  })


}



// Slider
bigGallery();
function bigGallery(){
  const slider = document.querySelector('.big-gallery');
  const nextBtn = document.querySelector('.next-button');
  const prevBtn = document.querySelector('.prev-button');
  const images = document.querySelectorAll('.big-gallery__item');
  const dots = document.querySelectorAll('.card');
  
  let count = 0;
  let index = 0;
  
  // Next button control
  nextBtn.addEventListener('click', function () {
  
    count = count + 100;
    index++;
    images.forEach((image,i) => {
      if (index >= images.length -1) {
        // index--;
        // count = count - 100;
        nextBtn.style.display = 'none';
      }
      prevBtn.style.display = 'flex';
      image.style.transform = 'translate(-' + count + '%)';
    })
  
  })
  
  // Prev button control
  prevBtn.addEventListener('click', function () {
  count = count - 100;
  index--;
  images.forEach((image, i) => {
    if (index <= 0) {
      index = 0;
      count = 0;
      prevBtn.style.display = 'none';
    }
    nextBtn.style.display = 'flex';
    image.style.transform = 'translate(-' + count + '%)';
  })
  })
  
// dots control
dots.forEach((dot,dotIndex)=>{
  dot.addEventListener('click',()=>{
    count = 100 * dotIndex;
    index = dotIndex;
    images.forEach((image)=>{
      image.style.transform = 'translate(-' + count + '%)';
    })
  })

})
}

/* form validation*/

firstForm()
function firstForm() {
 var validName = false;
  var validTel = false;
  var validEmail = false;
  var validAccount = false;
  var validPassword = false;
  var validRpassword = false;

  $('#sign-up').submit(function (e) {
    e.preventDefault();

    var name = $('#sign-name').val();
    var email = $('#sign-email').val();
    var tel = $('#sign-tel').val();
    var account = $('#sign-account').val();
    var enterPassword = $('#sign-password').val();
    var repeatPassword = $('#sign-r-password').val();

    if (name == '') {
      $('#sign-name').prev().css('color', 'rgb(233, 11, 11)');
    } else {
      $('#sign-name').prev().css('color', 'rgba(66, 142, 95, .6)');
      validName = true;
    }

    if (tel == '') {
      $('#sign-tel').prev().css('color', 'rgb(233, 11, 11)');
    } else {
      $('#sign-tel').prev().css('color', 'rgba(66, 142, 95, .6)');
      validTel = true;
    }

    if (email == '') {
      $('#sign-email').prev().css('color', 'rgb(233, 11, 11)');
    } else {
      $('#sign-email').prev().css('color', 'rgba(66, 142, 95, .6)');
      validEmail = true;
    }

    if (account == '') {
      $('#sign-account').prev().css('color', 'rgb(233, 11, 11)');
    } else {
      $('#sign-account').prev().css('color', 'rgba(66, 142, 95, .6)');
      validAccount= true;
    }

    if (enterPassword  == '') {
      $('#sign-password').prev().css('color', 'rgb(233, 11, 11)');
    } else {
      $('#sign-password').prev().css('color', 'rgba(66, 142, 95, .6)');
      validPassword = true;
    }

    if ( repeatPassword  == '') {
      $('#sign-r-password').prev().css('color', 'rgb(233, 11, 11)');
    } else {
      $('#sign-r-password').prev().css('color', 'rgba(66, 142, 95, .6)');
      validRpassword= true;
    }

    if (validName == true && validTel == true && validEmail == true && validAccount == true && validPassword == true && validRpassword == true) {

      $('#sign-up').unbind('submit').submit();
      alert(name + ', registration is sucessfull');
    }
  });
};

secondForm()
function secondForm() {
 var validLogin = false;
  var validPassword = false;

  $('#login-form').submit(function (e) {
    e.preventDefault();

    var login = $('#login').val();
    var password = $('#login-password').val();

    if (login == '') {
      $('#login').prev().css('color', 'rgb(233, 11, 11)');
    } else {
      $('#login').prev().css('color', 'rgba(66, 142, 95, .6)');
      validLogin = true;
    }

    if (password == '') {
      $('#login-password').prev().css('color', 'rgb(233, 11, 11)');
    } else {
      $('#login-password').prev().css('color', 'rgba(66, 142, 95, .6)');
      validPassword = true;
    }


    if (validLogin == true && validPassword == true) {
      
       alert('wellcome');
       $('#login-form').unbind('submit').submit();
    }


  });
};

thirdForm()
function thirdForm() {
 var validName = false;
  var validTel = false;
  var validEmail = false;

  
  $('#getstarted').submit(function (e) {
    e.preventDefault();

    var name = $('#start-name').val();
    var email = $('#start-email').val();
    var tel = $('#start-tel').val();

    if (name == '') {
      $('#start-name').prev().css('color', 'rgb(233, 11, 11)');
    } else {
      $('#start-name').prev().css('color', 'rgba(66, 142, 95, .6)');
      validName = true;
    }

    if (tel == '') {
      $('#start-tel').prev().css('color', 'rgb(233, 11, 11)');
    } else {
      $('#start-tel').prev().css('color', 'rgba(66, 142, 95, .6)');
      validTel = true;
    }

    if (email == '') {
      $('#start-email').prev().css('color', 'rgb(233, 11, 11)');
    } else {
      $('#start-email').prev().css('color', 'rgba(66, 142, 95, .6)');
      validEmail = true;
    }
   
    if (validName == true && validTel == true && validEmail == true) {

      $('#getstarted').unbind('submit').submit();
      alert(name + ',we wil call you back in an hour');
    }
  });
};


/* Change color on reset button */
reset();

function reset() {
  $('.form__button[type="reset"]').on('click', function () {
    $('input').prev().css('color', 'rgba(66, 142, 95, .6)');
  })

}
/* Form tel mask */
$('form input[type="tel"]').each(function() {
  $(this).mask("+38 (999) 999-99-99",{placeholder:" "});
})


