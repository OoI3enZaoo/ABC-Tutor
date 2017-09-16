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
                        <template v-if="data.cam === 2">

                            <v-card-media :src="data.source" height="200"></v-card-media>

                        </template>
                        <template v-else-if="data.cam === 1">
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
                      <template v-if="data.cam === 2">
                        <v-btn primary @click.native="forceStopCamera(index)">บังคับปิดกล้อง</v-btn>
                      </template>
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
                    <nuxt-link  to="/"><span class="blue--text">เรียนรู้เพิ่มเติม</span></nuxt-link>
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
                       <template v-if="data.cam === 2">
                          <video :ref="data.ref" :src="data.source" autoplay width ="100%"></video>
                       </template>
                       <template v-else>
                           <div class="text-xs-center" style="padding-top:80px;">
                             <v-btn primary outline @click.native="requestCamera(index)">ขอเปิดกล้อง</v-btn>
                           </div>
                       </template>
                     </v-card>
                     <template v-if="data.cam === 2">
                       <v-btn primary @click.native="stopCamera(index)">ปิดกล้องตนเอง</v-btn>
                     </template>
                   </v-flex>
                 </template>
             </v-layout>
           </template>
    </template>
    <v-snackbar
      :timeout="snackbar.time"
      :success="snackbar.context === 'success'"
      :info="snackbar.context === 'info'"
      :warning="snackbar.context === 'warning'"
      :error="snackbar.context === 'error'"
      :primary="snackbar.context === 'primary'"
      :secondary="snackbar.context === 'secondary'"
      v-model="snackbar.model">
        {{ snackbar.text }}
        <v-btn dark flat @click.native="snackbar.model = false">ปิด</v-btn>
      </v-snackbar>
  </v-container>
