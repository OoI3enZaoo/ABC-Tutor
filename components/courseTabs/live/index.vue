<template>
<div>
  <v-container grid-list-lg>
    <template v-if="isTutor">
          <template v-if="!liveStatus">
            <v-layout>
              <v-flex xs12 text-xs-center>
                <v-card height="450px">
                  <v-card-text>
                    <div>
                        <v-layout row wrap style="padding-top:80px;">
                          <v-flex xs12 md3 offset-md3 >
                              <img :src="liveIcon" height="150">
                          </v-flex>
                          <v-flex xs12 md5 text-md-left text-xs-center mt-4>
                            <h5>คุณยังไม่ได้ทำการไลฟ์ในขณะนี้</h5>
                            <template v-if="liveSchedule !== undefined">
                              <template v-if="liveSchedule.live_schedule !== null || liveSchedule.live_schedule !== ''">
                                <span >เวลาไลฟ์ครั้งต่อไปของคุณคือ {{liveSchedule.live_schedule}} (อีก {{liveSchedule.live_schedule | moment('from', 'now', true)}})</span><br>
                                <span>ในหัวข้อเรื่อง "{{liveSchedule.live_text}}" </span>
                              </template>
                            </template>
                                <v-layout row wrap>
                                  <v-flex xs6 md4>
                                    <v-btn color="primary" block @click.native="dialogStartLive = true">เริ่มไลฟ์</v-btn>
                                  </v-flex>
                                  <v-flex xs6 md4>
                                    <v-btn color="primary" block outline @click.native="dialogTimeLive = true">กำหนดเวลาไลฟ์</v-btn>
                                  </v-flex>
                                </v-layout>
                          </v-flex>
                        </v-layout>
                    </div>
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
            </template>
            <template v-else>
              <v-layout row wrap>
                <v-flex lg8 md12 sm12 xs12>
                  <v-card>
                    12123
                      <video ref="video"  :src="source" autoplay width ="100%" style="max-height:497px;"></video>
                    <v-card-text>
                      <v-layout>
                        <v-flex xs6>
                          <h6 style="display:inline;">{{title}}</h6>
                          <span>{{description}}</span>
                        </v-flex>
                        <!-- <v-flex xs6 text-xs-right><h6 style="display:inline;">0 ที่รับชมอยู่ในขณะนี้</h6></v-flex> -->
                      </v-layout>
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex lg4 class="hidden-md-and-down">
                    <chat :message = "liveMessage" @getMessage="getMessage"></chat>
                </v-flex>
                <template v-for="(data, index) in userLive">
                    <v-flex xs3 offset-xs3  :key="index">
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
                    <v-flex xs8></v-flex>
                  </template>
                  <br>
                  <v-flex xs12>
                    <v-btn block primary @click.native="stopStream">ปิดการไลฟ์</v-btn>
                  </v-flex>
              </v-layout>
            </template>
    </template>


    <template v-else>
      <!-- live status = {{liveStatus}} -->
         <template v-if="!liveStatus">

           <v-layout>
             <v-flex xs12 text-xs-center>
               <v-card height="400px">
                 <v-card-text>
                   <div>
                       <v-layout row wrap style="padding-top:80px;">
                         <v-flex xs12 md2 offset-md4 >
                             <img :src="liveIcon" height="150">
                         </v-flex>
                         <v-flex xs12 md5 text-md-left text-xs-center mt-4>
                           <h5>ยังไม่มีการไลฟ์ในขณะนี้</h5>
                           <template v-if="liveSchedule !== undefined">
                             <template v-if="liveSchedule.live_schedule !== null">
                               <span >เวลาไลฟ์ครั้งต่อไปคือ {{liveSchedule.live_schedule}} (อีก {{liveSchedule.live_schedule | moment('from', 'now', true)}})</span><br>
                               <span>ในหัวข้อเรื่อง "{{liveSchedule.live_text}}" </span>
                             </template>
                           </template>
                         </v-flex>
                       </v-layout>
                   </div>
                 </v-card-text>
               </v-card>
             </v-flex>
           </v-layout>

           </template>
    <template v-else>
             <v-layout row wrap>
               <v-flex lg8 md12 sm12 xs12>
                 <v-card>
                   <!-- <v-card-media :src="videoLive" height="500"></v-card-media> -->
                   <!-- <video :src="videoLive" autoplay></video> -->
                   <video id="videoLive"  autoplay width ="100%" style="max-height:497px;"></video>
                   <!-- <video id="videoTest" ref="videoTest"autoplay ></video> -->
                   <v-card-text>
                     <v-layout>
                       <v-flex xs6>
                         <h6 style="display:inline;">{{title}}</h6>
                         <span>{{description}}</span>
                       </v-flex>
                       <!-- <v-flex xs6 text-xs-right><h6 style="display:inline;">0 ที่รับชมอยู่ในขณะนี้</h6></v-flex> -->
                     </v-layout>
                   </v-card-text>
                 </v-card>
               </v-flex>
               <v-flex lg4 class="hidden-md-and-down">
                   <chat :message = "liveMessage" @getMessage="getMessage"></chat>
               </v-flex>
               <template v-for="(data, index) in userLive">
                   <v-flex xs3 offset-xs3 :key="index">
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
           <!-- <v-btn @click.native="test">test</v-btn> -->
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
  <v-dialog v-model="dialogStartLive" persistent max-width="500px">
    <v-card>
      <v-card-title>
        <span class="headline">รายละเอียดของการไลฟ์</span>
      </v-card-title>
      <v-card-text>
        <v-text-field label="หัวข้อการไลฟ์" v-model="title"></v-text-field>
        <v-text-field label="รายละเอียด" v-model="description"></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" :disabled="!isLiveValid" @click.native="[startStream(), dialogStartLive = false]">เริ่มไลฟ์</v-btn>
        <v-btn color="primary" outline @click.native="dialogStartLive = false">ยกเลิก</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <v-dialog v-model="dialogTimeLive" persistent max-width="500px">
    <v-card>
      <v-card-title>
        <span class="headline">กำหนดเวลาที่จะไลฟ์ครั้งต่อไป</span>
      </v-card-title>
      <v-card-text>

          <v-text-field v-model="liveTimeText" prepend-icon="title" label="รายละเอียดการไลฟ์"></v-text-field>
              <v-menu
                  lazy
                  :close-on-content-click="false"
                  v-model="menuDate"
                  transition="scale-transition"
                  offset-y
                  full-width
                  :nudge-right="40"
                  max-width="290px"
                  min-width="290px"
                >
                  <v-text-field
                    slot="activator"
                    label="คลิ๊กเพื่อเลือกวันที่"
                    v-model="date"
                    prepend-icon="event"
                    readonly
                  ></v-text-field>
                  <v-date-picker v-model="date"  scrollable autosave actions>

                  </v-date-picker>
                </v-menu>

                <v-menu
                    lazy
                    :close-on-content-click="false"
                    v-model="menuTime"
                    transition="scale-transition"
                    offset-y
                    full-width
                    :nudge-right="40"
                    max-width="290px"
                    min-width="290px"
                  >
                    <v-text-field
                      slot="activator"
                      label="คลิ๊กเพื่อเลือกเวลา"
                      v-model="time"
                      prepend-icon="access_time"
                      readonly
                    ></v-text-field>
                    <v-time-picker v-model="time" format="24hr" actions autosave>

                    </v-time-picker>

                  </v-menu>


      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn color="primary" :disabled="!isTimeLiveValid" @click.native="[setTimeLive(), dialogTimeLive = false]">ตั้งค่า</v-btn>
        <v-btn color="primary" outline @click.native="dialogTimeLive = false">ยกเลิก</v-btn>
        <!-- <v-btn color="error" outline :disabled="!isTimeLiveValid" @click.native="[clearTimeLive(), dialogTimeLive = false]">เคลียร์</v-btn> -->
      </v-card-actions>
    </v-card>
  </v-dialog>

