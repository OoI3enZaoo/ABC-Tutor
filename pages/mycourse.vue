<template>
  <div>
      <parallax height="200" src= "https://archive.org/download/abstract-colored-circle-red-material-designlines-background/abstract-colored-circle-red-material-designlines-background.jpg"  >
      <h4 class="mt-5">คอร์สของฉัน</h4>
      </parallax>
      <v-tabs light>
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

         <!-- คอร์สทั้งหมด -->
         <v-tabs-content id='tab-0'>

           <v-container>
             <nuxt-link to="/course/hello" tag="span" style="cursor:pointer;">
               <v-layout row>
                 <v-flex xs6 md3>
                   <v-card>
                     <v-card-media src="https://us.123rf.com/450wm/juliatim/juliatim1603/juliatim160300025/54282789-young-man-sitting-in-the-park-under-a-tree-and-working-with-laptop-flat-modern-illustration-of-socia.jpg?ver=6" height="150"></v-card-media>
                     <v-card-text>
                       <p style="display:inline;">คอมพิวเตอร์เบื้องต้น (SP521)</p><br>
                       <span class="grey--text">Theerapat Vijitpoo</span><br>

                       5.0 <p class="grey--text" style="display:inline;">25,555</p>
                     </v-card-text>
                     <v-card-actions>
                       <v-spacer></v-spacer>
                       <template v-for="a in 5">
                           <v-icon>star</v-icon>
                       </template>
                     </v-card-actions>
                   </v-card>
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
import parallax from '../components/parallax.vue'
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
