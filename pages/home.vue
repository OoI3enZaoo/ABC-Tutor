<template>
  <div>
      <parallax height="200" :src= "$store.state.background">
      <h4 class="mt-5 white--text" style="display:inline; ">หน้าจัดการคอร์ส</h4>
      </parallax>

      <v-tabs v-model="active" light>
        <hr>
       <v-tabs-bar class="white">
         <v-tabs-slider class="primary"></v-tabs-slider>
         <v-tabs-item
           v-for="(data,i) in menuItems"
           :key="i"
           :href="'#' + data.title"
         >
           {{data.title}}
         </v-tabs-item>
       </v-tabs-bar>
       <hr>
         <!-- คอร์สทั้งหมด -->
         <v-tabs-content id='คอร์สที่ซื้อ'>
            <coursePurchased></coursePurchased>

         </v-tabs-content>

         <!-- รายการโปรด -->
         <v-tabs-content id='รายการโปรด'>
            <courseFavorite></courseFavorite>
         </v-tabs-content>

         <!-- คอร์สที่เป็นเจ้าของ -->
         <v-tabs-content id='คอร์สที่เป็นเจ้าของ'>
            <courseCreate></courseCreate>
         </v-tabs-content>
       </v-tabs>

  </div>
</template>
<script>
import parallax from '.././components/parallax.vue'
import coursePurchased from '.././components/homeTabs/coursePurchase.vue'
import courseFavorite from '.././components/homeTabs/courseFavorite.vue'
import courseCreate from '.././components/homeTabs/courseCreate.vue'
export default {
  components: {
    parallax,
    coursePurchased,
    courseFavorite,
    courseCreate
  },
  data () {
    return {
      menuItems: [
        { title: 'คอร์สที่ซื้อ' },
        { title: 'รายการโปรด' },
        { title: 'คอร์สที่เป็นเจ้าของ' },
      ],
      active: null
    }
  },
  created () {
    this.active = location.hash.substring(1)
  },
  watch: {
    active: function (val) {
      location.hash = val
      if (val == 'คอร์สที่ซื้อ') {
        this.$store.dispatch('FETCH_COURSE_REVIEW')
        this.$store.dispatch('FETCH_COURSE_PURCHASED')
      }
      else if (val == 'รายการโปรด') {
        this.$store.dispatch('FETCH_COURSE_FAVORITE')
      }
      else {
        this.$store.dispatch('FETCH_COURSE_CREATED')
      }
    }
  }
}
</script>
