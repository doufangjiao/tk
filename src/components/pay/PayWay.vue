<template>
	<div>
		<div id="pay-way">
			<h3>支付方式</h3>
			<ul class="list">
				<li class="wx" @click="show(1)">
					<label>
						微信支付
						<input type="radio" checked="checked" />
						<span></span>
					</label>
				</li>
				<li class="zfb" @click="show(2)">
					<label>
						支付宝
						<input type="radio" />
						<span></span>
					</label>
				</li>
			</ul>
		</div>
		<div id="pay-footer" :is="flag">
			<pay-wechat></pay-wechat>
			<pay-alipay></pay-alipay>
		</div>
	</div>
</template>

<script>
import PayWechat from './payWaySon/PayWechat.vue'
import PayAlipay from './payWaySon/PayAlipay.vue'
export default {

  name: 'PayWay',

  data () {
    return {
    	flag :"PayWechat"
    }
  },
  components:{
  	PayWechat,
  	PayAlipay
  },
  methods:{
  	show:function (flag) {
        if(flag ==1){
            this.flag ="PayWechat";
            $(".wx label input[type=radio]:checked+span").css({"background":"url(../../../static/images/pay/radioed.png) no-repeat","background-size":"contain"});
            $(".zfb label input[type=radio]+span").css({"background":"url(../../../static/images/pay/radio.png) no-repeat","background-size":"contain"});
        }else{
            this.flag = "PayAlipay";
            $(".zfb label input[type=radio]:checked+span").css({"background":"url(../../../static/images/pay/radioed.png) no-repeat","background-size":"contain"});
            $(".wx label input[type=radio]+span").css({"background":"url(../../../static/images/pay/radio.png) no-repeat","background-size":"contain"});
        }        
    }
  }
}
</script>

<style lang="css" scoped>
</style>