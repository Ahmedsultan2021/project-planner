import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddView from '../views/AddView.vue'
import editView from '../views/editView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/add',
    name: 'Addproject',
    component: AddView
  },
  {
    path: '/edit/:id',
    name: 'EditProject',
    component: editView,
    props: true
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
