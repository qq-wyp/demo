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
      component: index,
      children: [
        {
          path: 'manage',
          name: '管理员管理',
          component:manage
        },
        {
          path: 'banner',
          name: 'banner管理',
          component: banner
        },
        {
          path: 'teacher',
          name: '家教管理',
          component: teacher
        },
        {
          path: 'water',
          name: '水站管理',
          component: water
        },
        {
          path: 'repair',
          name: '维修管理',
          component: repair
        },
        {
          path: 'home',
          name: '家政管理',
          component: home
        },
        {
          path: 'changePass',
          name: '修改密码',
          component: changePass
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      alias:'/',
      component:login
    },
    {
      path: '*',
      redirect:'/index'
   }
  ]
})
