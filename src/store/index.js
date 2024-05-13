import { createStore } from 'vuex'
import products from './modules/product'
import cart from './modules/cart'
import auth from './modules/auth'
import user from './modules/user'

export default createStore({
  modules: {
    products,
    cart,
    auth,
    user
  },
  strict: false
})
