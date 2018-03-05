<template>
	<div>
		<health-header></health-header>
    <health-banner></health-banner>
    <health-classroom></health-classroom>
    <health-bodyguard></health-bodyguard>
    <health-encyclopedia></health-encyclopedia>
    <common-footer class='health-footer'></common-footer>
	</div>
</template>

<script>
import '../assets/css/health.css'

import HealthHeader from '../components/health/HealthHeader.vue'
import HealthBanner from '../components/health/HealthBanner.vue'
import HealthClassroom from '../components/health/HealthClassroom.vue'
import HealthBodyguard from '../components/health/HealthBodyguard.vue'
import HealthEncyclopedia from '../components/health/HealthEncyclopedia.vue'
import CommonFooter from '../components/common/CommonFooter.vue'

export default {

  name: 'HealthPages',

  data () {
    return {

    }
  },
  components:{
  	HealthHeader,
    HealthBanner,
    HealthClassroom,
    HealthBodyguard,
    HealthEncyclopedia,
    CommonFooter
  }
}
</script>

<style lang="css" scoped>
</style>