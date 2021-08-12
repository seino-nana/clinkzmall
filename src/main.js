import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

import Router from 'vue-router'

// 添加事件总线对象
Vue.prototype.$bus = new Vue()

// 图片懒加载的插件
Vue.use(VueLazyLoad, {
  loading: require('./assets/img/common/loading.png')
})

//解决移动端300ms的延迟
FastClick.attach(document.body)

const originalPush = Router.prototype.push
Router.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
