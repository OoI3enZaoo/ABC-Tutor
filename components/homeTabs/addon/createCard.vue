<template>

    <v-flex xs12>
      <v-card>
        <nuxt-link :to="'/mycourse/' + create.course_id" tag="span">
            <v-layout>
              <v-flex xs3>
                  <v-card-media :src="create.cover" height="200"></v-card-media>
              </v-flex>
              <v-flex xs9>
                <v-card-text>
                  <v-layout>
                    <v-flex xs9>
                      <h6><b>{{create.subject}} ({{create.code}}) {{create.price}}.-</b></h6>
                      <RatingInCard :courseId= "create.course_id"></RatingInCard>
                    </v-flex>
                    <v-flex xs4 text-xs-right>
                        <span>สร้างเมื่อ {{create.ts}}</span> <br>
                    </v-flex>
                  </v-layout>
                </v-card-text>
              </v-flex>
            </v-layout>
          </nuxt-link>
      </v-card>
      <br>
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
    create () {
      return this.$store.getters.COURSE_FROM_ID(this.data)[0]
    }
  }
}
</script>
