(function ($) {


    /* Document Ready State */
    jQuery(document).ready(function(){
        AOS.init(); 
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