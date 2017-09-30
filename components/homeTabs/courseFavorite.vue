<template>
  <div>
    <v-container grid-list-lg >
      <v-layout v-if="courseFavorite.length == 0">
        <v-flex xs12 text-xs-center>
          <v-card>
            <v-card-text>
               <h5>คุณยังไม่ได้บันทึกอะไรไว้เลย</h5>
               <v-btn primary nuxt to="/course">ค้นหาคอร์ส</v-btn>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
       <v-layout v-else row wrap>
         <template v-for="data in courseFavorite">
              <favoriteCard :id="data.course_id" :subject="data.subject" :code="data.code" :price="data.price" :cover = "data.cover" :fname="data.fname" :lname="data.lname"></favoriteCard>
         </template>
       </v-layout>
    </v-container>
  </div>
</template>
<script>
import favoriteCard from '../favoriteCard.vue'
export default {
  components: {
    favoriteCard
  },
  created () {
    //do something before creating vue instance
    // this.coursePurchased = this.$store.getters.COURSE_FROM_ID(this.$store.state.coursePurchased)
    this.$store.state.courseFavorite.map(data => {
      let a = this.$store.getters.COURSE_FROM_ID(data)
      let b = this.courseFavorite
      let c = b.concat(a)
      this.courseFavorite = c
    })
  },
  data () {
    return {
      courseFavorite: []
    }
  }
}
</script>
