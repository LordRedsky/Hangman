import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Wellcome from '../views/WellcomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/play',
      name: 'home',
      component: HomeView
    },
    {
      path: '/',
      name: 'wellcome',
      component: Wellcome
    }
  ]
})

//! NAVIGATION GUARD
// router.beforeEach((to, from, next) => {
//   const isLogin = localStorage.getItem("username")
//   if (isLogin && to.name === 'wellcome') {
//     next({name: 'home'})

//   } else if (!isLogin && to.name === 'home') {
//     next({name: 'wellcome'})
//   }

//   next()
// })

export default router
