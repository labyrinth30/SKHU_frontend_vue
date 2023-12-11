import { createRouter, createWebHistory } from 'vue-router'
import BookListView from '../BookListView.vue'
import CounterView from '../CounterView.vue'
import BookList2View from '../BookList2View.vue'

const routes = [

  {
    path: '/book',
    name: 'BookListView',
    component: BookListView,
  },
  {
    path: '/',
    name: 'CounterView',
    component: CounterView,
  },
  {
    path: '/book2',
    name: 'BookList2View',
    component: BookList2View,
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
