import Vue from 'vue'
import Router from 'vue-router'

import '../assets/css/ba.css'
import '../assets/css/common.css'
import '../../static/js/swiper.min.js'
import '../assets/css/swiper.min.css'
import '../assets/js/jquery-1.8.3.js'
import '../assets/js/jquery-1.8.3.min.js'
import '../assets/css/swiper-3.4.2.min.css'
import '../../static/js/swiper-3.4.2.min.js'
//窦方娇
import health from '../pages/HealthPages.vue'
import treasure from '../pages/TreasurePages.vue'
import pay from '../pages/PayPages.vue'
//徐倩雯
import login from '../pages/LoginPages.vue'
import register from '../pages/RegisterPages.vue'
import mine from '../pages/MinePages.vue'
//陈彤
import Insuranceinfo from '../pages/InsuranceinfoPages.vue'
import Personforminfo from '../pages/PersonforminfoPages.vue'
//赵聪
import index from '../pages/IndexPage.vue'
import insurance from '../pages/InsurancePage.vue'
Vue.use(Router)

export default new Router({
  routes: [
    //窦方娇
    {path: '/health',component: health},
    {path: '/treasure',component: treasure},
    {path: '/pay',component: pay},
    //徐倩雯
    {path: '/login',component: login},
    {path: '/register',component: register},
    {path: '/mine',component: mine},
    //陈彤
    {
      path: '/insuranceinfo',
      name:'insuranceinfo',
      component: Insuranceinfo
    },
     {
      path: '/personforminfo',
      name:'personforminfo',
      component: Personforminfo
    },
    //赵聪
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/insurance',
      name: 'insurance',
      component: insurance
    }
  ]
})
