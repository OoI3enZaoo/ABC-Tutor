<template>
  <div>
    <parallax src="https://static1.squarespace.com/static/51609147e4b0715db61d32b6/521b97cee4b05f031fd12dde/5519e33de4b06a1002802805/1431718693701/?format=1500w" height="150">
    <div class="mt-4">
      <p class="headline">{{userData.fname}} {{userData.lname}}</p>

    </div>
    </parallax>
    <v-container grid-list-lg>
      <v-layout>
        <v-flex xs2>
          <v-card flat>
            <v-card-media :src="userData.user_img" height="200"></v-card-media>
            <v-layout>
              <v-flex xs3><v-btn icon @click.native="OpenLink(userData.facebook)"><v-icon class="blue--text">fa-facebook</v-icon></v-btn></v-flex>
              <v-flex xs3><v-btn icon @click.native="OpenLink(userData.twitter)"><v-icon class="blue--text">fa-twitter</v-icon></v-btn></v-flex>
              <v-flex xs3><v-btn icon @click.native="OpenLink(userData.google)"><v-icon class="blue--text">fa-google</v-icon></v-btn></v-flex>
              <v-flex xs3><v-btn icon @click.native="OpenLink(userData.youtube)"><v-icon class="blue--text">fa-youtube</v-icon></v-btn></v-btn></v-flex>
            </v-layout>
          </v-card>
        </v-flex>
        <v-flex xs10>
          <v-layout class="ml-3">
            <v-flex xs6>
              <v-layout>
                <v-flex xs2>
                  <img :src="student" height="70px">
                </v-flex>
                <v-flex xs5>
                  <br>
                  <h6 style="display:inline;">{{userStudent.student_count}}</h6>
                    <p class="grey--text">นักเรียนทั้งหมด</p>
                </v-flex>
              </v-layout>

              <v-layout class="mt-4">
                <v-flex xs2>
                  <img :src="owner" height="70px">
                </v-flex>
                <v-flex xs5>
                  <br>
                  <h6 style="display:inline;">{{userOwner.length}}</h6>
                    <p class="grey--text">คอร์สสอน</p>
                </v-flex>
              </v-layout>

            </v-flex>
            <v-flex xs6>
              <v-layout>
                <v-flex xs2>
                  <img :src="review" height="70px">
                </v-flex>
                <v-flex xs5>
                  <br>
                  <h6 style="display:inline;">{{userReview.review_count}}</h6>
                    <p class="grey--text">การถูกรีวิว</p>
                </v-flex>
              </v-layout>

              <v-layout class="mt-4">
                <v-flex xs2>
                  <img :src="course" height="70px">
                </v-flex>
                <v-flex xs5>
                  <br>
                  <h6 style="display:inline;">{{userPurchase.length}}</h6>
                    <p class="grey--text">คอร์สที่ลงเรียน</p>
                </v-flex>
              </v-layout>

            </v-flex>
          </v-layout>
          <!-- <v-card flat>
            <v-layout style="">
              <v-flex xs2>
                <p style="display:inline;"class="headline">{{userStudent.student_count}}</p><br>
                <span class="grey--text">นักเรียนทั้งหมด</span>
              </v-flex>
              <v-flex xs2>
                <p style="display:inline;"class="headline">{{userOwner.length}}</p><br>
                <span class="grey--text">คอร์สสอน</span>
              </v-flex>
              <v-flex xs2>
                <p style="display:inline;"class="headline">{{userReview.review_count}}</p><br>
                <span class="grey--text">การถูกรีวิว</span>
              </v-flex>
              <v-flex xs2>

                <p style="display:inline;"class="headline">{{userPurchase.length}}</p><br>
                <span class="grey--text">คอร์สที่ลงเรียน</span>
              </v-flex>
            </v-layout>
          </v-card> -->
        </v-flex>
      </v-layout>
      <br>
      <hr class="grey lighten-4"><br>
      <div class="text-xs-center">
        <p class="headline">คอร์สที่สอนโดย {{userData.fname}} {{userData.lname}}</p>
      </div>
      <template v-if="userPurchase.length == 0">
          <noDataCard png="https://www.wpclipart.com/people/baby/baby_faces/baby_sad.png" text="ผู้ใช้คนนี้ยังไม่ได้สอนคอร์สใด ๆ เลย"></noDataCard>
      </template>
      <template v-else>
        <v-layout row wrap>
          <template v-for="data in userOwner">
            <v-flex xs6 md4 lg3>
              <nuxt-link :to="'/course/' + data.course_id" tag="span" style="cursor:pointer;">
                <v-card>
                  <v-card-media :src="data.cover" height="150"></v-card-media>
                  <v-card-text>
                    <p>{{data.subject}} ({{data.code}})</p>
                    <span class="grey--text">{{data.fname}} {{data.lname}}</span><br>
                      <RatingInCard :courseId= "data.course_id"></RatingInCard>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <h6 class="primary--text">{{data.price}}.-</h6>
                  </v-card-actions>
                </v-card>
              </nuxt-link>
            </v-flex>
          </template>
        </v-layout>
      </template>
