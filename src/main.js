import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import './assets/styles/theme.scss'
import './plugins/element.js'
import Utils from './assets/js/Utils'
Vue.prototype.$Utils = Utils
// Vue.prototype.$electron = require('electron')
// Vue.prototype.$electron = electron

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
