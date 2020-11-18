import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'

import 'bootstrap/dist/css/bootstrap.css'
Vue.config.productionTip = false

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import router from './router'

Vue.use(VueRouter)
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
