<template>
  <div>
    <v-container>
      <div class="text-xs-right">
          <v-btn primary outline @click.native="restoreData">คืนค่าเดิม</v-btn>
        <v-btn primary @click.native="saveData">บันทึก</v-btn>
      </div>
      <v-subheader>ข้อมูลส่วนตัว</v-subheader>
      <v-card class="ml-3 mr-3">
        <v-card-text>
          <v-subheader>ข้อมูลทั่วไป</v-subheader>
          <v-list>
            <v-list-tile>
              <v-text-field label="ชื่อจริง" v-model="data.fname" ></v-text-field>
            </v-list-tile>
            <br>
            <v-list-tile>
              <v-text-field label="นามสกุล" v-model="data.lname"></v-text-field>
            </v-list-tile>
          </v-list>
          <br>
        </v-card-text>
        <div class="grey lighten-4">
          <v-card-text>
            <v-subheader>ช่องทางอื่นๆ</v-subheader>
              <v-layout row fluid>
                <v-flex xs2 md1 text-xs-center>
                  <v-icon large class="mt-1">fa-facebook-official</v-icon>
                </v-flex>
                <v-flex xs12>
                  <v-text-field v-model="data.facebook" class="elevation-0" flat solo label="เฟสบุ๊คลิงค์"></v-text-field>
                </v-flex>
              </v-layout>
              <br>
              <v-layout row fluid>
                <v-flex xs2 md1 text-xs-center>
                  <v-icon large class="mt-1">fa-twitter-square</v-icon>
                </v-flex>
                <v-flex xs12>
                  <v-text-field v-model="data.twitter" class="elevation-0" flat solo label="ทวิตเตอร์ลิงค์"></v-text-field>
                </v-flex>
              </v-layout>
              <br>
              <v-layout row fluid>
                <v-flex xs2 md1 text-xs-center>
                  <v-icon large class="mt-1">fa-youtube-square</v-icon>
                </v-flex>
                <v-flex xs12>
                    <v-text-field v-model="data.youtube" class="elevation-0" flat solo label="ยูทูบลิงค์"></v-text-field>
                </v-flex>
              </v-layout>
          </v-card-text>
        </div>
      </v-card>
      <br><br>
      <v-subheader>รูปภาพ</v-subheader>
      <v-card>
        <v-card-text>
          <v-layout>
            <v-flex class="xs-12 offset-xs3 md-12 offset-md5">
              <base64upload :imageSrc="profile.user_img" @change="onChangeImage" style="width:150px; "/>
                <p>คลิ๊กที่รุปภาพเพื่อเปลี่ยนรูปภาพ</p>
            </v-flex>
          </v-layout>
      </v-card-text>
      </v-card>
      <br>
      <br>
      <div class="text-xs-right">
          <v-btn primary outline @click.native="restoreData">คืนค่าเดิม</v-btn>
        <v-btn primary @click.native="saveData">บันทึก</v-btn>
      </div>


    </v-container>
  </div>
</template>
<script>
import base64upload from '../components/base64upload.vue'
export default {
  created () {
    this.setData()
  },
  data () {
    return {
      data: {
        fname: '',
        lname: '',
        user_img: '',
        facebook: '',
        twitter: '',
        youtube: ''
      }
    }
  },
  methods: {
    setData () {
      this.data.user_id = this.profile.user_id
      this.data.fname = this.profile.fname
      this.data.lname = this.profile.lname
      this.data.user_img = this.profile.user_img
      this.data.email = this.profile.email
      this.data.facebook = this.profile.facebook
      this.data.twitter = this.profile.twitter
      this.data.youtube = this.profile.youtube
    },
    saveData() {
      this.$store.dispatch('UPDATE_PROFILE', this.data)
    },
    restoreData () {
      this.setData()
    },
    onChangeImage (data) {
      this.data.user_img =  'data:image/jpeg;base64,' + data.base64
    }
  },
  components: {
    base64upload
  },
  computed: {
    profile () {
      return this.$store.state.profile
    }
  }
}
</script>
