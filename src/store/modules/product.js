import ProductsServices from '../../services/ProductsServices'

const state = {
  products: {
    data: [],
    loading: false,
    links: [],
    select: null
  }
}

const getters = {}

const actions = {
  async getProducts({ commit }, page) {
    commit('SET_PRODUCTS_LOADING', true)

    const params = {
      page: page
    }
    return await ProductsServices.getProducts(params)
      .then((response) => {
        const res = response.data
        commit('SET_PRODUCTS', res.data)
      })
      .catch((error) => {
        console.log('error', error)
      })
      .finally(() => {
        commit('SET_PRODUCTS_LOADING', false)
      })
  },

  setProductSelect({ commit }, product) {
    commit('SET_PRODUCT_SELECT', product)
  }
}

const mutations = {
  SET_PRODUCTS(state, products) {
    state.products.data = products.data
    state.products.links = products.links
  },
  SET_PRODUCTS_LOADING(state, loading) {
    state.products.loading = loading
  },
  SET_PRODUCT_SELECT(state, product) {
    state.products.select = product
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
