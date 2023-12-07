import { createRouter, createWebHistory } from 'vue-router'
import ProductListView from '../views/ProductListView.vue'
import ProductEditView from '../views/ProductEditView.vue'
import ProductCreateView from '../views/ProductCreateView.vue'
import ProductListView2 from '../views/ProductListView2.vue'
import CounterView from '../views/CounterView.vue'
const routes = [
  {
    path: '/',
    name: 'ProductListView',
    component: ProductListView
  },
  {
    path: '/edit/:id',
    name: 'ProductEditView',
    component: ProductEditView
  },
  {
    path: '/create',
    name: 'ProductCreateView',
    component: ProductCreateView
  },
  {
    path: '/list2',
    name: 'ProductListView2',
    component: ProductListView2
  },
  {
    path: '/counter',
    name: 'CounterView',
    component: CounterView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

