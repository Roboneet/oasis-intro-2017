$(function(){
  a = document.querySelectorAll('nav a');
  v = [];
  for (i = 0; i < a.length; i++) {
    v.push(a[i].offsetTop + 0.5*a[i].scrollHeight - 10);
    console.log('.pl'+(i+1)+' {top: '+v[i]+'px;}');
    document.querySelector('#keep_at_end').sheet.insertRule('#pointers div.pl'+(i+1)+' {top: '+v[i]+'px;}',0);
    document.querySelector('#keep_at_end').sheet.insertRule('#pointers div.pr'+(i+1)+' {top: '+v[i]+'px;}',0);
  }

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

});
