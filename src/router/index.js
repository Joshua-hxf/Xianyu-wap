import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home/Home')
  }, {
    path: '/vue',
    name: 'vue',
    component: () => import('../views/Topic/Topic')
  }, {
    path: '/node',
    name: 'node',
    component: () => import('../views/Topic/Topic')
  }, {
    path: '/other',
    name: 'other',
    component: () => import('../views/Topic/Topic')
  }, {
    name: 'note',
    path: '/:topic/:id',
    component: () => import('../views/Note/Note')
  }, {
    path: '/timeline',
    name: 'timeline',
    component: () => import('../views/Timeline/Timeline')
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
