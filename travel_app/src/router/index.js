import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/city',
      name: 'City',
      component: City
    },{
      path: '/detail/0001',
      name: 'Detail',
      component: Detail
    }
  ]
})
//当用户访问根路径时 给用户返回的组件是helloworld这个组件
//
