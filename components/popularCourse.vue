<template>
  <div v-if="course.length > 0">
    <br>
    <v-container grid-list-lg>
      <v-layout>
        <v-flex xs11><h6>คอร์สที่ได้รับความนิยมใน "{{branchs}}"</h6></v-flex>
        <v-flex xs1 text-xs-right><nuxt-link :to="'/allcourse/'+branchid">ดูทั้งหมด</nuxt-link></v-flex>
      </v-layout>
      <v-layout row wrap>
        <template v-for="data in course">
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
    </v-container>
  </div>
</template>
<script>
import RatingInCard from './RatingInCard.vue'
export default {
  props: ['branchs', 'branchid', 'course'],
  components: {
    RatingInCard
  }
}
</script>
