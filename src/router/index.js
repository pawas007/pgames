import Vue from 'vue'
import VueRouter from 'vue-router'
import auth from "@/router/auth";
import pages from "@/router/pages";

Vue.use(VueRouter)

const routes = [
    ...auth,
    ...pages

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
