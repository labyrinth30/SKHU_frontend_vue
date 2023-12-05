import { createRouter, createWebHistory } from 'vue-router'
import BookListView from '../views/BookListView.vue'
import CounterView from '../views/CounterView.vue'
import BookEditView from '../views/BookEditView.vue'
import BookCreateView from '../views/BookCreateView.vue'
import Book2ListView from '../views/Book2ListView.vue'

const routes = [
  {
    path: '/',
    name: 'BookListView',
    component: BookListView
  },
  {
    path: '/create',
    name: 'BookCreateView',
    component: BookCreateView
  },

  {
    path: '/edit/:id',
    name: 'BookEditView',
    component: BookEditView
  },
  {
    path: '/counter',
    name: 'Counter',
    component: CounterView
  },
  {
    path: '/list',
    name: 'Book2ListView',
    component: Book2ListView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

