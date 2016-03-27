// jQuery to collapse the navbar on scroll
function collapseNavbar() {
		if ($(".navbar").offset().top > 50) {
				$(".navbar-fixed-top").addClass("top-nav-collapse");
		} else {
				$(".navbar-fixed-top").removeClass("top-nav-collapse");
		}
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
		$('a.page-scroll').bind('click', function(event) {
				var $anchor = $(event.currentTarget),
						selector = '[name=' + $anchor.attr('href').replace('#', '') + ']';
				$('html, body').stop().animate({
						scrollTop: $(selector).offset().top
				}, 1000, 'easeInOutExpo');
				event.preventDefault();
		});
});
