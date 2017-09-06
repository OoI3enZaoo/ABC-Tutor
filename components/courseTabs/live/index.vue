<template>
<div>
  <v-container grid-list-lg>
    <v-switch v-model="isTutor" color="primary" label="เป็นติวเตอร์"></v-switch>
    <template v-if="isTutor">
          <template v-if="!liveStatus">
             <v-card>
               <v-card-text>
                 <v-layout>
                   <v-flex xs6 text-xs-right>
                      <img src="https://www.israel365.com/wp-content/uploads/2015/06/video.png" alt="" width="100" height="100">
                   </v-flex>
                   <v-flex xs6>
                     <p class="headline">คุณยังไม่ได้ทำการไลฟ์</p>
                     <nuxt-link to="/"><span class="blue--text">เรียนรู้เพิ่มเติม</span></nuxt-link>
                     <v-btn primary @click.native="startStream">เริ่มต้นไลฟ์</v-btn>
                   </v-flex>
                 </v-layout>
               </v-card-text>
             </v-card>
            </template>
            <template v-else>
              <v-layout row wrap>
                <v-flex xs8>
                  <v-card>
                      <video ref="video"  :src="this.source" autoplay width ="100%" style="max-height:497px;"></video>
                    <v-card-text>
                      <v-layout>
                        <v-flex xs6><h6 style="display:inline;">ติวคอมพิวเตอร์เบื้องต้น SP522 บทที่ 1-3</h6></v-flex>
                        <v-flex xs6 text-xs-right><h6 style="display:inline;">155 ที่รับชมอยู่ในขณะนี้</h6></v-flex>
                      </v-layout>
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs4>
                    <chat :message = "liveMessage"></chat>
                </v-flex>
                <template v-for="(data, index) in userLive">
                    <v-flex xs3  :key="index">
                      <v-card class="white" height="200px">
                        <template v-if="data.cam == 2">
                           <v-card-media :src="data.cam" height="200"></v-card-media>
                        </template>
                        <template v-else-if="data.cam == 1">
                            <div class="text-xs-center" style="padding-top:45px;">
                              <p class="grey--text">{{data.userName}} ขอร่วมกล้องกับคุณ</p>
                              <v-btn primary outline @click.native="refuseCamera(index)">ปฏิเสธ</v-btn>
                              <v-btn primary @click.native="allowCamera(index)">ยอมรับ</v-btn>
                            </div>
                        </template>
                        <template v-else>
                          <div class="text-xs-center" style="padding-top:80px;">
                            <p class="grey--text">ยังไม่มีคนร่วมกล้องกับคุณ</p>
                          </div>
                        </template>
                      </v-card>
                    </v-flex>
                  </template>
                <v-btn block primary @click.native="stopStream">ปิดการไลฟ์</v-btn>
              </v-layout>
            </template>
    </template>
    <template v-else>
         <template v-if="!liveStatus">
            <v-card>
              <v-card-text>
                <v-layout>
                  <v-flex xs6 text-xs-right>
                     <img src="https://www.israel365.com/wp-content/uploads/2015/06/video.png" alt="" width="100" height="100">
                  </v-flex>
                  <v-flex xs6>
                    <p class="headline mt-4">ยังไม่มีการไลฟ์ในขณะนี้</p>
                    <nuxt-link><span class="blue--text">เรียนรู้เพิ่มเติม</span></nuxt-link>
                  </v-flex>
                </v-layout>
              </v-card-text>
            </v-card>
           </template>
    <template v-else>
             <v-layout row wrap>
               <v-flex xs8>
                 <v-card>
                   <v-card-media :src="videoLive" height="500"></v-card-media>
                   <v-card-text>
                     <v-layout>
                       <v-flex xs6><h6 style="display:inline;">ติวคอมพิวเตอร์เบื้องต้น SP522 บทที่ 1-3</h6></v-flex>
                       <v-flex xs6 text-xs-right><h6 style="display:inline;">155 ที่รับชมอยู่ในขณะนี้</h6></v-flex>
                     </v-layout>
                   </v-card-text>
                 </v-card>
               </v-flex>
               <v-flex xs4>
                   <chat :message = "liveMessage"></chat>
               </v-flex>
               <template v-for="(data, index) in userLive">
                   <v-flex xs3  :key="index">
                     <v-card class="white" height="200px">
                       <template v-if="data.cam == 2">
                          <v-card-media :src="data.cam" height="200"></v-card-media>
                       </template>
                       <template v-else>
                           <div class="text-xs-center" style="padding-top:80px;">
                             <v-btn primary outline @click.native="requestCamera(index)">ขอเปิดกล้อง</v-btn>
                           </div>
                       </template>
                     </v-card>
                   </v-flex>
                 </template>
             </v-layout>
           </template>
    </template>
  </v-container>
