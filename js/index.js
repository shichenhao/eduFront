$(function(){
	$(".top10Tit span").click(function(){
		var index = $(this).index();
		$(".top10Tit .active").removeClass("active");
		$(this).addClass('active');
		$('.top10 .top10Cont').hide();
		$('.top10 .top10Cont').eq(index).show();
	})


    var swiper = new Swiper('.swiper-container', {
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		loop: true,
		pagination: {
			el: '.swiper-pagination',
		},
          navigation: {
            nextEl: '.studentRight',
            prevEl: '.studentLeft',
          },
    });


/*
    $.ajax({
    	url:'/edu/manage/findMPartnerList',
    	method:'POST',
    	data:{
    		limit:100,
    		hasDel:0
    	},
    	success:function(data){
    		var html = '';
    		for(var i=0;i<data.value.length;i++){
    			html = html + '<a>'+data.value[i].name+'</a>'
    		}
    		$('.cooperationCont div').html(html)
    	}
    })*/

})