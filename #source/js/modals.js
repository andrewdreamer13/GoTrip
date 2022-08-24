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


