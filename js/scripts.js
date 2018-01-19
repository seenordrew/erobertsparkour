$(document).ready(function(){
			$('.site-nav-btn').click(function(){
				$('.site-nav').toggleClass('active');
				$('.site-nav-btn').toggleClass('toggle');
			})
			$('nav ul li a').on('click', function(){
				$('.site-nav').toggleClass('inactive');
				$('.site-nav-btn').removeClass('toggle');
			})
	})