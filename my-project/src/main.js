/* eslint-disable */
import Vue from 'vue'
import App from './App.vue'
// import router from './router'
import store from './store'
//
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
//bootstrap
import '@fortawesome/fontawesome-free/js/all.js'
import '@fortawesome/fontawesome-free/css/all.css'
//forawesome for <i></i>
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, fab)
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
Vue.component('font-awesome-icon', FontAwesomeIcon)
//forawesome for <font-awesome-icon icon="" />

Vue.config.productionTip = false

Vue.use(IconsPlugin)

new Vue({
  // router,
  store,
  render: h => h(App)
}).$mount('#app')
