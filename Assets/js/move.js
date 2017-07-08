// Authors : Chinmay Pandhare, Neethu Maria Joy
(function() {
    document.onmousemove = handleMouseMove;
    function handleMouseMove(event) {

      // define a shorthand for document.querySelector
      function $$(s){return document.querySelector(s)}

      // the main transform function
      function setTransform(newv,newh,timeout) {
        setTimeout(function(){
          var movable = document.getElementsByClassName('movable');
          var rx = -newv*5;
          var ry = newh*5;
          // $$('#movable').style.transform = "rotateX("+(-newv*5)+"deg) rotateY("+newh*5+"deg)";
          TweenMax.to(movable, 2, {rotationY: ry , rotationX: rx, ease: Quad.easeOut});
        },timeout);
      }

      //define half width and half height
      var hw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0) / 2;
      var hh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0) / 2;

      event = event || window.event; // IE fix

      // define horizontal and vertical deviations from center
      var hd = (event.pageX-hw)/hw;
      var vd = (event.pageY-hh)/hh;

      // smoothening the animation (animate only half the difference)
      if(!document.hd) {document.hd = hd; document.vd = vd}
      var dhd = hd - document.hd; // pointer horizontal speed
      var dvd = vd - document.hd; // pointer vertical speed
      var newh = (document.hd + 0.5*dhd); // x-position halfway between old and new
      var newv = (document.vd + 0.5*dvd); // y-position halfway between old and new
      document.hd = hd;
      document.vd = vd;
      timeout = Math.min( //generate a timeout according to pointer speed
        70,
        10 * (
          Math.pow(
            Math.E,
            Math.abs(dhd)+Math.abs(dvd)
          ) - 1
        )
      );

      // updating the description container
      // $$('#desc').innerHTML = "right: "+hd+" "+newh+
      // "<br>bottom: "+vd+" "+newv+
      // "<br>speeds: "+dhd+" "+dvd+
      // "<br>timeout: "+timeout;

      //applying the transform
      setTransform(newv,newh,timeout);

    }
})();
