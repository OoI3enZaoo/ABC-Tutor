// import axios from 'axios'
import { db } from '../firebase'
export const state = () => ({
  branchs: [],
  isLogin: false,
  projectName: 'ABC-Tutor',
  route: '/',
  branch: {},
  statusNotification: false
})
export const mutations = {
  addBranchs (state, data) {
    state.branchs.push(data)
  },
  setIsLogin (state, data) {
    state.isLogin = data
  },
  beforeRoute (state, data) {
    state.route = data
  },
  setBranch (state, data) {
    state.branch = data
  },
  setStatusNotifictaion (state, data) {
    state.statusNotification = data
  }
}
export const actions = {
  // async nuxtServerInit ({commit}) {
  //   const { data } = await axios.get('https://tutor-dafcf.firebaseio.com/branchs.json')
  //   commit('setBranchs', data)
  // }
  PULL_BRANCHS ({commit}) {
    db.ref('branchs').on('child_added', snapshot => {
      let data = snapshot.val()
      data.key = snapshot.key
      commit('addBranchs', data)
      console.log(data)
    })
  },
  BRANCH_FROM_ID ({commit, state}, key) {
    state.branchs.filter(data => {
      if (data.key === key) {
        commit('setBranch', data)
      }
    })
  }
}
