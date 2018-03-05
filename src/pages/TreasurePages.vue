<template>
	<div>
		<treasure-header></treasure-header>
		<treasure-newad></treasure-newad>
		<treasure-invest></treasure-invest>
		<treasure-user></treasure-user>
		<common-footer class='treasure-footer'></common-footer>
	</div>
</template>

<script>
import "../assets/css/treasure.css"

import TreasureHeader from "../components/treasure/TreasureHeader.vue"
import TreasureNewad from "../components/treasure/TreasureNewad.vue"
import TreasureInvest from "../components/treasure/TreasureInvest.vue"
import TreasureUser from "../components/treasure/TreasureUser.vue"
import CommonFooter from "../components/common/CommonFooter.vue"

export default {

  name: 'TreasurePages',

  data () {
    return {

    }
  },
  components:{
  	TreasureHeader,
  	TreasureNewad,
  	TreasureInvest,
  	TreasureUser,
  	CommonFooter
  }
}
</script>

<style lang="css" scoped>
</style>