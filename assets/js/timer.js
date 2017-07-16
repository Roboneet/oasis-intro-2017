var today = new Date();
var final = new Date(2017, 9, 31);
var timeDiff = Math.abs(final.getTime() - today.getTime());
var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
if(diffDays<0){
	diffDays = 0;
}

$('#timer span').text(diffDays);
$('#timer').addClass('animated fadeInUp');
$('#timer').fadeIn();