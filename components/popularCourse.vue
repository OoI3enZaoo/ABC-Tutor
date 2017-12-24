<template>
  <div v-if="course.length > 0">
    <br>
    <v-container grid-list-lg>
      <v-layout>
        <v-flex xs9><h6>คอร์สที่ได้รับความนิยมใน "{{branchs}}"</h6></v-flex>
        <v-flex xs3 text-xs-right><nuxt-link :to="'/allcourse/'+branchid">ดูทั้งหมด</nuxt-link></v-flex>
      </v-layout>
      <v-layout row wrap>
        <template v-for="data in course">
            <v-flex xs6 md6 lg3>
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
    </v-container>
  </div>
  <div v-else>
    <template v-if="courseFromStore.length !== 0">
      <v-container grid-list-lg>
        <v-layout>
          <v-flex xs9><h6>คอร์สใน "{{branchs}}"</h6></v-flex>
          <v-flex xs3 text-xs-right><nuxt-link :to="'/allcourse/'+branchid">ดูทั้งหมด</nuxt-link></v-flex>
        </v-layout>
        <v-layout row wrap>
          <template v-for="(data, index) in courseFromStore" v-if="index < 4">
              <v-flex xs6 md6 lg3>
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
      </v-container>
    </template>
  </div>
</template>
<script>
import RatingInCard from './RatingInCard.vue'
export default {
  created () {
    console.log('popularcourse')
    console.log(this.$store.state.course)
    if (this.courseFromStore.length == 0) {      
      this.$store.dispatch('PULL_COURSE_FROM_BRANCH_ID', this.branchid)
    }
  },
  props: ['branchs', 'branchid', 'course'],
  components: {
    RatingInCard
  },
  computed: {
    courseFromStore () {
      return this.$store.getters.ALL_COURSE_FROM_ID(this.branchid)
    }
  }
}
</script>
