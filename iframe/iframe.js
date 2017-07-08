$('.box1').click(function(e){
    $('.iframe_container1').fadeIn('slow');
    $('.iframe_container1').click(function(e){
        $(this).fadeOut('slow');
        $('iframe').attr('src', $('iframe').attr('src'));
    });
});
$('.box2').click(function(e){
    $('.iframe_container2').fadeIn('slow');
    $('.iframe_container2').click(function(e){
        $(this).fadeOut('slow');
        $('iframe').attr('src', $('iframe').attr('src'));
    });
});
