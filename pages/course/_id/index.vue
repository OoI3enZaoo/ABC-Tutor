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
              <template v-if="$store.state.isLogin == true">
              <div class="text-xs-center">
                  <div class="form" v-if="!checkCoursePurchase && !checkCourseCreate">
                      <form ref="omiseform"
                        name="checkoutForm"
                        method="POST"
                        :action="'https://localhost:4000/checkout/' +
                        course.course_id +
                        '/' + course.branch_id +
                        '/' + $store.state.profile.user_id +
                        '/' + currentDateTime +
                        '/' + course.price.toString()"
                      >
                      <v-btn
                        primary
                        block
                        class="checkout-button-1"
                        type="submit"
                        id="checkout-button-1"
                        ref="cbutton1"
                        >
                        <v-icon dark>shopping_cart</v-icon>&nbsp;ซื้อตอนนี้</v-btn>
                    </form>
                  </div>
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
            </template>
              <template v-else>
                <p class="text-xs-center">สำหรับสมาชิกเท่านั้น</p>
                  <v-btn block color="primary" @click.native="$router.push('/register')">สมัครสมาชิก</v-btn>
              </template>
            </v-card-text>
          </v-card>
          <br><br>
          <userPurchase></userPurchase>

        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import parallax from '../../../components/parallax.vue'
import userPurchase from '../../../components/userPurchase.vue'
import Vue from 'vue'
const moment = require('moment')
Vue.use(require('vue-moment'), {
    moment
})
export default {
  async fetch ({store, route}) {
    await store.dispatch('PULL_COURSE_FROM_COURSE_ID', route.params.id)
    await store.dispatch('PULL_COURSE_REVIEW', route.params.id)
  },
  components: {
    parallax,
    userPurchase
  },
  created () {
    moment.lang('th-TH')
    console.log('coursefromid')
    console.log(this.$store.getters.COURSE_FROM_ID(this.$route.params.id)[0])
    console.log('index popular')
    console.log(this.$store.getters.COURSE_POPULAR_INDEX_FROM_ID(this.$route.params.id)[0])
    console.log('home popular')
    console.log(this.$store.getters.COURSE_POPULAR_HOME_FROM_ID(this.$route.params.id)[0])

    console.log('course')
    console.log(this.course)
  },
  mounted () {
    this.$options.sockets.purchase = (data) => {
      console.log('data: ' + data)
      this.$store.dispatch('ADD_COURSE_PURCHASED', data)
      data.fname = this.$store.state.profile.fname
      data.lname = this.$store.state.profile.lname
      data.user_img = this.$store.state.profile.user_img
      this.$store.commit('addCourseUserPurchased', [data])
      this.$socket.emit('course_user_purchased', data)
      this.$socket.emit('subscribe', data.course_id)
    }
    if (!this.checkCoursePurchase && ! this.checkCourseCreate && this.$store.state.isLogin == true) {
      OmiseCard.configure({
        publicKey:        'pkey_test_5a1ks8kiuxwic3f4bre',
        amount:           this.course.price + '00',
        currency:         'thb',
        image:           'https://image.ibb.co/hKwoL6/icon.png',
        frameLabel:       'ABC-Tutor',
        frameDescription: 'สำหรับบัตร เดบิต/เครดิต',
        buttonLabel:      'จ่ายตอนนี้',
        location:         'no',
        billingName:      '',
        billingAddress:   '',
        submitFormTarget: null,
      });
        // Configuring your own custom button
        OmiseCard.configureButton('#checkout-button-1', {
          frameLabel: this.course.subject ,
          submitLabel: 'จ่ายตอนนี้',
        });
        // Then, attach all of the config and initiate it by 'OmiseCard.attach();' method
        OmiseCard.attach();
    }
  },
  methods: {

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
      return this.$store.getters.COURSE_FROM_ID(this.$route.params.id)[0] == undefined ? this.$store.getters.COURSE_POPULAR_INDEX_FROM_ID(this.$route.params.id)[0] == undefined ? this.$store.getters.COURSE_POPULAR_HOME_FROM_ID(this.$route.params.id)[0] : this.$store.getters.COURSE_POPULAR_INDEX_FROM_ID(this.$route.params.id)[0]  : this.$store.getters.COURSE_FROM_ID(this.$route.params.id)[0]
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
    courseVote () {
      return this.$store.getters.COURSE_VOTE_FROM_COURSE_ID(this.$route.params.id)[0]
    },
    courseVoteAVG () {
      return this.$store.getters.COURSE_VOTE_FROM_COURSE_ID(this.$route.params.id)[0].avg.toFixed(1)
    },
    courseReview () {
      return this.$store.getters.COURSE_REVIEW_FROM_COURSE_ID(this.$route.params.id)
    },
    currentDateTime () {
      return Vue.moment().format('YYYY-MM-DD HH:mm:ss')
    }
  }
}
</script>
