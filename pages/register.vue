<template>
  <div>
    <br><br>
      <v-container>
        <v-layout>
          <v-flex xs12 sm8 md7 lg5  offset-sm3 offset-md3 offset-lg4>
            <v-card >
              <v-card-text>
                <h6 class="red--text">ลงทะเบียน</h6>
                <p style="display:inline;">เป็นสมาชิกอยู่แล้ว?</p>&nbsp;<nuxt-link to="/login">เข้าสู่ระบบ</nuxt-link><br><br>
                <hr>
                <br>
                  <v-text-field
                    v-model="data.fname"
                    label="ชื่อจริง"
                    :counter="10"
                    required
                  ></v-text-field>
                  <v-text-field
                    v-model="data.lname"
                    label="นามสกุล"
                    :counter="10"
                    required
                  ></v-text-field>
                  <v-text-field
                    v-model="user_name"
                    type="text"
                    label="ชื่อผู้ใช้"
                    ref="username"
                    required
                  ></v-text-field>
                  <v-text-field
                    v-model="data.user_pass"
                    label="รหัสผ่าน"
                    type="password"
                    required
                  ></v-text-field>
                  <div class="text-xs-center" style="align-text:center;">
                    <p class="subheading">คลิ๊กที่ภาพเพื่อเลือกรูปภาพ</p>
                    <base64upload imageSrc="http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/profile-icon.png" @change="onChangeImage" style="width:150px; "/>
                  </div>
                  <span class="subheading">เพศ</span>
                  <v-radio-group v-model="data.sex" :mandatory="false">
                    <v-radio label="ชาย" value="Male"></v-radio>
                    <v-radio label="หญิง" value="Female"></v-radio>
                  </v-radio-group>

                <v-menu
                    lazy
                    :close-on-content-click="false"
                    v-model="menu"
                    transition="scale-transition"
                    offset-y
                    full-width
                    :nudge-right="40"
                    max-width="290px"
                    min-width="290px"
                  >
                    <v-text-field
                      slot="activator"
                      label="วันเกิดของคุณ"
                      v-model="data.birthday"
                      prepend-icon="event"
                      readonly
                    ></v-text-field>
                    <v-date-picker v-model="data.birthday" no-title scrollable actions>
                      <template scope="{ save, cancel }">
                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn flat color="primary" @click="cancel">Cancel</v-btn>
                          <v-btn flat color="primary" @click="save">OK</v-btn>
                        </v-card-actions>
                      </template>
                    </v-date-picker>
                  </v-menu>
                  <v-text-field
                    v-model="email"
                    type="email"
                    label="อีเมล"
                    ref="email"
                    prepend-icon="send"
                    required
                  ></v-text-field>
                  <v-text-field
                    name="input-2-3"
                    v-model="data.facebook"
                    label="Hint Text"
                    class="input-group--focused"
                    prepend-icon="fa-facebook"
                    single-line
                  ></v-text-field>

                  <v-text-field
                    name="input-2-3"
                    v-model="data.twitter"
                    label="Hint Text"
                    class="input-group--focused"
                    prepend-icon="fa-twitter"
                    single-line
                  ></v-text-field>

                  <v-text-field
                    name="input-2-3"
                    v-model="data.youtube"
                    label="Hint Text"
                    class="input-group--focused"
                    prepend-icon="fa-youtube"
                    single-line
                  ></v-text-field>

                  <!-- <v-checkbox label="ให้ฉันลงชื่อเข้าใช้อยู่เสมอ"></v-checkbox> -->
                  <v-btn primary :disabled="!isValid" @click.native="register" block>สมัครสมาชิก</v-btn><br>

              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
  </div>
</template>
<script>
import base64upload from '../components/base64upload.vue'
import axios from 'axios'
import Vue from 'vue'
const moment = require('moment')
Vue.use(require('vue-moment'), {
    moment
})
export default {
  data () {
    return {
      valid: false,
      user_name: '',
      email: '',
      menu: false,
      statusUsername: true,
      statusEmail: true,
      data: {
        fname: '',
        lname: '',
        email: '',
        user_img: '',
        sex: '',
        birthday: null,
        facebook: '',
        twitter: '',
        youtube: '',
        user_name: '',
        user_pass: ''
      },
      nameRules: [
        (v) => !!v || 'จำเป็นต้องกรอก'
      ],
      emailRules: [
        (v) => !!v || 'จำเป็นต้องกรอกอีเมล',
        (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'รูปแบบของอีเมลไม่ถูกต้อง'
      ]
    }
  },
  components: {
    base64upload
  },
  watch: {
    user_name: function (val) {
      if (val !== '') {
        this.checkUsername(val)
      }
    },
    email: function (val) {
      if (val !== '') {
        this.checkEmail(val)
      }
    }
  },
  methods: {
    async register () {
      this.data.user_name = this.user_name
      this.data.email = this.user_name
      this.data.user_id = (new Date().getTime())
      this.data.user_ts = Vue.moment().format('YYYY-MM-DD HH:mm:ss')
      axios.post('https://localhost:4000/api/insertnewuser', this.data)
      .then (res => {
        let result = res.data
        this.data.user_id = result.user_id
        this.$store.commit('addUserData', this.data)
        this.$store.commit('setIsLogin', true)
        this.$socket.emit('join', result.user_id)
        this.$router.push('/home')
      })
    },
    onChangeImage (data) {
      this.data.user_img =  'data:image/jpeg;base64,' + data.base64
    },
    checkUsername (username) {
      axios.get('https://localhost:4000/api/get_check_username/' + username)
      .then (res => {
        let result = res.data[0].check_username
        if (result == 1) {
          this.$refs.username.hideDetails = true
          this.$refs.username.hint ="ชื่อผู้ใช้ซ้ำ กรุณาเลือกชื่ออื่น"
          this.statusUsername = false
        }
        else {
          this.statusUsername = true
          this.$refs.username.hideDetails = false
          this.$refs.username.hint = undefined
        }
      })
    },
    checkEmail (email) {
      axios.get('https://localhost:4000/api/get_check_email/' + email)
      .then (res => {
        let result = res.data[0].check_email
        if (result == 1) {
          this.$refs.email.hideDetails = true
          this.$refs.email.hint ="อีเมล์ซ้ำ กรุณาเลือกชื่ออื่น"
          this.statusEmail = false
        } else {
          this.statusEmail = true
          this.$refs.email.hideDetails = false
          this.$refs.email.hint = undefined
        }
      })
    }
  },
  computed: {
    isValid () {
      return this.statusUsername == true && this.statusEmail == true && this.data.fname != '' && this.data.lname != '' && this.data.sex != '' && this.data.birthday != null && this.user_name != '' && this.email != '' && this.data.user_pass != '' && this.data.user_img != ''
    }
  }
}
</script>
