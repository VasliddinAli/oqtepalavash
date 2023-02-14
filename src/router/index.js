import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import FiliallarView from '../views/FiliallarView.vue'
import AboutView from '../views/AboutView.vue'
import BoglanishView from '../views/BoglanishView.vue'
import CartMenu from '../views/CartMenu.vue'
import ProfilView from '../views/ProfilView.vue'
import BuyurtmalarView from '../views/BuyurtmalarView.vue'
import AddressView from '../views/AddressView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainView
    },
    {
      path: '/branches',
      name: 'branches',
      component: FiliallarView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/contact',
      name: 'contact',
      component: BoglanishView
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartMenu
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfilView
    },
    {
      path: '/orders',
      name: 'orders',
      component: BuyurtmalarView
    },
    {
      path: '/address',
      name: 'address',
      component: AddressView
    },
  ]
})

export default router
