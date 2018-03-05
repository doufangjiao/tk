<template>
<div id="LoginMain">
      <form method="post" action="">
          <div id="login-main">
              <div class="login-phone">
                  <span>手机号</span>
                  <input type="tel" placeholder="未注册将自动创建会员" id="username" class="user-phone"
                    v-model="userName" >
                  <b class="login-error"></b>
                  <input type="button" value="获取验证码" class="login-get">
              </div>
              <div class="login-code">
                  <span>验证码</span>
                  <input type="text" placeholder="请输入短信验证码"/>
              </div>
              <div class="login-test">
                  <input type="text" placeholder="请填写验证码" class="user-test">
                  <img src="../../assets/images/register/login-image.jpg" alt="">
              </div>
          </div>
          <div id="login-button">
              <input type="button" value="登录" class="login-btn">
          </div>
      </form>
</div>
</template>

<script>
export default {
  data () {
    return {
        userName:""
    }
  },
  mounted:function(){
      $(".user-phone").blur(function () {
          //1、定义规则：
          //手机号码的规则，1开头，第二位是（3,4,5,7,8,9），一共十一位纯数字
          var regObj = /^1[345789]\d{9}$/i;
          if (regObj.test(this.value)) {
              $(".login-error").html("√");
          } else {
              $(".login-error").html("×")
          }
      })
  }
}
</script>

<style lang="css" scoped>

</style>
