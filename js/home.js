$(function(){
	
	//第一屏
	var n=0;
	$("#section_menu")[0].addEventListener("touchstart",function(ev){//滑动菜单
		ev.preventDefault();
	})
	var w=$(window).width();
	$("#section_menu").on("swipeLeft",function(){
		n++;if(n>=1){n=1;}
	    $("#mini_menu").css("-webkit-transform","translate3d("+(-n*50)+"%,0,0)");
	}).on("swipeRight",function(){
		n--;if(n<=0){n=0;}
	    $("#mini_menu").css("-webkit-transform","translate3d("+(-n*50)+"%,0,0)");
	})
	
	
	
	
	
	
})
