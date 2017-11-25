<template>
  <div>
    <template v-if="coursePur == 0">
      <noDataCard :png="coursePng" text="คุณยังไม่มีคอร์สใด ๆ เลย" textbtn="ค้นหาคอร์ส" link="/course"></noDataCard>
    </template>
    <template v-else>
      <v-container grid-list-lg>
        <div class="text-xs-right">
          <v-layout row>
            <v-flex xs6>
              <!-- <v-text-field class="elevation-1" solo label="ค้นหา"></v-text-field> -->
            </v-flex>
            <v-flex xs6>
              <v-btn primary outline nuxt to="/course">รายการคอร์ส</v-btn>
            </v-flex>
          </v-layout>
        </div>
        <br>
        <template v-for="(data,courseIndex) in coursePur">
                 <v-card :key="courseIndex">
                     <v-layout row wrap>
                       <v-flex lg3 xs12>
                         <v-card-media :src="data.cover" height="200"></v-card-media>
                       </v-flex>
                       <v-flex lg6 xs12>
                         <v-card-text>
                           <span>{{data.subject}} ({{data.code}})</span><br>
                           <p class="grey--text">{{data.fname}} {{data.lname}}</p>
                           <template v-if="!$store.getters.CHECK_REVIEW(data.course_id)[0]">
                              <span>ให้คะแนนคอร์สนี้</span><br>
                                 <div
                                  v-for="(str,starindex) in point[courseIndex]"
                                  :key="str.id"
                                  style="display:inline;"
                                 >

                                 <div
                                 @mouseover="mouseOver(courseIndex,starindex)"
                                 @mouseleave="mouseLeave(courseIndex,starindex)"
                                 @click="mouseClick(courseIndex,starindex)"
                                 style="cursor:pointer; display:inline; ">
                                 <!-- <v-icon slot="activator" @click="sendReview(data)">{{str.icon}}</v-icon> -->
                                 <v-dialog v-model="dialog[courseIndex].status" persistent>
                                   <v-icon slot="activator">{{str.icon}}</v-icon>
                                    <v-card>
                                      <v-card-title class="headline">คอร์สนี้สอนเป็นอย่างไร</v-card-title>
                                      <v-card-text>
                                        <v-text-field v-model="reviewText" multi-line label="กรอกคำวิจารณ์"></v-text-field>
                                        </v-card-text>
                                      <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn class="green--text darken-1" flat="flat" @click.native="dialog[courseIndex].status = false">ยกเลิก</v-btn>
                                        <v-btn class="green--text darken-1" flat="flat" @click.native="sendReview(data.course_id,numberPoint[courseIndex].mypoint,courseIndex)">ส่งคำวิจารณ์</v-btn>
                                      </v-card-actions>
                                    </v-card>
                                  </v-dialog>


                                 </div>
                               </div>
                                 (<span v-text="numberPoint[courseIndex].mypoint"></span> คะแนน)
                               <br>
                              </template>

                         </v-card-text>
                       </v-flex>

                       <v-flex lg3 xs12 text-xs-right>
                         <v-card-text>
                           <span class="grey--text">อัพเดทล่าสุด {{data.lastUpdate | moment('from','now',true)}} ที่ผ่านมา</span><br>
                           <br>
                             <v-btn class="mt-2" primary @click.native="linkTo(data.course_id)">ดูรายละเอียดคอร์ส</v-btn><br><br>
                           </v-card-text>
                       </v-flex>
                     </v-layout>
                   </v-card>
                   <br>

         </template>
         </v-container>
     </template>

  </div>
</template>
<script>
import noDataCard from '../noDataCard.vue'
import Vue from 'vue'
const moment = require('moment')
Vue.use(require('vue-moment'), {
    moment
})
export default {
  components: {
    noDataCard
  },
  mounted () {
    this.getData()
  },
  data () {
    return {
      coursePur: [],
      coursePng: require('../../static/coursePurchase.png'),
      point: [],
      numberPoint: [],
      reviewText: null,
      dialog: []
    }
  },
  computed: {
    coursePurchased () {
      return this.$store.state.coursePurchased
    }
  },
  watch: {
    coursePurchased: function (val) {
      if (val.length !== 0) {
        this.getData()
      }
    }
  },
  methods: {
    getData () {
      this.$store.state.coursePurchased.map(data => {
        this.coursePur.push(...this.$store.getters.COURSE_FROM_ID(data))
        this.dialog.push({status: false})
      })
      this.$store.state.coursePurchased.map(data => {
        this.point.push([{id:1,icon:'start_border'},{id:2,icon:'start_border'},{id:3,icon:'start_border'},{id:4,icon:'start_border'},{id:5,icon:'start_border'}])
        this.numberPoint.push({id: 1, mypoint: 0})
        console.log(this.point)
      })
      this.point.map((p,i) => this.mouseOver(i, 4))
    },
    mouseOver (index,dex) {
      if (dex == 0) {
        this.point[index][dex].icon = 'star'
        this.numberPoint[index].mypoint = 1
      }
      else if (dex == 1) {
        this.point[index][dex - 1].icon = 'star'
        this.point[index][dex].icon = 'star'
        this.numberPoint[index].mypoint = 2
      }
      else if (dex == 2) {
        this.point[index][dex - 2].icon = 'star'
        this.point[index][dex - 1].icon = 'star'
        this.point[index][dex].icon = 'star'
        this.numberPoint[index].mypoint = 3
      }
      else if (dex == 3) {
        this.point[index][dex - 3].icon = 'star'
        this.point[index][dex - 2].icon = 'star'
        this.point[index][dex - 1].icon = 'star'
        this.point[index][dex].icon = 'star'
        this.numberPoint[index].mypoint = 4
      }
      else if (dex == 4) {
        this.point[index][dex - 4].icon = 'star'
        this.point[index][dex - 3].icon = 'star'
        this.point[index][dex - 2].icon = 'star'
        this.point[index][dex - 1].icon = 'star'
        this.point[index][dex].icon = 'star'
        this.numberPoint[index].mypoint = 5
      }
    },
    mouseLeave (index,dex) {
      this.point[index][dex].icon = 'star_border'
    },
    linkTo (course_id) {
      this.$router.push('/mycourse/' + course_id)
    },
    mouseClick () {
      console.log('click')
    },
    sendReview (courseid, point,index) {
      console.log(courseid)
      let data = {
        course_id: courseid,
        user_id: this.$store.state.profile.user_id,
        review_text: this.reviewText,
        review_ts: Vue.moment().format('YYYY-MM-DD HH:mm:ss'),
        review_vote: point
      }
      this.$store.dispatch('ADD_REVIEW', data)
      let socket = {
        course_id: courseid,
        review_vote: point
      }
      this.$store.dispatch('ADD_VOTING', socket)
      this.$store.commit('updateCourseVote', socket)
      this.$socket.emit('voting', socket)
      data.user_img = this.$store.state.profile.user_img
      data.fname = this.$store.state.profile.fname
      data.lname = this.$store.state.profile.lname
      this.$store.commit('addCourseReview', [data])
      this.$socket.emit('course_review', data)
      this.reviewText = null
      this.dialog[index].status = false
    }
  }
}
</script>
