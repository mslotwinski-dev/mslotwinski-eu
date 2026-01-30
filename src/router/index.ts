import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import CV from '../views/CV.vue'
import Projects from '../views/Projects.vue'
import Contact from '../views/Contact.vue'
import BlogArticle from '../views/BlogArticle.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/cv',
    component: CV,
  },
  {
    path: '/projects',
    component: Projects,
  },
  {
    path: '/contact',
    components: Contact,
  },
  {
    path: '/blog/:id',
    component: BlogArticle,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
