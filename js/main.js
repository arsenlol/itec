$('.top-title-ask').click(function(){
  $('.top-title-ask').addClass('open');
})

$(document).click(function(e){
  if (e.target == document.querySelector('.top-ask-close')) {
    $('.top-title-ask').removeClass('open');
  }
});

$('#call-back').click(function(){
  $('#call-back').addClass('open');
})

$(document).click(function(e){
  if (e.target == document.querySelector('.call-close')) {
    $('#call-back').removeClass('open');
  }
});

$('.mob-menu-toggle').click(function(){
  $('header nav').toggleClass('open');
  $('.mob-menu-toggle').toggleClass('open');
});


$(".call-back-tel-input").mask("+38 (999) 99-99-999");

if ($('#back-to-top').length) {

  function backToTop() {
    var scrollTrigger = 400; // px
          var scrollTop = $(window).scrollTop();
          if (scrollTop > scrollTrigger) {
              $('#back-to-top').addClass('show');
      
          } else {
              $('#back-to-top').removeClass('show');
      
          }
  }

backToTop();

  $(window).on('scroll', backToTop);

  $('#back-to-top').on('click', function (e) {
      e.preventDefault();
      $('html,body').animate({
          scrollTop: 0
      }, 700);
  });
}

// Плавный переход к якорю
$('nav a').click(function(){
  $('html, body').animate({
      scrollTop: $( $.attr(this, 'href') ).offset().top-30
  }, 500);
  return false;
});
