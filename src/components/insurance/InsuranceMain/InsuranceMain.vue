<template>
	<div>
		<div id="insurance-main">
			<insurance-main-one></insurance-main-one>
			<insurance-main-two></insurance-main-two>
			<div class="service"><img src="../../../assets/images/zcImg/telsupport_ico2.png"/></div>
		</div>
		<p style="height: 1rem;"> </p>
	</div>
</template>

<script>

import InsuranceMainOne from './InsuranceMainOne.vue'
import InsuranceMainTwo from './InsuranceMainTwo.vue'

export default {

  name: 'InsuranceMain',

  data () {
    return {

    }
  },
  components:{
  	InsuranceMainOne,
  	InsuranceMainTwo
  }
}
</script>

<style lang="css" scoped>
</style>