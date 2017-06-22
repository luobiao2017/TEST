$(function(){
	
//	var i=0;
//	$(".page_box")[0].addEventListener("touchstart",function(ev){//滑动菜单
//		ev.preventDefault();
//	})
//	$(".page_box").on("swipeLeft",function(){
//		i++;if(n>=5){i=1;}
//	    $(".page_box li").css("-webkit-transform","translate3d("+(-i*100)+"%,0,0)");
//	}).on("swipeRight",function(){
//		i--;if(n<=0){i=0;}
//	    $(".page_box li").css("-webkit-transform","translate3d("+(-i*100)+"%,0,0)");
//	})
	
	
	
	
	
	
	
	
	
	
	//************************************第一屏******************************************
	
    //	search 关键词匹配(拼音，中文) 
    $("#search_val").bind("keyup",function(){//实时监听搜索框的值  
		if (event.keyCode=="13"){
			var val= $("#search_val").val();
			$.getJSON("demo.json",function(data){
		        $.each(data,function(index,info){
		            var pinyin=info.pinyin;
			 		var cityname=info.cityname;
			 		if(pinyin.indexOf(val)!=-1||cityname.indexOf(val)!=-1){
			 			window.location.href=info.src; 
			 		}
			 		else{
			 			$("#search_val").val()
			 		}
			 	})    
		    })
		}   	  
	})
    //section_menu菜单左右滑动效果
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
	$("#mini_menu li a").on("tap", function(e){
        var e = event || window.event;
        e.stopPropagation();
    });
    
    
	//  section_submenu 选项卡效果
	$(".section_submenu span").eq(0).addClass("co");
	$(".section_pics li").eq(0).show();
	$(".section_submenu span").on("tap",function(){
		var index=$(this).index();
		$(".section_submenu span").eq(index).addClass("co").siblings().removeClass("co");
		$(".section_pics li").eq(index).show().siblings().hide();
	})











})
