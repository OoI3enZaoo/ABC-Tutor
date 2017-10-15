import axios from 'axios'
import Vue from 'vue'
export default {
  async nuxtServerInit ({commit, state, dispatch, route}) {
    if (state.branchs.length == 0) {
      await dispatch('PULL_BRANCHS')
    }
    //commit('updateuserid')
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
          rs.avg != 0 && inStore == false ? commit('addCourseVote', [{course_id, five, four, three, two, one, avg, length}]) : ''
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
          rs.avg != 0 && inStore == false ? commit('addCourseVote', [{course_id, five, four, three, two, one, avg, length}]) : ''
        })
      })
    }
  },
  async PUSH_COURSE ({commit}, data) {
    commit('addCourses', [data])
    commit('addCourseCreate', [data.course_id])
    await axios.post('http://172.104.167.197:4000/api/insertcourse', data)
  },
  ADD_COURSE_PURCHASED ({commit}, payload) {
    commit('addCoursePurchased', [payload.course_id])
    axios.post('http://172.104.167.197:4000/api/insertuserpurchase', payload)
  },
  ADD_COURSE_FAVORITE ({commit}, payload) {
    commit('addCourseFavorite', [payload])
  },
  REMOVE_COURSE_FAVORITE ({commit}, payload) {
    commit('removeCourseFavorite', payload)
  },
  UPDATE_PROFILE ({commit}, payload) {
    commit('updateProfile', payload)
    axios.post('http://172.104.167.197:4000/api/updateuser', payload)
  },
  PULL_COURSE_DATA ({commit}, payload) {
  },
  ADD_COURSE_CONTENT ({commit, state, dispatch}, payload) {
    let filesData = payload.data
    delete payload["data"]
    axios.post('http://172.104.167.197:4000/api/insertcoursecontent', payload)
    .then (res => {
      let result = res.data
      payload.content_id = result.content_id
      commit('addCourseContent', payload)
      payload.user_id = state.profile.user_id
      new Vue().$socket.emit('courseContent', payload)
      axios.post('http://172.104.167.197:4000/api/upload/' + result.content_id, filesData)
      .then((response) => {
        console.log('successMsg');
      })
      .catch((error) => {
        console.log('error');
      })

    })
  },
  async PULL_POPULAR_COURSE_HOME ({commit, state}) {
    if (state.popularCourseHome.length == 0) {
      await state.branchs.map(data => {
         axios.get('http://172.104.167.197:4000/api/popularcourse/' + data.branch_id)
        .then (res => {
          let result = res.data
          result.map(str => {
            let {user_id,fname,lname,user_img,sex,birthday,email,facebook,twitter,youtube ,course_id,branch_id,subject,code,price,des,cover,ts,coupon,lastUpdate, five, four, three, two, one, avg, length} = str
            commit('addUser', [{user_id,fname,lname,user_img,sex,birthday,email,facebook,twitter,youtube}])
            commit('addPopularCourseHome', [{fname,lname,user_id,course_id,branch_id,subject,code,price,des,cover,ts,coupon,lastUpdate}])
            let inStore = false
            state.courseVote.find(f => f.course_id == str.course_id  ? inStore = true : '')
            str.avg != 0 && inStore == false ? commit('addCourseVote', [{course_id, five, four, three, two, one, avg, length}]) : ''
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
          commit('addUser', [{user_id,fname,lname,user_img,sex,birthday,email,facebook,twitter,youtube}])
          commit('addPopularCourseIndex', [{fname,lname,user_id,course_id,branch_id,subject,code,price,des,cover,ts,coupon,lastUpdate}])
          let inStore = false
          state.courseVote.find(f => f.course_id == str.course_id  ? inStore = true : '')
          str.avg != 0 && inStore == false  ? commit('addCourseVote', [{course_id, five, four, three, two, one, avg, length}]) : ''
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
    commit('addCheckReview', [payload.course_id])
    axios.post('http://172.104.167.197:4000/api/insertreview', payload)
  },
  async PULL_COURSE_REVIEW ({commit, state}, courseId) {
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
      await axios.get('http://172.104.167.197:4000/api/get_course_content/' + course_id)
      .then (res => {
        content_id = res.data
      })
      content_id.map(con => {
        axios.get('http://172.104.167.197:4000/api/get_course_content_file/' + con.content_id)
        .then(res => {
          let result = res.data
          let file = []
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
      })
      qa.map(q => {
        axios.get('http://172.104.167.197:4000/api/get_course_q_comment/' + q.q_id)
        .then(res => {
          let {fname,lname,user_img,q_id,course_id,user_id,q_title,q_des,q_ts} = q
          commit('addCourseQA', [{fname,lname,user_img,q_id,course_id,user_id,q_title,q_des,q_ts,reply:res.data}])
        })
      })
    }
  },
  ADD_COURSE_QA ({commit, state}, payload) {
    axios.post('http://172.104.167.197:4000/api/insertcourse_q', payload)
    .then (res => {
      let result = res.data
      payload.q_id = result.q_id
      payload.fname = state.profile.fname
      payload.lname = state.profile.lname
      payload.user_img = state.profile.user_img,
      payload.reply = []
      commit('addCourseQA', [payload])
      new Vue().$socket.emit('qa', payload)
    })
  },
  ADD_COURSE_QA_COMMENT ({commit}, payload) {
      axios.post('http://172.104.167.197:4000/api/insertcourse_q_comment', payload)
  },
  ADD_COURSE_CHAT ({commit}, payload) {
    axios.post('http://172.104.167.197:4000/api/insertchat/', payload)
  },
  async PULL_COURSE_CHAT ({commit}, course_id) {
    await axios.get('http://172.104.167.197:4000/api/get_course_chat/' + course_id)
    .then (res => {
      let result = res.data
      commit('addCourseChat', result)
    })
  },
  ADD_COURSE_ANNO ({commit}, payload) {
    axios.post('http://172.104.167.197:4000/api/insertcourse_announce/', payload)
    .then (res=> {
      let result = res.data
      payload.annou_id = result.annou_id
      payload.reply = []
      payload.user_id = this.$store.state.profile.user_id
      payload.fname = this.$store.state.profile.fname
      payload.lname = this.$store.state.profile.lname
      payload.user_img = this.$store.state.profile.user_img
      commit('addCourseAnno', [payload])
      new Vue().$socket.emit('announcement', payload)
    })
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
      })
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
    // axios.post('http://172.104.167.197:4000/api/insertusertoroom/', payload)
  },
  USER_OFFLINE ({commit}, payload) {
    // axios.post('http://172.104.167.197:4000/api/deleteuserfromroom/', payload)
  },
  FETCH_COURSE_REVIEW ({commit, state}) {
    console.log('FETCH_COURSE_REVIEW')
    if (state.isCheckReview !== true) {
      axios.get('http://172.104.167.197:4000/api/get_review_course_user/' + state.profile.user_id)
      .then (res => {
        let result = res.data
        result.map(r => commit('addCheckReview', [r.course_id]))
        commit('isCheckReview' , true)
      })
    }
  },
  async FETCH_COURSE_PURCHASED ({commit, state}) {
    console.log('FETCH_COURSE_PURCHASED')
    if (state.isCoursePurchased !== true ) {
      axios.get('http://172.104.167.197:4000/api/get_all_userpurchased/' + state.profile.user_id)
      .then (res => {
        let result = res.data
        console.log('FETCH_COURSE_PURCHASED2: ' + JSON.stringify(result))
        commit('isCoursePurchased', true)
          result.map(rs => {
            let {course_id,user_id,branch_id,subject,code,price,des,cover,ts,lastUpdate,fname,lname,user_img,facebook,twitter,youtube, five, four, three, two, one, avg, length} = rs
            commit('addCoursePurchased', [rs.course_id])
            let courseinStore = false
            state.course.find(c => c.course_id == course_id ? courseinStore = true : '')
            if (courseinStore == false) {
              commit('addCourses', [{course_id,user_id,branch_id,subject,code,price,des,cover,ts,lastUpdate,fname,lname,user_img,facebook,twitter,youtube}])
              let voteinStore = false
              state.courseVote.find(f => f.course_id == rs.course_id  ? voteinStore = true : '')
              rs.avg != 0 && voteinStore == false ? commit('addCourseVote', [{course_id, five, four, three, two, one, avg, length}]) : ''
            }
          })
      })
    }
  },
  async FETCH_COURSE_CREATED ({commit, state}) {
    console.log('FETCH_COURSE_CREATED')
    if (state.isCourseCreated !== true ) {
      axios.get('http://172.104.167.197:4000/api/get_all_userowner/' + state.profile.user_id)
      .then (res => {
        console.log('FETCH_COURSE_CREATED2')
        let result = res.data
        commit('isCourseCreated', true)
          result.map(rs => {
            let {course_id,user_id,branch_id,subject,code,price,des,cover,ts,lastUpdate,fname,lname,user_img,facebook,twitter,youtube, five, four, three, two, one, avg, length} = rs
            commit('addCourseCreate', [rs.course_id])
            let courseinStore = false
            state.course.find(c => c.course_id == course_id ? courseinStore = true : '')
            if (courseinStore == false) {
              commit('addCourses', [{course_id,user_id,branch_id,subject,code,price,des,cover,ts,lastUpdate,fname,lname,user_img,facebook,twitter,youtube}])
              let voteinStore = false
              state.courseVote.find(f => f.course_id == rs.course_id  ? voteinStore = true : '')
              rs.avg != 0 && voteinStore == false ? commit('addCourseVote', [{course_id, five, four, three, two, one, avg, length}]) : ''
            }
          })
      })
    }
  },
  async FETCH_COURSE_FAVORITE ({commit, state}) {
    console.log('FETCH_COURSE_FAVORITE')
    if (state.isCourseFavorite !== true ) {
      axios.get('http://172.104.167.197:4000/api/get_all_userfavorite/' + state.profile.user_id)
      .then (res => {
        console.log('FETCH_COURSE_FAVORITE2')
        let result = res.data
        commit('isCourseFavorite', true)
          result.map(rs => {
            let {course_id,user_id,branch_id,subject,code,price,des,cover,ts,lastUpdate,fname,lname,user_img,facebook,twitter,youtube, five, four, three, two, one, avg, length} = rs
            commit('addCourseFavorite', [rs.course_id])
            let courseinStore = false
            state.course.find(c => c.course_id == course_id ? courseinStore = true : '')
            if (courseinStore == false) {
              commit('addCourses', [{course_id,user_id,branch_id,subject,code,price,des,cover,ts,lastUpdate,fname,lname,user_img,facebook,twitter,youtube}])
              let voteinStore = false
              state.courseVote.find(f => f.course_id == rs.course_id  ? voteinStore = true : '')
              rs.avg != 0 && voteinStore == false ? commit('addCourseVote', [{course_id, five, four, three, two, one, avg, length}]) : ''
            }
          })
      })
    }
  },
  FETCH_COURSE_NOTIFICATION ({commit, state}) {
    axios.get('http://172.104.167.197:4000/api/get_notification/'+ state.profile.user_id +'/1')
    .then (res => {
      let result = res.data
      commit('addNotification', result)
      console.log(result)
    })
    axios.get('http://172.104.167.197:4000/api/get_notification/'+ state.profile.user_id +'/2')
    .then (res => {
      let result = res.data
      commit('addNotification', result)
      console.log(result)
    })
  }
}
