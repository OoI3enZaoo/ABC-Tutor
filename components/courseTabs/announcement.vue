<template>
  <div>

    <v-container grid-list-lg>
      <v-switch color="primary" v-model="isTutor" label="เป็นติวเตอร์"></v-switch>

          <v-layout row wrap>
            <v-flex xs10>
            </v-flex>
            <v-flex xs2 text-xs-right >
              <template v-if="isTutor">
                  <create title="สร้างคำประกาศ" type="2" style="margin-left:60px;" @result="dataFromQuill"></create>
              </template>
            </v-flex>
            <template v-for="a in 2">
                <v-flex xs12>
                  <v-card>
                    <v-card-text>
                      <v-layout>
                        <v-flex xs5 sm2>
                          <img src="https://image.flaticon.com/icons/png/512/206/206853.png" height="80">
                        </v-flex>
                        <v-flex xs7 sm4>
                          <span class="blue--text">Theerapat Vijtipoo</span><br>
                          <span class="grey--text">ประกาศเมื่อ 25 นาทีที่แล้ว</span>
                        </v-flex>
                      </v-layout>
                      <br>
                      <p><b>เทคนิคสำคัญในการทำข้อสอบวิชาคอมพิวเตอร์เบื้องต้น</b></p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      <v-layout>
                        <v-flex xs2 sm1>
                          <img src="http://www.pngmart.com/files/3/Bill-Gates-PNG-Transparent-Image.png" height="50">
                        </v-flex>
                        <v-flex xs10 sm11>
                            <v-text-field class="elevation-1"
                            solo
                            label='พิมข้อความของคุณที่นี่..'
                            single-line
                            ></v-text-field>
                        </v-flex>
                      </v-layout>
                      <br>
                      <v-layout v-for="(a,index) in 2" :key="index">
                        <v-flex xs2 sm1>
                          <img src="http://www.pngall.com/wp-content/uploads/2016/04/Mark-Zuckerberg-Free-Download-PNG.png" height="50">
                        </v-flex>
                        <v-flex xs10 sm3>
                            <span class="blue--text">สมชาย</span> &nbsp;<span class="grey--text">5 นาทีที่แล้ว</span><br>
                            <span>ขอบคุณค่ะ</span>
                        </v-flex>
                        <br><br><br>
                      </v-layout>
                    </v-card-text>
                  </v-card>
                </v-flex>
              </template>
          </v-layout>
          <br><br><br><br>
    </v-container>
  </div>
</template>
<script>
import create from './addon/createQuestion.vue'
export default {
  data () {
    return {
      isTutor: false
    }
  },
  components: {
    create
  },
  methods: {
    dataFromQuill (val) {
      const data = {
        room: 1212335,
        description: val.description
      }
      this.$socket.emit('announcement', data)
    }
  }
}
</script>
