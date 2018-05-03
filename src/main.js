// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'normalize.css'
import './style/style.less'
import axios from 'axios'
// 字体 font-awesome
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import solid from '@fortawesome/fontawesome-free-solid'

const host =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'prod api host' // 根据 process.env.NODE_ENV 的值判断当前是什么环境
const instance = axios.create({
  baseURL: host
})
Vue.prototype.$http = instance

fontawesome.library.add(solid) // Use any icon from the Solid style
Vue.component('font-awesome-icon', FontAwesomeIcon) // Use the icon component anywhere in the app

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
