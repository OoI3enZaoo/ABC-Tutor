<template>
  <div>

    <v-container grid-list-lg>
      <v-switch color="primary" v-model="isTutor" label="เป็นติวเตอร์"></v-switch>

          <v-layout row wrap>
            <v-flex xs10>
            </v-flex>
            <v-flex xs2 text-xs-right >
              <template v-if="isTutor">
                  <create title="สร้างคำประกาศ" type="2" style="margin-left:60px;" @result="dataFromQuill"></create>
              </template>
            </v-flex>

<template v-for="(data, i) in courseAnno" style="margin-top:50px;">
            <v-expansion-panel expand>
                <v-expansion-panel-content>

                      <div slot="header">
                        <v-list two-line>
                          <v-list-tile>
                            <v-list-tile-avatar>
                              <img :src="data.user_img" alt="">
                            </v-list-tile-avatar>
                            <v-list-tile-content>
                              <v-list-tile-title><span class="blue--text">{{data.fname}} {{data.lname}}</span></v-list-tile-title>
                              <v-list-tile-sub-title>
                                <span class="grey--text">ประกาศเมื่อ {{data.annou_ts | moment('from','now',true)}} ก่อน</span>
                                    <p v-html="data.annou_text"></p>
                              </v-list-tile-sub-title>

                            </v-list-tile-content>
                          </v-list-tile>
                        </v-list>
                        <v-text-field
                          class="elevation-1"
                          solo
                          label='พิมข้อความของคุณที่นี่..'
                          single-line
                          @keyup.enter="SendReply($event.target.value,data)"
                        ></v-text-field>
                      </div>
                      <v-card>
                        <v-card-text>
                          <v-layout v-for="(reply,index) in data.reply" :key="index">
                              <v-flex xs2 sm1>
                                <v-avatar>
                                  <img :src="reply.user_img" alt="avatar" >
                                </v-avatar>
                              </v-flex>
                              <v-flex xs10 sm3>
                                  <span class="blue--text">{{reply.fname}} {{reply.lname}}</span> &nbsp;<span class="grey--text">{{data.annou_com_ts | moment('from','now',true)}}</span><br>
                                  <span>{{reply.annou_com_text}}</span>
                              </v-flex>
                              <br><br><br>
                          </v-layout>
                        </v-card-text>
                      </v-card>
                </v-expansion-panel-content>

            </v-expansion-panel>

          </template>
<br><br>

            <!-- <template v-for="(data,i) in courseAnno">
                  <v-flex xs12 :key="i">
                    <v-card>
                      <v-card-text>
                        <v-layout>
                          <v-flex xs5 sm2>
                            <v-avatar :side="80">
                              <img :src="data.user_img" alt="avatar" >
                            </v-avatar>
                          </v-flex>
                          <v-flex xs7 sm4>
                            <span class="blue--text">{{data.fname}} {{data.lname}}</span><br>
                            <span class="grey--text">ประกาศเมื่อ {{data.annou_ts | moment('from','now',true)}} ก่อน</span>
                          </v-flex>
                        </v-layout>
                        <br>
                        <p v-html="data.annou_text"></p>
                        <v-layout>
                          <v-flex xs2 sm1>
                            <v-avatar>
                              <img :src="$store.state.profile.user_img" alt="avatar" >
                            </v-avatar>
                          </v-flex>
                          <v-flex xs10 sm11>
                              <v-text-field
                                class="elevation-1"
                                solo
                                label='พิมข้อความของคุณที่นี่..'
                                single-line
                                @keyup.enter="SendReply($event.target.value,data)"
                              ></v-text-field>
                          </v-flex>
                        </v-layout>
                        <br>
                        <v-layout v-for="(reply,index) in data.reply" :key="index">
                            <v-flex xs2 sm1>
                              <v-avatar>
                                <img :src="reply.user_img" alt="avatar" >
                              </v-avatar>
                            </v-flex>
                            <v-flex xs10 sm3>
                                <span class="blue--text">{{reply.fname}} {{reply.lname}}</span> &nbsp;<span class="grey--text">{{data.annou_com_ts | moment('from','now',true)}}</span><br>
                                <span>{{reply.annou_com_text}}</span>
                            </v-flex>
                            <br><br><br>
                        </v-layout>
                      </v-card-text>
                    </v-card>
                  </v-flex>
              </template> -->
          </v-layout>
          <br><br><br><br>
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
      isTutor: false,
      replyText: ''
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
      let notification = {
        course_id: this.course.course_id,
        subject: this.course.subject,
        code: this.course.code,
        user_id: this.$store.state.profile.user_id,
        fname: this.$store.state.profile.fname,
        lname: this.$store.state.profile.lname,
        user_img: this.$store.state.profile.user_img,
        noti_des: 'มีการประกาศใหม่จากติวเตอร์',
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
    }
  }
}
</script>
