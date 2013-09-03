$(function(){
	//各首页热点轮播
	$('.gl-slide .flexslider').flexslider({
		animation: "slide"
	});
	$('.law-slide .flexslider').flexslider({
		animation: "slide"
	});
	$('.edu-slide .flexslider').flexslider({
		animation: "slide"
	});
	
	//书籍轮播
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

	//教育学tabs切换
	$('.edu-head3-switcher a.item').click(function() {
		$(this).parent().find('.on').removeClass('on');
		$(this).addClass('on');
		return false;
	});
	$('.eh2 a').click(function() {
		$(this).parent().find('.on').removeClass('on');
		$(this).addClass('on');
		return false;
	});
	$('.eh4 a').click(function() {
		$(this).parent().find('.on').removeClass('on');
		$(this).addClass('on');
		return false;
	});
});