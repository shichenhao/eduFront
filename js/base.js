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


	//登录弹窗
	$("body").on('click','.loginPop .close',function(){
		loginHide();
	})

	//登录弹窗
	$("body").on('click','.loginBtn span:eq(0)',function(){
		var obj = {
    		mobile:$('.loginBox .mobile').val(),
    		passWord:$('.loginBox .password').val(),
    	}
		login(obj)
	})

	// 登录
	$(".menu .login .isLogin").click(function(){
		if(!localStorage.getItem('userInfo')){
			$(".loginBox ul:eq(1),.loginBtn span:eq(1)").hide();
			$(".loginPop").show();
		}
	})
	// 退出
	$('.menu .loginOut').click(function(){
		loginOut();
	})

	//修改密码
	$(".upPas").click(function(){
		$(".loginPop").show();
		$(".loginBtn span:eq(0),.loginCenter,.loginBox ul:eq(0)").hide();
		$(".loginBox h2").html('修改密码');

	})
	//登录弹窗
	$("body").on('click','.loginBtn span:eq(1)',function(){
		var obj = {
    		passWord:$('.loginBox .oldPas').val(),
    		newPassWord:$('.loginBox .password').val(),
    	}
		upPws(obj)
	})




})

function isLogin(){
	if(localStorage.getItem('userInfo')){
		$('.menu .login .isLogin').html(JSON.parse(localStorage.getItem('userInfo')).name)
		loginHide();
	}else{
		$('.menu .login .isLogin').html('登录')
		$('.menu .login span').remove();
	}
}

isLogin();

// 关闭弹窗
function loginHide(){
	$('.loginPop').hide();
	$('.loginBox input').val('')
}
// 登录
function login(data){
    ajax({
    	url:'/medu/user/login',
    	data:data,
    	success:function(data){
    		localStorage.setItem('userInfo',JSON.stringify(data.value))
    		isLogin();
    		window.location.reload()
    	}
    })
}

// 修改密码
function upPws(data){
    ajax({
    	url:'/medu/user/updateUserPassWord',
    	data:data,
    	success:function(res){
			$(".alertPop2").fadeIn().delay(500).fadeOut(200).find('div').html('修改成功');   
    		loginHide();
    	}
    })
}


// 登出
function loginOut(data){
    $.ajax({
    	url:'/medu/user/loginOut',
    	method:'POST',
    	data:data,
    	success:function(data){
    		localStorage.removeItem('userInfo');
    		isLogin();
    		window.location.reload()
    	}
    })
}


function ajax(obj,cb){
    $.ajax({
    	url:obj.url,
    	method:'POST',
    	data:obj.data,
    	success:obj.success,
    	error:function(err){
    		if(err.responseJSON.message === "会员未登录"){
    			loginOut();
    		}else{
    			$(".alertPop:eq(0)").fadeIn().delay(500).fadeOut(200).find('div').html(err.responseJSON.message);    			
    		}
    	}
    })
}


window.onscroll=function(){
	var scrollT=$(document).scrollTop();
	scrollT>=77 ? $(".header").addClass("headerFixed") : $(".header").removeClass("headerFixed")
}