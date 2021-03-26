import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/Layout.vue'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'layout',
    component: Layout,
    activeIndex: '0',
    meta: { title: '桌游菜单' },
    children: [
      { path: '/', redirect: '/home', component: () => import('../views/Home.vue'), meta: { show: false, title: '首页' } },
      { path: '/home', component: () => import('../views/Home.vue'), meta: { show: false, title: '首页' } },
      { path: '/idiom', component: () => import('../views/idiom/index'), meta: { show: true, title: '看图猜成语' } },
      { path: '/star', component: () => import('../views/star/index'), meta: { show: true, title: '看图猜明星' } },
      { path: '/city', component: () => import('../views/city/index'), meta: { show: true, title: '看图猜城市' } }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
