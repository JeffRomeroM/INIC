import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Buses from '../views/Buses.vue'
import Taxis from '../views/Taxis.vue'
import Mandados from '../views/Mandados.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/buses', component: Buses },
  { path: '/taxis', component: Taxis },
  { path: '/mandados', component: Mandados },
 
]

export default createRouter({
  history: createWebHistory(),
  routes
})
