<template>
  <div>
    <v-card>
      <div id="container" style="height:525px; overflow:scroll; overflow-x:hidden">
          <v-subheader>แชทสด</v-subheader>
          <v-list three-line>
            <template v-for="data in message">
              <v-list-tile avatar @click="" >
                <v-list-tile-avatar>
                  <img :src="data.user_img" alt="">
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-sub-title><span class="black--text">{{data.fname}} {{data.lname}} </span>{{data.message}}</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
             </template>
          </v-list>
        </div>
      <v-text-field  id="message"solo label="พิมพ์ข้อความ..." @keyup.enter="sendMessage($event.target.value)"></v-text-field>
    </v-card>
  </div>
</template>
<script>
export default {
  props: ['message'],
  methods: {
    scrollToEnd () {
      setTimeout(() => {
        var container = this.$el.querySelector('#container')
        container.scrollTop = container.scrollHeight
        this.chatText = ''
      }, 100)
    },
    sendMessage (message) {
      console.log('message: ' + message)

      console.log(this.$el.querySelector('#message').html)
      let data = {
        user_id: this.profile.user_id,
        course_id: this.courseID,
        fname: this.profile.fname,
        lname: this.profile.lname,
        user_img: this.profile.user_img,
        message: message
      }
      this.$emit('getMessage', data)
      this.$socket.emit('live_message', data)
      this.scrollToEnd()
    }
  },
  computed: {
    profile () {
      return this.$store.state.profile
    },
    courseID () {
      return this.$route.params.id
    }
  }
}
</script>
