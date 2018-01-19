$(document).ready(function(){
			$('.site-nav-btn').click(function(){
				$('.site-nav').toggleClass('active');
				$('.site-nav-btn').toggleClass('toggle');
			})
			$('.nav-link').click(function(){
				$('.site-nav').toggleClass('inactive');
				// $('.site-nav-btn').toggleClass('')
			})
	})