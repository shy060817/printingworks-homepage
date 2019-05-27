/*Theme Name: Napier - Responsive Startup Landing Template
   Author: Murtaxa
   Version: 1.0
*/

$(function(){
	"use strict";
	// Preloader
	$('#preloader').css('display', 'none');
	// Scroll Nav
	var scrollOffset = 100;
	$(window).on('scroll', function(){
		if( $(window).scrollTop() < scrollOffset ){
			$('body').removeClass('scrolled');
		}else{
			$('body').addClass('scrolled');
		}
		var scrollPos = $(document).scrollTop(),
			nav_height = $('#navbar').outerHeight();
		$('.navbar li a').each(function () {
			var currLink = $(this),
				refElement = $(currLink.attr('href'));
			if( refElement.size() > 0 ){
				if ( ( refElement.position().top - nav_height ) <= scrollPos ) {
					$('.navbar li').removeClass('active');
					currLink.closest('li').addClass('active');
				}else{
					currLink.removeClass('active');
				}
			}
		});
	});

	// Buttons Script
	$(function() {
	    $('.ripple').on('click', function (event) {
	      event.preventDefault();
	      
	      var $div = $('<div/>'),
	          btnOffset = $(this).offset(),
	      		xPos = event.pageX - btnOffset.left,
	      		yPos = event.pageY - btnOffset.top;
	      

	      
	      $div.addClass('ripple-effect');
	      var $ripple = $(".ripple-effect");
	      
	      $ripple.css("height", $(this).height());
	      $ripple.css("width", $(this).height());
	      $div
	        .css({
	          top: yPos - ($ripple.height()/2),
	          left: xPos - ($ripple.width()/2),
	          background: $(this).data("ripple-color")
	        }) 
	        .appendTo($(this));

	      window.setTimeout(function(){
	        $div.remove();
	      }, 2000);
	    });
	    
	  });

	// Typing Text
	$(".typing").typed({
		strings: [
			"영업관리 부터 생산관리까지	MES와 ERP의 모든 것, 구축형 MES/ERP 프린팅웍스와 함께 하세요!"
			],
		typeSpeed:100,
		backDelay:2000,
		loop:true
	});

	// testimonials-slider
	$('.testimonials-slider').owlCarousel({
         margin: 30,
         autoplay: true,
         nav: false,
         dots: false,
         loop: true,
         responsive: {
             0: {
                 items: 1
             }
         }
	});
	// blog-carousel
	$('#blog #blog-carousel').owlCarousel({
         loop: true,
         margin: 30,
         autoplay: true,
         nav: false,
         dots: false,
         responsive: {
             0: {
                 items: 1
             },
             300: {
                 items: 1
             },
             600: {
                 items: 2
             },
             900: {
                 items: 3
             },
             1200: {
                 items: 3
             }
         }
     });

	//Initialize smoothscroll plugin
	smoothScroll.init({
		updateURL: false
	});

});
