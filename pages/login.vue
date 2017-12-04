<template>
  <div>
    <br><br>
      <v-container>
        <v-layout>
          <v-flex xs12 sm8 md7 lg5  offset-sm3 offset-md3 offset-lg4>
            <v-card>
              <v-card-text>
                <h6 class="red--text">เข้าสู่ระบบ</h6>
                <p style="display:inline;">ยังไม่ได้ลงทะเบียนกับเรา?</p>&nbsp;<nuxt-link to="/register">ลงทะเบียน</nuxt-link><br><br>
                <hr>
                <br>
                <v-text-field label="ชื่อผุ้ใช้" v-model="user_name"></v-text-field>
                <v-text-field type="password"label="รหัสผ่าน" v-model="user_pass"></v-text-field>
                <!-- <v-checkbox label="ให้ฉันลงชื่อเข้าใช้อยู่เสมอ"></v-checkbox> -->
                <v-btn primary :disabled="!isValid" @click.native="login" block>เข้าสู่ระบบ</v-btn>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      user_name: '',
      user_pass: ''
    }
  },
  computed: {
    isValid () {
      return this.user_name !== '' && this.user_pass !== ''
    }
  },
  methods: {
    async login () {
      let user_id = null
      await axios.get('http://172.104.167.197:4000/api/get_check_password/' + this.user_name + '/' + this.user_pass)
      .then (res => {
        let result = res.data[0]
        if (result.check_pass == 1) {
           user_id = result.user_id
        } else {
          window.alert('รหัสผิดพลาด')
          this.user_name = ''
          this.user_pass = ''
        }
      })
      if (user_id != null) {
        axios.get('http://172.104.167.197:4000/api/user/' + user_id)
        .then (res => {
          let result = res.data[0]
          this.$store.commit('addUserData', result)
          this.$store.commit('setIsLogin', true)
          console.log('user_iduser_id: ' + user_id);
          this.$socket.emit('join', user_id)
          this.$router.push('/home')
        })
      }
    },
    hackLogin () {
      this.$store.commit('setIsLogin', true)
      this.$router.push('/home')
    }
  }
}
</script>
