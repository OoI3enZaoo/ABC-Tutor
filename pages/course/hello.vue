<template>
  <div>
    <parallax src="http://abcworldwidestone.com/material-portfolio/wp-content/uploads/2014/10/Belgium-Black-Polished-2cm-Lot-3071-Close-up.jpg" height="200">
      <v-layout>
        <v-flex xs3>
            <img src="http://en.advancedfleetmanagementconsulting.com/wp-content/uploads/2016/06/6700226_m.jpg" height="150">
        </v-flex>
        <v-flex xs7>
          <h4 class="white--text" ><b>วิชาคอมพิวเตอร์เบื้องต้น (SP521)</b></h4>
        </v-flex>
      </v-layout>
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

       <!-- ภาพรวม -->
       <v-tabs-content id='tab-0'>
         <overall></overall>
       </v-tabs-content>

       <!-- วีดีโอ -->
       <v-tabs-content id='tab-1'>
         <h6>ยังไม่เสร็จ</h6>
       </v-tabs-content>

       <!-- วีดีโอสด -->
       <v-tabs-content id='tab-2'>
         <live></live>
       </v-tabs-content>

       <!-- ถามตอบ -->
       <v-tabs-content id='tab-3'>
         <qa></qa>
       </v-tabs-content>

       <!-- ประกาศ -->
       <v-tabs-content id='tab-4'>
         <announcement></announcement>
       </v-tabs-content>

       <!-- แชท -->
       <v-tabs-content id='tab-5'>
         <h6>ยังไม่เสร็จ</h6>
       </v-tabs-content>

   </v-tabs>


  </div>
</template>
<script>
import parallax from '../../components/parallax.vue'
import overall from '../../components/courseTabs/overall.vue'
import announcement from '../../components/courseTabs/announcement.vue'
import live from '../../components/courseTabs/live.vue'
import qa from '../../components/courseTabs/qa.vue'
export default {
  components: {
    parallax, overall, announcement, live, qa
  },
  data () {
    return {
      menuItems: [
        { title: 'ภาพรวม' },
        { title: 'วีดีโอ' },
        { title: 'วีดีโอสด' },
        { title: 'ถามตอบ' },
        { title: 'ประกาศ' },
        { title: 'แชท' }
      ]
    }
  }
}
</script>
