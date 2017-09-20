$(document).ready(function(){

  $(".nav-open").click( function(evt){
    evt.preventDefault();
    $(".site-nav").slideDown(400);
  });

  $(".nav-close").click( function(evt){
    evt.preventDefault();
    $(".site-nav").slideUp(400);
  });

});

$('.carousel').carousel({
	pause: true
});