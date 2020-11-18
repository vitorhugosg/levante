import Vue from 'vue'
import VueRouter from 'vue-router'
import Cadastro from '../views/Cadastro.vue'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Profile from '../views/Profile.vue'


Vue.use(VueRouter)

const routes = [
  {
    path : '/',
    component: Home
  },
  {
    path: '/Cadastro',
    component: Cadastro
  },
  {
    path: '/Login',
    component: Login
  },
  {
    path: '/Profile',
    component: Profile
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
