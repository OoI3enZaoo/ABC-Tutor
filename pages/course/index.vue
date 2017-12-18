<template>
  <div>
    <parallax height = "200" :src="$store.state.background" >
<h5 style="display:inline;"><v-btn icon nuxt to="/" dark><v-icon large dark>home</v-icon></v-btn>&nbsp;&nbsp;/&nbsp;&nbsp;<nuxt-link to="/course" class="white--text">คอร์สทั้งหมด</nuxt-link></h5><br>
      <h4 class="white--text" ><b>คอร์สทั้งหมด</b></h4>
      <h6 class="white--text" ><b>กว่า 635 คอร์สที่ให้ใช้งานอยู่ในขณะนี้ </b></h6>
    </parallax>
  <v-tabs light>
    <v-tabs-bar class="white">
      <v-tabs-slider class="primary"></v-tabs-slider>
      <v-tabs-item
        v-for="(data,i) in menuItems"
        :key="i"
        :href="'#' + data"
      >
        {{data}}
      </v-tabs-item>
    </v-tabs-bar>
    <br>
      <v-tabs-content id='วิทยาศาสตร์และเทคโนโลยี'>
        <template v-for="data in branchs">
          <popularCourse :branchs="data.text" :course="$store.getters.COURSE_POPULAR_HOME(data.branch_id)" :branchid="data.branch_id"></popularCourse>
        </template>

        <br>
      </v-tabs-content>
      <v-tabs-content id='บริหารธุรกิจ'>
        <noDataCard :png="comming_soon" text="คณะนี้ยังไม่เปิดให้บริการ"> </noDataCard>
      </v-tabs-content>

      <v-tabs-content id='บัญชี'>
        <noDataCard :png="comming_soon" text="คณะนี้ยังไม่เปิดให้บริการ"> </noDataCard>
      </v-tabs-content>
      <v-tabs-content id='เศรษฐศาสตร์'>
        <noDataCard :png="comming_soon" text="คณะนี้ยังไม่เปิดให้บริการ"> </noDataCard>
      </v-tabs-content>
      <v-tabs-content id='มนุษยศาสตร์และประยุกต์ศิลป์'>
        <noDataCard :png="comming_soon" text="คณะนี้ยังไม่เปิดให้บริการ"> </noDataCard>
      </v-tabs-content>
      <v-tabs-content id='นิเทศศาสตร์'>
        <noDataCard :png="comming_soon" text="คณะนี้ยังไม่เปิดให้บริการ"> </noDataCard>
      </v-tabs-content>
      <v-tabs-content id='วิศวกรรมศาสตร์'>
        <noDataCard :png="comming_soon" text="คณะนี้ยังไม่เปิดให้บริการ"> </noDataCard>
      </v-tabs-content>
      <v-tabs-content id='นิติศาสตร์'>
        <noDataCard :png="comming_soon" text="คณะนี้ยังไม่เปิดให้บริการ"> </noDataCard>
      </v-tabs-content>
      <v-tabs-content id='การท่องเที่่ยวและอุตสาหกรรมบริการ'>
        <noDataCard :png="comming_soon" text="คณะนี้ยังไม่เปิดให้บริการ"> </noDataCard>
      </v-tabs-content>
      <v-tabs-content id='วิทยาลัยผู้ประกอบการ'>
        <noDataCard :png="comming_soon" text="คณะนี้ยังไม่เปิดให้บริการ"> </noDataCard>
      </v-tabs-content>
      <v-tabs-content id='International Program'>
        <noDataCard :png="comming_soon" text="คณะนี้ยังไม่เปิดให้บริการ"> </noDataCard>
      </v-tabs-content>
      <v-tabs-content id='อื่น ๆ'>
        <noDataCard :png="comming_soon" text="คณะนี้ยังไม่เปิดให้บริการ"> </noDataCard>
      </v-tabs-content>

  </v-tabs>

  </div>
</template>
<script>
import popularCourse from '../../components/popularCourse.vue'
import parallax from '../../components/parallax.vue'
import noDataCard from '../../components/noDataCard.vue'
export default {
  async fetch ({store}) {
    await store.dispatch('PULL_POPULAR_COURSE_HOME')
  },
  computed: {
    branchs () {
      return this.$store.state.branchs
    },
  },
  data () {
    return {
      menuItems: [
      'วิทยาศาสตร์และเทคโนโลยี',
      'บริหารธุรกิจ',
      'บัญชี',
      'เศรษฐศาสตร์',
      'มนุษยศาสตร์และประยุกต์ศิลป์'  ,
      'นิเทศศาสตร์',
      'วิศวกรรมศาสตร์',
      'นิติศาสตร์',
      'การท่องเที่่ยวและอุตสาหกรรมบริการ',
      'วิทยาลัยผู้ประกอบการ',
      'International Program',
      'อื่น ๆ'
    ],
      comming_soon: require('../../static/coming-soon.png')
    }
  },
  components: {
    popularCourse,
    parallax,
    noDataCard
  }
}
</script>
