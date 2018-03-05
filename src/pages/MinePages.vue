<template>
<div>
    <mine-header></mine-header>
    <mine-main></mine-main>
    <mine-footer></mine-footer>
    <common-footer class='mine-footer'></common-footer>
</div>
</template>

<script>
import "../assets/css/mine.css"
import MineHeader from "../components/mine/MineHeader.vue"
import MineMain from "../components/mine/MineMain.vue"
import MineFooter from "../components/mine/MineFooter.vue"
import CommonFooter from "../components/common/CommonFooter.vue"
export default {
  data () {
    return {

    }
  },
  components:{
      MineHeader,
      MineMain,
      MineFooter,
      CommonFooter
  }
}
</script>

<style lang="css" scoped>

</style>
