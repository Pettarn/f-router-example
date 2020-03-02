import Vue from 'vue'
import App from './App.vue'
// import router from './router/vueRouter'
import router from './router'



let vm = new Vue({
  el: '#app',
  render: h => h(App),
  router
})
