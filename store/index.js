import Vuex from 'vuex'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import createPersistedState from 'vuex-persistedstate'
export default () => {
  return new Vuex.Store({
    state: {
      currentIP: 'https://localhost:4000',
      background: require('../static/background.jpg'),
      branchs: [],
      isLogin: false,
      projectName: 'ABC-Tutor',
      statusNotification: false,
      profile: {},
      user: {
        user_data: [],
        user_owner: [],
        user_student: [],
        user_review: [],
        user_purchase: []
      },
      course: [],
      createCourse: {},
      coursePurchased: [],
      courseFavorite: [],
      courseCreate: [],
      checkPullCourse: [],
      courseDetail: {
        courseContent: [],
        courseQA: [],
        courseChat: [],
        courseAnno: []
        // userOnline: []
      },
      popularCourseHome: [],
      popularCourseIndex: [],
      courseUserPurchased: [],
      courseVote: [],
      courseReview: [],
      checkReview: [],
      isCheckReview: false,
      isCoursePurchased: false,
      isCourseCreated: false,
      isCourseFavorite: false,
      notification: [],
      notificationCount: 0,
      liveMessage: [],
      tutor: {
        isTutor: false,
        menuItems: [
          { title: 'ภาพรวม' },
          { title: 'เอกสารและวีดีโอ' },
          { title: 'วีดีโอสด' },
          { title: 'ถามตอบ' },
          { title: 'ประกาศ' },
          { title: 'แชท' }
        ]
      },
      live_schedule: []
    },
    plugins: [
      createPersistedState({
        paths: ['profile', 'isLogin']
      })
    ],
    getters,
    mutations,
    actions
  })
}
