$(function(){
	$('.gl-slide .flexslider').flexslider({
		animation: "slide"
	});
	$('.law-slide .flexslider').flexslider({
		animation: "slide"
	});
	$('.edu-slide .flexslider').flexslider({
		animation: "slide"
	});
	
	$('#box-scrolling').scrollbox({
	  direction: 'h',
	  distance: 131
	});
	$('#forward').click(function () {
	  $('#box-scrolling').trigger('backward');
	});
	$('#backward').click(function () {
	  $('#box-scrolling').trigger('forward');
	});
});