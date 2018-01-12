import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

import Home from '@/views/home/home'
import Loan from '@/views/loan/loan'

Vue.use(Router)

/**
 * 检测设备类型
 */
let ua = window.navigator.userAgent
if (/iphone/gi.test(ua)) {
  console.log('iphone')
  store.commit('common_deviceType_save', 'iphone')
} else if (/android/gi.test(ua)) {
  console.log('android')
  store.commit('common_deviceType_save', 'android')
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/loan',
    name: 'loan',
    component: Loan
  }
]

export default new Router({
  routes
})
