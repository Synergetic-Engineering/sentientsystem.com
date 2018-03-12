$(window).scroll(function() {
  if ($(window).scrollTop() >= 80) {
    $('.site-header').addClass('fixed-header');
  } else {
    $('.site-header').removeClass('fixed-header');
  }
});

$(document).ready(function($){
	function validateEmail(email) {
	  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	  return re.test(email);
	}

	function doAlert($msg) {
		swal('Oops!', $msg, 'warning');
	}

  	$('.menu-icon').on('click', function(e){
    	e.preventDefault();
  	});

	$('#contact').submit(function(e) {
	  e.preventDefault();

	  var $form = $(this);
	  var name = $('input[name="name"]').val();
	  var email = $('input[name="email"]').val();
	  var business = $('input[name="businessname"]').val();
	  var phone = $('input[name="phonenumber"]').val();

	  if( name === '' ) {
	  	doAlert('Field name cannot be empty.');
	  } else if( !validateEmail(email) ) {
	  	doAlert('Your email address is invalid.');
	  } else if( business === '' ) {
	  	doAlert('Business name cannot be empty.');
	  } else if( phone === '' ) {
	  	doAlert('Phone number cannot be empty.');
	  } else {
	  	$.post($form.attr('action'), $form.serialize()).then(function() {
			swal('Thank you', 'We will get back to you soon!', 'success');
		});
	  }

	  
	});

	$(document).on('click', 'a[href^="#"]', function (event) {
	    event.preventDefault();

	    $('html, body').animate({
	        scrollTop: $($.attr(this, 'href')).offset().top
	    }, 500);
	});
	
});