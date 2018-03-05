/*
* @Author: Administrator
* @Date:   2018-01-05 20:42:58
* @Last Modified by:   Administrator
* @Last Modified time: 2018-01-06 19:30:34
*/
$(function(){
	//        分类切换
	$(".select p").each(function(){
		$(this).click(function(){
			$(this).addClass("active").siblings().removeClass("active");
			let show = $(this).parent().parent().next().children().eq($(this).index())
			show.addClass("show").siblings().removeClass("show")
		})
	})
	
	
	
	//        切换宝贝
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
	
	$(".select span").click(function(){
		location.href="buyInsurance.html"
	})

	$('.item,.item2').click(function(){
		location.href="#/insuranceinfo"
	});

	
	
	
})
