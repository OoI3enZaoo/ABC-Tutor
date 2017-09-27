<!-- <template>
  <div>
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
          <template v-for="(data,key) in courseAfterSearch">
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
    </v-container>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import parallax from '../../components/parallax.vue'
export default {
  async asyncData ({ store, route}) {
    if (store.getters.ALL_COURSE_FROM_ID(route.params.id).length == 0) {
      await store.dispatch('PULL_COURSE_FROM_BRANCH_ID', route.params.id)
    }
  },
  created () {
    this.courseAfterSearch = this.course
  },
  computed: {
    ...mapGetters([
      'BRANCH_FROM_ID', 'ALL_COURSE_FROM_ID'
    ]),
    branch () {
      return this.BRANCH_FROM_ID(this.$route.params.id)
    },
    course () {
      return this.ALL_COURSE_FROM_ID(this.$route.params.id)
    }
  },
  components: {
    parallax
  },
  data () {
    return {
      searchModel: '',
      courseAfterSearch: ''
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
</script> -->
