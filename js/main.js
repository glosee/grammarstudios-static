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

	function ObfuscatedEmail() {

		function createEls(link, inclText) {
			var $a = $('<a href="mailto:'+link+'">');
			var $i = $('<i class="fa fa-envelope-o"></i></a>');
			$a.append($i);
			if(inclText) {
				$a.append($('<span class="network-name">&nbsp;Email</span>'));
				$a.addClass('btn-link');
			}
			return $a;
		}
		// <a href="mailto:hello@grammarstudios.com?subject=Hello,%20Grammar" class="btn-link link-contact"><i class="fa fa-envelope-o fa-fw"></i> <span class="network-name">Email</span></a>

		var
			coded = 'BMXXD@ayuvvuynKkf2Dn.ADv',
			key = 'VLbahD7xzZfFO8Svp2eANwYtEQ5uBIWHrJ1Rls6GTgMo4CjKdUPk9mqiyc30Xn',
			shift = coded.length,
			link = ""

		;

		for (i=0; i<coded.length; i++) {
			if (key.indexOf(coded.charAt(i))==-1) {
			  ltr = coded.charAt(i);
			  link += (ltr);
			} else {
			  ltr = (key.indexOf(coded.charAt(i))-shift+key.length) % key.length;
			  link += (key.charAt(ltr));
			}
		}

		$('.link-email').append(createEls(link));
		$('.link-contact').append(createEls(link, true));
	}

	Navbar();
	PageScroll();
	Copyright();
	ObfuscatedEmail();

});