<br>
<hr>
<br>

      <div class="text-xs-center">
        <p class="headline">คอร์สที่ {{userData.fname}} {{userData.lname}} ลงเรียน</p>
      </div>
      <template v-if="userPurchase.length == 0">
          <noDataCard png="https://www.wpclipart.com/people/baby/baby_faces/baby_sad.png" text="ผู้ใช้คนนี้ยังไม่ได้ลงเรียนคอร์สใด ๆ เลย"></noDataCard>
      </template>
      <template v-else>
        <v-layout row wrap>
          <template v-for="data in userPurchase">
            <v-flex xs6 md4 lg3>
              <nuxt-link :to="'/course/' + data.course_id" tag="span" style="cursor:pointer;">
                <v-card>
                  <v-card-media :src="data.cover" height="150"></v-card-media>
                  <v-card-text>
                    <p>{{data.subject}} ({{data.code}})</p>
                    <span class="grey--text">{{data.fname}} {{data.lname}}</span><br>
                      <RatingInCard :courseId= "data.course_id"></RatingInCard>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <h6 class="primary--text">{{data.price}}.-</h6>
                  </v-card-actions>
                </v-card>
              </nuxt-link>
            </v-flex>
          </template>
        </v-layout>
    </template>

    </v-layout>

    </v-container>
  </div>
</template>
<script>

import parallax from '../../components/parallax.vue'
import RatingInCard from '../../components/RatingInCard.vue'
import noDataCard from '../../components/noDataCard.vue'
export default {
  async asyncData ({store, route}) {
    await store.dispatch('PULL_USER_DATA', route.params.id)
    await store.dispatch('PULL_USER_OWNER', route.params.id)
    await store.dispatch('PULL_USER_STUDENT', route.params.id)
    await store.dispatch('PULL_USER_REVIEW', route.params.id)
    await store.dispatch('PULL_USER_PURCHASE', route.params.id)
  },
  methods: {
    OpenLink (val) {
      if (val !== '') {
        window.open(val,'_blank')
      }
    }
  },
  data () {
    return {
      course: require('../../static/user/course.png'),
      owner: require('../../static/user/owner.png'),
      review: require('../../static/user/review.png'),
      student: require('../../static/user/student.png')
    }
  },
  components: {
    parallax,
    RatingInCard,
    noDataCard
  },
  computed: {
    userData () {
      return this.$store.getters.USER_DATA(this.$route.params.id)[0]
    },
    userOwner () {
      return this.$store.getters.USER_OWNER(this.$route.params.id)
    },
    userStudent () {
      return this.$store.getters.USER_STUDENT(this.$route.params.id)[0]
    },
    userReview () {
      return this.$store.getters.USER_REVIEW(this.$route.params.id)[0]
    },
    userPurchase () {
      return this.$store.getters.USER_PURCHASE(this.$route.params.id)
    }
  }
}
</script>
