<template>
	<div>
		<index-header></index-header>
		<index-main></index-main>
		<common-footer class='index-footer'></common-footer>
	</div>
</template>

<script>

import '../assets/css/index.css'
import IndexHeader from '../components/index/IndexHeader.vue'
import IndexMain from '../components/index/IndexMain//IndexMain.vue'
import CommonFooter from '../components/common/CommonFooter.vue'



export default {

  name: 'IndexPage',

  data () {
    return {

    }
  },
  components:{
  	IndexHeader,
  	IndexMain,
  	CommonFooter
  },
  mounted:function(){
	  	// banner Swiper
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

	  		// 广告 Swiper
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


		var hour = 9;
		var minute = 18;
		var seconds = 30;
		window.myTimer=setInterval(function(){
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
		},1000)
	  },
	  beforeRouteLeave (to, from, next) {
	   if(window.myTimer){
	   	clearInterval(window.myTimer)
	   }
	   next();
	}

}
</script>

<style lang="css" scoped>
</style>