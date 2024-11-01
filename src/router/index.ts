import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import BlogView from '@/views/BlogView.vue'
import AboutView from '@/views/AboutView.vue'
import ContactView from '@/views/ContactView.vue'
import PrivacyView from '@/views/PrivacyView.vue'
import BlogPostView from '@/views/BlogPostView.vue'
import CategoryView from '@/views/CategoryView.vue'
import AuthorView from '@/views/AuthorView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/blog',
      name: 'Blog',
      component: BlogView,
    },
    {
      path: '/blog/post',
      name: 'Blog Post',
      component: BlogPostView,
    },
    {
      path: '/about',
      name: 'About us',
      component: AboutView,
    },
    {
      path: '/contact',
      name: 'Contact us',
      component: ContactView,
    },
    {
      path: '/privacy',
      name: 'Privacy Policy',
      component: PrivacyView,
    },
    {
      path: '/category/business',
      name: 'Category Business',
      component: CategoryView,
    },
    {
      path: '/author',
      name: 'Author',
      component: AuthorView,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: ContactView,
    },
  ],
})

export default router
