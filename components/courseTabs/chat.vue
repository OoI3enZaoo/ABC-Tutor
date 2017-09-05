<template>
  <div>
    <v-container>
      <p class="headline">แชท</p>
      <br>
      <v-card>
        <v-card-text>
          <v-list two-line>
            <!-- <template v-for="a in 5">
                <v-list-tile avatar >
                  <v-list-tile-avatar>
                    <img src="http://s3.amazonaws.com/s3.timetoast.com/public/uploads/photos/2065220/billgates.png?1473908657" alt="avatar">
                  </v-list-tile-avatar>
                  <v-list-tile-content>
                      <v-list-tile-title>Bill Gates &nbsp;&nbsp; <span class="grey--text">10 นาทีที่แล้ว</span> </v-list-tile-title>
                      <v-list-tile-sub-title>มันดีมากๆเลยครับ</v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
            </template> -->

            <template v-for="data in message">
                <v-list-tile avatar >
                  <v-list-tile-avatar>
                    <img :src="data.userdata.img" alt="avatar">
                  </v-list-tile-avatar>
                  <v-list-tile-content>
                      <v-list-tile-title>{{data.userdata.name}} &nbsp;&nbsp; <span class="grey--text">10 นาทีที่แล้ว</span> </v-list-tile-title>
                      <v-list-tile-sub-title>{{data.message}}</v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
            </template>


          </v-list>
        </v-card-text>
        <v-text-field solo label="พิมช้อความ"  @keyup.enter="sendMessage($event.target.value)"></v-text-field>
      </v-card>
    </v-container>
    <br><br><br>
  </div>
</template>
<script>
export default {
  beforeMount () {
    this.$socket.emit('subscribe', this.roomId)
  },
  mounted () {
    this.$options.sockets.conversation_private = (data) => {
      console.log(JSON.stringify(data))
      this.message.push(data)
    }
  },
  data () {
    return {
      roomId: 1212335,
      userData: {
        name: 'ben',
        img: 'https://scontent.fbkk1-3.fna.fbcdn.net/v/t1.0-9/18670848_1440946712632376_9108286887308110690_n.jpg?oh=aed0ea5bba94084d3114d146c6c7a907&oe=5A267C89'
      },
      message: []
    }
  },
  methods: {
    sendMessage (message) {
      console.log('message: ' + message)
      const data = {
        room: this.roomId,
        message: message,
        userdata: this.userData
      }
      this.$socket.emit('private_message', data)
    }
  }

}
</script>
