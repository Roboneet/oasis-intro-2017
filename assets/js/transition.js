$('.slider .bar').click(function(){
	var n = $('.slider .bar').index(this) + 1;
	console.log(n);
	$("#" + n).css("display","flex");
	$("#" + n).addClass("open");
	$(".popup #cross").click(function(){
		$("#" + n).removeClass("open");
		setTimeout(function(){
			$("#" + n).css("display","none");
			$("#" + n).removeClass("close");
		},1100);
		$("#" + n).addClass("close");
	});
})