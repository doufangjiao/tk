<template>
  	<div>
      <insuranceinfo-header></insuranceinfo-header>
      <insuranceinfo-main></insuranceinfo-main>
      <insuranceinfo-footer></insuranceinfo-footer>
      <insuranceinfo-nav></insuranceinfo-nav>
  	</div>
</template>

<script>
import '../assets/css/insuranceinfo.css'

import InsuranceinfoMain from "../components/insuranceinfo/InsuranceMain.vue"
import InsuranceinfoHeader from '../components/insuranceinfo/InsuranceHeader.vue'
import InsuranceinfoFooter from '../components/insuranceinfo/InsuranceFooter.vue'
import InsuranceinfoNav from '../components/insuranceinfo/InsuranceNav.vue'

export default {
	name:'InsuranceinfoPages',
  data () {
    return {

    }
  },
  components:{
    InsuranceinfoMain,
    InsuranceinfoHeader,
    InsuranceinfoFooter,
    InsuranceinfoNav
  },
  mounted:function() {
    //选择为谁投保
    $('.sel-who>span').click(function(){
      $(this).addClass('active').siblings().removeClass('active');
    });

    //投保年龄范围
    $('.insure-range>span').click(function(){
      $(this).addClass('active').siblings().removeClass('active');
    });

    $('.adult').click(function(){
      $('.adult-range').css('display','inline-block');
      $('.child-range').css('display','none');
      
    });
    $('.child').click(function(){
      $('.child-range').css('display','inline-block');
      $('.adult-range').css('display','none');
    });

    //投保类型
    $('.insure-type>li').click(function(){
      $(this).addClass('active').siblings().removeClass('active');
    });
    $('.type-platinum').click(function(){
      $('.type-platinum-content').css('zIndex','2').siblings().css('z-index','0');
      $('.price>span').html('120');
    });
    $('.type-base').click(function(){
      $('.type-base-content').css('zIndex','2').siblings().css('z-index','0');
      $('.price>span').html('60');
    });

    //产品详情，理赔指南，评价
    //到一定高度tab-title置顶
    $(window).scroll(function(){
      if($(this).scrollTop()>=500){
        $('.tab-title').addClass('tab-title-top');
      }else{
        $('.tab-title').removeClass('tab-title-top');
      }
    });
    $('.tab-title>li').click(function(){
      $(this).addClass('active').siblings().removeClass('active');
    });
    $('.pro-detail').click(function(){
      $('.pro-detail-content').addClass('active').siblings().removeClass('active');
      //设置tab-content的高
      $('.tab-content').height($('.pro-detail-content').height());
    });
    $('.claim-settlement').click(function(){
      $('.claim-settlement-content').addClass('active').siblings().removeClass('active');
      //设置tab-content的高
      $('.tab-content').height($('.claim-settlement-content').height());
      ;
    });
    $('.evaluate').click(function(){
      $('.evaluate-content').addClass('active').siblings().removeClass('active');
      //设置tab-content的高
      $('.tab-content').height($('.evaluate-content').height());
    });

    //评论默认显示5条
    $('.evaluate-content>li:gt(4)').css('display','none');
    let show=4;
    $('.more-discuss').click(function(){
      show+=5;
      $('.evaluate-content>li').slice(5,show).css('display','block');
      if(show>=$('.evaluate-content>li').length){
        $('.more-discuss').css('display','none');
      }
    });

    //侧边栏效果
    $('.list-nav-skip').click(function(){
      $('.insurance-cover').css('display','block');
      $('.nav-bar').delay(400).stop(true).animate({
        'right':'0',
        'opacity':'1'
      },500);
    });
    $('.insurance-cover').click(function(){
      $(this).css('display','none');
      $('.nav-bar').delay(400).stop(true).animate({
        'right':'-3.84rem',
        'opacity':'0'
      },500);
    });
    //侧边栏推荐内容
    $('.nav-bar>li').has('.notice').css('color','#F44242');

    //立即投保
    $('.insurance-now').click(function(){
      window.location.href='#/personforminfo'
    });
    //返回上一步
    $('.go-back').click(function(){
      window.history.back(-1);
    });
  }
}
</script>

<style lang="css" scoped>
</style>