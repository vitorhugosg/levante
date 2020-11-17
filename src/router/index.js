import Vue from 'vue'
import VueRouter from 'vue-router'
import Cadastro from '../views/Cadastro.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Cadastro',
    component: Cadastro
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
