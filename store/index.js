import axios from 'axios'
// import { db } from '../firebase'
export const state = () => ({
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
  notification: []
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
    return courseId => state.courseDetail.courseContent.filter(item => {
      return courseId == item.course_id
    })
  },
  COURSE_QA (state) {
    return courseId => state.courseDetail.courseQA.filter(item => {
      return courseId == item.course_id
    })
  },
  COURSE_POPULAR_HOME (state) {
    return branchId => state.popularCourseHome.filter(item => {
      return branchId == item.branch_id
    })
  },
  COURSE_USER_PURCHASED (state) {
    return courseId => state.courseUserPurchased.filter(item => {
      return courseId == item.course_id
    })
  },
  USER_FROM_ID (state) {
    return userId => state.user.filter(item => {
      return userId == item.user_id
    })
  },
  CHECK_REVIEW (state) {
    return courseId => state.checkReview.filter(item =>{
      return courseId == item
    })
  },
  COURSE_VOTE_FROM_COURSE_ID (state) {
    return courseId => state.courseVote.filter(item =>{
      return courseId == item.course_id
    })
  },
  COURSE_REVIEW_FROM_COURSE_ID (state) {
    return courseId => state.courseReview.filter(item =>{
      return courseId == item.course_id
    })
  },
  COURSE_QA_COMMENT (state) {
    return QID => state.courseDetail.courseQA.filter(item => {
      return QID == item.q_id
    })
  },
  COURSE_CHAT (state) {
    return courseId => state.courseDetail.courseChat.filter(item => {
      return courseId = item.course_id
    })
  },
  COURSE_ANNO (state) {
    return courseId => state.courseDetail.courseAnno.filter(item => {
      return courseId == item.course_id
    })
  },
  COURSE_USER (state) {
    return courseId => state.courseDetail.userOnline.filter(item => {
      return courseId == item.course_id
    })
  }
}
export const mutations = {
  addBranchs (state, data) {
    state.branchs.push(...data)
  },
  addCourses (state, data) {
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
  addCourseContent: (state, data) => state.courseDetail.courseContent.unshift(data),
  updateuserid: (state, data) => state.profile.user_id = Math.floor((Math.random() * 100) + 1),
  addPopularCourseHome: (state, data) => state.popularCourseHome.push(...data),
  addPopularCourseIndex: (state, data) => state.popularCourseIndex.push(...data),
  addCourseUserPurchased: (state, data) => state.courseUserPurchased.unshift(...data),
  addCourseUserPurchasedSocket: (state, data) => {
    state.courseUserPurchased.find(res => res.course_id == data.course_id ? '' : state.courseUserPurchased.unshift(...data))
  },
  addCheckReview: (state, data) => state.checkReview.push(data),
  addCourseVote: (state, data) => state.courseVote.push(...data),
  addCourseReview: (state, data) => state.courseReview.unshift(...data),
  addCourseReviewSocket: (state, data) => {
    state.courseReview.find(res => res.course_id == data.course_id ? '' : state.courseReview.unshift(...data))
  },
  updateCourseVote: (state, data) => {
      let have = false
      state.courseVote.find(res => {
        if (res.course_id == data.course_id) {
          console.log(res)
          res.length += 1
          res.avg = (res.avg + data.review_vote)/2
          if (data.review_vote == 1) {
            res.one += 1
          }
          else if (data.review_vote == 2) {
            res.two += 1
          }
          else if (data.review_vote == 3) {
            res.three += 1
          }
          else if (data.review_vote == 4) {
            res.four += 1
          }
          else if (data.review_vote == 5) {
            res.five += 1
          }
          console.log(res)
          have = true
        }
      })
      if (have == false) {
        console.log('course_id: ' + JSON.stringify(data))
        let newData = {
          course_id: data.course_id,
          five: 0,
          four: 0,
          three: 0,
          two: 0,
          one: 0,
          avg: data.review_vote,
          length: 0
        }
        if (data.review_vote == 1) {
          newData.one += 1
        }
        else if (data.review_vote == 2) {
          newData.two += 1
        }
        else if (data.review_vote == 3) {
          newData.three += 1
        }
        else if (data.review_vote == 4) {
          newData.four += 1
        }
        else if (data.review_vote == 5) {
          newData.five += 1
        }
        newData.length += 1
        console.log('have == false: ' + JSON.stringify(newData))
        state.courseVote.push(newData)

      }
  },
  addCourseQA: (state, data) => state.courseDetail.courseQA.unshift(...data),
  addCourseQAComment: (state, data) => {
    state.courseDetail.courseQA.map(res => res.q_id == data.q_id ? res.reply.push(data) : '')
  },
  addCourseChat: (state, data) => state.courseDetail.courseChat.push(...data),
  addCourseAnno: (state, data) => state.courseDetail.courseAnno.unshift(...data),
  addCourseAnnoComment: (state, data) => {
    state.courseDetail.courseAnno.map(res => res.annou_id == data.annou_id ? res.reply.push(data) : '')
  },
  addNotification: (state, data) => state.notification.unshift(data),
  addUserOnline: (state, data) => state.courseDetail.userOnline.unshift(...data),
  removeUserOnline: (state, data) => {
    let a = state.courseDetail.userOnline.indexOf(data)
    let b = state.courseDetail.userOnline.splice(a, 1)
  },
  removeAllUser: (state) => {
    console.log('removeAllUser')
    state.courseDetail.userOnline = []
  }
}
export const actions = {
  async nuxtServerInit ({commit, state, dispatch, route}) {
    if (state.branchs.length == 0) {
      await dispatch('PULL_BRANCHS')
    }
    commit('updateuserid')
  },
  async PULL_BRANCHS ({commit}) {
    await axios.get('http://172.104.167.197:4000/api')
      .then(res => {
        let result = res.data
        commit('addBranchs', result)
      })
  },
  async PULL_COURSE_FROM_BRANCH_ID ({state, commit}, branch_id) {
    let isCheck = false
    state.checkPullCourse.find(f => f == branch_id ? isCheck = true : '')
    if (isCheck == false) {
        await axios.get('http://172.104.167.197:4000/api/getcourse/' + branch_id)
      .then(res => {
        let result = res.data
        commit('addCheckPullCourse', branch_id)
        result.map(rs => {
          let {course_id,user_id,branch_id,subject,code,price,des,cover,ts,lastUpdate,fname,lname,user_img,facebook,twitter,youtube, five, four, three, two, one, avg, length} = rs
          commit('addCourses', [{course_id,user_id,branch_id,subject,code,price,des,cover,ts,lastUpdate,fname,lname,user_img,facebook,twitter,youtube}])
          let inStore = false
          state.courseVote.find(f => f.course_id == rs.course_id  ? inStore = true : '')
          rs.avg != null && inStore == false ? commit('addCourseVote', [{course_id, five, four, three, two, one, avg, length}]) : ''
        })
      })
    }
  },
  async PULL_COURSE_FROM_COURSE_ID ({commit, state, dispatch}, courseId) {
    let isCheck = false
    state.course.find(f => f.course_id == courseId ? isCheck = true : '')
    if(isCheck == false) {
      dispatch('PULL_COURSE_REVIEW', courseId)
      await axios.get('http://172.104.167.197:4000/api/course/' + courseId)
      .then (res => {
        let result = res.data
        result.map(rs => {
          let {course_id,user_id,branch_id,subject,code,price,des,cover,ts,lastUpdate,fname,lname,user_img,facebook,twitter,youtube, five, four, three, two, one, avg, length} = rs
          commit('addCourses', [{course_id,user_id,branch_id,subject,code,price,des,cover,ts,lastUpdate,fname,lname,user_img,facebook,twitter,youtube}])
          let inStore = false
          state.courseVote.find(f => f.course_id == rs.course_id  ? inStore = true : '')
          rs.avg != null && inStore == false ? commit('addCourseVote', [{course_id, five, four, three, two, one, avg, length}]) : ''
        })
      })
    }
  },
  async PUSH_COURSE ({commit}, data) {
    commit('addCourses', [data])
    commit('addCourseCreate', data.course_id)
    await axios.post('http://172.104.167.197:4000/api/insertcourse', data)
  },
  ADD_COURSE_PURCHASED ({commit}, payload) {
    commit('addCoursePurchased', payload.course_id)
    axios.post('http://172.104.167.197:4000/api/insertuserpurchase', payload)
  },
  ADD_COURSE_FAVORITE ({commit}, payload) {
    commit('addCourseFavorite', payload)
  },
  REMOVE_COURSE_FAVORITE ({commit}, payload) {
    commit('removeCourseFavorite', payload)
  },
  UPDATE_PROFILE ({commit}, payload) {
    commit('updateProfile', payload)
    axios.post('http://172.104.167.197:4000/api/updateuser', payload)
  },
  PULL_COURSE_DATA ({commit}, payload) {
    console.log('payload: ' + payload)
  },
  ADD_COURSE_CONTENT ({commit}, payload) {
    commit('addCourseContent', payload)
    console.log('payload: ' + JSON.stringify(payload))
    axios.post('http://172.104.167.197:4000/api/insertcoursecontent', payload)
  },
  async PULL_POPULAR_COURSE_HOME ({commit, state}) {
    if (state.popularCourseHome.length == 0) {
      await state.branchs.map(data => {
         axios.get('http://172.104.167.197:4000/api/popularcourse/' + data.branch_id)
        .then (res => {
          let result = res.data
          result.map(str => {
            let {user_id,fname,lname,user_img,sex,birthday,email,facebook,twitter,youtube ,course_id,branch_id,subject,code,price,des,cover,ts,coupon,lastUpdate, five, four, three, two, one, avg, length} = str
            console.log('PULL_POPULAR_COURSE_HOME')
            commit('addUser', [{user_id,fname,lname,user_img,sex,birthday,email,facebook,twitter,youtube}])
            commit('addPopularCourseHome', [{fname,lname,user_id,course_id,branch_id,subject,code,price,des,cover,ts,coupon,lastUpdate}])
            let inStore = false
            state.courseVote.find(f => f.course_id == str.course_id  ? inStore = true : '')
            str.avg != null && inStore == false ? commit('addCourseVote', [{course_id, five, four, three, two, one, avg, length}]) : ''
          })
        })
      })
    }
  },
  async PULL_POPULAR_COURSE_INDEX ({commit, state}) {
    if (state.popularCourseIndex.length == 0) {
      await axios.get('http://172.104.167.197:4000/api/popularcourse')
      .then (res => {
        let result = res.data
        result.map(str => {
          let {user_id,fname,lname,user_img,sex,birthday,email,facebook,twitter,youtube ,course_id,branch_id,subject,code,price,des,cover,ts,coupon,lastUpdate, five, four, three, two, one, avg, length} = str
          console.log('PULL_POPULAR_COURSE_HOME')
          commit('addUser', [{user_id,fname,lname,user_img,sex,birthday,email,facebook,twitter,youtube}])
          commit('addPopularCourseIndex', [{fname,lname,user_id,course_id,branch_id,subject,code,price,des,cover,ts,coupon,lastUpdate}])
          let inStore = false
          state.courseVote.find(f => f.course_id == str.course_id  ? inStore = true : '')
          str.avg != null && inStore == false  ? commit('addCourseVote', [{course_id, five, four, three, two, one, avg, length}]) : ''
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
      await axios.get('http://172.104.167.197:4000/api/userpurchased/' + course_id)
      .then (res => {
        let result = res.data
        commit('addCourseUserPurchased', result)
      })
    }
  },
  async PULL_USER ({commit, state}, user_id) {
    console.log('PULL_USER: ' + user_id)
    let isCheck = false
    for (let i = 0; i < state.user.length; i ++) {
      if (state.user.user_id == user_id) {
        await(isCheck = true)
        break
      }
    }
    if (isCheck == false) {
      await axios.get('http://172.104.167.197:4000/api/user/' + user_id)
      .then(res => {
        let result = res.data
        commit('addUser', result)
      })
    }
  },
  ADD_REVIEW ({commit, state}, payload) {
    commit('addCheckReview', payload.course_id)
    axios.post('http://172.104.167.197:4000/api/insertreview', payload)
  },
  ADD_VOTING ({commit, state}, payload) {
    // axios.post('http://172.104.167.197:4000/api/insertvote', payload)
  },
  async PULL_COURSE_REVIEW ({commit, state}, courseId) {
    console.log('PULL_COURSE_REIVEW')
    let isCheck = false
    for (let i = 0; i < state.courseReview.length; i++) {
      if (state.courseReview[i].course_id == courseId) {
        await (isCheck = true)
        break
      }
    }
    if (isCheck == false) {
      axios.get('http://172.104.167.197:4000/api/get_review_course_order_ts/' + courseId)
      .then (res => {
        let result = res.data
        if (result.length != 0) {
          commit('addCourseReview', result)
        }
      })
    }
  },
  async PULL_COURSE_CONTENT ({commit, state}, course_id) {
    let content_id
    let isCheck = false
    state.courseDetail.courseContent.find(res => res.course_id == course_id ? isCheck = true : '')
    if (isCheck == false) {
      console.log('load from api')
      await axios.get('http://172.104.167.197:4000/api/get_course_content/' + course_id)
      .then (res => {
        content_id = res.data
        console.log('content_id:' + JSON.stringify(content_id))
      })
      content_id.map(con => {
        axios.get('http://172.104.167.197:4000/api/get_course_content_file/' + con.content_id)
        .then(res => {
          console.log('map')
          let result = res.data
          let file = []
          console.log('content_file: ' + JSON.stringify(result))
          result.map(cf => file.push(cf.content_name))
          con.files = file
          commit('addCourseContent', con)
        })
      })
    }
  },
  async PULL_COURSE_QA ({commit, state}, course_id) {
    let qa
    let isCheck = false
    state.courseDetail.courseQA.find(res => res.course_id == course_id ? isCheck = true : '')
    if (isCheck == false) {
      await axios.get('http://172.104.167.197:4000/api/get_course_q/' + course_id)
      .then(res => {
        qa = res.data
        console.log('qa: ' + JSON.stringify(qa))
      })
      qa.map(q => {
        axios.get('http://172.104.167.197:4000/api/get_course_q_comment/' + q.q_id)
        .then(res => {
          console.log('res.data: ' + res.data)
          let {fname,lname,user_img,q_id,course_id,user_id,q_title,q_des,q_ts} = q
          console.log({q_id,course_id,user_id,q_title,q_des,q_ts,reply:res.data})
          commit('addCourseQA', [{fname,lname,user_img,q_id,course_id,user_id,q_title,q_des,q_ts,reply:res.data}])
        })
      })
    }
  },
  ADD_COURSE_QA ({commit}, payload) {
    axios.post('http://172.104.167.197:4000/api/insertcourse_q', payload)
  },
  ADD_COURSE_QA_COMMENT ({commit}, payload) {
    console.log('ADD_COURSE_QA_COMMENT: ' + JSON.stringify(payload))
      axios.post('http://172.104.167.197:4000/api/insertcourse_q_comment', payload)
  },
  ADD_COURSE_CHAT ({commit}, payload) {
    console.log('ADD_COURSE_CHAT' + JSON.stringify(payload))
    axios.post('http://172.104.167.197:4000/api/insertchat/', payload)
  },
  async PULL_COURSE_CHAT ({commit}, course_id) {
    await axios.get('http://172.104.167.197:4000/api/get_course_chat/' + course_id)
    .then (res => {
      let result = res.data
      console.log(result)
      commit('addCourseChat', result)
    })
  },
  ADD_COURSE_ANNO ({commit}, payload) {
    axios.post('http://172.104.167.197:4000/api/insertcourse_announce/', payload)
  },
  ADD_COURSE_ANNO_COMMENT ({commit}, payload) {
    axios.post('http://172.104.167.197:4000/api/insertcourse_announce_comment/', payload)
  },
  async PULL_USER_ONLINE ({state, commit}, course_id) {
    let new_course_id = course_id +  11111
    let result
      await axios.get('http://172.104.167.197:4000/api/get_userinroom/' + course_id)
      .then (res => {
        result = res.data
        result.map(m => m.course_id =  m.course_id + '' + 11111)
        console.log('a:' + JSON.stringify(result))
      })
      console.log('b:' + JSON.stringify(result))
      commit('addUserOnline', result)
      let me = {
        course_id: new_course_id,
        user_id: state.profile.user_id,
        fname: state.profile.fname,
        lname: state.profile.lname,
        user_img: state.profile.user_img
      }
      commit('addUserOnline', [me])
  },
  USER_ONLINE ({commit}, payload) {
    console.log('user_online: ' + JSON.stringify(payload))
    //axios.post('http://172.104.167.197:4000/api/insertusertoroom/', payload)
  },
  USER_OFFLINE ({commit}, payload) {
    //axios.post('http://172.104.167.197:4000/api/deleteuserfromroom/', payload)
  }
}
