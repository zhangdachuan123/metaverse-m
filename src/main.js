import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import '@/assets/css/repeate.css'//全局重复样式
import './assets/font/iconfont.css'//字体图标库
//导入自动根据屏幕大小计算根元素的字体大小的JS
import './config/rem.js'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
