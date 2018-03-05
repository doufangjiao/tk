<template>
	<div id="health-banner">
		<h3>健康特权</h3>
		<div class="swiper-health">
	        <div class="swiper-wrapper">
	            <div class="swiper-slide swiper-slide-center none-effect">
	            	<a href="javascript:;">
	            		<div class="item item1">
	            			<img src="../../assets/images/health/health_ico1.png" />
	            			<h4>体验券</h4>
	            			<p>享受体检服务的客户可凭体检号在指定的体检机构享受指定的健康体检项目。</p>
	            		</div>
		            </a>
		        </div>
		        <div class="swiper-slide">
	            	<a href="javascript:;">
	            		<div class="item item2">
	            			<img src="../../assets/images/health/health_ico2.png" />
	            			<h4>门诊挂号</h4>
	            			<p>当泰康客户提供免费的三级甲等医院专家门诊预约服务。</p>
	            		</div>
		            </a>
		        </div>
		        <div class="swiper-slide">
	            	<a href="javascript:;">
	            		<div class="item item3">
	            			<img src="../../assets/images/health/health_ico3.png" />
	            			<h4>电话医生</h4>
	            			<p>为您提供电话私人医生，解答您在健康保养、疾病预防、个人健康管理等方面的考虑，给您提供专业化的医学解答。</p>
	            		</div>
		            </a>
		        </div>
		        <div class="swiper-slide">
	            	<a href="javascript:;">
	            		<div class="item item4">
	            			<img src="../../assets/images/health/health_ico4.png" />
	            			<h4>齿科券</h4>
	            			<p>为泰康客户提供免费的齿科保健服务，含口腔检查、超声波洁齿、口腔全景片等。</p>
	            		</div>
		            </a>
		        </div>
		        <div class="swiper-slide">
	            	<a href="javascript:;">
	            		<div class="item item5">
	            			<img src="../../assets/images/health/health_ico5.png" />
	            			<h4>重疾绿通</h4>
	            			<p>当客户罹患42种重大疾病时，泰康将安排指定的国内知名三甲医院的专家为客户提供全面详尽的诊断和治疗意见。</p>
	            		</div>
		            </a>
		        </div>
	        </div>	        
	    </div>
	    <div class="swiper-pagination"></div>
	</div>
</template>

<script>
export default {

  name: 'HealthBanner',

  data () {
    return {

    }
  },
  mounted:function(){
  	var swiper = new Swiper('.swiper-health',{
		// autoplay:3000,
		speed:1000,
		// autoplayDisableOnInteraction : false,
		// loop:true,
		centeredSlides : true,
		slidesPerView:2,
        pagination : '.swiper-pagination',
		paginationClickable:true,
		// prevButton:'.swiper-button-prev',
        // nextButton:'.swiper-button-next',
		onInit:function(swiper){
			swiper.slides[2].className="swiper-slide swiper-slide-active";//第一次打开不要动画
			},
        breakpoints: { 
                668: {
                    slidesPerView: 1,
                 }
            }
		});
  }
}
</script>

<style lang="css" scoped>
</style>