
$(function(){
	var owlCourseNav = $('.ind-course-nav');
	owlCourseNav.owlCarousel({
		loop: false,
		nav: false,
		dots: false,
		responsive:{
			0:{
				items: 3
			},
			600:{
				items: 5
			},
			1000:{
				items: 5
			}
		}
	});

	var owlVideoList = $('.video-list');
	owlVideoList.owlCarousel({
		loop: false,
		nav: true,
		dots: false,
		responsive:{
			0:{
				items: 3
			},
			600:{
				items: 4
			},
			1000:{
				items: 4
			}
		}
	});
});