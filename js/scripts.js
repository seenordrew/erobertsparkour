$(document).ready(function(){
			$('.site-nav-btn').click(function(){
				$('.site-nav').toggleClass('active');
				$('.site-nav-btn').toggleClass('toggle');
			})
			$('.nav-link').on('click', function(){
				$('.site-nav').removeClass('active');
				$('.site-nav-btn').removeClass('toggle');
			})
	})