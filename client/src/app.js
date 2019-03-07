import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App.vue'
import router from './router'
import './app.scss'


Vue.use(Vuetify)

new Vue({
  el: '#app',
  router: router,
  template: '<router-view></router-view>'
})
