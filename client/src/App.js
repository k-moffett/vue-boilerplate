import Vue from 'vue'
import Vuex from 'vuex'
import store from './store'
import router from './router'
import './scss/App.scss'

Vue.use(Vuex)

new Vue({
  el: '#app',
  store,
  router: router,
  template: '<router-view></router-view>'
})
