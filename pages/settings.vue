<template>
  <div>
    <v-container>
      <v-subheader>ข้อมูลส่วนตัว</v-subheader>
      <v-card class="ml-3 mr-3">
        <v-card-text>
            <div class="text-xs-right">
              <v-btn primary>บันทึก</v-btn>
            </div>
          <v-subheader>ข้อมูลทั่วไป</v-subheader>
          <v-list>
            <v-list-tile>
              <v-text-field label="ชื่อจริง"></v-text-field>
            </v-list-tile>
            <br>
            <v-list-tile>
              <v-text-field label="นามสกุล"></v-text-field>
            </v-list-tile>
            <br>
            <v-list-tile>
              <v-text-field counter label="พาดหัว" hint="เช่น Web Deverloper" max="50"></v-text-field>
            </v-list-tile>
          </v-list>
          <br>
          <v-subheader>ประวัติส่วนตัว</v-subheader>
          <v-list>
            <quill class=""></quill>
          </v-list>
          <br>
        </v-card-text>
        <div class="grey lighten-4">
          <v-card-text>
            <v-subheader>ช่องทางอื่นๆ</v-subheader>
              <v-layout row fluid>
                <v-flex xs1 text-xs-center>
                  <v-icon large class="mt-1">fa-facebook-official</v-icon>
                </v-flex>
                <v-flex xs3>
                  <v-text-field class="grey lighten-1 elevation-0" disabled solo value="http://www.facebook.com/"></v-text-field>
                </v-flex>
                <v-flex xs6>
                  <v-text-field class="elevation-0" flat solo label="เฟสบุ๊คลิงค์"></v-text-field>
                </v-flex>
              </v-layout>
              <br>
              <v-layout row fluid>
                <v-flex xs1 text-xs-center>
                  <v-icon large class="mt-1">fa-twitter-square</v-icon>
                </v-flex>
                <v-flex xs3>
                  <v-text-field class="grey lighten-1 elevation-0" disabled solo value="http://twitter.com/"></v-text-field>
                </v-flex>
                <v-flex xs6>
                  <v-text-field class="elevation-0" flat solo label="ทวิตเตอร์ลิงค์"></v-text-field>
                </v-flex>
              </v-layout>
              <br>
              <v-layout row fluid>
                <v-flex xs1 text-xs-center>
                  <v-icon large class="mt-1">fa-youtube-square</v-icon>
                </v-flex>
                <v-flex xs3>
                  <v-text-field class="grey lighten-1 elevation-0" disabled solo value="http://www.youtube.com/"></v-text-field>
                </v-flex>
                <v-flex xs6>
                    <v-text-field class="elevation-0" flat solo label="ยูทูบลิงค์"></v-text-field>
                </v-flex>
              </v-layout>
          </v-card-text>
        </div>
      </v-card>
      <br><br>
      <v-subheader>รูปภาพ</v-subheader>
      <v-card class="ml-3 mr-3">
        <v-card-text>
          <div class="text-xs-right">
            <v-btn primary>บันทึก</v-btn>
          </div>
          <div class="text-xs-center">
            <v-avatar size="20" tile>
              <img src="https://scontent.fbkk1-2.fna.fbcdn.net/v/t1.0-9/18670848_1440946712632376_9108286887308110690_n.jpg?oh=ce1fb663302049cbb304c38276bc1638&oe=5A4E0989" style="height:150px;" alt="avatar">
            </v-avatar>
            <br><br>
            <v-btn primary>อัพโหลดรูป</v-btn>
          </div>
      </v-card-text>
      </v-card>


      <br><br>
      <v-subheader>การชำระเงิน</v-subheader>
      <v-card class="ml-3 mr-3">
        <v-card-text>
          <div class="text-xs-right">
            <v-btn primary>บันทึก</v-btn>
          </div>
          <v-subheader>ระบบชำระเงิน Paypal &nbsp;<nuxt-link to="">ข้อมูลเพิ่มเติม</nuxt-link></v-subheader>
          <v-list>
            <v-list-tile>
              <v-text-field label="คีย์ของ Paypal"></v-text-field>
            </v-list-tile>
          </v-list>
        </v-card-text>
      </v-card>

    </v-container>
  </div>
</template>
<script>
import quill from '../components/quill.vue'
export default {
  components: {
    quill
  }
}
</script>
