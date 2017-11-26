<template>
  <div>
<!-- {{$store.state.courseCreate}} -->
      <template v-if ="courseCreate.length == 0">
        <noDataCard :png="coursePng" text="คุณยังไม่มีคอร์สใด ๆ ที่เป็นเจ้าของเลย" textbtn="สร้างคอร์ส" link="/tutor/create"></noDataCard>
      </template>
      <template v-else>
        <v-container grid-list-lg>
            <v-layout row wrap>
              <v-flex xs12 sm11>
                <!-- <v-text-field
                solo
                label="ค้นหาคอร์สของคุณ"
                append-icon='search'
                >
                </v-text-field> -->
              </v-flex>
              <v-flex xs12 sm1>
                  <v-btn primary block nuxt to = '/tutor/create'>สร้างคอร์ส</v-btn>
              </v-flex>
            </v-layout>
            <v-layout row wrap v-for="(data, index) in courseCreate" :key="index">
              <v-flex xs12>
                <v-card>
                  <nuxt-link :to="'/mycourse/' + data.course_id" tag="span">
                      <v-layout>
                        <v-flex xs3>
                            <v-card-media :src="data.cover" height="200"></v-card-media>
                        </v-flex>
                        <v-flex xs9>
                          <v-card-text>
                            <v-layout>
                              <v-flex xs9>
                                <h6><b>{{data.subject}} ({{data.code}}) {{data.price}}.-</b></h6>
                                <div v-if="$store.getters.COURSE_VOTE_FROM_COURSE_ID(data.course_id).length == 0" >
                                  <template v-for="a in 5">
                                    <v-icon>star_border</v-icon>
                                  </template>
                                  &nbsp;&nbsp;
                                  <span>0.0</span>&nbsp;&nbsp; <span>จากคนโหวตทั้งหมด</span>&nbsp;<span>0</span>&nbsp;<span>คน</span>
                                </div>
                                <div v-else v-for="vote in $store.getters.COURSE_VOTE_FROM_COURSE_ID(data.course_id)">
                                  <template v-for="(star, index) in 5">
                                      <template v-if="vote.avg.toFixed(0) > index">
                                        <v-icon>star</v-icon>
                                      </template>
                                      <template v-else>
                                          <v-icon>star_border</v-icon>
                                      </template>
                                  </template>
                                  &nbsp;&nbsp;
                                  <span>{{vote.avg}}</span>&nbsp;&nbsp; <span>จากคนโหวตทั้งหมด</span>&nbsp;<span>{{vote.length}}</span>&nbsp;<span>คน</span>
                                </div>
                              </v-flex>
                              <v-flex xs4 text-xs-right>
                                  <span>สร้างเมื่อ {{data.ts}}</span> <br>
                                  <!-- <span>อัพเดทล่าสุด {{data.lastUpdate}}</span> -->
                              </v-flex>
                            </v-layout>
                          </v-card-text>
                        </v-flex>
                      </v-layout>
                    </nuxt-link>
                </v-card>
                <br>
              </v-flex>
            </v-layout>
            <!-- {{$store.state.courseVote}} -->
              </v-container>
          </template>
  </div>
</template>
<script>
import noDataCard from '../noDataCard.vue'
export default {
  components: {
    noDataCard
  },
  created () {
    this.$store.state.courseCreate.map(data => {
      let a = this.$store.getters.COURSE_FROM_ID(data)
      let b = this.courseCreate
      let c = b.concat(a)
      this.courseCreate = c
    })
  },
  data () {
    return {
      courseCreate: [],
      coursePng: require('../../static/courseCreate.png')
    }
  }
}
</script>
