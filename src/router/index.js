import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'
import Messages from '@/views/Messages'
import Orders from '@/views/Orders'
import UserCenter from '@/views/UserCenter'
import EditUserInfo from '@/views/EditUserInfo'
import Details from '@/views/Details'
import Retail from '@/views/Retail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },{
      path: '/index',
      name: 'Index',
      component: Index
    },{
      path: '/messages',
      name: 'Messages',
      component: Messages
    },{
      path: '/orders',
      name: 'Orders',
      component: Orders
    },{
      path: '/userCenter',
      name: 'UserCenter',
      component: UserCenter
    },{
      path: '/editUserInfo',
      name: 'EditUserInfo',
      component: EditUserInfo
    },{
      path: '/details',
      name: 'Details',
      component: Details
    },{
      path: '/retail',
      name: 'Retail',
      component: Retail
    }
  ]
})
