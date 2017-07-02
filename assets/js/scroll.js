$(document).ready(function(){

	var scroller;
	var mouse_info;
	var max_slider_left = 0;
	var min_slider_left = $('.slider-container').width() - $('.slider').width();


	$('.slider-container')
	.mouseenter(function(e){
		
		scroller = setInterval(function(){

			var container = $('.slider-container');
			var speed =(mouse_info.clientX - container.offset().left - container.width()/2 );  //speed depends on where user places the mouse relative to container
			
			var slider = $('.slider');
			var left = slider.offset().left;
			var relative_left = slider.offset().left - container.offset().left;

			var dist = speed*.01;
			
			/*= checking if it's out of bounds */
			if(relative_left - dist >= max_slider_left){
				
				dist = relative_left - max_slider_left;
			}else if(relative_left - dist < min_slider_left ){
				
				dist = relative_left - min_slider_left;
			}

			$('.slider').css({'left':relative_left - dist+"px",}); 	// this does the trick ! :D 
		
		},10)
	}).mouseleave(function(){
		clearInterval(scroller);
	}).mousemove(function(e){
		mouse_info = e;
	})

});