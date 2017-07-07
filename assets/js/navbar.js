$(document).ready(() => {
	var open = null;
	$('nav a').click(function(){
		show_slider();
		let data = $(this).attr('data');
		if(data){
			open = data;
			$('#info-container[data='+data+']').addClass('info_open');
			console.log($(window).width() - $('.slider-container').offset().left + 'px')
			$('.slider-container').animate({'left':$(window).width() - $('.slider-container').offset().left - 20 +'px'}, 700);

		}
	})

	$('.slider-container').click(function(event){

		if(open){
			show_slider()
		}
	})

	function show_slider(){
		$('.info_open').removeClass('info_open');
		$('.slider-container').animate({'left':'0px'}, 700);
	}

})