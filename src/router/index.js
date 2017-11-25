import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Chamber from '@/components/Chamber'
import Admin from '@/components/Admin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/chamber',
      name: 'Chamber',
      component: Chamber
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    }
  ]
})
