import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/Login'
import Index from '@/components/index/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/index',
        component: Index,
        // children: [
        //     path: ''
        // ]
    }
  ]
})
