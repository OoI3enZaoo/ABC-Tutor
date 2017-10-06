<template>
  <div>
    <v-container>
      <p class="headline">แชท</p>
      <br>
      <v-layout>
        <v-flex lg10 md9 sm8 xs12>
          <v-card>
              <v-list two-line>
                <v-subheader>สนทนา</v-subheader>
                <div id="container" style="overflow:scroll; overflow-x:hidden; height:500px;" class="grey lighten-4">
                    <template v-for="data in Messages">
                        <v-list-tile avatar >
                          <v-list-tile-avatar>
                            <img :src="data.user_img" alt="avatar">
                          </v-list-tile-avatar>
                          <v-list-tile-content>
                              <v-list-tile-title>{{data.fname}} {{data.lname}} &nbsp;&nbsp; <span class="grey--text">{{data.date}}</span> </v-list-tile-title>
                              <v-list-tile-sub-title>{{data.chat_text}}</v-list-tile-sub-title>
                          </v-list-tile-content>
                        </v-list-tile>
                      </template>
                </div>

              </v-list>
            <v-text-field solo label="พิมช้อความ"  v-model="chatText" @keyup.enter="sendMessage"></v-text-field>
          </v-card>
        </v-flex>
        <v-flex lg2 md3 sm4>
            <v-card class="hidden-xs-only">
                  <div style="height:610px; overflow:scroll; overflow-x:hidden;">
                      <v-list>
                        <v-subheader>ออนไลน์</v-subheader>
                        <template v-for="a in 5">
                            <v-list-tile avatar @click="" >
                              <v-list-tile-avatar>
                                  <img src="http://mostfamousperson.net/BillGates.png" alt="avatar">
                              </v-list-tile-avatar>
                              <v-list-tile-content>
                                <v-list-tile-sub-title>
                                  <span>Bill Gates</span>
                                </v-list-tile-sub-title>

                              </v-list-tile-content>
                            </v-list-tile>
                            <v-divider inset></v-divider>
                          </template>
                      </v-list>
                  </div>
            </v-card>


        </v-flex>
      </v-layout>

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
    this.online_id = this.$route.params.id +1
    let data = {
      course_id: this.online_id,
      fname: this.$store.state.profile.fname,
      lname: this.$store.state.profile.lname,
      user_img: this.$store.state.profile.user_img
    }
    this.$socket.emit('online', data)
  },
  mounted () {
    this.scrollToEnd()
    this.$options.sockets.online = (data) => {
      console.log('online: ' + JSON.stringiyfy(data))
    }
    this.$options.sockets.offline = (data) => {
      console.log('offline: ' + JSON.stringiyfy(data))
    }
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
      console.log('message: ' + this.chatText)
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
      this.scrollToEnd()
    },
    scrollToEnd () {
      setTimeout(()=> {
        var container = this.$el.querySelector('#container')
        container.scrollTop = container.scrollHeight
      },100)
    }
  },
  computed: {
    Messages () {
      return this.$store.getters.COURSE_CHAT(this.$route.params.id)
    }
  },
  beforeDestroy () {
    let data = {
      course_id: this.online_id,
      fname: this.$store.state.profile.fname,
      lname: this.$store.state.profile.lname,
      user_img: this.$store.state.profile.user_img
    }
    this.$socket.emit('offline', data)
  }
}
</script>
