import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    redirect: '/welcome',
    children: [
      { path: '/welcome', component: () => import(/* webpackChunkName: "welcome" */ "../components/Welcome") },
      { path: '/userslist', component: () => import(/* webpackChunkName: "userlist" */ "../components/UsersList") }

    ]
  },

]

const router = new VueRouter({
  routes
})

export default router
