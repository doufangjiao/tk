<template>
	<div id="index-main">
		<banner-swiper></banner-swiper>
		<ad-swiper></ad-swiper>
		<index-recommend></index-recommend>
		<index-sift></index-sift>
		<baby-list></baby-list>
		<your-like></your-like>
		<index-list></index-list>
	</div>
</template>

<script>
import BannerSwiper from './BannerSwiper.vue'
import AdSwiper from './AdSwiper.vue'
import IndexRecommend from './IndexRecommend.vue'
import IndexSift from './IndexSift.vue'
import BabyList from './BabyList.vue'
import YourLike from './YourLike.vue'
import IndexList from './IndexList.vue'

export default {

  name: 'IndexMain',

  data () {
    return {

    }
  },
  components:{
  	BannerSwiper,
  	AdSwiper,
  	IndexRecommend,
  	IndexSift,
  	BabyList,
  	YourLike,
  	IndexList
  }
}
</script>

<style lang="css" scoped>
</style>