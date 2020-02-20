import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home'
import vno from '../views/VNO/vno'
import timeline from '../views/timeline/timeline'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/Vue',
    name: 'Vue',
    component: vno
  }, {
    path: '/Node',
    name: 'Node',
    component: vno
  }, {
    path: '/Other',
    name: 'Other',
    component: vno
  }, {
    path: '/Timeline',
    name: 'Timeline',
    component: timeline
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
