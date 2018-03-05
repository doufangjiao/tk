<template>
	<div class="pay-wechat">
		<div class="PayWechat">
			<p id="pay-style">微信支付</p>
			<span>￥60</span>
		</div>
		<input type="button" value="确认支付">
	</div>
</template>

<script>
export default {

  name: 'PayWechat',

  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
.pay-wechat{
	width: 50%;
}
</style>