<template>
<div>
    <register-header></register-header>
    <register-main></register-main>
    <register-footer></register-footer>
</div>

</template>

<script>
import "../assets/css/register.css"
import RegisterHeader from "../components/register/RegisterHeader.vue"
import RegisterMain from "../components/register/RegisterMain.vue"
import RegisterFooter from "../components/register/RegisterFooter.vue"
export default {
  data () {
    return {

    }
  },
   components:{
      RegisterHeader,
      RegisterMain,
      RegisterFooter
    },
   mounted:function(){
        $(".reg-ag").click(function () {
            $(this).removeClass("reg-ag");
            $(this).addClass("reg-right")
        })
        $(".reg-goback").click(function () {
            history.back();
        })
   }
}
</script>

<style lang="css" scoped>
	
</style>