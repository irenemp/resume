// detectar que el puntero se esta moviendo, despues donde se esta moviendo el puntero y despues ya mover las imagenes. Hay que registrar un evento dentro de la funcion, solemos usar la e.Para ver las coordenadas del mouse se utilizan la pagex y pagey.

	$(".cielos").on("mousemove", function(e){

		console.log(e.pageX);


$(".nubes1").css("transform", "translate("+e.pageX * 0.01 +"px, "+e.pageX * 0.02+"px)");


	});



	(function() {

	  'use strict';

	  // define variables
	  var items = document.querySelectorAll(".timeline li");

	  // check if an element is in viewport
	  // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
	  function isElementInViewport(el) {
	    var rect = el.getBoundingClientRect();
	    return (
	      rect.top >= 0 &&
	      rect.left >= 0 &&
	      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
	      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
	    );
	  }

	  function callbackFunc() {
	    for (var i = 0; i < items.length; i++) {
	      if (isElementInViewport(items[i])) {
	        items[i].classList.add("in-view");
	      }
	    }
	  }

	  // listen for events
	  window.addEventListener("load", callbackFunc);
	  window.addEventListener("resize", callbackFunc);
	  window.addEventListener("scroll", callbackFunc);

	})();

// Skills

	jQuery(document).ready(function(){
			jQuery('.skillbar').each(function(){
				jQuery(this).find('.skillbar-bar').animate({
					width:jQuery(this).attr('data-percent')
				},20000);
			});
		});




		 // Carousel owl plugin

		      $('.owl-carousel').owlCarousel( {

		      margin:30,
		      loop:true,
		     autoplay:true,
		    autoplayTimeout:2500,
		    autoplayHoverPause:true,
		   responsiveClass:true,
		        responsive:{
		            0:{
		                items:1,
		                nav:true
		            },
		            600:{
		                items:1,
		                nav:false
		            },

		            768:{
		                items:2,
		                nav:false
		            },

		            1200:{
		                items:2,
		                nav:true,
		                loop:true
		            }
		        }


		      });

					$(document).ready(function () {

						/*********************************************** boton hacia arriba **********************************************/
						$('.ir-arriba').click(function(){
								$('body, html').animate({
										scrollTop: '0px'
								}, 1000);
						});

						$(window).scroll(function(){
								if( $(this).scrollTop() > 4800 ){
										$('.ir-arriba').slideDown(600);
								} else {
										$('.ir-arriba').slideUp(600);
								}
						});

						/*hacia abajo*/
						$('.ir-abajo').click(function(){
								$('body, html').animate({
										scrollTop: '1000px'
								}, 1000);
						});

				});
