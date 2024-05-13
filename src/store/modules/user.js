import UserServices from '../../services/UserServices'

const state = {
  user: {}
}

const getters = {}

const actions = {
  async getMe({ commit }) {
    return await UserServices.me()
      .then((response) => {
        const res = response.data
        commit('SET_USER', res)
        return true
      })
      .catch(() => {
        // console.log('error: ', error);
        return false
      })
  }
}

const mutations = {
  SET_USER(state, user) {
    state.user = user.data
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}