<template>
	<div>
		<insurance-header></insurance-header>
		<insurance-main></insurance-main>
		<common-footer class="insurance-footer"></common-footer>
	</div>
</template>

<script>

import '../assets/css/insurance.css'

import InsuranceHeader from '../components/insurance/InsuranceHeader.vue'
import InsuranceMain from '../components/insurance/InsuranceMain/InsuranceMain.vue'
import CommonFooter from '../components/common/CommonFooter.vue'


export default {

  name: 'InsurancePage',

  data () {
    return {

    }
  },
  components:{
  	InsuranceHeader,
  	InsuranceMain,
  	CommonFooter
  },
  mounted:function(){
  		//        分类切换
	$(".select p").each(function(){
		$(this).click(function(){
			$(this).addClass("active").siblings().removeClass("active");
			let show = $(this).parent().parent().next().find("#insurance-main").children().eq($(this).index())
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
	
	$('.item,.item2').click(function(){
		location.href="#/insuranceinfo"
	});
	
  }
}
</script>

<style lang="css" scoped>

</style>