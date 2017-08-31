// import axios from 'axios'
export const state = () => ({
  branchs: '',
  isLogin: false,
  projectName: 'ABC-Tutor'
})
export const mutations = {
  setBranchs (state, data) {
    state.branchs = data
  },
  setIsLogin (state, data) {
    state.isLogin = data
  }
}
export const actions = {
  // async nuxtServerInit ({commit}) {
  //   const { data } = await axios.get('https://tutor-dafcf.firebaseio.com/branchs.json')
  //   commit('setBranchs', data)
  // }
}
