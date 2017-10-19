(function($){
	function slidePanel() {
		var scrolly = $(document).scrollTop();
		$('.floating-panel').animate({marginTop: (scrolly > 122 ? scrolly - 120 : 0)}, 250);
	}
	$(document).on('ready', function() {
		if ($('.floating-panel-fallback').css('visibility') == 'hidden') { // don't bind in IE < 8
			$(window).on('scroll', function() {
				if (window.t) {
					clearTimeout(window.t);
					window.t = 0;
				}
				window.t = setTimeout(slidePanel, 250);
			});
		}
	});
})(jQuery);
