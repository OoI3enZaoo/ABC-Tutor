<template>
  <div v-if="isTutor">
    <v-dialog v-model="dialog" lazy absolute>
        <template v-if="!isLive">
          <v-btn primary dark slot="activator">เริ่มทำการไลฟ์สด</v-btn>
        </template>
        <template v-else>
          <v-btn primary dark slot="activator">ปิดไลฟ์</v-btn>
        </template>
        <v-card>
          <v-card-title>
            <div class="headline">การไลฟ์สตรีม</div>
          </v-card-title>
          <v-card-text>
            <div v-if="!isLive">
              <span>คุณแน่ใจใช่หรือไม่ว่าจะทำการไลฟ์สตรีม</span>
            </div>
            <div v-else>
              <span>คุณแน่ใจใช่หรือไม่ว่าจะทำการปิดไลฟ์สตรีม</span>
            </div>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="green--text darken-1" flat="flat" @click.native="dialog = false">ยกเลิก</v-btn>
            <div v-if="!isLive">
              <v-btn class="green--text darken-1" flat="flat" @click.native="startStream">แน่ใจ</v-btn>
            </div>
            <div v-else>
              <v-btn class="green--text darken-1" flat="flat" @click.native="stopStream">แน่ใจ</v-btn>
            </div>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <video ref="video" :width="this.width" :height="this.height" :src="this.source" :autoplay="this.autoplay"></video>
    </div>



    <div v-else>
      <v-dialog v-model="dialog" lazy absolute>
          <template v-if="!isLive">
            <v-btn primary dark slot="activator">ร้องขอเปิดกล้อง</v-btn>
          </template>
          <template v-else>
            <v-btn primary dark slot="activator">ปิดกล้อง</v-btn>
          </template>
          <v-card>
            <v-card-title>
              <div class="headline">การขอเปิดกล้อง</div>
            </v-card-title>
            <v-card-text>
              <div v-if="!isLive">
                <span>คุณแน่ใจใช่หรือไม่ว่าจะส่งคำขอร้องการเปิดกล้องกับติวเตอร์</span>
              </div>
              <div v-else>
                <span>คุณแน่ใจใช่หรือไม่ว่าจะออกจากการเปิดกล้องกับติวเตอร์</span>
              </div>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn class="green--text darken-1" flat="flat" @click.native="dialog = false">ยกเลิก</v-btn>
              <div v-if="!isLive">
                <v-btn class="green--text darken-1" flat="flat" @click.native="startStream">แน่ใจ</v-btn>
              </div>
              <div v-else>
                <v-btn class="green--text darken-1" flat="flat" @click.native="stopStream">แน่ใจ</v-btn>
              </div>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <video ref="video" :width="this.width" :height="this.height" :src="this.source" :autoplay="this.autoplay"></video>
      </div>

</template>

<script>
export default {
    data () {
        return {
            stream: '',
            source: '',
            canvas: null,
            dialog: false,
            isLive: false
        };
    },
    props: {
        width: {
            type: Number,
            default: 500
        },
        height: {
            type: Number,
            default: 500
        },
        autoplay: {
            type: Boolean,
            default: true
        },
        screenshotFormat: {
          type: String,
          default: 'image/jpeg'
        },
        isTutor: {
          type: Boolean,
          default: false
        }
    },
    methods: {
        startStream () {
          this.$emit('start')
          this.dialog = false
          this.isLive = true
          console.log('live')
          if (!this.hasMedia()) {
              this.$emit('notsupported');
              return;
          }
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
        },
        stopStream () {
          this.$emit('stop')
          this.dialog = false
          this.isLive = false
          console.log('stopstream')
          this.stream.getVideoTracks()[0].stop()
          let data = {
            room: 1212335
          }
          this.$socket.emit('stoplive', data)
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
            return this.getCanvas().toDataURL(this.screenshotFormat);
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
    }
}
</script>
