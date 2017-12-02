<template>
  <div>
<!-- {{$store.state.courseCreate}} -->
      <template v-if ="courseCreate.length == 0">
        <noDataCard :png="coursePng" text="คุณยังไม่มีคอร์สใด ๆ ที่เป็นเจ้าของเลย" textbtn="สร้างคอร์ส" link="/tutor/create"></noDataCard>
      </template>
      <template v-else>
        <v-container grid-list-lg>
            <div class="text-xs-right mb-2">
              <v-tooltip top>
                <v-btn primary nuxt to = '/tutor/create' slot="activator">สร้างคอร์ส</v-btn>
                <span>มีคอร์สเป็นของตนเอง</span>
              </v-tooltip>
            </div>
            <v-layout row wrap>
                <template v-for="data in courseCreate">
                  <createCard :data="data"></createCard>
                </template>
            </v-layout>
              </v-container>
          </template>
  </div>
</template>
<script>
import noDataCard from '../noDataCard.vue'
import createCard from './addon/createCard.vue'
export default {
  components: {
    noDataCard,
    createCard
  },
  data () {
    return {
      coursePng: require('../../static/courseCreate.png')
    }
  },
  computed: {
    courseCreate () {
      return this.$store.state.courseCreate
    }
  }
}
</script>
