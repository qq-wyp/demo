// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import store from './store'
import commonCom from './components/index'

for (var i in commonCom) {
  Vue.component(i, commonCom[i])
}

Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.Event = new Vue()

// 路由拦截
router.beforeEach((to, from, next) => {
 
  if (to.path == '/login') {
    next();
    return;
  }
  if (to.path.includes("manage")) {
    if (sessionStorage.getItem("type") == '0') {
      next()
    } else {
      next("/login")
    }
    return;
  }
  // if (to.path.slice(0, 6)=='/index') {
  //   if (sessionStorage.getItem("type") == '1') {
  //     next()
  //   } else {
  //     next("/login")
  //   }
  //   return;
  // }
  next()
})



import formatDate from './filters/formatDate' //全局过滤器
Vue.filter('formatDate', formatDate)


import './assets/css/reset.css'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
