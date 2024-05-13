
const state = {
  cart: {
    list: [],
    total: 0,
    qty: 0,
    ivaTotal: 0
  }
}

const getters = {}

const actions = {
  addProductToCart({ commit }, product) {
    const indexOfProduct = state.cart.list.findIndex((item) => item.id === product.id)
    if (indexOfProduct === -1) {
      commit('ADD_PRODUCT_TO_CART', product)
    } else {
      commit('INCREASE_PRODUCT_QTY', { product, indexOfProduct })
    }
  },
  removeProductFromCart({ commit }, product) {
    commit('REMOVE_PRODUCT_FROM_CART', product)
  }
}

const mutations = {
  ADD_PRODUCT_TO_CART(state, product) {
    state.cart.list.push(product)
    state.cart.total += (product.qty * parseFloat(product.price))
    state.cart.qty = state.cart.list.length
    state.cart.ivaTotal = (state.cart.total * 0.16)
  },
  REMOVE_PRODUCT_FROM_CART(state, product) {
    state.cart.list = state.cart.list.filter(item => item.id !== product.id)
    state.cart.total -= (product.qty * parseFloat(product.price))
    state.cart.qty = state.cart.list.length
    state.cart.ivaTotal = (state.cart.total * 0.16)
  },
  INCREASE_PRODUCT_QTY(state, payload) {
    state.cart.list[payload.indexOfProduct] = payload.product
    let tmpTotal = 0
    state.cart.list.map((item) => {
      tmpTotal += (item.qty * parseFloat(item.price))
    })
    state.cart.total = tmpTotal
    state.cart.ivaTotal = (state.cart.total * 0.16)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}