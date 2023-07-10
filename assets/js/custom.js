(function ($) {
    /* Document Ready State */
    jQuery(document).ready(function(){
        //jQuery('body').css('background','#fff');
        // window.addEventListener('scroll', function() {
        //     var header = document.querySelector('.header-section');
        //     var scrollPosition = window.scrollY;
          
        //     if (scrollPosition > 0) {
        //       header.classList.add('scrolled');
        //     } else {
        //       header.classList.remove('scrolled');
        //     }
        //   });



          /*===== Header sticky =====*/
	$(window).scroll(function () {
		var scroll = $(window).scrollTop();
		if (scroll <= 50) {
			$('.header-section').removeClass("header-sticky");
		} else {
			$('.header-section').addClass('header-sticky');
		}
	});
	/*===== Header sticky =====*/



    });
})(jQuery);