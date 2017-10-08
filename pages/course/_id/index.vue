<template>
  <div>
    <parallax height = "200"  :src="$store.state.background">
        <h5 class="white--text mt-4">{{course.subject}} ({{course.code}})</h5>
        <!-- <h6 class="white--text">ผู้ที่ต้องการสอบกลางภาควิชาคอมพิวเตอร์เบื้องต้น (SP521)</h6> -->
        <h6 class="white--text">สร้างโดย <span class="blue--text">{{course.fname}} {{course.lname}}</span> อัพเดทข้อมูลล่าสุดเมื่อ {{course.lastUpdate}}</h6>
    </parallax>
    <br>
    <v-container grid-list-lg>
      <v-layout row wrap>
        <v-flex xs12 sm9>
          <h6 class="headline">เนื้อหาเรียน</h6>
          <span v-html="course.des">{{course.des}}</span><br>
          <br>
          <hr>
          <br>
          <h6 class="headline">เกี่ยวกับผู้สอน</h6>
          <v-layout>
            <v-flex xs4 sm4 md4 lg2>
              <v-avatar tile size="80px">
                <img :src="course.user_img" alt="John">
              </v-avatar>
            </v-flex>
            <v-flex xs8 sm8 md8 lg2>
              <nuxt-link :to="'/user/' + course.user_id" tag="span" style="cursor:pointer;"><p style="display:inline;"class="blue--text">{{course.fname}} {{course.lname}}</p></nuxt-link><br>
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
            <template v-if="courseVote">
            <v-layout row wrap>
              <v-flex xs12 sm3 md3 text-xs-center>
                <div class="mt-2">
                  <h3><b>{{courseVoteAVG}}</b></h3>
                  <template v-for="a in 5">
                    <v-icon>star</v-icon>
                  </template><br>
                  <span class="grey--text">ผลโหวตโดยเฉลี่ย</span><br>
                  <span class="grey--text">จาก <span class="black--text">{{courseVote.length}}</span> คน</span>
                </div>
              </v-flex>
              <v-flex xs12 sm3 md3>
                <div class="hidden-xs-only">
                  <v-progress-linear :value="courseVote.five/courseVote.length*100" height="10" success> </v-progress-linear>
                  <v-progress-linear :value="courseVote.four/courseVote.length*100" height="10" success> </v-progress-linear>
                  <v-progress-linear :value="courseVote.three/courseVote.length*100" height="10" success> </v-progress-linear>
                  <v-progress-linear :value="courseVote.two/courseVote.length*100" height="10" success> </v-progress-linear>
                  <v-progress-linear :value="courseVote.one/courseVote.length*100" height="10" success> </v-progress-linear>
                </div>
              </v-flex>
              <v-flex xs12 sm6 md6 text-md-left text-xs-center>
                <div class="mt-2">
                    <v-icon>star</v-icon><v-icon>star</v-icon><v-icon>star</v-icon><v-icon>star</v-icon><v-icon>star</v-icon> {{courseVote.five}} คน<br>
                    <v-icon>star</v-icon><v-icon>star</v-icon><v-icon>star</v-icon><v-icon>star</v-icon> {{courseVote.four}} คน<br>
                    <v-icon>star</v-icon><v-icon>star</v-icon><v-icon>star</v-icon> {{courseVote.three}} คน<br>
                    <v-icon>star</v-icon><v-icon>star</v-icon> {{courseVote.two}} คน<br>
                    <v-icon>star</v-icon> {{courseVote.one}} คน<br>
                  </div>
              </v-flex>
            </v-layout>
          </template>
          <template v-else>
            <p>คอร์สนี้ยังไม่มีการถูกโหวต</p>
          </template>
          <br><hr><br>
          <h6 class="headline">การรีวิว</h6>
          <template v-if="courseReview.length !== 0">
            <div style="overflow:scroll; height:300px; overflow-x:hidden;">
                <template v-for="data in courseReview">
                  <v-layout :key="data.review_id">
                    <v-flex xs2 sm2 md2 lg1>
                      <v-avatar>
                        <img :src="data.user_img" alt="avatar">
                      </v-avatar>
                    </v-flex>
                    <v-flex xs5 sm5 md5 lg2>
                        <span class="grey--text">
                          {{ data.review_ts | moment("from", "now", true) }} ก่อน
                        </span><br>
                        <span>{{data.fname}} {{data.lname}}</span>
                    </v-flex>
                    <v-flex xs5 sm5 md5 lg4>
                      <template v-for="a in data.review_vote">
                        <v-icon>star</v-icon>
                      </template><br>
                      <span>{{data.review_text}}</span>
                    </v-flex>
                  </v-layout>
                  <br>
                </template>
              </div>
          </template>
          <template v-else>
              <p>คอร์สนี้ยังไม่มีการถูกรีวิว</p>
          </template>
        </v-flex>

        <v-flex xs12 sm12 md3>
          <v-card fixed>
            <v-card-media :src="course.cover" height="150"></v-card-media>
            <v-card-text>
              <span v-if="!checkCoursePurchase" class="headline">{{course.price}}.-</span><br><br>
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
          <p class="headline ml-4">ซื้อไปแล้ว {{courseUserPurchased.length}} คน</p>
          <v-list>
            <div style="max-height:480px; overflow:scroll; overflow-x:hidden;">
              <template v-for="data in courseUserPurchased" >
                <v-list-tile @click="" avatar nuxt :to="'/user/' + data.user_id" tag="span" >
                  <v-list-tile-avatar>
                    <img :src="data.user_img" alt="avatar">
                  </v-list-tile-avatar>
                  <v-list-tile-content>
                    <v-list-tile-title>
                      {{data.fname}} {{data.lname}}
                    </v-list-tile-title>
                    <v-list-tile-sub-title>
                      {{ data.purchase_ts | moment("from", "now", true) }} ที่ผ่านมา
                    </v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
              </template>
            </div>
          </v-list>
        </v-flex>
      </v-layout>
    </v-container>

  </div>
