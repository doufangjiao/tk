<template>
    <div>
        <div id="mine-header">
                <span>个人中心</span>
                <img src="../../assets/images/mine/telsupport_ico.png" alt="">
            </div>
            <!-- mine -->
            <div id="mine-main">
                <img src="../../assets/images/mine/person_photo.png" alt="">
                <div class="mine-go" id="mine-goes">
                  <router-link to="/login">登录&nbsp;/&nbsp;注册</router-link>
                </div>
            </div>
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
#mine-goes>a{
  color:#fff;
  font-size:0.25rem;
  line-height:0.5rem;
}
</style>
