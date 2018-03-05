<template>
	<div>
		<pay-header></pay-header>
		<pay-indent></pay-indent>
		<pay-way></pay-way>
	</div>
</template>

<script>
import '../assets/css/pay.css'

import PayHeader from "../components/pay/PayHeader.vue"
import PayIndent from "../components/pay/PayIndent.vue"
import PayWay from "../components/pay/PayWay.vue"

export default {

  name: 'PayPages',

  data () {
    return {

    }
  },
  components:{
  	PayHeader,
  	PayIndent,
  	PayWay
  }
}
</script>

<style lang="css" scoped>
</style>