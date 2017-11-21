<template>
  <div>
<br><br>

<template v-if="!dataOfQuestion">
  <v-container grid-list-lg>
      <v-layout row wrap>
        <v-flex xs12 sm11>
          <v-text-field
          solo
          label="ค้นหา"
          append-icon='search'
          >
          </v-text-field>
        </v-flex>
        <v-flex xs12 sm1>
            <create title="ตั้งคำถาม" type="1"  @result="dataFromQuill"></create>
        </v-flex>
      </v-layout>

    <br><br>        

    <v-card v-for="(data,index) in courseQA" :key="index">
          <v-list two-line>
            <v-list-tile avatar @click="" @click.native="QADetail(data)">
              <v-list-tile-avatar>
                <img :src="data.user_img">
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-sub-title>
                    <span>{{data.fname}} {{data.lname}}</span>
                </v-list-tile-sub-title>
                <v-list-tile-title>
                    <span>{{data.q_title}}</span>
                </v-list-tile-title>
              </v-list-tile-content>
              <v-list-tile-action>
                  <v-list-tile-action-text>{{data.q_ts | moment('from','now',true)}} ที่แล้ว</v-list-tile-action-text>
                  <v-list-tile-action-text class="mr-4 black--text">{{data.reply.length}}</v-list-tile-action-text>
                  <v-list-tile-action-text>ตอบกลับ</v-list-tile-action-text>
              </v-list-tile-action>
            </v-list-tile>
          </v-list>
        </v-card>
      </v-container>
    </template>
    <template v-else>
      <v-container grid-list-lg>
        <v-btn flat primary @click.native="dataOfQuestion = !dataOfQuestion">กลับไปสู่คำถามทั้งหมด</v-btn>

              <v-card>
                <v-card-text>
                  <v-list>
                    <v-list-tile avatar>
                      <v-list-tile-avatar >
                        <img :src="qa.user_img" alt="avatar" >
                      </v-list-tile-avatar>
                      <v-list-tile-content>
                        <v-list-tile-title><b>{{qa.q_title}}</b></v-list-tile-title>
                        <v-list-tile-sub-title>
                          <span class="blue--text"><nuxt-link :to="'/user/' + qa.user_id" class="blue--text">{{qa.fname}} {{qa.lname}}</nuxt-link></span> &nbsp;&nbsp; {{qa.q_ts | moment('from','now',true)}} ที่แล้ว
                        </v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    <blockquote>
                        <p v-html="qa.q_des"></p>
                    </blockquote>
                  </v-list>
                  <template v-if="qa.reply.length != 0">
                    <template v-for="data in $store.getters.COURSE_QA_COMMENT(qa.q_id)[0].reply">
                      <v-list>
                        <v-list-tile avatar>
                          <v-list-tile-avatar>
                            <img :src="data.user_img" alt="avatar" >
                          </v-list-tile-avatar>
                          <v-list-tile-content>
                              <v-list-tile-title>
                                <span class="blue--text"><nuxt-link :to="'/user/' + data.user_id" class="blue--text">{{data.fname}} {{data.lname}}</nuxt-link></span>  <span class="grey--text">&nbsp;&nbsp; {{data.q_ts | moment('from','now',true)}} ที่แล้ว</span>
                              </v-list-tile-title>
                              <v-list-tile-sub-title>{{data.q_com_text}}</v-list-tile-sub-title>
                          </v-list-tile-content>
                        </v-list-tile>
                      </v-list>
                    </template>
                </template>
                <template v-else>
                </template>
                    <v-layout row wrap>
                      <v-flex xs2 md1 text-xs-right>
                        <v-avatar>
                          <img :src="$store.state.profile.user_img" alt="avatar" >
                        </v-avatar>
                      </v-flex>
                      <v-flex xs10 md9>
                        <v-text-field v-model="replyText"  @keyup.enter="SendReply" solo label="พิมพ์คำตอบ" class="elevation-0" style="border:1px solid grey"></v-text-field>
                      </v-flex>
                      <v-flex xs12 md1>
                        <v-btn primary block @click.native="SendReply">ส่งคำตอบ</v-btn>
                      </v-flex>
                    </v-layout>
                </v-card-text>
              </v-card>
      </v-container>
    </template>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import create from '../addon/createQuestion.vue'
import Vue from 'vue'
const moment = require('moment')
Vue.use(require('vue-moment'), {
    moment
})
export default {
  created () {
    console.log('courseId: ' + this.courseId)
  },
  components: {
    create
  },
  data () {
    return {
      dataOfQuestion: false,
      replyText: '',
      qa: {}
    }
  },
  methods: {
    dataFromQuill (val) {
      let data = {
        course_id: this.$route.params.id,
        user_id: this.$store.state.profile.user_id,
        q_title: val.title,
        q_des: val.description,
        q_ts: Vue.moment().format('YYYY-MM-DD HH:mm:ss')
      }
      this.$store.dispatch('ADD_COURSE_QA', data)
    },
    QADetail (data) {
      this.dataOfQuestion = true
      console.log('QADetail: ' + this.dataOfQuestion)
      this.qa = data

    },
    SendReply () {
      console.log('SendReply')
      if (this.replyText != '') {
        let data = {
          q_id: this.qa.q_id,
          user_id: this.$store.state.profile.user_id,
          q_com_text: this.replyText,
          q_com_ts: Vue.moment().format('YYYY-MM-DD HH:mm:ss')
        }
        this.$store.dispatch('ADD_COURSE_QA_COMMENT', data)
        data.fname = this.$store.state.profile.fname
        data.lname = this.$store.state.profile.lname
        data.user_img = this.$store.state.profile.user_img,
        data.reply = []
        data.course_id = this.$route.params.id
        this.$store.commit('addCourseQAComment', data)
        this.$socket.emit('qa_comment', data)
        this.replyText = ''
      }
    }
  },
  computed: {
    courseQA () {
      return this.$store.getters.COURSE_QA(this.$route.params.id)
    }
  }
}
</script>
