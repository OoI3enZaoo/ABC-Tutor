<template>
  <div>    
    <template v-if="courseFavorite.length == 0">
      <noDataCard :png="coursePng" text="คุณยังไม่ได้บันทึกอะไรไว้เลย" textbtn="ค้นหาคอร์ส" link="/course"></noDataCard>
    </template>
    <template v-else>
      <v-container grid-list-lg>
        <v-layout row wrap>
          <template v-for="data in courseFavorite">
               <favoriteCard :data="data"></favoriteCard>
          </template>
        </v-layout>
      </v-container>
    </template>

  </div>
</template>
<script>
import favoriteCard from './addon/favoriteCard.vue'
import noDataCard from '../noDataCard.vue'
export default {
  components: {
    favoriteCard,
    noDataCard
  },
  created () {
    //do something before creating vue instance
    // this.coursePurchased = this.$store.getters.COURSE_FROM_ID(this.$store.state.coursePurchased)
    // this.$store.state.courseFavorite.map(data => {
    //   let a = this.$store.getters.COURSE_FROM_ID(data)
    //   let b = this.courseFavorite
    //   let c = b.concat(a)
    //   this.courseFavorite = c
    // })
  },
  data () {
    return {
      coursePng: require('../../static/courseFavorite.png')
    }
  },
  computed: {
    courseFavorite () {
      return this.$store.state.courseFavorite
    }
  }
}
</script>
