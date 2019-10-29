import Vue from 'vue'
import Router from 'vue-router'

const login=()=>import('../pages/login.vue')
const index = () => import('../pages/index.vue')

const manage=()=>import('../pages/manage.vue')
const banner = () => import('../pages/banner.vue')
const teacher = () => import('../pages/teacher.vue')
const water = () => import('../pages/water.vue')
const repair = () => import('../pages/repair.vue')
const home = () => import('../pages/home.vue')
const changePass = () => import('../pages/changePass.vue')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: '欢迎',
      // meta: { requiresAuth: true, }, // 需要登录
      component: index,
      
      children: [
        {
          path: 'manage',
          name: '管理员管理',
          component: manage,
          // meta: { requiresAuth: true, } // 需要登录
        },
        {
          path: 'banner',
          name: 'banner管理',
          component: banner,
          // meta: { requiresAuth: true,  } // 需要登录
        },
        {
          path: 'teacher',
          name: '家教管理',
          component: teacher,
          // meta: { requiresAuth: true, } // 需要登录
        },
        {
          path: 'water',
          name: '水站管理',
          component: water,
          // meta: { requiresAuth: true, } // 需要登录
        },
        {
          path: 'repair',
          name: '维修管理',
          component: repair,
          // meta: { requiresAuth: true, } // 需要登录
        },
        {
          path: 'home',
          name: '家政管理',
          component: home,
          // meta: { requiresAuth: true, } // 需要登录
        },
        {
          path: 'changePass',
          name: '修改密码',
          component: changePass,
          // meta: { requiresAuth: true, } // 需要登录
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      alias:'/',//别名
      component:login
    },
    {
      path: '*',
      redirect: '/index',
      // meta: { requiresAuth: true, } // 需要登录
   }
  ]
})
