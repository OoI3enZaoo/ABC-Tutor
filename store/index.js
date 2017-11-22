import Vuex from 'vuex'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import createPersistedState from 'vuex-persistedstate'
export default () => {
  return new Vuex.Store({
    state: {
      currentIP: '172.104.167.197:4000',
      background: require('../static/background.jpg'),
      branchs: [],
      isLogin: false,
      projectName: 'ABC-Tutor',
      statusNotification: false,
      profile: {
        user_id: 0,
        user_img: 'https://scontent.fbkk1-2.fna.fbcdn.net/v/t1.0-9/18670848_1440946712632376_9108286887308110690_n.jpg?oh=ce1fb663302049cbb304c38276bc1638&oe=5A4E0989',
        fname: 'Theerapat',
        lname: 'Vijitpoo',
        sex: 'male',
        birthday: '7/09/1996',
        email: 'Blend.Theerapat@gmail.com',
        facebook: 'BA.BLEND',
        twiiter: '',
        youtube: ''
      },
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
      liveMessage: []
    },
    plugins: [
      createPersistedState({
        paths: ['profile', 'isLogin', 'projectName', 'statusNotification', 'background', 'branchs']
      })
    ],
    getters,
    mutations,
    actions
  })
}