</template>

<script>
import parallax from '../../../components/parallax.vue'
import Vue from 'vue'
const moment = require('moment')
Vue.use(require('vue-moment'), {
    moment
})
export default {
  async fetch ({store, route}) {
    await store.dispatch('PULL_COURSE_FROM_COURSE_ID', route.params.id)
    await store.dispatch('PULL_USER_PURCHASED', route.params.id)
    await store.dispatch('PULL_COURSE_REVIEW', route.params.id)
  },
  components: {
    parallax
  },
  methods: {
    purchasedCourse() {
      // if (this.$store.state.isLogin == true) {
        console.log('course_id: ' + this.course.course_id)
        let data = {
          course_id: this.course.course_id,
          branch_id: this.course.branch_id,
          user_id: this.$store.state.profile.user_id,
          purchase_ts: Vue.moment().format('YYYY-MM-DD HH:mm:ss')
        }
        this.$store.dispatch('ADD_COURSE_PURCHASED', data)
        data.fname = this.$store.state.profile.fname
        data.lname = this.$store.state.profile.lname
        data.user_img = this.$store.state.profile.user_img
        this.$store.commit('addCourseUserPurchased', [data])
        this.$socket.emit('course_user_purchased', data)
        this.$socket.emit('subscribe', data.course_id)
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
    },
    courseUserPurchased () {
      return this.$store.getters.COURSE_USER_PURCHASED(this.$route.params.id)
    },
    courseVote () {
      return this.$store.getters.COURSE_VOTE_FROM_COURSE_ID(this.$route.params.id)[0]
    },
    courseVoteAVG () {
      return this.$store.getters.COURSE_VOTE_FROM_COURSE_ID(this.$route.params.id)[0].avg.toFixed(1)
    },
    courseReview () {
      return this.$store.getters.COURSE_REVIEW_FROM_COURSE_ID(this.$route.params.id)
    }
  }
}
</script>
