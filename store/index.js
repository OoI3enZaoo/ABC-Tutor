// import axios from 'axios'
import { db } from '../firebase'
export const state = () => ({
  branchs: [],
  branch: {},
  isLogin: false,
  projectName: 'ABC-Tutor',
  route: '/',
  statusNotification: false,
  announcement: [],
  qa: [],
  courseContent: [],
  chat: [],
  course: []
})
export const getters = {
  BRANCH_FROM_ID (state) {
    return routeId => state.branchs.filter(item => {
      return item.key === routeId
    })
  }
}
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
  setStatusNotifictaion (state, data) {
    state.statusNotification = data
  },
  addAnnouncement (state, data) {
    state.announcement.push(data)
  },
  addQA (state, data) {
    state.qa.push(data)
  },
  addCourseContent (state, data) {
    state.courseContent.push(data)
  },
  addChat (state, data) {
    state.chat.push(data)
  },
  addCourse (state, data) {
    state.course.push(data)
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
  PULL_ANNOUNCEMENTS ({commit}) {
    console.log('PULL_ANNOUNCEMENTS')
    db.ref('announcements').on('child_added', snapshot => {
      let data = snapshot.val()
      data.key = snapshot.key
      commit('addAnnouncement', data)
    })
  },
  PULL_QA ({commit}) {
    console.log('PULL_QA')
    db.ref('qa').on('child_added', snapshot => {
      let data = snapshot.val()
      data.key = snapshot.key
      commit('addQA', data)
    })
  },
  PULL_COURSECONTENTS ({commit}) {
    console.log('PULL_COURSECONTENT')
    db.ref('courseContent').on('child_added', snapshot => {
      let data = snapshot.val()
      data.key = snapshot.key
      commit('addCourseContent', data)
    })
  },
  PULL_CHATS ({commit}) {
    console.log('PULL_COURSECONTENT')
    db.ref('chats').on('child_added', snapshot => {
      let data = snapshot.val()
      data.key = snapshot.key
      commit('addChat', data)
    })
  },
  PULL_COURSES ({commit}) {
    console.log('PULL_COURSES')
    db.ref('courses').on('child_added', snapshot => {
      let data = snapshot.val()
      data.key = snapshot.key
      commit('addCourse', data)
    })
  }
}
