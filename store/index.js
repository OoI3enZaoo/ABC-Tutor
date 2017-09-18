import axios from 'axios'
// import { db } from '../firebase'
export const state = () => ({
  branchs: '',
  branch: [],
  isLogin: false,
  projectName: 'ABC-Tutor',
  route: '/',
  statusNotification: false,
  announcement: [],
  qa: [],
  courseContent: [],
  chat: [],
  course: [],
  courseTest: []
})
export const getters = {
  BRANCH_FROM_ID (state) {
    return routeId => state.branchs.filter(item => {
      return routeId == item.branch_id
    })
  },
  ALL_COURSE_FROM_ID (state) {
    return routeId => state.course.filter(item => {
      return routeId == item.branch_id
    })
  }
}
export const mutations = {
  addBranchs (state, data) {
    state.branchs = data
  },
  addCourses (state, data) {
    state.course = data
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
  },
  addCourseTest (state, data) {
    state.courseTest.push(data)
  }
}
export const actions = {
  async nuxtServerInit ({commit, state, dispatch, route}) {
    if (state.branchs === '') {
      await dispatch('PULL_BRANCHS')
    }
    // const { data } = await axios.get('https://tutor-dafcf.firebaseio.com/branchs.json')
    // commit('setBranchs', data)
  },
  async PULL_BRANCHS ({commit}) {
    await axios.get('http://localhost:4000/api')
      .then(res => {
        let result = res.data
        commit('addBranchs', result)
      })
  },
  async PULL_COURSE_FROM_BRANCH_ID ({commit}, branch_id) {
    await axios.get('http://localhost:4000/api/getcourse/' + branch_id)
    .then(res => {
      let result = res.data
      commit('addCourses', result)
    })
  }
  // PULL_ANNOUNCEMENTS ({commit}) {
  //   console.log('PULL_ANNOUNCEMENTS')
  //   db.ref('announcements').on('child_added', snapshot => {
  //     let data = snapshot.val()
  //     data.key = snapshot.key
  //     commit('addAnnouncement', data)
  //   })
  // },
  // PULL_QA ({commit}) {
  //   console.log('PULL_QA')
  //   db.ref('qa').on('child_added', snapshot => {
  //     let data = snapshot.val()
  //     data.key = snapshot.key
  //     commit('addQA', data)
  //   })
  // },
  // PULL_COURSECONTENTS ({commit}) {
  //   console.log('PULL_COURSECONTENT')
  //   db.ref('courseContent').on('child_added', snapshot => {
  //     let data = snapshot.val()
  //     data.key = snapshot.key
  //     commit('addCourseContent', data)
  //   })
  // },
  // PULL_CHATS ({commit}) {
  //   console.log('PULL_COURSECONTENT')
  //   db.ref('chats').on('child_added', snapshot => {
  //     let data = snapshot.val()
  //     data.key = snapshot.key
  //     commit('addChat', data)
  //   })
  // },
  // PULL_COURSES ({commit}) {
  //   console.log('PULL_COURSES')
  //   db.ref('courses').on('child_added', snapshot => {
  //     let data = snapshot.val()
  //     data.key = snapshot.key
  //     commit('addCourse', data)
  //   })
  // },
  // PULL_COURSES_TEST ({commit}) {
  //   console.log('PULL_COURSES_TEST')
  //   db.ref('courses').on('child_added', snapshot => {
  //     let data = snapshot.val()
  //     data.key = snapshot.key
  //     commit('addCourseTest', data)
  //   })
  // }
}
