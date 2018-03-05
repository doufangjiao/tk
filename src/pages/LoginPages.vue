<template>
    <div>
      <login-header></login-header>
      <login-main></login-main>
      <login-footer></login-footer>
    </div>
</template>

<script>
import "../assets/css/login.css"
// import "../assets/javascript/cookieTools.js"
import LoginHeader from "../components/login/LoginHeader.vue"
import LoginMain from "../components/login/LoginMain.vue"
import LoginFooter from "../components/login/LoginFooter.vue"
export default {
  data () {
    return {

    }
  },
  components:{
    LoginHeader,
    LoginMain,
    LoginFooter
  }
}
</script>

<style lang="css" scoped>

</style>
