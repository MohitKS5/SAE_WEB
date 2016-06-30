window.onload = init;

var car;
function init(){

	car = $('.product1').ThreeSixty({
		totalFrames: 52,
		endFrame: 37,
		currentFrame: 1,
		framerate: 100,
		playSpeed: 60,
		imgList: '.threesixty_images',
		progress: '.spinner',
		imagePath:'img/Agni/',
		filePrefix: '',
		ext: '.png',
		height: 447,
		width: 1000,
		navigation: false,
		onReady: function(){
			
		}
		//disableSpin: false
	});

	$('.custom_previous').bind('click', function(e) {
		car.previous();
	});

	$('.custom_next').bind('click', function(e) {
		car.next();
	});

	$("body").on("click",".custom_play",function(){
		car.play();
	});

	$("body").on("click",".custom_stop",function(){
		car.stop();
	});

	$("body").on("click",".custom_buttons.toggle-it",function(){
		$(this).toggleClass("custom_play custom_stop");
		$(this).find(".font-icon").toggleClass("font-icon-play3 font-icon-pause2");
	});

}
