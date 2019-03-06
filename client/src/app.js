import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './app.scss'

new Vue({
  el: '#app',
  router: router,
  template: '<router-view></router-view>'
})
