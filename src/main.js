import Vue from 'vue'
import App from './App.vue'

// Vuex
import Vuex from 'vuex'
import store from './vuex/store'
Vue.use(Vuex)

// Vue router
import VueRouter from 'vue-router'
import router from './router/index'
Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')
