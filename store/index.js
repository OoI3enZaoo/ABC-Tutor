import axios from 'axios'
// import { db } from '../firebase'
export const state = () => ({
  branchs: '',
  branch: [],
  isLogin: false,
  projectName: 'ABC-Tutor',
  route: '/',
  statusNotification: false,
  profile: {
    user_id: 1212312121,
    avatar: 'https://scontent.fbkk1-2.fna.fbcdn.net/v/t1.0-9/18670848_1440946712632376_9108286887308110690_n.jpg?oh=ce1fb663302049cbb304c38276bc1638&oe=5A4E0989',
    fname: 'Theerapat',
    lname: 'Vijitpoo',
    sex: 'male',
    birthday: '7/09/1996',
    social: {
      email: 'Blend.Theerapat@gmail.com',
      facebook: '/BA.BLEND',
      twiiter: '',
      youtube: ''
    }
  },
  announcement: [],
  qa: [],
  courseContent: [],
  chat: [],
  course: [],
  user: [],
  createCourse: {}
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
  USER_FROM_ID (state) {
    return userId => state.user.filter(item => {
      return userId == item.user_id
    })
  },
  BRANCH_FROM_NAME (state) {
    return name => state.branchs.filter(item => {
      return name == item.text
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
  addUser (state, data) {
    let a = state.user
    let b = data
    let c = a.concat(b)
    state.user = c
  },
  addCreateCourse: (state, data) => state.createCourse = data
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
    await axios.get('http://172.104.167.197:1150/api')
      .then(res => {
        let result = res.data
        commit('addBranchs', result)
      })
  },
  async PULL_COURSE_FROM_BRANCH_ID ({commit}, branch_id) {
    await axios.get('http://172.104.167.197:1150/api/getcourse/' + branch_id)
    .then(res => {
      let result = res.data
      commit('addCourses', result)
    })
  },
  async PULL_USER_FROM_ID ({commit, state}, courseId) {
    let user_id
     for (let i = 0; i < state.course.length; i++) {
       console.log('state.course_user_id: ' + state.course[i].user_id + ' id: ' + courseId );
      if (state.course[i].course_id == courseId) {
        console.log('found user_id in course state');
        await (user_id =  state.course[i].user_id)
        break;
      }
    }
    let alreadyGet = false
    for (let i = 0; i < state.user.length; i++) {
      console.log('loop')
        if (state.user[i].user_id == user_id) {
          await (alreadyGet = true)
          console.log('true')
          break;
        } else {
          alreadyGet = false
        }
    }
    if(alreadyGet == false) {
      console.log('get: ' + user_id)
      await axios.get('http://172.104.167.197:1150/api/user/' + user_id)
      .then (res => {
        let result = res.data[0]
        const data = {
          user_id: result.user_id,
          fname: result.fname,
          lname: result.lname,
          user_img: result.user_img,
          sex: result.sex,
          birthday: result.birthday,
          email: result.email,
          facebook: result.facebook,
          twitter: result.twitter,
          youtube: result.youtube
        }
        commit('addUser', data)
      })
    }
  },
  PUSH_COURSE ({commit}, data) {
    axios.post('http://localhost:4000/api/insertcourse', data)
    .then (res => {
      console.log('finished: ' + res.status)
      if (res.data == "200") {
        console.log('status 200')
      }
    })
  }
}
