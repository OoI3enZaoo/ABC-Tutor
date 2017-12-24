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
       <!-- ภาพรวม -->
       <v-tabs-content id='ภาพรวม'>
           <overall></overall>
       </v-tabs-content>

       <!-- วีดีโอ -->
       <v-tabs-content id='เอกสารและวีดีโอ'>
         <videoCourse></videoCourse>
       </v-tabs-content>

       <!-- วีดีโอสด -->
       <v-tabs-content id='วีดีโอสด'>
         <live></live>
       </v-tabs-content>

       <!-- ถามตอบ -->
       <v-tabs-content id='ถามตอบ'>
         <qa></qa>
       </v-tabs-content>

       <!-- ประกาศ -->
       <v-tabs-content id='ประกาศ'>
         <announcement></announcement>
       </v-tabs-content>

       <!-- แชท -->
       <v-tabs-content id='แชท'>
         <chat></chat>
       </v-tabs-content>
       <!-- การจัดการ -->
       <v-tabs-content id='การจัดการ'>
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
  async asyncData ({ store, route, redirect}) {
    await store.commit('CHECK_IS_TUTOR', route.params.id)
     const status = await store.dispatch('PULL_COURSE_FROM_COURSE_ID', route.params.id)

     console.log('hellonanananana');
     console.log(status)
     if (status == false) {
        redirect('/')
     }
    // await store.dispatch('PULL_USER_ONLINE', route.params.id)
  },
  data () {
    return {
      active: null
    }
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
  created () {
    this.active = decodeURI(location.hash.substring(1))
    console.log('location.hash.substring(1):' + this.active );
  },
  watch: {
    active: function (val) {
      location.hash = val
      if (val == 'เอกสารและวีดีโอ') {
        this.$store.dispatch('PULL_COURSE_CONTENT', this.$route.params.id)
      }
      else if (val == 'ถามตอบ') {
        this.$store.dispatch('PULL_COURSE_QA', this.$route.params.id)
      }
      else if (val == 'วีดีโอสด') {
        this.$store.dispatch('PULL_LIVE_SCHEDULE', this.$route.params.id)
      }
      else if (val == 'ประกาศ') {
        this.$store.dispatch('PULL_COURSE_ANNO', this.$route.params.id)
      }
      else if (val == 'แชท') {
        this.$store.dispatch('PULL_COURSE_CHAT', this.$route.params.id)
      }
    }
  },
  beforeDestroy () {
    this.$store.commit('SET_DEFAULT_TUTOR')
  }
}
</script>
