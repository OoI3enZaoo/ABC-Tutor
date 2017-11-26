<template>
  <div>
    <!-- {{$store.state.course}} -->
<!-- {{$store.state.currentCourse}} -->

<!-- {{$store.getters.ALL_COURSE_FROM_ID(this.$route.params.branchId).length}} -->
    <parallax height="200" :src= "$store.state.background">
      <div class="mt-5" style="display:inline;">
        <div v-if="$store.state.isLogin === true">
          <h5 style="display:inline;"><v-btn icon nuxt to="/" dark><v-icon large dark>home</v-icon></v-btn>&nbsp;&nbsp;/&nbsp;&nbsp;<nuxt-link to="/course" class="white--text">คอร์สทั้งหมด</nuxt-link><span>&nbsp;&nbsp;/&nbsp;&nbsp;{{branch[0].text}}</span></h5><br>
        </div>
        <h4 style="display:inline;" >{{branch[0].text}} พบ {{courseLength}} คอร์ส</h4>
      </div>
    </parallax>
    <v-container grid-list-lg>
      <v-text-field
      solo
      label="ค้นหา"
      append-icon="search"
      v-model="searchModel"
      >
      </v-text-field>
      <br>
      <v-layout row wrap>
          <template v-for="(data,key) in course">
             <v-flex xs12 lg6 :key="key">
               <nuxt-link :to="'/course/' + data.course_id" tag="span" style="cursor:pointer;">
                  <v-card>
                    <v-layout row wrap>
                      <v-flex lg3 xs12>
                        <v-card-media :src="data.cover" height="200"></v-card-media>
                      </v-flex>
                      <v-flex lg5 xs12>
                        <v-card-text>
                          <span>{{data.subject}} ({{data.code}})</span><br>                          
                          <p class="grey--text">{{data.fname}} {{data.lname}}</p>
                          <p v-html="data.des"></p>
                        </v-card-text>
                      </v-flex>
                      <v-flex lg4 xs12 text-xs-right>
                        <v-card-text>
                          <span class="grey--text">สร้างเมื่อ {{data.ts}}</span><br>
                              <div class="mt-5">
                                  <h6><b>{{data.price}}.-</b></h6>
                                  <RatingInCard :courseId="data.course_id"></RatingInCard>
                              </div>
                          </v-card-text>
                      </v-flex>
                    </v-layout>
                  </v-card>
                  <br>
                </nuxt-link>
             </v-flex>
         </template>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
import parallax from '../../../components/parallax.vue'
import RatingInCard from '../../../components/RatingInCard.vue'
export default {
  async asyncData ({ store, route}) {
    // if (store.getters.ALL_COURSE_FROM_ID(route.params.branchId).length == 0) {
      await store.dispatch('PULL_COURSE_FROM_BRANCH_ID', route.params.branchId)
      console.log('params: ' + JSON.stringify(route.params))
    // }
  },
  created () {
    this.courseAfterSearch = this.course
  },
  computed: {
    branch () {
      return this.$store.getters.BRANCH_FROM_ID(this.$route.params.branchId)
    },
    course () {
      return this.$store.getters.ALL_COURSE_FROM_ID(this.$route.params.branchId)
    },
    courseLength () {
      return this.$store.getters.ALL_COURSE_FROM_ID(this.$route.params.branchId).length
    },
    courseVote () {
      return this.$store.getters.COURSE_VOTE_FROM_COURSE_ID(this.$route.params.id)[0]
    },
    courseVoteAVG () {
      return this.$store.getters.COURSE_VOTE_FROM_COURSE_ID(this.$route.params.id)[0].avg.toFixed(1)
    },
  },
  components: {
    parallax,
    RatingInCard
  },
  data () {
    return {
      searchModel: '',
      courseAfterSearch: '',
      page: 1
    }
  },
  watch: {
    searchModel: function (val) {
      this.getAnswer(val)
    }
  },
  methods: {
    getAnswer (val) {
      let vmData = []
      if (val == '') {
        this.courseAfterSearch = this.course
      } else {
        this.course.map(res => {
          console.log(res)
          let code = res.code.search(val)
          let subject = res.subject.search(val)
          if (code != -1) {
            vmData.push(res)
          }
          if (subject != -1) {
            vmData.push(res)
          }
        })
        this.courseAfterSearch = vmData
      }
    }
  }
}
</script>
