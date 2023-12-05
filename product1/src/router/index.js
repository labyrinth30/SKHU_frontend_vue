import { createRouter, createWebHistory } from 'vue-router'
import ProductListView from '../views/ProductListView.vue'
import CounterView from '../views/CounterView.vue'
import ProductEditView from '../views/ProductEditView.vue'
import ProductCreateView from '../views/ProductCreateView.vue'

const routes = [
  {
    path: '/',
    name: 'ProductListView',
    component: ProductListView
  },
  {
    path: '/create',
    name: 'ProductCreateView',
    component: ProductCreateView
  },

  {
    path: '/edit/:id',
    name: 'ProductEditView',
    component: ProductEditView
  },
  {
    path: '/counter',
    name: 'Counter',
    component: CounterView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

