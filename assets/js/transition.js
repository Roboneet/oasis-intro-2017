$('.slider .bar').click(function(){
	var n = $('.slider .bar').index(this) + 1;
	console.log(n);
	$("#" + n).css("display","flex");
	// $(".bar").addClass("closebar");
	$("#" + n).addClass("open");

	function close() {
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
