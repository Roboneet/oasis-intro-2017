$('nav a').on('mouseover',function(){
  var id;
  var a = document.querySelectorAll('nav a');
  for (i in a) if(this == a[i]) id = parseInt(i)+1;
  $('#pointerLeft').attr('class','plv pl'+id);
  $('#pointerRight').attr('class','prv pr'+id);
});
$('nav a').on('mouseout',function(){
  $('#pointerLeft').attr('class','');
  $('#pointerRight').attr('class','');
});
