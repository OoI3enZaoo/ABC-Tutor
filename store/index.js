import axios from 'axios'
export const state = () => ({
  sidebar: true,
  branchs: [],
  isLogin: false
})
export const mutations = {
  toggleSidebar (state) {
    state.sidebar = !state.sidebar
  },
  setBranchs (state, data) {
    state.branchs = data
  },
  setIsLogin (state, data) {
    state.isLogin = data
  }
}
export const actions = {
  async nuxtServerInit ({commit}) {
    const { data } = await axios.get('https://tutor-dafcf.firebaseio.com/branchs.json')
    commit('setBranchs', data)
  }
}
