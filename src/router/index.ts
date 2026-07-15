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
  {
  path: '/xyz',
  beforeEnter: () => {
    window.location.href = 'https://drive.google.com/drive/folders/11VYMDlSXkkD7rI9yJN7ZSAMuE_Lz7pD1';
  },
},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
