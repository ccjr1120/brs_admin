import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: '首页',
    redirect:'/dashboard',
    component: Layout,
    children:[
      {
        path:'dashboard',
        name:'数据图',
        component:()=>import('@/views/dashboard/index')
      },
      {
        path:'book',
        name:'书籍列表',
        component:()=>import('@/views/book/list')
      },
      {
        path:'book/review',
        name:'待审核书籍',
        component:()=>import('@/views/book/review')
      },
      {
        path:'user',
        name: '用户列表',
        component:()=>import('@/views/user/list.vue')
      },
      {
        path:'user/recommend',
        name:'推荐列表',
        component:()=>import('@/views/user/recommend/list')
      },
      {
        path:'user/recommend/review',
        name:'待审核列表',
        component:()=>import('@/views/user/recommend/list')
      }
    ]
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
