// import axios from 'axios'
export const state = () => ({
  branchs: '',
  isLogin: false,
  projectName: 'ABC-Tutor',
  route: '/'
})
export const mutations = {
  setBranchs (state, data) {
    state.branchs = data
  },
  setIsLogin (state, data) {
    state.isLogin = data
  },
  beforeRoute (state, data) {
    state.route = data
  }
}
export const actions = {
  // async nuxtServerInit ({commit}) {
  //   const { data } = await axios.get('https://tutor-dafcf.firebaseio.com/branchs.json')
  //   commit('setBranchs', data)
  // }
}