</div>
</template>
<script>
import chat from './addon/chat.vue'
export default {
  components: {
    chat
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
      console.log('allow ' + data.camera)
      this.userLive[data.camera].isMe = true
      this.userLive[data.camera].cam = 2
      this.userLive[data.camera].userName = data.name
      if (this.isTutor === false) {
        console.log('not tutor')
        this.requestMedia()
        if (navigator.getUserMedia) {
          navigator.getUserMedia({
            video: true
          }, stream => {
            this.userLive[data.camera].source = window.URL.createObjectURL(stream)
            this.stream = stream
            this.$emit('started', stream)
          }, error => {
            this.$emit('error', error)
          })
        }
        console.log('beforeInterval')
        this.userLive[data.camera].interval = setInterval(() => {
          let str = Number.parseInt(data.camera)
          let camera = str + 1
          // let message = this.getCanvas(camera).toDataURL('image/jpeg')
          let payload = {
            room: 1212335,
            message: this.capture(camera)
          }
          console.log('loop: ' + typeof camera + ' camera: ' + camera)
          this.$socket.emit('live_cam_' + camera, payload)
        }, 2)
      }
    }
    this.$options.sockets.refuseCamera = (data) => {
      console.log('refuse')
      this.userLive[data.camera].cam = 0
      this.userLive[data.camera].userName = data.name
    }
    this.$options.sockets.live_cam_1 = (data) => {
      console.log('cam 1')
      if (this.isTutor) {
        this.userLive[0].source = data.message
      }
    }
    this.$options.sockets.live_cam_2 = (data) => {
      console.log('cam 2')
      if (this.isTutor) {
        this.userLive[1].source = data.message
      }
    }
    this.$options.sockets.live_cam_3 = (data) => {
      console.log('cam 3')
      if (this.isTutor) {
        this.userLive[2].source = data.message
      }
    }
    this.$options.sockets.live_cam_4 = (data) => {
      console.log('cam 4')
      if (this.isTutor) {
        this.userLive[3].source = data.message
      }
    }
    this.$options.sockets.stopCamera = (data) => {
      if (this.userLive[data.camera].cam !== 0) {
        console.log('stopCamera')
        this.userLive[data.camera].cam = 0
        this.userLive[data.camera].userName = null
        clearInterval(this.userLive[data.camera].interval)
        this.showSnackbar('info', 'คุณได้ปิดกล้องของคุณ')
      }
    }
    this.$options.sockets.forceStopCamera = (data) => {
      console.log('forceStopCamera')
      this.userLive[data.camera].cam = 0
      this.userLive[data.camera].userName = null
      clearInterval(this.userLive[data.camera].interval)
      if (this.userLive[data.camera].isMe === true && this.isTutor === false) {
        this.stream.getVideoTracks()[0].stop()
        this.showSnackbar('info', 'คุณถูกบังคับปิดกล้องโดยติวเตอร์')
      }
    }
  },
  methods: {
    showSnackbar (context = 'info', text) {
      this.snackbar.context = context
      this.snackbar.text = text
      this.snackbar.model = true
    },
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
        console.log(data)
        this.$socket.emit('live_tutor', data)
      }, 2)
    },
    stopStream (val) {
      this.liveStatus = false
      this.stream.getVideoTracks()[0].stop()
      const data = {
        room: 1212335
      }
      this.$socket.emit('stoplive', data)
      console.log('clear Interval')
      clearInterval(this.interval)
    },
    requestCamera (index) {
      const data = {
        room: 1212335,
        name: 'Theerapat Vijitpoo',
        camera: index
      }
      this.$socket.emit('requestCamera', data)
    },
    refuseCamera (index) {
      const data = {
        room: 1212335,
        name: 'Theerapat Vijitpoo',
        camera: index
      }
      this.$socket.emit('refuseCamera', data)
    },
    allowCamera (index) {
      const data = {
        room: 1212335,
        name: 'Theerapat Vijitpoo',
        camera: index
      }
      this.$socket.emit('allowCamera', data)
    },
    stopCamera (index) {
      this.userLive[index].cam = 0
      this.userLive[index].userName = null
      clearInterval(this.userLive[index].interval)
      this.stream.getVideoTracks()[0].stop()
      console.log('Methods: stopCamera')
      const data = {
        room: 1212335,
        camera: index
      }
      this.$socket.emit('stopCamera', data)
    },
    forceStopCamera (index) {
      const data = {
        room: 1212335,
        camera: index
      }
      this.$socket.emit('forceStopCamera', data)
      this.model = true
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
    capture (cam) {
      console.log('capture')
      if (!this.hasMedia()) {
        this.$emit('notsupported')
        return null
      }
      return this.getCanvas(cam).toDataURL('image/jpeg')
    },
    getCanvas (cam = null) {
      console.log('getCanvas')
      let video
      if (cam === 1) {
        video = this.$refs.cam1[0]
        console.log('ref cam1')
      } else if (cam === 2) {
        video = this.$refs.cam2[0]
        console.log('ref cam2')
      } else if (cam === 3) {
        video = this.$refs.cam3[0]
        console.log('ref cam3')
      } else if (cam === 4) {
        video = this.$refs.cam4[0]
        console.log('ref cam4')
      } else {
        video = this.$refs.video
      }
      let canvas = document.createElement('canvas')
      canvas.height = video.clientHeight
      canvas.width = video.clientWidth
      this.ctx = canvas.getContext('2d')
      this.canvas = canvas
      this.ctx.drawImage(video, 0, 0, this.canvas.width, this.canvas.height)
      console.log(canvas)
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
        { cam: 0, userName: 'ben1', source: '', interval: null, ref: 'cam1', isMe: false },
        { cam: 0, userName: 'ben2', source: '', interval: null, ref: 'cam2', isMe: false },
        { cam: 0, userName: 'ben3', source: '', interval: null, ref: 'cam3', isMe: false },
        { cam: 0, userName: 'ben4', source: '', interval: null, ref: 'cam4', isMe: false }
      ],
      snackbar: {
        context: 'primary',
        model: false,
        text: '555',
        time: 5000
      }
    }
  }
}
</script>
