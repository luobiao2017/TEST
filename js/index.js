$(function(){
	var n=0;
	$(".link_box")[0].addEventListener("touchstart",function(ev){
	    ev.preventDefault();
    })
	var w=$(window).width();
	$(".link_box").on("swipeLeft",function(){
		n++;if(n>=1){n=1;}
	    $(".link").css("-webkit-transform","translate3d("+(-n*50)+"%,0,0)");
	    $(".point span").eq(n).addClass("co").siblings().removeClass();
	}).on("swipeRight",function(){
		n--;if(n<=0){n=0;}
	    $(".link").css("-webkit-transform","translate3d("+(-n*50)+"%,0,0)");
	    $(".point span").eq(n).addClass("co").siblings().removeClass();
	})
})
