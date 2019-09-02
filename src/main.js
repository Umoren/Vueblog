import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'

Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
})

Vue.directive('rainbow', {
  bind (el, binding, vnode) {
    el.style.color = '#' + Math.random().toString().slice(2, 8)
  }
})

Vue.directive('theme', {
  bind (el, binding, vnode) {
    if (binding.value === 'wide') {
      el.style.maxWidth = '900px'
    } else if (binding.value === 'narrow') {
      el.style.maxWidth = '720px'
    }
    if (binding.arg === 'column') {
      el.style.background = '#ddd'
      el.style.padding = '20px'
    }
  }
})
// Filters
Vue.filter('truncated', function (value) {
  return value.slice(0, 100) + '...'
})
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
