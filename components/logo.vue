<template>
  <div>
    <nuxt-link to="/" style="text-decoration: none;">
        <div class="hidden-xs-only">
          <v-layout>
            <v-flex xs4 mt-2>
              <img :src="logo" height="48" alt="">
            </v-flex>
            <v-flex xs7 mt-3 ml-1>
              <span>{{projectName}} &nbsp;&nbsp;</span>
            </v-flex>
        </v-layout>
      </div>
      <div class="hidden-sm-and-up">
        <v-layout>
          <v-flex xs12 mt-2>
            <img :src="logo" height="48" alt="">
          </v-flex>
        </v-layout>
      </div>
     </nuxt-link>
  </div>
</template>
<script>
export default {
  data () {
    return {
      logo: require('../static/icon.png')
    }
  },
  computed: {
    projectName () {
      return this.$store.state.projectName
    }
  }
}
</script>
