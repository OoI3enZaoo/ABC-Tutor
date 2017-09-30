<template>
  <div>
    <parallax height = "200"  src="https://www.guttersupply.com/file_area/public/categories/ImageUrl_1241190124_7226.jpg">
        <h5 class="white--text mt-4">{{course.subject}} ({{course.code}})</h5>
        <!-- <h6 class="white--text">ผู้ที่ต้องการสอบกลางภาควิชาคอมพิวเตอร์เบื้องต้น (SP521)</h6> -->
        <h6 class="white--text">สร้างโดย <span class="blue--text">{{course.fname}} {{course.lname}}</span> อัพเดทข้อมูลล่าสุดเมื่อ {{course.lastUpdate}}</h6>
    </parallax>
    <br>
    <v-container grid-list-lg>
      <v-layout row wrap>
        <v-flex xs12 sm9>
          <h6 class="headline">เนื้อหาเรียน</h6>
          <span v-html="course.des">{{course.des}}</span>
          <br
          <hr>
          <br>
          <h6 class="headline">เกี่ยวกับผู้สอน</h6>
          <v-layout>
            <v-flex xs2>
              <v-avatar tile size="80px">
                <img :src="course.user_img" alt="John">
              </v-avatar>
            </v-flex>
            <v-flex xs3>
              <nuxt-link to="/user" tag="span" style="cursor:pointer;"><p style="display:inline;"class="blue--text">{{course.fname}} {{course.lname}}</p></nuxt-link><br>
              <v-layout>
                <v-flex xs2>
                  <v-btn icon><v-icon>fa-facebook-square</v-icon></v-btn>
                </v-flex>
                <v-flex xs2>
                    <v-btn icon><v-icon>fa-twitter-square</v-icon></v-btn>
                </v-flex>
                <v-flex xs2>
                    <v-btn icon><v-icon>fa-youtube-square</v-icon></v-btn>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
          <br><hr><br>
          <h6 class="headline">การตอบรับของผู้เรียน</h6>
          <v-layout>
            <v-flex xs2 text-xs-center>
              <div class="mt-2">
                <h3><b>5.0</b></h3>
                <template v-for="a in 5">
                  <v-icon>star</v-icon>
                </template><br>
                <span class="grey--text">ผลโหวตโดยเฉลี่ย</span>
              </div>
            </v-flex>
            <v-flex xs2>
                <v-progress-linear value="100" height="10" success> </v-progress-linear>
                <v-progress-linear value="80" height="10" success> </v-progress-linear>
                <v-progress-linear value="70" height="10" success> </v-progress-linear>
                <v-progress-linear value="40" height="10" success> </v-progress-linear>
                <v-progress-linear value="10" height="10" success> </v-progress-linear>
            </v-flex>
            <v-flex xs3>
              <div class="mt-2">
                  <v-icon>star</v-icon><v-icon>star</v-icon><v-icon>star</v-icon><v-icon>star</v-icon><v-icon>star</v-icon> <br>
                  <v-icon>star</v-icon><v-icon>star</v-icon><v-icon>star</v-icon><v-icon>star</v-icon><br>
                  <v-icon>star</v-icon><v-icon>star</v-icon><v-icon>star</v-icon><br>
                  <v-icon>star</v-icon><v-icon>star</v-icon><br>
                  <v-icon>star</v-icon><br>
                </div>
            </v-flex>
          </v-layout>
          <br><hr><br>
          <h6 class="headline">การรีวิว</h6>
            <v-layout>
              <v-flex xs1>
                <v-avatar>
                  <img src="http://s3.amazonaws.com/s3.timetoast.com/public/uploads/photos/2065220/billgates.png" alt="avatar">
                </v-avatar>
              </v-flex>
              <v-flex xs1>
                  <span class="grey--text">5 นาทีที่แล้ว</span><br>
                  <span>Bill Gates</span>
              </v-flex>
              <v-flex xs4>
                <template v-for="a in 5">
                  <v-icon>star</v-icon>
                </template><br>
                <span>ชอบมากครับ ที่ผมมีทุกวันนี้ได้เพราะคุณคนเดียวเลย เยี่ยมจริงๆ</span>
              </v-flex>
            </v-layout>
        </v-flex>
        <v-flex xs12 sm3>
          <v-card fixed>
            <v-card-media :src="course.cover" height="150"></v-card-media>
            <v-card-text>
              <span v-if="!checkCoursePurchase" class="headline">350.-</span><br><br>
              <div class="text-xs-center">
                  <v-btn v-if="!checkCoursePurchase && !checkCourseCreate" primary block @click.native="purchasedCourse">ซื้อตอนนี้</v-btn>
                  <template v-if="!checkCoursePurchase && !checkCourseCreate">
                    <template v-if="!checkCourseFavorite">
                      <v-btn  primary outline block @click.native="favoriteCourse(1)">เพิ่มเป็นรายการที่อยากได้</v-btn>
                    </template>
                    <template v-else>
                        <v-btn  primary outline block @click.native="favoriteCourse(0)">นำออกจากรายการที่อยากได้</v-btn>
                    </template>
                  </template>
                  <template v-else>
                    <!-- <h6>ไม่สามารถผ</h6> -->
                    <v-btn primary nuxt :to="'/mycourse/' + course.course_id">ดูรายละเอียดคอร์ส</v-btn>
                  </template>
              </div>
            </v-card-text>
          </v-card>
          <br><br>
          <p class="headline ml-4">ซื้อไปแล้ว 5 คน</p>
          <v-list>
            <div style="max-height:480px; overflow:scroll;">
              <template v-for="a in 50">
                <v-list-tile @click="" avatar>
                  <v-list-tile-avatar>
                    <img src="http://c12.incisozluk.com.tr/res/incisozluk//11503/3/1891623_od3a8.jpg" alt="avatar">
                  </v-list-tile-avatar>
                  <v-list-tile-content>
                    <v-list-tile-title>
                      mark zuckerberg
                    </v-list-tile-title>
                    <v-list-tile-sub-title>
                      8/9/2560 16:58
                    </v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
              </template>
            </div>
          </v-list>
        </v-flex>
      </v-layout>
    </v-container>
    {{checkCourseCreate}}
  </div>
</template>

<script>
import parallax from '../../../components/parallax.vue'
export default {
  async fetch ({store, route}) {
    await store.dispatch('PULL_COURSE_FROM_COURSE_ID', route.params.id)
    // await store.dispatch('PULL_USER_FROM_COURSE_ID', route.params.id)
  },
  components: {
    parallax
  },
  methods: {
    purchasedCourse() {
      // if (this.$store.state.isLogin == true) {
        console.log('course_id: ' + this.course.course_id)
        this.$store.dispatch('ADD_COURSE_PURCHASED', this.course.course_id)
        // this.$router.push('/')
      // }
    },
    favoriteCourse(status) {
      if (status == 1) {
        this.$store.dispatch('ADD_COURSE_FAVORITE', this.course.course_id)
      } else {
        this.$store.dispatch('REMOVE_COURSE_FAVORITE', this.course.course_id)
      }
    }
  },
  computed: {
    course () {
      return this.$store.getters.COURSE_FROM_ID(this.$route.params.id)[0]
    },
    checkCourseFavorite () {
      return this.$store.getters.COURSE_FAVORITE(this.$route.params.id)[0]
    },
    checkCoursePurchase () {
      return this.$store.getters.COURSE_PURCHASE(this.$route.params.id)[0]
    },
    checkCourseCreate () {
      return this.$store.getters.COURSE_CREATE(this.$route.params.id)[0]
    }
  }
}
</script>
