import axios from 'axios'
// import { db } from '../firebase'
export const state = () => ({
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
  courseContent: [],
  popularcourse: [],
  courseUserPurchased: []
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
  },
  COURSE_FROM_ID (state) {
    return courseId => state.course.filter(item => {
      return courseId == item.course_id
    })
  },
  user: (state) => state.user,
  BRANCH_FROM_NAME (state) {
    return name => state.branchs.filter(item => {
      return name == item.text
    })
  },
  COURSE_FAVORITE (state) { //เช็คว่ามีการเพิ่มเป็นรายการโปรดหรือยัง
    return CourseId => state.courseFavorite.filter(item => {
      return CourseId == item
    })
  },
  COURSE_PURCHASE (state) { //เช็คว่า เคยมีการซื้อคอร์สหรือยัง
    return CourseId => state.coursePurchased.filter(item => {
      return CourseId == item
    })
  },
  COURSE_CREATE (state) { //เช็คว่า เคยมีการซื้อคอร์สหรือยัง
    return CourseId => state.courseCreate.filter(item => {
      return CourseId == item
    })
  },
  COURSE_CONTENT (state) {
    return courseId => state.courseContent.filter(item => {
      return courseId == item.course_id
    })
  },
  COURSE_POPULAR (state) {
    return branchId => state.popularcourse.filter(item => {
      return branchId == item.branch_id
    })
  },
  COURSE_USER_PURCHASED (state) {
    return courseId => state.courseUserPurchased.filter(item => {
      return courseId == item.course_id
    })
  }
}
export const mutations = {
  addBranchs (state, data) {
    state.branchs.push(...data)
  },
  addCourses (state, data) {
    console.log('data: ' + JSON.stringify(data))
    state.course.unshift(...data)
  },
  setIsLogin (state, data) {
    state.isLogin = data
  },
  setStatusNotifictaion (state, data) {
    state.statusNotification = data
  },
  addUser (state, data) {
    state.user.push(...data)
  },
  addCreateCourse: (state, data) => state.createCourse = data,
  addCoursePurchased: (state, data) => state.coursePurchased.push(data),
  addCourseFavorite: (state, data) => state.courseFavorite.push(data),
  removeCourseFavorite: (state, data) => {
    let a = state.courseFavorite.indexOf(data)
    let b = state.courseFavorite.splice(a, 1)
  },
  updateProfile: (state, data) => state.profile = data,
  addCheckPullCourse: (state, data) => state.checkPullCourse.push(data),
  addCourseCreate: (state, data) => state.courseCreate.push(data),
  addCourseContent: (state, data) => state.courseContent.push(data),
  updateuserid: (state, data) => state.profile.user_id = (new Date().getTime()),
  addPopularCourse: (state, data) => state.popularcourse.push(...data),
  addCourseUserPurchased: (state, data) => state.courseUserPurchased.push(...data)
}
export const actions = {
  async nuxtServerInit ({commit, state, dispatch, route}) {
    if (state.branchs.length == 0) {
      await dispatch('PULL_BRANCHS')
    }
    // commit('updateuserid')
  },
  async PULL_BRANCHS ({commit}) {
    await axios.get('http://172.104.167.197:1150/api')
      .then(res => {
        let result = res.data
        commit('addBranchs', result)
      })
  },
  async PULL_COURSE_FROM_BRANCH_ID ({state, commit}, branch_id) {
    let isCheck = false
    for (let i = 0; i < state.checkPullCourse.length; i++) {
      if (state.checkPullCourse[i] == branch_id) {
        await (isCheck = true)
        break
      }
    }
    if (isCheck == false) {
        await axios.get('http://172.104.167.197:1150/api/getcourse/' + branch_id)
      .then(res => {
        let result = res.data
        commit('addCheckPullCourse', branch_id)
        commit('addCourses', result)
      })
    }
  },
  // async PULL_USER_FROM_COURSE_ID ({commit, state}, courseId) {
  //   let user_id
  //    for (let i = 0; i < state.course.length; i++) {
  //      console.log('state.course_user_id: ' + state.course[i].user_id + ' id: ' + courseId );
  //     if (state.course[i].course_id == courseId) {
  //       console.log('found user_id in course state');
  //       await (user_id =  state.course[i].user_id)
  //       break;
  //     }
  //   }
  //   let alreadyGet = false
  //   for (let i = 0; i < state.user.length; i++) {
  //     console.log('loop')
  //       if (state.user[i].user_id == user_id) {
  //         await (alreadyGet = true)
  //         console.log('true')
  //         break;
  //       } else {
  //         alreadyGet = false
  //       }
  //   }
  //   if(alreadyGet == false) {
  //     console.log('get: ' + user_id)
  //     await axios.get('http://172.104.167.197:1150/api/user/' + user_id)
  //     .then (res => {
  //       let result = res.data[0]
  //       const data = {
  //         user_id: result.user_id,
  //         fname: result.fname,
  //         lname: result.lname,
  //         user_img: result.user_img,
  //         sex: result.sex,
  //         birthday: result.birthday,
  //         email: result.email,
  //         facebook: result.facebook,
  //         twitter: result.twitter,
  //         youtube: result.youtube
  //       }
  //       commit('addUser', data)
  //     })
  //   }
  // },
  async PULL_COURSE_FROM_COURSE_ID ({commit, state}, courseId) {
    let isCheck = false
    if (state.course.length > 0) {
      for (let i = 0; i < state.course.length; i++) {
       if (state.course[i].course_id == courseId) {
         await (isCheck = true)
         break;
       }
     }
    }
    if(isCheck == false) {
      await axios.get('http://172.104.167.197:1150/api/course/' + courseId)
      .then (res => {
        let result = res.data
        commit('addCourses', result)
      })
    }
  },
  async PUSH_COURSE ({commit}, data) {
    commit('addCourses', [data])
    commit('addCourseCreate', data.course_id)
    await axios.post('http://172.104.167.197:1150/api/insertcourse', data)
  },
  ADD_COURSE_PURCHASED ({commit}, payload) {
    commit('addCoursePurchased', payload.course_id)
    axios.post('http://172.104.167.197:1150/api/insertuserpurchase', payload)
  },
  ADD_COURSE_FAVORITE ({commit}, payload) {
    commit('addCourseFavorite', payload)
  },
  REMOVE_COURSE_FAVORITE ({commit}, payload) {
    commit('removeCourseFavorite', payload)
  },
  UPDATE_PROFILE ({commit}, payload) {
    commit('updateProfile', payload)
    axios.post('http://172.104.167.197:1150/api/updateuser', payload)
  },
  PULL_COURSE_DATA ({commit}, payload) {
    console.log('payload: ' + payload)
  },
  ADD_COURSE_CONTENT ({commit}, payload) {
    commit('addCourseContent', payload)
    console.log('payload: ' + JSON.stringify(payload))
    axios.post('http://172.104.167.197:1150/api/insertcoursecontent', payload)
  },
  async PULL_POPULAR_COURSE ({commit, state}) {
    if (state.popularcourse.length == 0) {
      await state.branchs.map(data => {
         axios.get('http://172.104.167.197:1150/api/popularcourse/' + data.branch_id)
        .then (res => {
          let result = res.data
          console.log(result);
          commit('addCourses', result)
          commit('addPopularCourse', result)
        })
      })
    }
  },
  async PULL_USER_PURCHASED ({commit, state}, course_id) {
    let isCheck = false
    for (let i = 0; i < state.courseUserPurchased.length; i++ ) {
      if (state.courseUserPurchased[i].course_id == course_id) {
        await (isCheck = true)
      }
    }
    if (isCheck == false) {
      axios.get('http://172.104.167.197:1150/api/userpurchased/' + course_id)
      .then (res => {
        let result = res.data
        console.log(result);
        commit('addCourseUserPurchased', result)
      })
    }
  }

}
