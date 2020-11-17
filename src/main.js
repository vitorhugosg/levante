import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import 'bootstrap-vue/dist/bootstrap-vue.css'

import 'bootstrap/dist/css/bootstrap.css'
Vue.config.productionTip = false

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import router from './router'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

new Vue({
  vuetify,
  router,
  data: {
    currentRoute: window.location.Home
  },
  render: h => h(App)
}).$mount('#app')
