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

