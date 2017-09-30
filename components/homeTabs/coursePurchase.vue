<template>
  <div>
    <template v-if="coursePurchased.length == 0">
      <v-container grid-list-lg>
        <v-layout>
          <v-flex xs12 text-xs-center>
            <v-card>
              <v-card-text>
                 <h5>คุณยังไม่มีคอร์สใด ๆ เลย</h5>
                 <v-btn primary nuxt to="/course">ค้นหาคอร์ส</v-btn>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </template>
    <template v-else >
      <v-container grid-list-lg>
        <div class="text-xs-right">
          <v-layout row>
            <v-flex xs6>
              <v-text-field class="elevation-1" solo label="ค้นหา"></v-text-field>
            </v-flex>
            <v-flex xs6>
              <v-btn primary outline nuxt to="/course">รายการคอร์ส</v-btn>
              <v-btn nuxt to ="tutor/create" primary>สร้างคอร์ส</v-btn>
            </v-flex>
          </v-layout>
        </div>
        <br>
        <template v-for="(data,index) in coursePurchased">
          <nuxt-link :to="'/mycourse/'+data.course_id" tag="span" style="cursor:pointer;">
                 <v-card>
                     <v-layout row wrap>
                       <v-flex lg3 xs12>
                         <v-card-media :src="data.cover" height="200"></v-card-media>
                       </v-flex>
                       <v-flex lg6 xs12>
                         <v-card-text>
                           <span>{{data.subject}} ({{data.code}})</span><br>
                           <p class="grey--text">Theerapat Vijitpoo</p>
                           <p>เนื้อหาสอบบทที่ 1-5 เนื้อหาสำหรับการสอบกลางภาค</p>
                         </v-card-text>
                       </v-flex>
                       <v-flex lg3 xs12 text-xs-right>
                         <v-card-text>
                           <span class="grey--text">อัพเดทล่าสุด {{data.lastUpdate}}</span><br>
                           <br>
                             <!-- <div>
                               <v-icon medium primary>fa-video-camera</v-icon><br>
                             </div> -->

                               <div class="mt-5">
                                   <template v-for="a in 5"><v-icon>star</v-icon></template>&nbsp; <span>5.0</span><br>
                                   <span class="grey--text">จากผลโหวตทั้งหมด 33,888 คน</span>
                               </div>
                           </v-card-text>
                       </v-flex>
                     </v-layout>
                   </v-card>
                   <br>
           </nuxt-link>
         </template>
         </v-container>
     </template>
  </div>
</template>
<script>
export default {
  created () {
    this.$store.state.coursePurchased.map(data => {
      let a = this.$store.getters.COURSE_FROM_ID(data)
      let b = this.coursePurchased
      let c = b.concat(a)
      this.coursePurchased = c
    })
  },
  data () {
    return {
      coursePurchased: []
    }
  }
}
</script>
