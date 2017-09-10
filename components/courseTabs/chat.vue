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
                    <template v-for="data in message" >
                        <v-list-tile avatar >
                          <v-list-tile-avatar>
                            <img :src="data.userdata.img" alt="avatar">
                          </v-list-tile-avatar>
                          <v-list-tile-content>
                              <v-list-tile-title>{{data.userdata.name}} &nbsp;&nbsp; <span class="grey--text">{{data.date}}</span> </v-list-tile-title>
                              <v-list-tile-sub-title>{{data.message}}</v-list-tile-sub-title>
                          </v-list-tile-content>
                        </v-list-tile>
                      </template>
                </div>

              </v-list>
            <v-text-field solo label="พิมช้อความ"  @keyup.enter="sendMessage($event.target.value)"></v-text-field>
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
export default {
  mounted () {
    setInterval(() => {
      this.scrollToEnd()
    }, 1)
    this.$options.sockets.private_message = (data) => {
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
        userdata: this.userData,
        date: new Date()
      }
      this.$socket.emit('private_message', data)
      this.$socket.emit('chat', data)
    },
    scrollToEnd () {
      var container = this.$el.querySelector('#container')
      container.scrollTop = container.scrollHeight
    }
  }

}
</script>
