import client from '@/pocketbase';
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import SignInView from '../views/SignInView.vue'
import SignUpView from '../views/SignUpView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
        meta: { requiresAuth: true },
      component: Home,
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUpView,
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignInView,
    },
    // {
    //   path: '/feed',
    //   name: 'feed',
    //   meta: { requiresAuth: true },
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/FeedView.vue')
    // }
    {
      path: '/:pathMatch(.*)*',
      name: 'notfound',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../components/NotFound.vue')
    }
  ]
})

router.beforeEach((to) => {
  // Init the store within the beforeEach function as per the documentation:
  // https://pinia.vuejs.org/core-concepts/outside-component-usage.html#single-page-applications
  if (to.meta.requiresAuth && !client?.authStore.token) {
    return {
      path: "/signin"
    }
  }
})

export default router