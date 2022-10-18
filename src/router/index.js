import Vue from 'vue'
import VueRouter from 'vue-router'
import auth from "@/router/auth";

Vue.use(VueRouter)

const routes = [
    ...auth,

  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home/HomeView')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
