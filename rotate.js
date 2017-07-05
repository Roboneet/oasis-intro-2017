container = document.getElementById('container')

container.addEventListener('mousemove', handle_mousemove);
container.addEventListener('mouseout', handle_mouseout);
container.addEventListener('mouseover', handle_mouseover);

var h = container.offsetHeight;
var w = container.offsetWidth;
TweenMax.to(container,.2,{scale:1});

function handle_mousemove(e){
	var dx = e.offsetX - (w / 2);
    var dy = e.offsetY - (h / 2);
   
  	TweenMax.to(container, 1, {rotationY: dx/60 , rotationX: -dy/60});
}

function handle_mouseout(e) {
    TweenMax.to(container, 1, {scale:1, rotationY: 0, rotationX: 0, ease: Quad.easeOut});
}

function handle_mouseover(e) {
    TweenMax.to(container, 1, {scale: 1, ease: Back.easeOut});
}
