<template>
  <div>
    <parallax :src="$store.state.background" height="230">
      <v-layout row wrap>
        <v-flex md3 sm6 xs12>
          <div class="text-xs-center ">
            <img :src="courseData.cover" height="150">

          </div>
        </v-flex>
        <v-flex md9 sm6 xs12>
          <div class="mt-5 hidden-xs-only">
            <h4 class="white--text" ><b>{{courseData.subject}} ({{courseData.code}})</b></h4>
          </div>
          <div class="hidden-sm-and-up text-xs-center">
            <h4 class="white--text" ><b>{{courseData.subject}} ({{courseData.code}})</b></h4>
          </div>
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
         <announcement></announcement>
       </v-tabs-content>

       <!-- แชท -->
       <v-tabs-content id='tab-5'>
         <chat></chat>
       </v-tabs-content>

       <!-- การจัดการ -->
       <v-tabs-content id='tab-6'>
         <manage></manage>
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
import manage from '../../../components/courseTabs/manage.vue'
export default {
  async asyncData ({ store, route }) {
    // await store.dispatch('PULL_COURSE_DATA', route.params.id)
    await store.dispatch('PULL_COURSE_CONTENT', route.params.id)
    await store.dispatch('PULL_COURSE_ANNO', route.params.id)
    await store.dispatch('PULL_COURSE_QA', route.params.id)
    await store.dispatch('PULL_COURSE_CHAT', route.params.id)
    await store.commit('CHECK_IS_TUTOR', route.params.id)
    // await store.dispatch('PULL_USER_ONLINE', route.params.id)
  },
  components: {
    parallax, overall, announcement, live, qa, videoCourse, chat, manage
  },
  computed: {
    courseData () {
      return this.$store.getters.COURSE_FROM_ID(this.$route.params.id)[0]
    },
    menuItems () {
      return this.$store.state.tutor.menuItems
    }
  },
  beforeDestroy () {
    this.$store.commit('SET_DEFAULT_TUTOR')
  }
}
</script>
