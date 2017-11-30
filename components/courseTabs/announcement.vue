<template>
  <div>
    <v-container grid-list-lg>
          <template v-if="courseAnno.length == 0">
              <template v-if="isTutor">
                <v-layout>
                  <v-flex xs12 text-xs-center>
                    <v-card height="400px">
                      <v-card-text>
                        <div>
                            <v-layout row wrap style="padding-top:80px;">
                              <v-flex xs12 md2 offset-md4 >
                                  <img :src="announcement" height="150">
                              </v-flex>
                              <v-flex xs12 md5 text-md-left text-xs-center mt-4>
                                <h5>คอร์สของคุณยังไม่มีการประกาศเลย</h5>
                                  <create title="สร้างคำประกาศ" type="2"  @result="dataFromQuill"></create>
                              </v-flex>
                            </v-layout>
                        </div>
                      </v-card-text>
                    </v-card>
                  </v-flex>
                </v-layout>
              </template>
              <template v-else>
                <v-layout>
                  <v-flex xs12 text-xs-center>
                    <v-card height="400px">
                      <v-card-text>
                        <div>
                            <v-layout row wrap style="padding-top:80px;">
                              <v-flex xs12 md2 offset-md4 >
                                  <img :src="announcement" height="150">
                              </v-flex>
                              <v-flex xs12 md5 text-md-left text-xs-center mt-4>
                                <h5>ยังไม่มีการประกาศจากเจ้าของคอร์ส</h5>
                              </v-flex>
                            </v-layout>
                        </div>
                      </v-card-text>
                    </v-card>
                  </v-flex>
                </v-layout>
              </template>
          </template>
        <template v-else v-for="(data, i) in courseAnno" >
            <div class="text-xs-right mb-2">
              <create v-if="isTutor && i == 0" title="สร้างคำประกาศ" type="2"  @result="dataFromQuill" ></create>
            </div>
            <v-card>
              <v-card-text>

                        <v-list >
                          <v-list-tile>
                            <v-list-tile-avatar>
                              <img :src="data.user_img" alt="">
                            </v-list-tile-avatar>
                            <v-list-tile-content>
                              <v-list-tile-title><span class="blue--text">{{data.fname}} {{data.lname}}</span></v-list-tile-title>
                              <v-list-tile-sub-title>
                                <span class="grey--text">ประกาศเมื่อ {{data.annou_ts | moment('from','now',true)}} ก่อน</span>
                              </v-list-tile-sub-title>
                            </v-list-tile-content>
                          </v-list-tile>
                        </v-list>
                        <div class="ma-3">
                          <p v-html="data.annou_text" class="black--text"></p>
                          <div class="ma-2">
                            <v-layout>
                              <v-flex xs2 sm2 md1 lg1>
                                <v-avatar>
                                  <img :src="$store.state.profile.user_img" >
                                </v-avatar>
                              </v-flex>
                              <v-flex xs10 sm10 md11 lg11>
                                <v-text-field
                                  class="elevation-0"
                                  solo
                                  label='พิมข้อความของคุณที่นี่..'
                                  single-line
                                  style="border: solid 1px grey;"
                                  @keyup.enter="SendReply($event.target.value,data)"
                                ></v-text-field>
                              </v-flex>
                            </v-layout>

                            <template v-if="data.showReply == true">
                              <v-layout v-for="(reply,index) in data.reply" :key="index">
                                  <v-flex xs2 sm2 md1 lg1>
                                    <v-avatar>
                                      <img :src="reply.user_img" alt="avatar" >
                                    </v-avatar>
                                  </v-flex>
                                  <v-flex xs10 sm10 md11 lg11>
                                      <span class="blue--text">{{reply.fname}} {{reply.lname}}</span> &nbsp;<span class="grey--text">{{data.annou_com_ts | moment('from','now',true)}}</span><br>
                                      <span>{{reply.annou_com_text}}</span>
                                  </v-flex>
                                  <br><br><br>
                              </v-layout>
                            </template>

                          </div>
                            <template v-if="data.reply.length !== 0 && data.showReply == false">
                              <v-btn outline color="primary" @click.native="data.showReply = true">ดูการตอบกลับ ({{data.reply.length}})</v-btn>
                            </template>
                        </div>


                        </v-card-text>
                      </v-card>


            <div style="margin-top:20px;"></div>
          </template>

    </v-container>
  </div>
</template>
<script>
import Vue from 'vue'
const moment = require('moment')
Vue.use(require('vue-moment'), {
    moment
})
import create from './addon/createQuestion.vue'
export default {
  data () {
    return {
      replyText: '',
      announcement: require('../../static/announcement.png'),
    }
  },
  components: {
    create
  },
  methods: {
    dataFromQuill (val) {
      let data = {
        annou_id: new Date().getTime(),
        course_id: this.$route.params.id,
        annou_text: val.description,
        annou_ts: Vue.moment().format('YYYY-MM-DD HH:mm:ss')
      }
      this.$store.dispatch('ADD_COURSE_ANNO', data)
      let des
      if (this.course.code !== '') {
        des = 'มีการประกาศใหม่จากติวเตอร์ (' + this.course.code + ')'
      } else {
        des = 'มีการประกาศใหม่จากติวเตอร์'
      }
      let notification = {
        course_id: this.course.course_id,
        subject: this.course.subject,
        code: this.course.code,
        user_id: this.$store.state.profile.user_id,
        fname: this.$store.state.profile.fname,
        lname: this.$store.state.profile.lname,
        user_img: this.$store.state.profile.user_img,
        noti_des: des,
        noti_cover: this.course.cover,
        noti_type: 2,
        noti_ts: Vue.moment().format('YYYY-MM-DD HH:mm:ss')
      }
      this.$socket.emit('noti_annountment', notification)
      let {course_id, user_id, noti_cover, noti_des, noti_type, noti_ts} = notification
      this.$store.dispatch('ADD_NOTIFICATION', {course_id, user_id, noti_cover, noti_des, noti_type, noti_ts})
    },
    SendReply (message, val) {
        let data = {
          annou_id: val.annou_id,
          user_id: this.$store.state.profile.user_id,
          annou_com_text: message,
          annou_com_ts: Vue.moment().format('YYYY-MM-DD HH:mm:ss')
        }
        this.$store.dispatch('ADD_COURSE_ANNO_COMMENT', data)
        data.user_id = this.$store.state.profile.user_id
        data.fname = this.$store.state.profile.fname
        data.lname = this.$store.state.profile.lname
        data.user_img = this.$store.state.profile.user_img
        data.course_id = this.$route.params.id
        this.$store.commit('addCourseAnnoComment', data)
        this.$socket.emit('announcement_comment', data)
        console.log('message: ' + JSON.stringify(data))
    }
  },
  computed: {
    courseAnno () {
      return this.$store.getters.COURSE_ANNO(this.$route.params.id)
    },
    course () {
      return this.$store.getters.COURSE_FROM_ID(this.$route.params.id)[0]
    },
    isTutor () {
      return this.$store.state.tutor.isTutor
    }
  }
}
</script>
