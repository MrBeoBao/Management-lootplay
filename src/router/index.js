import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Games from '../views/Games.vue'
import GameDetail from '../views/GameDetail.vue'
import Forum from '../views/Forum.vue'
import Software from '../views/Software.vue'
import Faq from '../views/Faq.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/games', name: 'Games', component: Games },
  { path: '/game/:id', name: 'GameDetail', component: GameDetail },
  { path: '/forum', name: 'Forum', component: Forum },
  { path: '/software', name: 'Software', component: Software },
  { path: '/faq', name: 'Faq', component: Faq },
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router