</div>
</template>
<script>
import chat from './addon/chat.vue'
import axios from 'axios'
let recorder
import Vue from 'vue'
const moment = require('moment')
Vue.use(require('vue-moment'), {
    moment
})
import Peer from 'peerjs-client'
let peer

export default {
  components: {
    chat
  },
  created () {
    moment.lang('th-TH');
    //do something after creating vue instance
    this.tutorPeerId =  '2pc7idxzu0xxxssz2'
    this.clientPeerId = '5fspcdaiddcx0xs00a'
  },
  mounted () {
    if (this.isTutor === true) {
      peer  = new Peer(this.tutorPeerId,{host: 'localhost', port: 9000});
      peer.on('connection', function(conn) {
        conn.on('data', function(data){
          console.log('tutor: ' + data);
        })
      })
    } else {
      peer  = new Peer(this.clientPeerId,{host: 'localhost', port: 9000});
      peer.on('connection', function(conn) {
        conn.on('data', function(data){
          console.log('client2: ' + data);
        })
      })

    }

    peer.on('call', function (call) {
      navigator.getUserMedia({video: false, audio: true}, function(stream) {
        call.answer(stream)
        call.on('stream', function(remoteStream) {
          document.getElementById('videoLive').src = window.URL.createObjectURL(remoteStream)
        })
      }, function(err) {
        console.log('Failed to get local stream' ,err);
      })
    })
    this.$options.sockets.live_tutor = (data) => {
      this.title = data.title
      this.description = data.description
      if (this.liveStatus === false) {
        this.liveStatus = true
      }
    }
    this.$options.sockets.stoplive = (data) => {
      console.log('stoplive')
      if (this.liveStatus === true) {
        this.liveStatus = false
      }
      this.userLive.map((ul, i) => {
        if (ul.isMe == true) {
          this.userLive[i].cam = 0
          this.userLive[i].userName = null
          clearInterval(this.userLive[i].interval)
          console.log('stop my live')
        }
      })
      this.stream.getVideoTracks()[0].stop()
      this.stream.getAudioTracks()[0].stop()
    }
    this.$options.sockets.live_message = (data) => {
      if (data.user_id !== this.$store.state.profile.user_id) {
        this.liveMessage.push(data)
      }
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
      if (this.isTutor == false) {
        console.log('not tutor')
        // this.requestMedia()

          navigator.getUserMedia({video: true},stream => {
            this.userLive[data.camera].source = window.URL.createObjectURL(stream)
            this.stream = stream
            console.log('stream');
            console.log(this.stream)
          }, error => {

          })

        console.log('beforeInterval')
        this.userLive[data.camera].interval = setInterval(() => {
          let str = Number.parseInt(data.camera)
          let camera = str + 1
          // let message = this.getCanvas(camera).toDataURL('image/jpeg')
          let payload = {
            course_id: this.$route.params.id,
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
      // console.log('cam 1')
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
      console.log('stopCamera1')
      // console.log(this.userLive[data.camera].cam)
      if (this.userLive[data.camera].cam !== 0) {
        console.log('stopCamera2')
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
        this.stream.getAudioTracks()[0].stop()
        this.showSnackbar('info', 'คุณถูกบังคับปิดกล้องโดยติวเตอร์')
      }
    }
  },
  methods: {
    clearTimeLive () {
      this.date = null
      this.time = null
      this.liveTimeText = ''
      const data = {
        user_id: this.$store.state.profile.user_id,
        course_id: this.$route.params.id,
        live_text: '',
        live_schedule: ''
      }
      this.$store.dispatch('UPDATE_LIVE_SCHEDULE', data)
      this.$socket.emit('course_live', data)
    },
    setTimeLive () {
      const data = {
        user_id: this.$store.state.profile.user_id,
        course_id: this.$route.params.id,
        live_text: this.liveTimeText,
        live_schedule: this.date + ' ' + this.time
      }
      this.$store.dispatch('UPDATE_LIVE_SCHEDULE', data)
      this.$socket.emit('course_live', data)
    },
    test () {
      console.log(this.stream);
      // this.stream.getTracks().forEach(track => track.stop());
      this.stream.getVideoTracks()[0].stop()
      this.stream.getAudioTracks()[0].stop()
      console.log(this.stream.getAudioTracks())
      console.log(this.stream.getAudioTracks()[0])
    },
    handleDataAvailable () {
      console.log('dfdf');
    },
    showSnackbar (context = 'info', text) {
      this.snackbar.context = context
      this.snackbar.text = text
      this.snackbar.model = true
    },








    startStream (val) {
      this.liveStatus = true
      getScreenId( (error, sourceId, screen_constraints) => {
    error    == null || 'permission-denied' || 'not-installed' || 'installed-disabled' || 'not-chrome'
    sourceId == null || 'string' || 'firefox'
    console.log('getScreenId');
    if(sourceId && sourceId != 'firefox') {
        screen_constraints = {
            video: {
                mandatory: {
                    chromeMediaSource: 'screen',
                    maxWidth: 1920,
                    maxHeight: 1080,
                    minAspectRatio: 1.77
                }
            }
        };

        if (error === 'permission-denied') return alert('Permission is denied.');
        if (error === 'not-chrome') return alert('Please use chrome.');

        if (!error && sourceId) {
            screen_constraints.video.mandatory.chromeMediaSource = 'desktop';
            screen_constraints.video.mandatory.chromeMediaSourceId = sourceId;
        }
    }
      if (navigator.getUserMedia) {
      navigator.getUserMedia(screen_constraints, stream => {
        navigator.getUserMedia({
             audio: true, video: true
          }, stream2 => {
            stream.width = window.screen.width;
      			stream.height = window.screen.height;
      			stream.fullcanvas = true;
      			stream2.width = 320;
      			stream2.height = 240;
      			stream2.top = stream.height - stream2.height;
      			stream2.left = stream.width - stream2.width;
            recorder = RecordRTC([stream, stream2], {
                type: 'video',
                recorderType: MediaStreamRecorder,
                mineType: {
                  audio: 'audio/wav',  // audio/ogg or audio/webm or audio/wav
                  video: 'video/webm', // video/webm or video/vp8
                  gif:   'image/gif'
                },
                previewStream: mystream => {
                   let data = {
                     course_id: this.$route.params.id,
                     title: this.title,
                     description: this.description
                   }
                 this.$socket.emit('live_tutor', data)
                 this.source = window.URL.createObjectURL(mystream)
                 let call = peer.call(this.clientPeerId, mystream)
                  let des
                  if (this.course.code !== '') {
                    des = 'มีการไลฟ์จากติวเตอร์ (' + this.course.code + ')'
                  } else {
                    des = 'มีการไลฟ์จากติวเตอร์์'
                  }
                  let notification = {
                    course_id: this.course.course_id,
                    user_id: this.$store.state.profile.user_id,
                    fname: this.$store.state.profile.fname,
                    lname: this.$store.state.profile.lname,
                    subject: this.course.subject,
                    code: this.course.code,
                    user_img: this.$store.state.profile.user_img,
                    noti_cover: this.course.cover,
                    noti_des: des,
                    noti_type: 2,
                    noti_ts: Vue.moment().format('YYYY-MM-DD HH:mm:ss')
                  }
                  this.$socket.emit('noti_content', notification)
                  let {course_id} = notification
                  this.$store.dispatch('UPDATE_LIVE_STATUS', {course_id, live_status: true})
                }
            })
            recorder.startRecording()
        })
      })
  }
})
    },
    stopStream (val) {
      console.log('stopStream');
      this.$store.dispatch('UPDATE_LIVE_STATUS', {course_id: this.$route.params.id, live_status: false})
      this.liveStatus = false
      let formData = new FormData();
      let fileName = this.title + '.webm'
      recorder.stopRecording((stream) => {
        let blob = recorder.getBlob()
        formData.append('video', blob, fileName)
      })
      let videoo = {
        course_id: this.course.course_id,
        content_title: this.title,
        content_des: this.description,
        content_ts: Vue.moment().format('YYYY-MM-DD HH:mm:ss'),
        data: formData,
        files: [fileName]
      }
      this.$store.dispatch('ADD_COURSE_CONTENT', videoo)
      const data = {
        course_id: this.$route.params.id
      }
      this.$socket.emit('stoplive', data)
      clearInterval(this.interval)
    },
    requestCamera (index) {
      const data = {
        course_id: this.$route.params.id,
        name: 'Theerapat Vijitpoo',
        camera: index
      }
      this.$socket.emit('requestCamera', data)
    },
    refuseCamera (index) {
      const data = {
        course_id: this.$route.params.id,
        name: 'Theerapat Vijitpoo',
        camera: index
      }
      this.$socket.emit('refuseCamera', data)
    },
    allowCamera (index) {
      const data = {
        course_id: this.$route.params.id,
        name: 'Theerapat Vijitpoo',
        camera: index
      }
      this.$socket.emit('allowCamera', data)
    },
    stopCamera (index) {
      this.userLive[index].cam = 0
      this.userLive[index].userName = null
      clearInterval(this.userLive[index].interval)
      console.log('Methods: stopCamera')
      const data = {
        course_id: this.$route.params.id,
        camera: index
      }
      this.$socket.emit('stopCamera', data)
      this.stream.getVideoTracks()[0].stop()
      this.stream.getAudioTracks()[0].stop()
    },
    forceStopCamera (index) {
      const data = {
        course_id: this.$route.params.id,
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
      // console.log('capture')
      if (!this.hasMedia()) {
        this.$emit('notsupported')
        return null
      }
      return this.getCanvas(cam).toDataURL('image/jpeg')
    },
    getCanvas (cam = null) {
      // console.log('getCanvas')
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
      // console.log(canvas)
      return canvas
    },
    getMessage (data) {
      this.liveMessage.push(data)
    }
  },
  data () {
    return {
      img: null,
      liveStatus: false,
      videoLive: null,
      interval: null,
      stream: '',
      stream2: '',
      source: '',
      canvas: null,
      title: '',
      description: '',
      liveMessage: [],
      userLive: [
        { cam: 0, userName: 'ben1', source: '', interval: null, ref: 'cam1', isMe: false }
        // { cam: 0, userName: 'ben2', source: '', interval: null, ref: 'cam2', isMe: false },
        // { cam: 0, userName: 'ben3', source: '', interval: null, ref: 'cam3', isMe: false },
        // { cam: 0, userName: 'ben4', source: '', interval: null, ref: 'cam4', isMe: false }
      ],
      snackbar: {
        context: 'primary',
        model: false,
        text: '555',
        time: 5000
      },
      dialog: false,
      liveIcon: require('../../../static/live.png'),
      clientPeerId: '',
      tutorPeerId: '',
      dialogStartLive: false,
      dialogTimeLive: false,
      date: null,
      menuDate: false,
      menuTime: false,
      time: null,
      liveTimeText: ''
    }
  },
  watch: {
    dialogTimeLive: function (val) {
      if (val == true) {
        if (this.liveSchedule !== undefined && this.time == null || this.date == null || this.liveTimeText == '') {
          this.liveSchedule.live_time !== null ? this.time = this.liveSchedule.live_time : ''
          this.liveSchedule.live_date !== null ? this.date = this.liveSchedule.live_date : ''
          this.liveSchedule.live_text !== null ? this.liveTimeText = this.liveSchedule.live_text : ''
        }
      }
    }
  },
  computed: {
    isLiveValid () {
      return this.title !== '' && this.description !== ''
    },
    isTimeLiveValid () {
      return this.time !== null && this.date !== null && this.liveTimeText !== ''
    },
    course () {
      return this.$store.getters.COURSE_FROM_ID(this.$route.params.id)[0]
    },
    isTutor () {
      return this.$store.state.tutor.isTutor
    },
    liveSchedule () {
      return this.$store.getters.LIVE_SCHEDULE(this.$route.params.id)[0]
    }
  }
}
</script>
