<template>
  <div>
    <v-container grid-list-lg><br>
      <p class="headline">กิจกรรมล่าสุด</p>
      <v-layout row wrap>
        <v-flex xs12 sm6>
          <v-card>
              <template v-for="(a,i) in 3">
                  <v-list two-line>
                    <v-card-text v-if="i == 0">
                        <h6>คำถามล่าสุด</h6>
                    </v-card-text>
                    <v-divider v-if="i == 0"></v-divider>
                    <v-list-tile avatar @click="">
                      <v-list-tile-avatar>
                        <img src="https://image.flaticon.com/icons/png/512/206/206853.png">
                      </v-list-tile-avatar>
                      <v-list-tile-content>
                        <v-list-tile-sub-title><span>จันทร์จาง มาไร</span></v-list-tile-sub-title>
                        <v-list-tile-title><span>ส่วนประกอบของคอมพิวเตอร์มีอะไรบ้างครับ?</span></v-list-tile-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    <v-divider inset></v-divider>
                  </v-list>
              </template>
              <!-- <v-card-text>
                <span class="blue--text" style="text-decoration:underline;">ดูคำถามทั้งหมด</span>
              </v-card-text> -->
          </v-card>
        </v-flex>
        <v-flex xs12 sm6>
          <v-card>
              <template v-for="(a,i) in 3">
                  <v-list two-line>
                    <v-card-text v-if="i == 0">
                        <h6>การประกาศล่าสุดของผู้สอน</h6>
                    </v-card-text>
                    <v-divider v-if="i == 0"></v-divider>
                    <v-list-tile avatar @click="">
                      <v-list-tile-avatar>
                        <img src="https://scontent.fbkk1-3.fna.fbcdn.net/v/t1.0-9/18670848_1440946712632376_9108286887308110690_n.jpg?oh=aed0ea5bba94084d3114d146c6c7a907&oe=5A267C89">
                      </v-list-tile-avatar>
                      <v-list-tile-content>
                        <v-list-tile-sub-title><span>Theerapat Vijitpoo</span></v-list-tile-sub-title>
                        <v-list-tile-title><span>เฉลยข้อสอบ</span></v-list-tile-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    <v-divider inset></v-divider>
                  </v-list>
              </template>
              <!-- <v-card-text>
                <span class="blue--text" style="text-decoration:underline;">ดูคำถามทั้งหมด</span>
              </v-card-text> -->
          </v-card>
        </v-flex>
      </v-layout>
<br><br><v-divider></v-divider><br><br>

      <p class="headline">เกี่ยวกับคอร์ส</p>
      <p>เนื้อหาเกี่ยวกับสอบกลางภาค บทที่ 1-5</p>

<br><br><v-divider></v-divider><br><br>

  <p class="headline">ผู้สอน</p>
  <v-layout>
    <v-flex lg2 md3 sm5 xs7>
        <img :src="course.user_img" height="100">
    </v-flex>
    <v-flex lg10 md9 sm7 xs5>
        <router-link :to="'/user/' + course.user_id" tag="span" style="cursor:pointer;"><h6 class="blue--text">{{course.fname}} {{course.lname}}</h6></router-link>
        <div>
          <v-icon>fa-google-plus-square</v-icon>&nbsp;&nbsp;&nbsp;<a target="_blank" :href="'https://mail.google.com/mail/?view=cm&fs=1&to=' + course.email">{{course.email}}</a>
        </div>
        <div v-if="course.facebook !== ''">
          <v-icon>fa-facebook-official</v-icon>&nbsp;&nbsp; <a target="_blank" :href="course.facebook">{{course.facebook}}</a>
        </div>
        <div v-if="course.twitter !== ''">
          <v-icon>fa-twitter-square</v-icon>&nbsp;&nbsp; <a target="_blank" :href="course.twitter">{{course.twitter}}</a>
        </div>
        <div v-if="course.youtube !== ''">
          <v-icon>fa-youtube-square</v-icon>&nbsp;&nbsp; <a target="_blank" :href="course.youtube">{{course.youtube}}</a>
        </div>
    </v-flex>
  </v-layout>
<br><br><v-divider></v-divider><br><br>
    </v-container>

  </div>
</template>
<script>
export default {
  computed: {
    isTutor () {
      return this.$store.state.tutor.isTutor
    },
    course () {
      return this.$store.getters.COURSE_FROM_ID(this.$route.params.id)[0]
    }
  }
}
</script>
