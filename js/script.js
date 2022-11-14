gsap.from('.header', {duration: 1 , y: '-100%'});
gsap.from('.navbar', {delay:0.15, duration: 0.85 , x: '200%'});
gsap.from('.carousel' , {delay: 0.15, duration: 0.85, x: '-100%'});
gsap.from('.main-container', {delay: 1.15 ,duration: 0.75 , opacity:'0'});


//Animations for Product
//--Vending machine
var element = $('.vending_machine');
var tl = new TimelineMax({ repeat: -1, repeatDelay: 0.5 });

tl.to(element, 0.4, { y: '12', ease: Power1.easeNone });
tl.to(element, 0.2, { y: '0', ease: Power1.easeOut });
tl.to(element, 0.2, { y: '8', ease: Power1.easeNone });
tl.to(element, 0.4, { y: '0', ease: Power1.easeOut });

$(document).ready(function() {

	var request = null;
	var mouse = { x: 0, y: 0 };
	var cx = window.innerWidth / 8;
	var cy = window.innerHeight / 2;

	$('.vending_machine').mousemove(function(event) {
  
		mouse.x = event.pageX;
		mouse.y = event.pageY;
	
		cancelAnimationFrame(request);
		request = requestAnimationFrame(update);	
	});

	function update() {
  
		dx = mouse.x - cx;
		dy = mouse.y - cy;

		tiltx = (dy / cy);
		tilty = - (dx / cx);
		radius = Math.sqrt(Math.pow(tiltx,8) + Math.pow(tilty,2));
		degree = (radius * 20);
		TweenLite.to("#Contenedor_Vending", 1, {transform:'rotate3d(' + tiltx + ', ' + tilty + ', 0, ' + degree + 'deg)', ease:Power2.easeOut});
	}
	
	$(window).resize(function() {
		cx = window.innerWidth / 8;
		cy = window.innerHeight / 2;
	});	
});