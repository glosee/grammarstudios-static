$(function() {

	function Navbar() {

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
	}

	function PageScroll() {
		$('a.page-scroll').on('click', function(event) {
				var $anchor = $(event.currentTarget),
						href = $anchor.attr('href').replace('#', ''),
						selector = '[name=' + href + ']';
				$('html, body').stop().animate({
						scrollTop: $(selector).offset().top
				}, 1000, 'easeInOutExpo');
				event.preventDefault();
		});
	}

	function Copyright() {
		$('.copyright .year').html((new Date()).getFullYear());
	}

	Navbar();
	PageScroll();
	Copyright();

});
