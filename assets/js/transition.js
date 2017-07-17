	$('.slider .bar').click(function(){
		
		var n = $('.slider .bar').index(this) + 1;
		console.log(n);
		$("#" + n).css("display","flex");
		// $(".bar").addClass("closebar");
		$("#" + n).addClass("open");

		function close() {
			stop_video(n);
			$("#" + n).removeClass("open");
			setTimeout(function(){
				$("#" + n).css("display","none");
				$("#" + n).removeClass("close");
			},600);
			$("#" + n).addClass("close");

		}

		$(".popup #cross").click(function(){
			close();
		});

		$(".popup").click(function(){
			close();
		});

		$(".popup .video-container").click(function(e){
			e.stopPropagation();
		});
	})

	function stop_video(n){
		var video = $('#'+n+' iframe');
		src = video.attr('src');
		video.attr('src', src); 
	}

	colors={
		contact: {
			backgroundColor :'rgb(239, 229, 246)',
			color: '#212121',
		},
		about: {
			backgroundColor: 'rgb(42, 52, 150)',
			color: '#fff',
		},
		sponsors: {
			backgroundColor: 'rgb(255, 233, 237)',
			color: 'rgb(190, 0 ,0)',
		},
		register: {
			backgroundColor: '#212121',
			color: '#f3f3f3',
		}
	}

	var open = null;
	$('nav a').unbind('click').click(function(e){
		let data = $(e.target).attr('data');
		function open_info(){
			
			if(data){
				open = data;
				$('.info-container').fadeIn();
				$('.info-container').css(colors[data])

				$('.info[data='+data+']').addClass('info_open');
				$('.info[data='+data+']').addClass('open');
								
				
			}
			return;
		}

		if(open && open==data){     
			// it's already open
			return;
		}else if(open){
			// another info section is already open
			close_info(open_info);
		}else if($('.open').length){
			// a panel is already open
			let n = $('.open').attr('id');
			stop_video(n);
			$("#" + n).removeClass("open");
			setTimeout(function(){
				$("#" + n).css("display","none");
				$("#" + n).removeClass("close");
				open_info();
			},600);
			$("#" + n).addClass("close");

		}else{
			// nothing else is open
			open_info();
		}
		

	});

	$('.info-container .cross').click(function(event){
		if(open){
			close_info(null);
		}
	})

	$('.heading_left_tab').click(function(event){

		if(open){
			close_info(null);
		}else if($('.open').length){
			// a panel is already open
			let n = $('.open').attr('id');
			stop_video(n);
			$("#" + n).removeClass("open");
			setTimeout(function(){
				$("#" + n).css("display","none");
				$("#" + n).removeClass("close");
				open_info();
			},600);
			$("#" + n).addClass("close");

		}
	})
	

	function close_info(func){
		let data = $('info_open').attr('data');	
		$('.info_open').removeClass('open');
		$('.info_open').addClass('close');
		setTimeout(function(){
			$('.info_open').removeClass('close');
			$('.info_open').removeClass('info_open');
			open = null;

			
			if((typeof func ) == 'function' ){
				func();
			}else{
				$('.info-container').fadeOut();
			}
		},500)
	}
