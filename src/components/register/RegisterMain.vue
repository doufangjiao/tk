<template>
	<div>
	    <form method="post" action="">
           <div id="reg-main">
                <div class="reg-phone">
                    <input type="text" placeholder="你的手机号码" class="user-phone">
                    <b class="reg-error"></b>
                </div>
                <div class="reg-code">
                    <input type="text" placeholder="请填写动态码">
                    <span>获取动态码</span>
                </div>
                <div class="reg-test">
                    <input type="text" placeholder="请填写验证码" class="user-test">
                    <img src="../../assets/images/register/image.jpg" alt="">
                </div>
           </div>
           <div id="reg-button">
                <input type="submit" value="注册" class="reg-button">
           </div>
        </form>
	</div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
	
</style>