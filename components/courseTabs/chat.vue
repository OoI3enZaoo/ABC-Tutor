<template>
  <div>
    <!-- {{$store.state.courseDetail.userOnline}} -->
    <v-container>
      <!-- <p class="headline">แชท</p>
      <blockquote>สามารถเข้ามาพูดคุยกันได้ที่นี่เลย</blockquote>
      <br> -->

          <v-card>
              <v-list two-line>
                <v-subheader>สนทนา</v-subheader>
                <div id="container" style="overflow:scroll; overflow-x:hidden; height:500px; " class="grey lighten-4">
                    <template v-for="data in Messages">
                        <v-list-tile avatar >
                          <v-list-tile-avatar>
                            <img :src="data.user_img" alt="avatar">
                          </v-list-tile-avatar>
                          <v-list-tile-content>
                              <v-list-tile-title>{{data.fname}} {{data.lname}} &nbsp;&nbsp; <span class="grey--text">{{data.date}}</span> </v-list-tile-title>
                              <v-list-tile-sub-title>{{data.chat_text}}</v-list-tile-sub-title>
                          </v-list-tile-content>
                          <v-list-tile-action>
                            <v-list-tile-action-text>{{data.chat_ts | moment('from','now', true)}}</v-list-tile-action-text>
                          </v-list-tile-action>
                        </v-list-tile>
                      </template>
                </div>
              </v-list>
              <v-text-field class="elevation-0"solo label="พิมพ์ข้อความที่นี่..."  v-model="chatText" @keyup.enter="sendMessage"></v-text-field>
              <!-- <v-layout>
                <v-flex xs10>
                  <v-text-field class="elevation-0"solo label="พิมพ์ข้อความที่นี่..."  v-model="chatText" @keyup.enter="sendMessage"></v-text-field>
                </v-flex>
                <v-flex xs2>
                  <div class="blue">
                    <v-card class="elevation-0" style="display:inline;"><a @click="sendMessage(text)" tag="span"><v-card-text class="white--text"><h6 class="ml-3"style="display:inline;">ส่ง</h6></v-card-text></a></v-card>
                  </div>
                </v-flex>
              </v-layout> -->

          </v-card>

        <!-- <v-flex lg2 md3 sm4>
            <v-card class="hidden-xs-only">
                  <div style="height:610px; overflow:scroll; overflow-x:hidden;">
                      <v-list>
                        <v-subheader>ออนไลน์</v-subheader>
                        <template v-for="data in uesrOnline">
                            <v-list-tile avatar @click="" >
                              <v-list-tile-avatar>
                                  <img :src="data.user_img">
                              </v-list-tile-avatar>
                              <v-list-tile-content>
                                <v-list-tile-sub-title>
                                  <span>{{data.fname}} {{data.lname}}</span>
                                </v-list-tile-sub-title>
                              </v-list-tile-content>
                            </v-list-tile>
                            <v-divider inset></v-divider>
                          </template>
                      </v-list>
                  </div>
            </v-card>
        </v-flex> -->


    </v-container>
    <br><br><br>
  </div>
</template>
<script>
import Vue from 'vue'
const moment = require('moment')
Vue.use(require('vue-moment'), {
    moment
})
export default {
  created () {
    moment.lang('th-TH')
    this.roomId = this.$route.params.id
    let data = {
      course_id: this.roomId,
      user_id: this.$store.state.profile.user_id,
      fname: this.$store.state.profile.fname,
      lname: this.$store.state.profile.lname,
      user_img: this.$store.state.profile.user_img
    }
    let {course_id,user_id} = data
    // this.$store.dispatch('USER_ONLINE', {course_id,user_id})
    let socket = data
    socket.course_id += 11111
    this.$socket.emit('online', socket)
  },
  mounted () {
    this.scrollToEnd()
  },
  data () {
    return {
      roomId: 1212335,
      online_id: '',
      userData: {
        name: 'ben',
        img: 'https://scontent.fbkk1-3.fna.fbcdn.net/v/t1.0-9/18670848_1440946712632376_9108286887308110690_n.jpg?oh=aed0ea5bba94084d3114d146c6c7a907&oe=5A267C89'
      },
      message: [],
      chatText: ''
    }
  },
  methods: {
    sendMessage () {
      if(this.chatText != '') {
        // console.log('message: ' + this.chatText)
        let data = {
          course_id: this.$route.params.id,
          user_id: this.$store.state.profile.user_id,
          chat_text: this.chatText,
          chat_ts: Vue.moment().format('YYYY-MM-DD HH:mm:ss')
        }
        this.$store.dispatch('ADD_COURSE_CHAT', data)
        data.fname = this.$store.state.profile.fname
        data.lname = this.$store.state.profile.lname
        data.user_img = this.$store.state.profile.user_img
        this.$store.commit('addCourseChat', [data])
        this.$socket.emit('chat', data)
        this.chatText = ''
        this.scrollToEnd()
      }
    },
    scrollToEnd () {
      setTimeout(() => {
        var container = this.$el.querySelector('#container')
        container.scrollTop = container.scrollHeight
        this.chatText = ''
      }, 100)
    }
  },
  computed: {
    Messages () {
      return this.$store.getters.COURSE_CHAT(this.$route.params.id)
    }
    // uesrOnline () {
    //   return this.$store.getters.COURSE_USER(this.$route.params.id + 11111)
    // }
  }
  // beforeDestroy () {
  //   let data = {
  //     course_id: this.roomId,
  //     user_id: this.$store.state.profile.user_id,
  //     fname: this.$store.state.profile.fname,
  //     lname: this.$store.state.profile.lname,
  //     user_img: this.$store.state.profile.user_img
  //   }
  //   let {course_id, user_id} = data
  //   this.$store.dispatch('USER_OFFLINE', {course_id, user_id})
  //   this.$store.commit('removeAllUser')
  //   let socket = data
  //   socket.course_id += 11111
  //   this.$socket.emit('offline', socket)
  //   console.log('beforeDestroy:' + JSON.stringify(socket))
  // },
  // destroyed () {
  //   let data = {
  //     course_id: this.roomId,
  //     user_id: this.$store.state.profile.user_id,
  //     fname: this.$store.state.profile.fname,
  //     lname: this.$store.state.profile.lname,
  //     user_img: this.$store.state.profile.user_img
  //   }
  //   let {course_id, user_id} = data
  //   this.$store.dispatch('USER_OFFLINE', {course_id, user_id})
  //   this.$store.commit('removeAllUser')
  //   let socket = data
  //   socket.course_id += 11111
  //   this.$socket.emit('offline', socket)
  //   console.log('beforeDestroy:' + JSON.stringify(socket))
  // }
}
</script>
