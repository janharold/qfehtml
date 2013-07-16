$(document).ready(function() {
	
	// Topic Slider
	$('.sliderHot').rhinoslider({
		effect: 'kick',
		effectTime: 600,
		controlsMousewheel: false,
		controlsKeyboard: false,
		controlsPrevNext: false,
		controlsPlayPause: false,
		shiftValue: '180',
		showBullets: 'always'
	});
	$('.sliderLong').rhinoslider({
		effect: 'kick',
		effectTime: 600,
		controlsMousewheel: false,
		controlsKeyboard: false,
		controlsPrevNext: false,
		controlsPlayPause: false,
		shiftValue: '180',
		showBullets: 'always'
	});


	// Homepage Hover Effect
	$('.qBox span h3').each(function(){
	    var overlay = $(this).parent().parent().find('.overlayIMG');

	    $(this).hover(
	        function(){
	            $(overlay).fadeIn(400);
	        },
	        function(){
	            $(overlay).fadeOut(200);
	        }
	    );
	});
});