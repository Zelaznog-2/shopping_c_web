import AuthServices from '../../services/AuthServices'

const state = {
  loading: false,
  isAuth: false,
  errors: {}
}

const getters = {}

const actions = {
  async login({ commit }, params) {
    commit('SET_LOADING', true)
    return await AuthServices.login(params)
      .then((response) => {
        const res = response.data
        commit('SET_AUTH', res.data);
        return true
      })
      .catch((err) => {
        if (err?.response?.status === 422) {
          const data = err.response.data
          commit('SET_ERRORS', data)
        }
        return false
      })
      .finally(() => {
        commit('SET_LOADING', false)
      })
  },
  async loginId({ commit }, params) {
    commit('SET_LOADING', true)
    return await AuthServices.loginId(params)
      .then((response) => {
        const res = response.data
        commit('SET_AUTH', res.data);
        return true
      })
      .catch((err) => {
        if (err?.response?.status === 422) {
          const data = err.response.data
          commit('SET_ERRORS', data)
        }
        return false
      })
      .finally(() => {
        commit('SET_LOADING', false)
      })
  },
  async register({ commit }, params) {
    commit('SET_LOADING', true)
    return await AuthServices.register(params)
      .then((response) => {
        const res = response.data
        actions.loginId({ commit }, { user_id: res.data })
        return true
      })
      .catch((err) => {
        if (err?.response?.status === 422) {
          const data = err.response.data
          commit('SET_ERRORS', data)
        }
        return false
      })
      .finally(() => {
        commit('SET_LOADING', false)
      })
  },
  async passwordReset({ commit }, params) {
    commit('SET_PASSWORD_RESET_LOADING', true)
    return AuthServices.passwordReset(params)
      .then((response) => {
        const res = response.data
        console.log('set password reset', res);
      })
      .catch((error) => {
        console.log('error: ', error);
      })
      .finally(() => {
        commit('SET_PASSWORD_RESET_LOADING', false)
      })
  }
}

const mutations = {
  SET_LOADING(state, loading) {
    state.loading = loading
  },
  SET_AUTH(state, data) {
    state.isAuth = true
    localStorage.setItem('userId', data.id)
    localStorage.setItem('token', `${data.tokenType} ${data.accessToken}`)
  },
  SET_ERRORS(state, errors) {
    state.errors = errors.errors
  },

}


export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}