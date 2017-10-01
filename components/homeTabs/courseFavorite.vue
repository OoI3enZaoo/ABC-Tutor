<template>
  <div>
    <template v-if="courseFavorite.length == 0">
      <noDataCard :png="coursePng" text="คุณยังไม่ได้บันทึกอะไรไว้เลย" textbtn="ค้นหาคอร์ส" link="/course"></noDataCard>
    </template>
    <template v-else>
      <template v-for="data in courseFavorite">
           <favoriteCard :id="data.course_id" :subject="data.subject" :code="data.code" :price="data.price" :cover = "data.cover" :fname="data.fname" :lname="data.lname"></favoriteCard>
      </template>
    </template>

  </div>
</template>
<script>
import favoriteCard from './addon/favoriteCard.vue'
import noDataCard from './addon/noDataCard.vue'
export default {
  components: {
    favoriteCard,
    noDataCard
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
      courseFavorite: [],
      coursePng: require('../../static/courseFavorite.png')
    }
  }
}
</script>
