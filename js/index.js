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


var app = new Vue({
  el: '#app',
  data: {
    list:{
      list1: [],
      list2: [],
      list3: [],
      list4: [],
      list5: [],
      list6: [],
    }
  },
  methods:{
    getList:function(type){
        var _this = this
         $.ajax({
            url:'/edu/user/findMNewsByPage',
            method:'POST',
            data:{
                limit: type === 2 ? 2 : 6,
                type:type
            },
            success:function(data){
                _this.list['list'+type] = data.value.list
            }
        })
    }
  },
  created(){
    this.getList(1)
    this.getList(2)
    this.getList(3)
    this.getList(4)
    this.getList(5)
    this.getList(6)
  }
})