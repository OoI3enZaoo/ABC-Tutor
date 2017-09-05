<template>
  <div>
    <v-container grid-list-lg>
      <!-- <div v-if="liveStatus">
        <p class="headline">สถานะติว: Online</p>
      </div>
      <div v-else>
        <p class="headline">สถานะติว: Offline</p>
      </div>

      <div class="text-xs-center">
        <template v-if="isTutor">
          <Webcam :isTutor="isTutor" ref="webcam" @start="startStream" @stop="stopStream"></Webcam>
        </template>
        <template v-else>
          user
          <img :src="videoLive" style="width:680px;height:320px;"></img>
          <Webcam :isTutor="isTutor" ref="webcam" @start="startStream" @stop="stopStream"></Webcam>
        </template>
      </div> -->
       <!-- <img :src="this.img" style="width:500px;height:500px;" /> -->

<v-switch v-model="isTutor" color="primary"  label="เป็นติวเตอร์"></v-switch>
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
                    <v-card>
                      <div  style="height:525px; overflow:scroll; overflow-x:hidden">
                          <v-subheader>แชทสด</v-subheader>
                          <v-list three-line>
                            <template v-for="data in liveMessage">
                              <v-list-tile avatar @click="" >
                                <v-list-tile-avatar>
                                  <img src="http://mostfamousperson.net/BillGates.png" alt="">
                                </v-list-tile-avatar>
                                <v-list-tile-content>
                                  <v-list-tile-sub-title><span class="black--text">Bill Gates </span>{{data.message}}</v-list-tile-sub-title>
                                </v-list-tile-content>
                              </v-list-tile>
                             </template>
                          </v-list>
                        </div>
                      <v-text-field solo label="พิมพ์ข้อความ...." @keyup.enter="sendMessage($event.target.value)"></v-text-field>
                    </v-card>
                </v-flex>
                <v-flex xs3><v-card class="white" height="200px"></v-card></v-flex>
                <v-flex xs3><v-card class="white" height="200px"></v-card></v-flex>
                <v-flex xs3><v-card class="white" height="200px"></v-card></v-flex>
                <v-flex xs3><v-card class="white" height="200px"></v-card></v-flex>
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
                   <v-card>
                     <div  style="height:525px; overflow:scroll; overflow-x:hidden">
                         <v-subheader>แชทสด</v-subheader>
                         <v-list three-line>
                           <template v-for="data in liveMessage">
                             <v-list-tile avatar @click="" >
                               <v-list-tile-avatar>
                                 <img src="http://mostfamousperson.net/BillGates.png" alt="">
                               </v-list-tile-avatar>
                               <v-list-tile-content>
                                 <v-list-tile-sub-title><span class="black--text">Bill Gates </span>{{data.message}}</v-list-tile-sub-title>
                               </v-list-tile-content>
                             </v-list-tile>
                            </template>
                         </v-list>
                       </div>
                     <v-text-field solo label="พิมพ์ข้อความ..." @keyup.enter="sendMessage($event.target.value)"></v-text-field>
                   </v-card>
               </v-flex>
               <v-flex xs3 text-xs-center><v-card class="white" height="200px"><div style="padding-top:80px;"><v-btn primary outline>ขอเปิดกล้อง</v-btn></div></v-card></v-flex>
               <v-flex xs3 text-xs-center><v-card class="white" height="200px"><div style="padding-top:80px;"><v-btn primary outline>ขอเปิดกล้อง</v-btn></div></v-card></v-flex>
               <v-flex xs3 text-xs-center><v-card class="white" height="200px"><div style="padding-top:80px;"><v-btn primary outline>ขอเปิดกล้อง</v-btn></div></v-card></v-flex>
               <v-flex xs3 text-xs-center><v-card class="white" height="200px"><div style="padding-top:80px;"><v-btn primary outline>ขอเปิดกล้อง</v-btn></div></v-card></v-flex>
             </v-layout>
           </template>
       </template>
    </v-container>
  </div>
</template>
<script>
export default {
  beforeMount () {
    this.$socket.emit('subscribe', 1212335)
  },
  mounted () {
    this.$options.sockets.live_tutor = (data) => {
      this.videoLive = data.message
      console.log('live_tutor')
      if(this.liveStatus === false) {
        this.liveStatus = true
      }
    }
    this.$options.sockets.stoplive = (data) => {
      console.log('stoplive');
      if(this.liveStatus === true) {
        this.liveStatus = false
      }
    }
    this.$options.sockets.live_message = (data) => {
      this.liveMessage.push(data)
    }
  },
  methods: {
    sendMessage (message) {
      console.log('message: ' + message)
      let data = {
        room: 1212335,
        message: message
      }
      this.$socket.emit('live_message' , data)
    },
    startStream (val) {
      this.liveStatus = true
      this.requestMedia();
      if (navigator.getUserMedia) {
          navigator.getUserMedia({ video: true }, stream => {
          this.source = window.URL.createObjectURL(stream);
          this.stream = stream;
          this.$emit('started', stream);
      }, error => {
          this.$emit('error', error);
        });
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
    hasMedia() {
        return !!this.getMedia();
    },
    getMedia() {
        return (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia);
    },
    requestMedia() {
        navigator.getUserMedia = this.getMedia();
    },
    capture() {
        if (!this.hasMedia()) {
            this.$emit('notsupported');
            return null;
        }
        return this.getCanvas().toDataURL('image/jpeg');
    },
    getCanvas() {
        let video = this.$refs.video;
        if (!this.ctx) {
            let canvas = document.createElement('canvas');
            canvas.height = video.clientHeight;
            canvas.width = video.clientWidth;
            this.canvas = canvas;
            this.ctx = canvas.getContext('2d');
        }

        const { ctx, canvas } = this;
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

        return canvas;
    }
  },
  data () {
    return {
      img: null,
      liveStatus: false,
      isTutor: true,
      videoLive: null,
      interval: null,
      stream: '',
      source: '',
      canvas: null,
      liveMessage: []
    }
  }
}
</script>
