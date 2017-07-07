let container = document.getElementById('container')
let target = document.getElementById('moving')

container.addEventListener('mousemove', handle_mousemove);
container.addEventListener('mouseout', handle_mouseout);
container.addEventListener('mouseover', handle_mouseover);

var h = moving.offsetHeight;
var w = moving.offsetWidth;


function handle_mousemove(e){
	var dx = e.offsetX - (w / 2);
    var dy = e.offsetY - (h / 2);
   
  	TweenMax.to(moving, 2, {rotationY: dx/30 , rotationX: -dy/30});
}

function handle_mouseout(e) {
    TweenMax.to(moving, 2, {scale:1, rotationY: 0, rotationX: 0, ease: Quad.easeOut});
}

function handle_mouseover(e) {
    TweenMax.to(moving, 2, {scale: 1, ease: Back.easeOut});
}
