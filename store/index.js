import Vuex from 'vuex'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
export default () => {
  return new Vuex.Store({
    state: {
      background: require('../static/background.jpg'),
      branchs: [],
      isLogin: false,
      projectName: 'ABC-Tutor',
      statusNotification: false,
      profile: {
        user_id: 1212312121,
        user_img: 'https://scontent.fbkk1-2.fna.fbcdn.net/v/t1.0-9/18670848_1440946712632376_9108286887308110690_n.jpg?oh=ce1fb663302049cbb304c38276bc1638&oe=5A4E0989',
        fname: 'Theerapat',
        lname: 'Vijitpoo',
        sex: 'male',
        birthday: '7/09/1996',
        email: 'Blend.Theerapat@gmail.com',
        facebook: 'BA.BLEND',
        twiiter: '',
        youtube: '',
        career: 'Web Developer'
      },
      course: [],
      user: [],
      createCourse: {},
      coursePurchased: [],
      courseFavorite: [],
      courseCreate: [],
      checkPullCourse: [],
      courseDetail: {
        courseContent: [],
        courseQA: [],
        courseChat: [],
        courseAnno: [],
        userOnline: []
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
      notification: []
    },
    getters,
    mutations,
    actions
  })
}
