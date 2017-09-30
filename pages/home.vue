<template>
  <div>
      <parallax height="200" src= "https://archive.org/download/abstract-colored-circle-red-material-designlines-background/abstract-colored-circle-red-material-designlines-background.jpg"  >
      <h4 class="mt-5">หน้าจัดการคอร์ส</h4>
      </parallax>
      <v-tabs light>
        <hr>
       <v-tabs-bar class="white">
         <v-tabs-slider class="primary"></v-tabs-slider>
         <v-tabs-item
           v-for="(data,i) in menuItems"
           :key="i"
           :href="'#tab-' + i"
         >
           {{data.title}}
         </v-tabs-item>
       </v-tabs-bar>
       <hr>
         <!-- คอร์สทั้งหมด -->
         <v-tabs-content id='tab-0'>
            <coursePurchased></coursePurchased>
         </v-tabs-content>

         <!-- รายการโปรด -->
         <v-tabs-content id='tab-1'>
            <courseFavorite></courseFavorite>
         </v-tabs-content>

         <!-- คอร์สที่เป็นเจ้าของ -->
         <v-tabs-content id='tab-2'>
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
      ]
    }
  }
}
</script>
