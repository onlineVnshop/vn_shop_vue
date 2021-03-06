// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/reset.css'
import axios from 'axios' 
import $ from 'jquery'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-default/index.css'
Vue.prototype.$http = axios
Vue.config.productionTip = false
// Vue.use(ElementUI)
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
