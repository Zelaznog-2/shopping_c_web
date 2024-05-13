import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetailProductsView from '../views/DetailProduct/Index.vue'
import CartView from '../views/CartProduct/Index.vue'
import LoginView from '../views/Login/Index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/auth',
      name: 'login',
      component: LoginView
    },
    {
      path: '/details/:sku',
      name: 'detail-product',
      component: DetailProductsView
    },
    {
      path: '/cart',
      name: 'cart-product',
      component: CartView
    }
  ]
})
//
// router.beforeEach((to, from, next) => {
//   console.log('beforeEach', to.path, !router.hasRoute(to.path))
//
//   if (!router.hasRoute(to.path)) {
//     console.log('entre')
//
//     next({ path: '/' })
//   } else {
//     next()
//   }
// })

export default router
