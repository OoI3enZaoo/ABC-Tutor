<template>
  <div>
    <v-container grid-list-lg>
      <template v-if="courseContent.length == 0">
          <template v-if="isTutor">
            <v-layout>
              <v-flex xs12 text-xs-center>
                <v-card height="400px">
                  <v-card-text>
                    <div>
                        <v-layout row wrap style="padding-top:80px;">
                          <v-flex xs12 md2 offset-md4 >
                              <img :src="contentIcon" height="150">
                          </v-flex>
                          <v-flex xs12 md5 text-md-left text-xs-center mt-4>
                            <h5>คุณยังไม่ได้เพิ่มวีดีโอของคอร์สเลย</h5>
                              <createCourseContent @contentcourse = "contentcourse"></createCourseContent>
                          </v-flex>
                        </v-layout>
                    </div>
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>

          </template>
          <template v-else>
              <noDataCard :png="contentIcon" text="ยังไม่มีวีดีโอในตอนนี้" ></noDataCard>
          </template>
      </template>
      <template v-else v-for="data in courseContent">
          <expansion :title="data.content_title" :time= "data.content_ts" :description="data.content_des" :files="data.files" :contentId="data.content_id"></expansion>
      <br>
      </template>
<br><br><br><br>
    </v-container>
  </div>
</template>
<script>

import createCourseContent from './addon/createCourseContent.vue'
import expansion from './addon/expansion.vue'
import Vue from 'vue'
import noDataCard from '../../noDataCard.vue'
const moment = require('moment')
Vue.use(require('vue-moment'), {
    moment
})
export default {
  components: {
    createCourseContent,
    expansion,
    noDataCard
  },
  data () {
    return {
      contentIcon: require('../../../static/content.png')
    }
  },
  computed: {
    courseContent () {
      return this.$store.getters.COURSE_CONTENT(this.$route.params.id)
    },
    course () {
      return this.$store.getters.COURSE_FROM_ID(this.$route.params.id)[0]
    },
    isTutor () {
      return this.$store.state.tutor.isTutor
    }
  },
  methods: {
    contentcourse (str) {
      let data = str
      data.course_id = this.$route.params.id
      data.content_ts = Vue.moment().format('YYYY-MM-DD HH:mm:ss')
      this.$store.dispatch('ADD_COURSE_CONTENT', data)
      let notification = {
        course_id: this.course.course_id,
        user_id: this.$store.state.profile.user_id,
        fname: this.$store.state.profile.fname,
        lname: this.$store.state.profile.lname,
        subject: this.course.subject,
        code: this.course.code,
        user_img: this.$store.state.profile.user_img,
        noti_cover: this.course.cover,
        noti_des: 'มีเนื้อหาของคอร์สใหม่',
        noti_type: 2,
        noti_ts: Vue.moment().format('YYYY-MM-DD HH:mm:ss')
      }
      this.$socket.emit('noti_content', notification)
      let {course_id, user_id, noti_cover, noti_des, noti_type, noti_ts} = notification
      this.$store.dispatch('ADD_NOTIFICATION', {course_id, user_id, noti_cover, noti_des, noti_type, noti_ts})
    }
  }
}
</script>
