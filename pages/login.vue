<template>
  <div>
    <br><br>
      <v-container>
        <v-layout>
          <v-flex xs12 sm4 offset-sm4 >
            <v-card>
              <v-card-text>
                <h6 class="red--text">เข้าสู่ระบบ</h6>
                <p style="display:inline;">ยังไม่ได้ลงทะเบียนกับเรา?</p>&nbsp;<nuxt-link to="/">ลงทะเบียน</nuxt-link><br><br>
                <hr>
                <br>
                <v-text-field label="อีเมล"></v-text-field>
                <v-text-field label="รหัสผ่าน"></v-text-field>
                <!-- <v-checkbox label="ให้ฉันลงชื่อเข้าใช้อยู่เสมอ"></v-checkbox> -->
                <v-btn primary @click.native="login">เข้าสู่ระบบ</v-btn><br>
                <br>
                <hr class="grey lighten-4">
                <br>
                <v-btn block  class="blue white--text">เข้าสู่ระบบด้วย Facebook</v-btn>
                <v-btn block  class="white mt-3">เข้าสู่ระบบด้วย Google</v-btn>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
  </div>
</template>
<script>
export default {
  methods: {
    login () {
      this.$store.commit('setIsLogin', true)
      this.$router.push('/')
    }
  }
}
</script>
