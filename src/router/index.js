import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Register from '@/views/Register'
import Login from '@/views/Login'
import Search from '@/views/Search'
import GoodsDesc from '@/views/goodsDesc'
import Content from '@/views/Content'

Vue.use(Router)

export default new Router({
  mode: 'history',
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
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/goodsDesc',
      name: 'GoodsDesc',
      component: GoodsDesc
    },
    {
      path: '/content',
      name: 'Content',
      component: Content
    },
  ]
})
