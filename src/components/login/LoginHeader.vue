<template>
  <div id="LoginHeader">
      <div id="login-header">
              <div class="login-header-min">
                  <img src="../../assets/images/mine/back_h.png" alt="" class="login-goback">
                  <span>短信快捷登录</span>
                  <b>会员登录</b>
              </div>
          </div>
          <p class="login-tou">投保后即可获得积分奖励哦，千种奖品等你兑换哦~</p>
  </div>

</template>

<script>
export default {
  data () {
    return {

    }
  },
  mounted:function(){
    $(".login-goback").click(function () {
        history.back();
    })
  }
}
</script>

<style lang="css" scoped>

</style>
