<template>
  <div>
    <parallax height = "200" :src="$store.state.background" >
<h5 style="display:inline;"><v-btn icon nuxt to="/"><v-icon large dark>home</v-icon></v-btn>&nbsp;&nbsp;/&nbsp;&nbsp;<nuxt-link to="/course" class="white--text">คอร์สทั้งหมด</nuxt-link></h5><br>
      <h4 class="white--text" ><b>คอร์สทั้งหมด</b></h4>
      <h6 class="white--text" ><b>กว่า 635 คอร์สที่ให้ใช้งานอยู่ในขณะนี้ </b></h6>
    </parallax>
      <template v-for="data in branchs">
        <popularCourse :branchs="data.text" :course="$store.getters.COURSE_POPULAR_HOME(data.branch_id)" :branchid="data.branch_id"></popularCourse>
      </template>
  </div>
</template>
<script>
import popularCourse from '../../components/popularCourse.vue'
import parallax from '../../components/parallax.vue'
export default {
  async asyncData ({store}) {
    await store.dispatch('PULL_POPULAR_COURSE_HOME')
  },
  created () {
  //  this.$store.dispatch('PULL_POPULAR_COURSE')
  },
  computed: {
    branchs () {
      return this.$store.state.branchs
    },
  },
  components: {
    popularCourse,
    parallax
  }
}
</script>
