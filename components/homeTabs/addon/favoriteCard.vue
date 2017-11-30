<template>
      <v-flex xs6 sm4 md3>
        <nuxt-link :to="'/course/' + favorite.course_id " tag="span" style="cursor:pointer;">
          <v-card>
            <v-card-media :src="favorite.cover" height="150"></v-card-media>
            <v-card-text>
              <p>{{favorite.subject}} ({{favorite.code}})</p>
              <span class="grey--text">{{favorite.fname}} {{favorite.lname}}</span><br>
              <RatingInCard :courseId= "favorite.course_id"></RatingInCard>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <h6 class="primary--text">{{favorite.price}}.-</h6>
            </v-card-actions>
          </v-card>
        </nuxt-link>
      </v-flex>
</template>
<script>
import RatingInCard from '../../RatingInCard.vue'
export default {
  props: ['data'],
  components: {
    RatingInCard
  },
  computed: {
    favorite () {
      return this.$store.getters.COURSE_FROM_ID(this.data)[0]
    }
  }
}
</script>
