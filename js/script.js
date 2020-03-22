$(function(){

    function navfx (container,theclass) {
      $(window).on('scroll', () => {
        if ($(window).scrollTop())
          $(container).addClass(theclass);
        else
          $(container).removeClass(theclass);
      })
    };
  
    var query = 703;
  
    function checkSize() {
      screenWidth = $(window).width();
      if (screenWidth >= query) {
        $('.mobile-icon').hide();
        $('.main-nav').removeAttr('style');
        navfx('.main-nav','bigchange');
        navfx('.logoicon','lgchange');
      }
      else {
        $('.mobile-icon').show();
        $('.main-nav').hide();
        navfx('.mobile-icon','change');
      }
    }
    checkSize();
  
    $(window).resize(function () {
      checkSize();
    });
  
    $('.mobile-icon a:first-child').click(function (event) {
      event.preventDefault();
      $('.main-nav').toggle();
    });
  });

const selectElement = (element) => document.querySelector(element);

selectElement('.mobile-menu').addEventListener('click', () => {
  selectElement('header').classList.toggle('active');
});