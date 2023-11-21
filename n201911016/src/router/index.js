import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Exam1View from '../views/Exam1View.vue'
import Exam2View from '../views/Exam2View.vue'
import Exam3View from '../views/Exam3View.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/Exam1',
    name: 'Exam1',
    component: Exam1View
  },
  {
    path: '/Exam2',
    name: 'Exam2',
    component: Exam2View
  },

  {
    path: '/Exam3',
    name: 'Exam3',
    component: Exam3View
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

