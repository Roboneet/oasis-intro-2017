$(document).ready(() => {
	var open = null;
	$('nav a').unbind('click').click(function(event){
		let data = $(event.target).attr('data');
		function move_slider(){
			
			if(data){
				open = data;
				$('.slider-container .left-arrow').fadeIn();
				$('#info-container[data='+data+']').addClass('info_open');
				// console.log($(window).width() - $('.slider-container').offset().left + 'px')
				$('.slider-container').animate({'left':$(window).width() - $('.slider-container').offset().left - 20 +'px'}, 700);

			}
			return;
		}

		if(open && open==data){
			return;
		}else if(open){
			show_slider(move_slider);
		}else{
			move_slider();
		}
		
	})

	$('.slider-container').click(function(event){

		if(open){
			show_slider(null);
		}
	})

	$('.left-arrow').click(function(event){
		if(open){
			show_slider(null);
		}
	})

	function show_slider(func){
		$('.info_open').removeClass('info_open');
		open = null;
		$('.slider-container .left-arrow').fadeOut();

		$('.slider-container').animate({'left':'0px'}, 700, func);
	}

})