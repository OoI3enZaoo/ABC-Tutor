<template>

    <v-flex xs12>
      <v-card>
        <nuxt-link :to="'/mycourse/' + create.course_id" tag="span" style="cursor:pointer;">
            <v-layout>
              <v-flex xs5>
                  <v-card-media :src="create.cover" height="200"></v-card-media>
              </v-flex>
              <v-flex xs9>
                <v-card-text>
                  <v-layout>
                    <v-flex xs9 sm6>
                      <h6><b>{{create.subject}} ({{create.code}})</b></h6>
                      ราคา <b>{{create.price}}</b> บาท
                      <div class="mt-5">
                        <RatingInCard :courseId= "create.course_id"></RatingInCard>
                      </div>
                    </v-flex>
                    <v-flex xs4 sm6 text-xs-right>
                      <span class="grey--text"><span class="hidden-sm-and-down">สร้างเมื่อ</span> {{create.ts}} </span> <br>
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
