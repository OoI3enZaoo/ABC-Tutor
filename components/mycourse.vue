<template>
  <div>
      <parallax height="200" src= "https://archive.org/download/abstract-colored-circle-red-material-designlines-background/abstract-colored-circle-red-material-designlines-background.jpg"  >
      <h4 class="mt-5">คอร์สของฉัน</h4>
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
             <nuxt-link to="/mycourse/myid" tag="span" style="cursor:pointer;">
               <v-layout row>
                 <v-flex xs12>
                   <nuxt-link to="/mycourse/kk" tag="span">
                      <v-card>
                        <v-layout row wrap>
                          <v-flex lg3 xs12>
                            <v-card-media src="https://us.123rf.com/450wm/juliatim/juliatim1603/juliatim160300025/54282789-young-man-sitting-in-the-park-under-a-tree-and-working-with-laptop-flat-modern-illustration-of-socia.jpg?ver=6" height="200"></v-card-media>
                          </v-flex>
                          <v-flex lg6 xs12>
                            <v-card-text>
                              <span>คอมพิวเตอร์เบื้องต้น (SP521)</span><br>
                              <p class="grey--text">Theerapat Vijitpoo</p>
                              <p>เนื้อหาสอบบทที่ 1-5 เนื้อหาสำหรับการสอบกลางภาค</p>
                            </v-card-text>
                          </v-flex>
                          <v-flex lg3 xs12 text-xs-right>
                            <v-card-text>
                              <span class="grey--text">อัพเดทล่าสุด 18/8/2560 23:06</span><br>
                              <br>
                                <div>
                                  <v-icon medium primary>fa-video-camera</v-icon><br>
                                </div>

                                  <div class="mt-5">
                                      <template v-for="a in 5"><v-icon>star</v-icon></template>&nbsp; <span>5.0</span><br>
                                      <span class="grey--text">จากผลโหวตทั้งหมด 33,888 คน</span>
                                  </div>
                              </v-card-text>
                          </v-flex>
                        </v-layout>
                      </v-card>
                    </nuxt-link>
                 </v-flex>
               </v-layout>
              </nuxt-link>
           </v-container>
         </v-tabs-content>

         <!-- รายการโปรด -->
         <v-tabs-content id='tab-1'>

           <v-container grid-list-lg>
             <v-layout>
               <v-flex xs12 text-xs-center>
                 <v-card>
                   <v-card-text>
                      <h5>คุณยังไม่ได้บันทึกอะไรไว้เลย</h5>
                      <v-btn primary nuxt to="/">ค้นหาคอร์ส</v-btn>
                   </v-card-text>
                 </v-card>
               </v-flex>
             </v-layout>
           </v-container>
         </v-tabs-content>
       </v-tabs>

  </div>
</template>
<script>
import parallax from './parallax.vue'
export default {
  components: {
    parallax
  },
  data () {
    return {
      menuItems: [
        { title: 'คอร์สทั้งหมด' },
        { title: 'รายการโปรด' }
      ]
    }
  }
}
</script>
