	// Quickstart by Samuel Stroud
	
	// Need help?
	// samueljstroud@gmail.com
	// quickstart-dev.tumblr.com
	// @Samuel_Stroud
	
	// © Samuel Stroud

	$(function() {
	  $('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		  if (target.length) {
			$('html,body').animate({
			  scrollTop: target.offset().top
			}, 1000);
			return false;
		  }
		}
	  });
	});
	
	$(document).ready(function(){
		$('img.anim').parent('div').css('overflow', 'hidden');
	});
	
	$(document).ready(function(){
		$('.overlay').hide();
		$('.entry').mouseenter(function(){
			$(this).children('.overlay').fadeIn();
		});
		$('.entry').mouseleave(function(){
			$(this).children('.overlay').fadeOut();
		});
		
	});
	
	$(window).load(function(){
		$('.preloader').fadeOut("slow");
	});