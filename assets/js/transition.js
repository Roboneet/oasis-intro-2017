$('.slider .bar').click(function(){
	var n = $('.slider .bar').index(this) + 1;
	console.log(n);
	$(".popup-container").css("display","block");
	$(".popup-container .popup:nth-child(" + n + ")").css("display","flex");
	$(".popup-container .popup:nth-child(" + n + ")").addClass("open");
	$(".popup #cross").click(function(){
		console.log("I am clicked!");
		$(".popup-container .popup:nth-child(" + n + ")").removeClass("open");
		
		setTimeout(function(){
			$(".popup-container").css("display","none");
			$(".popup-container .popup:nth-child(" + n + ")").css("display","none");
			$(".popup-container .popup:nth-child(" + n + ")").removeClass("close");
		},1100);
		$(".popup-container .popup:nth-child(" + n + ")").addClass("close");
	});
})