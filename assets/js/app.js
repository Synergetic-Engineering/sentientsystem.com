$(window).scroll(function() {
  if ($(window).scrollTop() >= 80) {
    $('.site-header').addClass('fixed-header');
  } else {
    $('.site-header').removeClass('fixed-header');
  }
});

$(document).ready(function($){
  	$('.menu-icon').on('click', function(e){
    	e.preventDefault();
  	});

	$('#contact').submit(function(e) {
	  e.preventDefault();

	  var $form = $(this);
	  $.post($form.attr('action'), $form.serialize()).then(function() {
	    alert("Thank you!");
	  });
	});
	
});