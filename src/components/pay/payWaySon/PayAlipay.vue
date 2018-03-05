<template>
	<div class="pay-alipay">
		<div class="PayWechat">
			<p id="pay-style">支付宝支付</p>
			<span>￥60</span>
		</div>
		<input type="button" value="确认支付">
	</div>
</template>

<script>
export default {

  name: 'PayAlipay',

  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
.pay-alipay{
	width: 50%;
}
</style>