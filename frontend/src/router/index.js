import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/dashboard/Dashboard.vue';
import SignUp from '../views/SignUp.vue';
import LogIn from '../views/LogIn.vue';

import store from '../store'



const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/sign-up",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/log-in",
    name: "LogIn",
    component: LogIn,
  },
  {
    path:'/dashboard',
    name:'Dashboard',
    component: Dashboard,
    meta : {
      requireLogin: true
    }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, form, next) => {
    if(to.matched.some(record => record.meta.requireLogin) && !store.state.isAuthenticated) {
      next('/log-in');
    } else {
      next()
    }
})

export default router
