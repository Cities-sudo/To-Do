import Vue from 'vue'
// import VueRouter from 'vue-router'
import App from './App.vue'
// import Routes from './routes'

Vue.config.productionTip = false

// Vue.use(VueRouter)
// const router = new VueRouter({
//   routes:Routes
// })

import './assets/css/main.css';

new Vue({
  render: h => h(App),
  // router: router
}).$mount('#app')
