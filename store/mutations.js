import Vue from 'vue'
export default {
  addProfile (state, data) {
    state.profile = data
  },
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
  addCoursePurchased: (state, data) => state.coursePurchased.unshift(...data),
  addCourseFavorite: (state, data) => state.courseFavorite.push(...data),
  removeCourseFavorite: (state, data) => {
    let a = state.courseFavorite.indexOf(data)
    let b = state.courseFavorite.splice(a, 1)
  },
  updateProfile: (state, data) => state.profile = data,
  addCheckPullCourse: (state, data) => state.checkPullCourse.push(data),
  addCourseCreate: (state, data) => state.courseCreate.push(...data),
  addCourseContent: (state, data) => state.courseDetail.courseContent.unshift(data),
  updateuserid: (state, data) => state.profile.user_id = Math.floor((Math.random() * 20) + 1),
  // updateuserid: (state, data) => state.profile.user_id = 2,
  addPopularCourseHome: (state, data) => state.popularCourseHome.push(...data),
  addPopularCourseIndex: (state, data) => state.popularCourseIndex.push(...data),
  addCourseUserPurchased: (state, data) => state.courseUserPurchased.unshift(...data),
  addCourseUserPurchasedSocket: (state, data) => {
    state.courseUserPurchased.find(res => res.course_id == data.course_id ? '' : state.courseUserPurchased.unshift(...data))
  },
  addCheckReview: (state, data) => state.checkReview.push(...data),
  addCourseVote: (state, data) => state.courseVote.push(...data),
  addCourseReview: (state, data) => state.courseReview.unshift(...data),
  addCourseReviewSocket: (state, data) => {
    state.courseReview.find(res => res.course_id == data.course_id ? '' : state.courseReview.unshift(...data))
  },
  updateCourseVote: (state, data) => {
      let have = false
      state.courseVote.find(res => {
        if (res.course_id == data.course_id) {
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
          have = true
        }
      })
      if (have == false) {
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
        state.courseVote.push(newData)
      }
  },
  addCourseQA: (state, data) => state.courseDetail.courseQA.unshift(...data),
  setCourseQA: (state, data) =>
    state.courseDetail.courseQA.push(...data),
  addCourseQAComment: (state, data) => {
    state.courseDetail.courseQA.map(res => res.q_id == data.q_id ? res.reply.push(data) : '')
  },
  addCourseChat: (state, data) => state.courseDetail.courseChat.push(...data),
  setCourseAnno: (state, data) => {
    state.courseDetail.courseAnno.push(...data)
  },
  addCourseAnno: (state, data) => state.courseDetail.courseAnno.unshift(...data),
  addCourseAnnoComment: (state, data) => {
    state.courseDetail.courseAnno.map(res => res.annou_id == data.annou_id ? res.reply.push(data) : '')
  },
  addNotification: (state, data) => state.notification.unshift(...data),
  addUserOnline: (state, data) => state.courseDetail.userOnline.unshift(...data),
  removeUserOnline: (state, data) => {
    let a = state.courseDetail.userOnline.indexOf(data)
    let b = state.courseDetail.userOnline.splice(a, 1)
  },
  removeAllUser: (state) => {
    state.courseDetail.userOnline = []
  },
  isCheckReview: (state, data) => state.isCheckReview = data,
  isCoursePurchased: (state, data) => state.isCoursePurchased = data,
  isCourseCreated: (state, data) => state.isCourseCreated = data,
  isCourseFavorite: (state, data) => state.isCourseFavorite = data,
  addUserData: (state, data) => state.profile = data,
  setNotificationCount: (state, data) => state.notificationCount = 0,
  addNotificationCount: (state) => state.notificationCount += 1,
  addUser_data: (state, data) => state.user.user_data.push(...data),
  addUser_owner: (state, data) => state.user.user_owner.push(...data),
  addUser_student: (state, data) => state.user.user_student.push(...data),
  addUser_review: (state, data) => state.user.user_review.push(...data),
  addUser_purchase: (state, data) => state.user.user_purchase.push(...data),
  updateCourse: (state, data) => state.course.map(c => c.course_id == data.course_id ? c = data : ''),
  logout: (state, data) => {
    console.log('state.coursePurchased: ' + state.coursePurchased)
    state.coursePurchased.map(cp => {
        new Vue().$socket.emit('unsubscribe', cp)
    })
    new Vue().$socket.emit('leave', state.profile.user_id)
    state.profile = {}
    state.coursePurchased = []
    state.courseFavorite = []
    state.courseCreate = []
    state.isCheckReview = false
    state.isCoursePurchased = false
    state.isCourseCreated = false
    state.isCourseFavorite = false
    state.notification = []
  },
  CHECK_IS_TUTOR: (state, course_id) => state.courseCreate.map(c => {
    if (c == course_id) {
      state.tutor.isTutor = true
      state.tutor.menuItems.push({title: 'หน้าจัดการ'})
    }
  }),
  SET_DEFAULT_TUTOR: (state) => {
    state.tutor.isTutor = false
    if (state.tutor.menuItems.length == 7) {
      state.tutor.menuItems.pop()
    }
  }
}