</div>
</template>
<script>
import chat from './addon/chat.vue'
export default {
  components: {
    chat
  },
  beforeMount () {
    this.$socket.emit('subscribe', 1212335)
  },
  mounted () {
    this.$options.sockets.live_tutor = (data) => {
      this.videoLive = data.message
      console.log('live_tutor')
      if (this.liveStatus === false) {
        this.liveStatus = true
      }
    }
    this.$options.sockets.stoplive = (data) => {
      console.log('stoplive')
      if (this.liveStatus === true) {
        this.liveStatus = false
      }
    }
    this.$options.sockets.live_message = (data) => {
      this.liveMessage.push(data)
    }
    this.$options.sockets.requestCamera = (data) => {
      this.userLive[data.camera].cam = 1
      this.userLive[data.camera].userName = data.name
    }
    this.$options.sockets.allowCamera = (data) => {
      this.userLive[data.camera].cam = 2
      this.userLive[data.camera].userName = data.name
    }
    this.$options.sockets.refuseCamera = (data) => {
      this.userLive[data.camera].cam = 0
      this.userLive[data.camera].userName = data.name
    }
  },
  methods: {
    startStream (val) {
      this.liveStatus = true
      this.requestMedia()
      if (navigator.getUserMedia) {
        navigator.getUserMedia({
          video: true
        }, stream => {
          this.source = window.URL.createObjectURL(stream)
          this.stream = stream
          this.$emit('started', stream)
        }, error => {
          this.$emit('error', error)
        })
      }
      console.log('setInterval')
      this.interval = setInterval(() => {
        let data = {
          room: 1212335,
          message: this.capture()
        }
        this.$socket.emit('live_tutor', data)
      }, 5)
    },
    stopStream (val) {
      this.liveStatus = false
      this.stream.getVideoTracks()[0].stop()
      let data = {
        room: 1212335
      }
      this.$socket.emit('stoplive', data)
      console.log('clear Interval')
      clearInterval(this.interval)
    },
    requestCamera (index) {
      let data = {
        room: 1212335,
        name: 'Theerapat Vijitpoo',
        camera: index
      }
      this.$socket.emit('requestCamera', data)
    },
    refuseCamera (index) {
      let data = {
        room: 1212335,
        name: 'Theerapat Vijitpoo',
        camera: index
      }
      this.$socket.emit('refuseCamera', data)
    },
    allowCamera (index) {
      let data = {
        room: 1212335,
        name: 'Theerapat Vijitpoo',
        camera: index
      }
      this.$socket.emit('allowCamera', data)
    },
    hasMedia () {
      return !!this.getMedia()
    },
    getMedia () {
      return (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia)
    },
    requestMedia () {
      navigator.getUserMedia = this.getMedia()
    },
    capture () {
      if (!this.hasMedia()) {
        this.$emit('notsupported')
        return null
      }
      return this.getCanvas().toDataURL('image/jpeg')
    },
    getCanvas () {
      let video = this.$refs.video
      if (!this.ctx) {
        let canvas = document.createElement('canvas')
        canvas.height = video.clientHeight
        canvas.width = video.clientWidth
        this.canvas = canvas
        this.ctx = canvas.getContext('2d')
      }
      const {
        ctx,
        canvas
      } = this
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height)
      return canvas
    }
  },
  data () {
    return {
      img: null,
      liveStatus: false,
      isTutor: false,
      videoLive: null,
      interval: null,
      stream: '',
      source: '',
      canvas: null,
      liveMessage: [],
      userLive: [
        { cam: 0, userName: 'ben1' },
        { cam: 0, userName: 'ben2' },
        { cam: 0, userName: 'ben3' },
        { cam: 0, userName: 'ben4' }
      ]
    }
  }
}
</script>
