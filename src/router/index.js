import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home'
import xyvue from '../views/VNO/xyvue'
import vno from '../views/VNO/vno'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/Vue',
    name: 'Vue',
    component: xyvue
  }, {
    path: '/Node',
    name: 'Node',
    component: vno
  }, {
    path: '/Other',
    name: 'Other',
    component: xyvue
  }, {
    path: '/Timeline',
    name: 'Timeline',
    component: Home
  }
]

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router
