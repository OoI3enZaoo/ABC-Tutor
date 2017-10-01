<template>
  <div>
    <parallax src="http://abcworldwidestone.com/material-portfolio/wp-content/uploads/2014/10/Belgium-Black-Polished-2cm-Lot-3071-Close-up.jpg" height="200">
      <v-layout>
        <v-flex sm3 xs6>
            <img :src="courseData.cover" height="150">
        </v-flex>
        <v-flex sm9 xs6>
          <h4 class="white--text" ><b>{{courseData.subject}} ({{courseData.code}})</b></h4>
        </v-flex>
      </v-layout>
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
       <!-- ภาพรวม -->
       <v-tabs-content id='tab-0'>
           <overall></overall>
       </v-tabs-content>

       <!-- วีดีโอ -->
       <v-tabs-content id='tab-1'>
         <videoCourse></videoCourse>
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
         <announcement ></announcement>
       </v-tabs-content>

       <!-- แชท -->
       <v-tabs-content id='tab-5'>
         <chat></chat>
       </v-tabs-content>
   </v-tabs>
  </div>
</template>
<script>
import parallax from '../../../components/parallax.vue'
import overall from '../../../components/courseTabs/overall.vue'
import announcement from '../../../components/courseTabs/announcement.vue'
import live from '../../../components/courseTabs/live'
import qa from '../../../components/courseTabs/qa'
import videoCourse from '../../../components/courseTabs/courseContent'
import chat from '../../../components/courseTabs/chat.vue'
export default {
  async asyncData ({ store, route }) {
    await store.dispatch('PULL_COURSE_DATA', route.params.id )
  },
  components: {
    parallax, overall, announcement, live, qa, videoCourse, chat
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
  },
  computed: {
    courseData () {
      return this.$store.getters.COURSE_FROM_ID(this.$route.params.id)[0]
    }
  }
}
</script>
