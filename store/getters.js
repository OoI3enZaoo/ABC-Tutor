export default {
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
  COURSE_POPULAR_INDEX_FROM_ID (state) {
    return courseId => state.popularCourseIndex.filter(item => {
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
  // COURSE_USER (state) {
  //   return courseId => state.courseDetail.userOnline.filter(item => {
  //     return courseId == item.course_id
  //   })
  // },
  NOTIFICATION (state) {
    return typeId => state.notification.filter(item => {
      return typeId == item.noti_type
    })
  },
  USER_DATA (state) {
    return typeId => state.user.user_data.filter(item => {
      return typeId == item.user_id
    })
  },
  USER_OWNER (state) {
    return typeId => state.user.user_owner.filter(item => {
      return typeId == item.user_id
    })
  },
  USER_STUDENT (state) {
    return typeId => state.user.user_student.filter(item => {
      return typeId == item.user_id
    })
  },
  USER_REVIEW (state) {
    return typeId => state.user.user_review.filter(item => {
      return typeId == item.user_id
    })
  },
  USER_PURCHASE (state) {
    return typeId => state.user.user_purchase.filter(item => {
      return typeId == item.user_id
    })
  }
}
