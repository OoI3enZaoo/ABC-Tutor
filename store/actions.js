import axios from 'axios'
import Vue from 'vue'
export default {
  async PULL_BRANCHS ({state, commit}) {
    await axios.get('http://' + state.currentIP + '/api')
      .then(res => {
        let result = res.data
        commit('addBranchs', result)
      })
  },
  async PULL_COURSE_FROM_BRANCH_ID ({state, commit}, branch_id) {
    let isCheck = false
    state.checkPullCourse.find(f => f == branch_id ? isCheck = true : '')
    if (isCheck == false) {
        await axios.get('http://' + state.currentIP + '/api/getcourse/' + branch_id)
      .then(res => {
        let result = res.data
        commit('addCheckPullCourse', branch_id)
        result.map(rs => {
          let {course_id,user_id,branch_id,subject,code,price,des,cover,ts,lastUpdate,fname,lname,user_img,email,facebook,twitter,youtube, five, four, three, two, one, avg, length} = rs
          commit('addCourses', [{course_id,user_id,branch_id,subject,code,price,des,cover,ts,lastUpdate,fname,lname,user_img,email,facebook,twitter,youtube}])
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
      await axios.get('http://' + state.currentIP + '/api/course/' + courseId)
      .then (res => {
        let result = res.data
        result.map(rs => {
          let {course_id,user_id,branch_id,subject,code,price,des,cover,ts,lastUpdate,fname,lname,user_img,email,facebook,twitter,youtube, five, four, three, two, one, avg, length} = rs
          commit('addCourses', [{course_id,user_id,branch_id,subject,code,price,des,cover,ts,lastUpdate,fname,lname,user_img,email,facebook,twitter,youtube}])
          let inStore = false
          state.courseVote.find(f => f.course_id == rs.course_id  ? inStore = true : '')
          rs.avg != 0 && inStore == false ? commit('addCourseVote', [{course_id, five, four, three, two, one, avg, length}]) : ''
        })
      })
    }
  },
  async PUSH_COURSE ({state, commit}, data) {
    await axios.post('http://' + state.currentIP + '/api/insertcourse', data)
  },
  ADD_COURSE_PURCHASED ({state, commit}, payload) {
    commit('addCoursePurchased', [payload.course_id])
    axios.post('http://' + state.currentIP + '/api/insertuserpurchase', payload)
  },
  ADD_COURSE_FAVORITE ({state, commit}, payload) {
    const data = {
      course_id: payload,
      user_id: state.profile.user_id
    }
    axios.post('http://' + state.currentIP + '/api/insert_course_fav', data)
    commit('addCourseFavorite', [payload])
  },
  REMOVE_COURSE_FAVORITE ({state, commit}, payload) {
    const data = {
      course_id: payload,
      user_id: state.profile.user_id
    }
    axios.post('http://' + state.currentIP + '/api/delete_course_fav', data)
    commit('removeCourseFavorite', payload)
  },
  UPDATE_PROFILE ({state, commit}, payload) {
    commit('updateProfile', payload)
    axios.post('http://' + state.currentIP + '/api/updateuser', payload)
  },
  PULL_COURSE_DATA ({state, commit}, payload) {
  },
  ADD_COURSE_CONTENT ({commit, state, dispatch}, payload) {
    console.log('ADD_COURSE_CONTENT')
    let filesData = payload.data
    delete payload["data"]
    axios.post('http://' + state.currentIP + '/api/insertcoursecontent', payload)
    .then (res => {
      let result = res.data
      payload.content_id = result.content_id
      commit('addCourseContent', payload)
      payload.user_id = state.profile.user_id
      new Vue().$socket.emit('courseContent', payload)
      axios.post('http://' + state.currentIP + '/api/upload/' + result.content_id, filesData)
      .then((response) => {
        console.log('successMsg');
        // console.log(filesData)
      })
      .catch((error) => {
        console.log('error');
      })
    })
  },
  async PULL_POPULAR_COURSE_HOME ({commit, state}) {
    console.log('PULL_POPULAR_COURSE_HOME: ' + state.popularCourseHome.length)
    if (state.popularCourseHome.length == 0) {
      await state.branchs.map(data => {
         axios.get('http://' + state.currentIP + '/api/popularcourse/' + data.branch_id)
        .then (res => {
          let result = res.data
          result.map(str => {
            let {user_id,fname,lname,user_img,sex,birthday,email,facebook,twitter,youtube ,course_id,branch_id,subject,code,price,des,cover,ts,coupon,lastUpdate, five, four, three, two, one, avg, length} = str
            // commit('addUser', [{user_id,fname,lname,user_img,sex,birthday,email,facebook,twitter,youtube}])
            commit('addPopularCourseHome', [{fname,lname,user_id,course_id,branch_id,subject,code,price,des,cover,ts,coupon,lastUpdate}])
            let inStore = false
            state.courseVote.find(f => f.course_id == str.course_id  ? inStore = true : '')
            str.avg != 0 && inStore == false ? commit('addCourseVote', [{course_id, five, four, three, two, one, avg, length}]) : ''
          })
        })
      })
    }
  },
  PULL_POPULAR_COURSE_INDEX ({commit, state}) {
    if (state.popularCourseIndex.length == 0) {
      axios.get('http://' + state.currentIP + '/api/popularcourse')
      .then (res => {
        let result = res.data
        result.map(str => {
          let {user_id,fname,lname,user_img,sex,birthday,email,facebook,twitter,youtube ,course_id,branch_id,subject,code,price,des,cover,ts,coupon,lastUpdate, five, four, three, two, one, avg, length} = str
          // commit('addUser', [{user_id,fname,lname,user_img,sex,birthday,email,facebook,twitter,youtube}])
          commit('addPopularCourseIndex', [{fname,lname,user_id,course_id,branch_id,subject,code,price,des,cover,ts,coupon,lastUpdate}])
          let inStore = false
          state.courseVote.find(f => f.course_id == str.course_id  ? inStore = true : '')
          str.avg != 0 && inStore == false  ? commit('addCourseVote', [{course_id, five, four, three, two, one, avg, length}]) : ''
        })
      })
    }
  },
  async PULL_USER_PURCHASED ({commit, state}, course_id) {
    console.log('course_id: ' + course_id);
    let isCheck = false
    state.courseUserPurchased.find(cp => cp.course_id == course_id ? isCheck = true : '')
    if (isCheck == false) {
      await axios.get('http://' + state.currentIP + '/api/userpurchased/' + course_id)
      .then (res => {
        let result = res.data
        commit('addCourseUserPurchased', result)
      })
    }
  },
  async PULL_USER ({commit, state}, user_id) {
    let isCheck = false
    state.user.find(u => u.user_id == user_id ? isCheck = true : '')
    if (isCheck == false) {
      await axios.get('http://' + state.currentIP + '/api/user/' + user_id)
      .then(res => {
        let result = res.data
        // commit('addUser', result)
      })
    }
  },
  ADD_REVIEW ({commit, state}, payload) {
    commit('addCheckReview', [payload.course_id])
    axios.post('http://' + state.currentIP + '/api/insertreview', payload)
  },
  PULL_COURSE_REVIEW ({commit, state}, courseId) {
    let isCheck = false
    // console.log('PULL_COURSE_REVIEW: ' + courseId);
    state.courseReview.find(cr => cr.course_id == courseId ? isCheck = true : '')
    if (isCheck == false) {
      axios.get('http://' + state.currentIP + '/api/get_review_course_order_ts/' + courseId)
      .then (res => {
        let result = res.data
        commit('addCourseReview', result)
      })
    } else {

      commit('addCourseReview', result)
    }
  },
  async PULL_COURSE_CONTENT ({commit, state}, course_id) {
    let content_id
    let isCheck = false
    state.courseDetail.courseContent.find(res => res.course_id == course_id ? isCheck = true : '')
    if (isCheck == false) {
      await axios.get('http://' + state.currentIP + '/api/get_course_content/' + course_id)
      .then (res => {
        content_id = res.data
        new Vue().$socket.emit('subscribe', content_id)
      })
      content_id.map(con => {
        axios.get('http://' + state.currentIP + '/api/get_course_content_file/' + con.content_id)
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
      await axios.get('http://' + state.currentIP + '/api/get_course_q/' + course_id)
      .then(res => {
        qa = res.data
        commit('setCourseQA', res.data)
      })
      await qa.map((q) => {
        axios.get('http://' + state.currentIP + '/api/get_course_q_comment/' + q.q_id)
        .then(res => {
          let result = {
            q_id: q.q_id,
            comment: res.data
          }
          commit('setCourseQAComment', result)
        })
      })
    }
  },
  ADD_COURSE_QA ({commit, state}, payload) {
    axios.post('http://' + state.currentIP + '/api/insertcourse_q', payload)
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
  ADD_COURSE_QA_COMMENT ({state, commit}, payload) {
      axios.post('http://' + state.currentIP + '/api/insertcourse_q_comment', payload)
  },
  ADD_COURSE_CHAT ({state, commit}, payload) {
    let { course_id, user_id, chat_text, chat_ts } = payload
    axios.post('http://' + state.currentIP + '/api/insert_chat_mongo/', payload)
  },
  async PULL_COURSE_CHAT ({state, commit}, course_id) {
    let isCheck = false
    state.courseDetail.courseChat.map (cd => cd.course_id == course_id ? isCheck = true : '')
    if (isCheck == false) {
      await axios.get('http://' + state.currentIP + '/api/getchat/' + course_id)
      .then (res => {
        let result = res.data
        let reverse = result.reverse()
        commit('addCourseChat', reverse)
      })
    }
  },
  async PULL_COURSE_ANNO ({state,commit}, course_id) {
    let qa
    let isCheck = false
    state.courseDetail.courseAnno.find(res => res.course_id == course_id ? isCheck = true : '')
    if (isCheck == false) {
      await axios.get('http://' + state.currentIP + '/api/get_course_announce/' + course_id)
      .then(res => {
        qa = res.data
        commit('setCourseAnno', res.data)
      })
      await qa.map((q)  => {
        axios.get('http://' + state.currentIP + '/api/get_course_announce_comment/' + q.annou_id)
        .then(res => {
            let result = {
              annou_id: q.annou_id,
              comment: res.data
            }
            commit('setCourseAnnoComment', result)
        })
      })
    }
  },
  ADD_COURSE_ANNO ({commit, state}, payload) {
    axios.post('http://' + state.currentIP + '/api/insertcourse_announce/', payload)
    .then (res=> {
      let result = res.data
      payload.annou_id = result.annou_id
      payload.reply = []
      payload.user_id = state.profile.user_id
      payload.fname = state.profile.fname
      payload.lname = state.profile.lname
      payload.user_img = state.profile.user_img
      commit('addCourseAnno', [payload])
      new Vue().$socket.emit('announcement', payload)
    })
  },
  ADD_COURSE_ANNO_COMMENT ({state, commit}, payload) {
    axios.post('http://' + state.currentIP + '/api/insertcourse_announce_comment/', payload)
  },
  // async PULL_USER_ONLINE ({state, commit}, course_id) {
  //   let new_course_id = course_id +  11111
  //   let result
  //     await axios.get('http://' + state.currentIP + '/api/get_userinroom/' + course_id)
  //     .then (res => {
  //       result = res.data
  //       result.map(m => m.course_id =  m.course_id + '' + 11111)
  //     })
  //     commit('addUserOnline', result)
  //     let me = {
  //       course_id: new_course_id,
  //       user_id: state.profile.user_id,
  //       fname: state.profile.fname,
  //       lname: state.profile.lname,
  //       user_img: state.profile.user_img
  //     }
  //     commit('addUserOnline', [me])
  // },
  USER_ONLINE ({state, commit}, payload) {
    // axios.post('http://' + state.currentIP + '/api/insertusertoroom/', payload)
  },
  USER_OFFLINE ({state, commit}, payload) {
    // axios.post('http://' + state.currentIP + '/api/deleteuserfromroom/', payload)
  },
  FETCH_COURSE_REVIEW ({commit, state}) {
    console.log('FETCH_COURSE_REVIEW')
    if (state.isCheckReview !== true) {
        axios.get('http://' + state.currentIP + '/api/get_review_course_user/' + state.profile.user_id)
      .then (res => {
        let result = res.data
        result.map(r => commit('addCheckReview', [r.course_id]))
        commit('isCheckReview' , true)
      })
    }
  },
  async FETCH_COURSE_PURCHASED ({commit, state, dispatch}) {
    if (state.isCoursePurchased !== true ) {
      axios.get('http://' + state.currentIP + '/api/get_all_userpurchased/' + state.profile.user_id)
      .then (res => {
        let result = res.data
        commit('isCoursePurchased', true)
          result.map(rs => {
            let {course_id,user_id,branch_id,subject,code,price,des,cover,ts,lastUpdate,fname,lname,user_img,email,facebook,twitter,youtube, five, four, three, two, one, avg, length} = rs
            commit('addCoursePurchased', [rs.course_id])
            new Vue().$socket.emit('subscribe', rs.course_id)
            let courseinStore = false
            state.course.find(c => c.course_id == course_id ? courseinStore = true : '')
            if (courseinStore == false) {
              commit('addCourses', [{course_id,user_id,branch_id,subject,code,price,des,cover,ts,lastUpdate,fname,lname,user_img,email,facebook,twitter,youtube}])
              let voteinStore = false
              state.courseVote.find(f => f.course_id == rs.course_id  ? voteinStore = true : '')
              rs.avg != 0 && voteinStore == false ? commit('addCourseVote', [{course_id, five, four, three, two, one, avg, length}]) : ''
            }
          })
          dispatch('FETCH_NOTIFICATION', state.coursePurchased)
      })
    }
  },
  async FETCH_COURSE_CREATED ({commit, state}) {
    console.log('FETCH_COURSE_CREATED')
    if (state.isCourseCreated !== true ) {
      axios.get('http://' + state.currentIP + '/api/get_all_userowner/' + state.profile.user_id)
      .then (res => {
        console.log('FETCH_COURSE_CREATED2')
        let result = res.data
        commit('isCourseCreated', true)
          result.map(rs => {
            let {course_id,user_id,branch_id,subject,code,price,des,cover,ts,lastUpdate,fname,lname,user_img,email,facebook,twitter,youtube, five, four, three, two, one, avg, length} = rs
            commit('addCourseCreate', [rs.course_id])
            new Vue().$socket.emit('subscribe', rs.course_id)
            let courseinStore = false
            state.course.find(c => c.course_id == course_id ? courseinStore = true : '')
            if (courseinStore == false) {
              commit('addCourses', [{course_id,user_id,branch_id,subject,code,price,des,cover,ts,lastUpdate,fname,lname,user_img,email,facebook,twitter,youtube}])
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
      axios.get('http://' + state.currentIP + '/api/get_all_userfavorite/' + state.profile.user_id)
      .then (res => {
        console.log('FETCH_COURSE_FAVORITE2')
        let result = res.data
        commit('isCourseFavorite', true)
          result.map(rs => {
            let {course_id,user_id,branch_id,subject,code,price,des,cover,ts,lastUpdate,fname,lname,user_img,email,facebook,twitter,youtube, five, four, three, two, one, avg, length} = rs
            commit('addCourseFavorite', [rs.course_id])
            let courseinStore = false
            state.course.find(c => c.course_id == course_id ? courseinStore = true : '')
            if (courseinStore == false) {
              commit('addCourses', [{course_id,user_id,branch_id,subject,code,price,des,cover,ts,lastUpdate,fname,lname,user_img,email,facebook,twitter,youtube}])
              let voteinStore = false
              state.courseVote.find(f => f.course_id == rs.course_id  ? voteinStore = true : '')
              rs.avg != 0 && voteinStore == false ? commit('addCourseVote', [{course_id, five, four, three, two, one, avg, length}]) : ''
            }
          })
      })
    }
  },
  FETCH_NOTIFICATION ({state, commit}, payload) {
    axios.get('http://' + state.currentIP + '/api/get_notification_type1')
    .then (res => {
      let result = res.data
      commit('addNotification', result)
    })
    axios.get('http://' + state.currentIP + '/api/get_notification_type2/' + payload)
    .then (res => {
      let result = res.data
      commit('addNotification', result)
    })
  },
  // ADD_NOTIFICATION ({commit}, payload) {
  //   axios.post('http://' + state.currentIP + '/api/insertnotification', payload)
  // },
  nuxtClientInit ({state, commit, dispatch}) {
    if (state.branchs.length == 0) {
      dispatch('PULL_BRANCHS')
    }
    let pathname = window.location.pathname.split('/')[1]
    let pathvalue = window.location.pathname.split('/')[2]
    if (pathname == 'mycourse') {
      if (state.courseCreate == '') {
        dispatch('FETCH_COURSE_CREATED')
      }
      commit('CHECK_IS_TUTOR', pathvalue)
    }
    // if (state.isLogin == true) {
    //   dispatch('FETCH_COURSE_REVIEW')
    //   dispatch('FETCH_COURSE_CREATED')
    //   dispatch('FETCH_COURSE_FAVORITE')
    //   dispatch('FETCH_COURSE_PURCHASED')
    // }
  },

  PULL_USER_DATA ({state, commit}, user_id) {
    let isCheck = false
    state.user.user_data.find(u => user_id == user_id ? isCheck = true : '')
    if (isCheck == false) {
      axios.get('http://' + state.currentIP + '/api/user/' + user_id)
      .then (res => {
        let result = res.data
        commit('addUser_data', result)
      })
    }
  },
  PULL_USER_OWNER ({state, commit}, user_id) {
    let isCheck = false
    state.user.user_owner.find(u => user_id == user_id ? isCheck = true : '')
    if (isCheck == false) {
      axios.get('http://' + state.currentIP + '/api/get_all_userowner/' + user_id)
      .then (res => {
        let result = res.data
        commit('addUser_owner', result)
      })
    }
  },
  PULL_USER_STUDENT ({state, commit}, user_id) {
    let isCheck = false
    state.user.user_student.find(u => user_id == user_id ? isCheck = true : '')
    if (isCheck == false) {
      axios.get('http://' + state.currentIP + '/api/get_all_my_user/' + user_id)
      .then (res => {
        let result = res.data
        result[0].user_id = user_id
        commit('addUser_student', result)
      })
    }
  },
  PULL_USER_REVIEW ({state, commit}, user_id) {
    let isCheck = false
    state.user.user_review.find(u => user_id == user_id ? isCheck = true : '')
    if (isCheck == false) {
      axios.get('http://' + state.currentIP + '/api/get_all_my_review/' + user_id)
      .then (res => {
        let result = res.data
        result[0].user_id = user_id
        commit('addUser_review', result)
      })
    }
  },
  PULL_USER_PURCHASE ({state, commit}, user_id) {
    let isCheck = false
    state.user.user_purchase.find(u => user_id == user_id ? isCheck = true : '')
    if (isCheck == false) {
      axios.get('http://' + state.currentIP + '/api/get_all_userpurchased/' + user_id)
      .then (res => {
        let result = res.data
        result.map(r => r.user_id = user_id)
        commit('addUser_purchase', result)
      })
    }
  },

  UPDATE_COURSE ({state, commit}, data) {
    axios.post('http://' + state.currentIP + '/api/updatecourse/', data)
    console.log('UPDATE_COURSE');
    new Vue().$socket.emit('update_course', data)
  }
}
