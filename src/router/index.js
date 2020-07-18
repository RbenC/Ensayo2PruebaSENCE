import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '*',
    name: '404',
    component: () => import(/* webpackChunkName: "404" */ '../views/404.vue')
  },
  {
    path: '/misfavoritos',
    name: 'MisFavoritos',
    component: () => import(/* webpackChunkName: "misfavoritos" */ '../views/MisFavoritos.vue'),    
  },
  {
    path: '/miscomentarios',
    name: 'MisComentarios',
    component: () => import(/* webpackChunkName: "miscomentarios" */ '../views/MisComentarios.vue'),
  },
  {
    path: '/administracion',
    name: 'Administracion',
    component: () => import(/* webpackChunkName: "administracion" */ '../views/Administracion.vue'),
  },
  {
    path: '/opinion/:id',
    name: 'Opinion',
    component: () => import(/* webpackChunkName: "opinion" */ '../views/Opinion.vue'),
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
