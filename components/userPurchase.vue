<template>
  <div>
    <p class="headline ml-4">ซื้อไปแล้ว {{courseUserPurchased.length}} คน</p>
    <v-list>
      <div style="max-height:480px; overflow:scroll; overflow-x:hidden;">
        <template v-for="data in courseUserPurchased" >
          <v-list-tile @click="" avatar nuxt :to="'/user/' + data.user_id" tag="span" >
            <v-list-tile-avatar>
              <img :src="data.user_img" alt="avatar">
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>
                {{data.fname}} {{data.lname}}
              </v-list-tile-title>
              <v-list-tile-sub-title>
                {{ data.purchase_ts | moment("from", "now", true) }} ที่ผ่านมา
              </v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </div>
    </v-list>
  </div>
</template>
<script>
export default {

  created () {
    this.$store.dispatch('PULL_USER_PURCHASED', this.$route.params.id)
  },
  computed: {
    courseUserPurchased () {
      return this.$store.getters.COURSE_USER_PURCHASED(this.$route.params.id)
    }
  }
}
</script>
