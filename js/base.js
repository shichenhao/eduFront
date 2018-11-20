$(function(){
	$(".menuShow").click(function(){
		$(".menu").slideToggle();
	})
	$(".expandTop li").click(function(){
		var index = $(this).index();
		$(".expandTop .active").removeClass("active");
		$(this).addClass('active');
		$('.expand .expandCont').hide();
		$('.expand .expandCont').eq(index).show();
	})
})


window.onscroll=function(){
	var scrollT=$(document).scrollTop();
	scrollT>=77 ? $(".header").addClass("headerFixed") : $(".header").removeClass("headerFixed")
	
}