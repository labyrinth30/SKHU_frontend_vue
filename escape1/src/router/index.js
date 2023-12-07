import { createRouter, createWebHistory } from 'vue-router'
import EscapeListView from '../views/EscapeListView.vue'
import EscapeEditView from '../views/EscapeEditView.vue'
import EscapeCreateView from '../views/EscapeCreateView.vue'
import CounterView from '../views/CounterView.vue'

const routes = [

  {
    path: '/',
    name: 'EscapeListView',
    component: EscapeListView,
  },
  {
    path: '/edit/:id',
    name: 'EscapeEditView',
    component: EscapeEditView,
  },
  {
    path: '/create',
    name: 'EscapeCreateView',
    component: EscapeCreateView,
  },
  {
    path: '/counter',
    name: 'CounterView',
    component: CounterView,
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
