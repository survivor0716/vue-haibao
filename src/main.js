// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import Routes from './router.js'

import VueResource from 'vue-resource'

import 'element-ui/lib/theme-default/index.css'
import ElementUI from 'element-ui'

import App from './App'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(ElementUI)

Vue.http.options.emulateJSON = true

// Vue.http.options.emulateHTTP = true

const router = new VueRouter({
  mode: 'history',
  routes: Routes
})

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: { App }
})
