<template>
  <div>

<!-- {{$store.state.currentCourse}} -->
    <parallax height="200" src= "https://archive.org/download/abstract-colored-circle-red-material-designlines-background/abstract-colored-circle-red-material-designlines-background.jpg">
      <div class="mt-4">
        <div v-if="$store.state.isLogin === true">
          <h5 style="display:inline;"><v-btn icon nuxt to="/"><v-icon large dark>home</v-icon></v-btn>&nbsp;&nbsp;/&nbsp;&nbsp;<nuxt-link to="/course" class="white--text">คอร์สทั้งหมด</nuxt-link><span>/&nbsp;&nbsp;{{branch[0].text}}</span></h5><br>
        </div>
        <h4 style="display:inline;" >{{branch[0].text}} พบ 265 คอร์ส</h4>
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
          <template v-for="(data,key) in $store.state.currentCourse">
             <v-flex xs12 :key="key">
               <nuxt-link to="/course/xs" tag="span" style="cursor:pointer;">
                  <v-card>
                    <v-layout row wrap>
                      <v-flex lg3 xs12>
                        <v-card-media :src="data.cover" height="200"></v-card-media>
                      </v-flex>
                      <v-flex lg6 xs12>
                        <v-card-text>
                          <span>{{data.subject}} ({{data.code}})</span><br>
                          <p class="grey--text">Theerapat Vijitpoo</p>
                          <p>เนื้อหาสอบบทที่ 1-5 เนื้อหาสำหรับการสอบกลางภาค</p>
                        </v-card-text>
                      </v-flex>
                      <v-flex lg3 xs12 text-xs-right>
                        <v-card-text>
                          <span class="grey--text">สร้างเมื่อ 18/8/2560 23:06</span><br>
                              <div class="mt-5">
                                  <h6><b>{{data.price}}.-</b></h6>
                                  <template v-for="a in 5"><v-icon>star</v-icon></template>&nbsp; <span>5.0</span><br>
                                  <span class="grey--text">จากผลโหวตทั้งหมด 33,888 คน</span>
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
      <div class="text-xs-center">
        <template v-for="(data,index) in $store.state.courseCount" >
            <v-pagination v-if="data.branch_id == $route.params.branchId" :length="data.count" v-model="page"></v-pagination>
        </template>
      </div>
    </v-container>
  </div>
</template>
<script>
import parallax from '../../../components/parallax.vue'
export default {
  async asyncData ({ store, route}) {
    if (store.getters.ALL_COURSE_FROM_ID(route.params.branchId).length == 0) {
      await store.dispatch('PULL_COURSE_LENGTH', route.params.branchId)
      console.log('params: ' + JSON.stringify(route.params))
    }
  },
  created () {
    // this.courseAfterSearch = this.course
    this.courseAfterSearch = this.$store.state.currentCourse
  },
  computed: {
    branch () {
      return this.$store.getters.BRANCH_FROM_ID(this.$route.params.branchId)
    },
    course () {
      return this.$store.getters.ALL_COURSE_FROM_ID(this.$route.params.branchId)
    },
    courseCount () {
      return this.$store.getters.COURSE_COUNT(this.$route.params.branchId)
    }
  },
  components: {
    parallax
  },
  data () {
    return {
      searchModel: '',
      courseAfterSearch: '',
      page: 1
    }
  },
  watch: {
    page: function (val) {
      const data = {
        branch_id: this.$route.params.branchId,
        page: val
      }
      this.$store.dispatch('PULL_COURSE', data)
      // this.courseAfterSearch = this.$store.state.currentCourse
    },
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
