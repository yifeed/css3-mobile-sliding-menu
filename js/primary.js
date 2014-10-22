$(function() {
	// hamburger menu toggle
	$('#menu-toggler').click(function() {
	
		$(this).toggleClass('open');

		// menu open
		$('.menu').toggleClass('open');

		return false; // prevent the link from performing its default behavior
	});
});