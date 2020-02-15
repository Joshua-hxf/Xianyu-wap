import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/style/border.css'
import Highlight from '@/assets/js/highlight'
// import fastClick from 'fastclick'
// import 'babel-polyfill'

Vue.config.productionTip = false
// fastClick.attach(document.body)

Vue.use(Highlight)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
