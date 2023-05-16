import client from '@/pocketbase';
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import SignInView from '../views/SignInView.vue'
import SignUpView from '../views/SignUpView.vue'
import RoomView from '../views/RoomView.vue'
import ReviewsView from '../views/ReviewsView.vue'
import AdminView from '../views/AdminView.vue'
import AdminAllReservationsView from '../views/AdminAllReservationsView.vue'
import { useLocalStorage } from '@vueuse/core'
import { useUserStore } from '@/stores/user';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
        meta: { requiresAuth: true },
      created() {
        const position = useLocalStorage('RoomieHomePosition', 0);
        window.scrollTo(0, position);
      },
      component: Home,
      beforeRouteLeave(to, from, next) {
        const position = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        useLocalStorage('RoomieHomePosition', position);
        next();
      }
    },
    {
      path: '/signup',
      name: 'Sign Up',
      component: SignUpView,
    },
    {
      path: '/signin',
      name: 'Sign In',
      component: SignInView,
    },
    {
      path: '/rooms',
      name: 'Rooms',
      component: Home,
    },
    {
      path: '/room/:id',
      name: 'Room',
      component: RoomView,
    },
    {
      path: '/admin',
      name: 'Admin',
      component: AdminView,
      meta: { requiresAuth: true,
              requiresAdmin: true },
    },
    {
      path: '/admin/reservations',
      name: 'Admin Reservations',
      component: AdminAllReservationsView,
      meta: { requiresAuth: true,
              requiresAdmin: true },
    },
    {
      path: '/reviews/:id',
      name: 'Reviews',
      component: ReviewsView,
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
  const userStore = useUserStore();
  // Init the store within the beforeEach function as per the documentation:
  // https://pinia.vuejs.org/core-concepts/outside-component-usage.html#single-page-applications
  if (to.meta.requiresAuth && !client?.authStore.token) {
    return {
      path: "/signin"
    }
  }
  if (to.meta.requiresAdmin && userStore.type !== "administrators") {
    console.log("Not an admin");
    console.log(userStore.type);
    return {
      path: "/"
    }
  }
  //check if the path is /
  if (to.path === '/') {
    //check if the user is admin
    if (userStore.type === "administrators") {
      //redirect to admin page
      return {
        path: "/admin"
      }
    }
  }
  document.title = `${to.name} | Room-e`
})

export default router