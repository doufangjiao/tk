/*
* @Author: Administrator
* @Date:   2018-01-05 20:42:58
* @Last Modified by:   Administrator
* @Last Modified time: 2018-01-06 19:30:34
*/
$(function(){
	var mySwiper = new Swiper (
							'.swiper-container', {
							    autoplay: 3800,
							    speed:1000,
							    loop:true,
							    autoplayDisableOnInteraction :false,
							    effect : 'effect',
								paginationClickable: true,
							    // 如果需要分页器
							    pagination: '.swiper-pagination',
								}
						)
	
	var mySwiper = new Swiper (
							'.swiper-container1', {
							    direction: 'vertical',
							   	autoplay: 2800,
							    speed:1000,
							    loop:true,
							    autoplayDisableOnInteraction :false,
							    effect : 'effect',
								paginationClickable: true,
								 pagination: {
								     el: '.swiper-pagination',
								     clickable: true,
								  },
								}
						)
	var mySwiper = new Swiper (
							'.swiper-container2', {
							    speed:1000,
								 pagination: {
								     el: '.swiper-pagination',
								     clickable: true,
								  },
								}
						)
	
	//        切换宝贝
	$(".sift-baby li").each(function(){
		$(this).click(function(){
			$(this).addClass("active").siblings().removeClass("active");
			let active = $(this).parents().next().children().eq($(this).index())
			active.addClass("active").stop(true).siblings().removeClass("active")
		})
	})
	
	//        写个倒计时
	
	var myTimer;
	var hour = 09
	var minute = 18;
	var seconds = 30;
	function start(){
		myTimer = setInterval(minus,1000);
	}
	start();
	function minus(){
		seconds--;
		if(seconds<1){
			seconds=59;
			minute--;
			if(minute<1){
				minute=59;
				hour--;
				if(hour<1){
					minus();
				}
			}
		}
		document.getElementById("seconds").innerHTML=("0"+seconds).slice(-2);
		document.getElementById("minute").innerHTML=("0"+minute).slice(-2);
		document.getElementById("hour").innerHTML=("0"+hour).slice(-2);
	}

	
	
	
})
