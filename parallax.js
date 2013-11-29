$(document).ready(function() {
  var origheight = $(".parallax").height();
  var height = $(window).height();
  if (height > origheight) {
    $(".parallax").height(height);
  }
  
  $(window).scroll(function(){
    var x = $(this).scrollTop();
    $('.parallax').css('background-position','center -'+parseInt(x/5)+'px');
  });


  $(".menu").click(function(e) {
    e.preventDefault();

    var menuSection = $(this).attr('data-menu');

    $('html, body').stop().animate({
        scrollTop: $(menuSection).offset().top
    }, 800);
    
  });
  
});