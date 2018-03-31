import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Register from '@/views/Register'
import Login from '@/views/Login'
import Search from '@/views/Search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/search/:cat_id',
      name: 'Search',
      component: Search
    },
  ]
})
