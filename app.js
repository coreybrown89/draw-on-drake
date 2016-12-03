
function draw(){
	var ctx = getElementById('colors_sketch');
	ctx.canvas.width  = window.innerWidth;
	ctx.canvas.height = window.innerHeight;
}

$(document).ready(function(){ 

	// click handler for colors & brush size
	$('.js-color').on("click", function(e) {
		 e.preventDefault();

		 var color = $(this).attr('data-color');

		 // add .active class if clicked
		 if ( $('.js-color .active')) {
		 	$('.js-color.active').removeClass('active'); 
		 	$(this).toggleClass('active');
		 } else { $(this).toggleClass('active'); }	 

		 $('.js-brush .brush-picker').css('background-color', color );
		
		 console.log(color + ' was clicked');
	});

	// set default draw color 
	$('#colors_sketch').sketch({defaultColor: "rgba(0,0,0,.5)"});
});