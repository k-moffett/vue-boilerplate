import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Landing from './pages/Landing.vue'
import Home from './pages/Home.vue';

const routes = [
  { 
    path: '/', 
    name: 'Landing',
    component: Landing 
  },
  { 
    path: '/home', 
    name: 'Home',
    component: Home 
  },
]

export default new VueRouter({
  mode: 'history',
  routes
});