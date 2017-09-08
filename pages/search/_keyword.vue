<template>
  <div>
    <v-container fluid grid-list-lg>
      <v-layout>
        <v-flex xs2>
          <v-expansion-panel  class="elevation-0">
            <v-expansion-panel-content class="grey lighten-5">
              <div slot="header">สาขา</div>
              <v-checkbox hide-details label="วิทยาการคอมพิวเตอร์"></v-checkbox>
              <v-checkbox hide-details label="วิทยาการคอมพิวเตอร์"></v-checkbox>
              <v-checkbox hide-details label="วิทยาการคอมพิวเตอร์"></v-checkbox>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <br>
          <v-expansion-panel expand class="elevation-0">
            <v-expansion-panel-content class="grey lighten-5">
              <div slot="header">เพศ</div>
              <v-checkbox hide-details label="ชาย"></v-checkbox>
              <v-checkbox hide-details label="หญิง"></v-checkbox>              
            </v-expansion-panel-content>
          </v-expansion-panel>
          <br>
          <v-expansion-panel expand class="elevation-0">
            <v-expansion-panel-content class="grey lighten-5">
              <div slot="header">ผู้สอน</div>
              <v-checkbox hide-details label="นักศึกษาหอการค้า"></v-checkbox>
              <v-checkbox hide-details label="อื่นๆ"></v-checkbox>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <br>
          <v-expansion-panel expand class="elevation-0">
            <v-expansion-panel-content class="grey lighten-5">
              <div slot="header">เรตติ้งผู้สอน</div>
              <v-checkbox hide-details label="5 ดาวขึ้นไป"></v-checkbox>
              <v-checkbox hide-details label="4 ดาวขึ้นไป"></v-checkbox>
              <v-checkbox hide-details label="3 ดาวขึ้นไป"></v-checkbox>
              <v-checkbox hide-details label="2 ดาวขึ้นไป"></v-checkbox>
              <v-checkbox hide-details label="1 ดาวขึ้นไป"></v-checkbox>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-flex>
        <v-layout row wrap>
          <template v-for="a in 8">
            <v-flex xs3>
              <v-card>
                <v-card-media src="http://tutorly.co/assets/img/main5a.jpg" height="150"></v-card-media>
                <v-card-text><h5>5555</h5></v-card-text>
              </v-card>
            </v-flex>
          </template>
        </v-layout>

      </v-layout>

    </v-container>
  </div>
</template>
<script>
export default {
  created () {
    console.log(this.$route.path)
  },
  computed: {
    keyword () {
      return this.$route.params.keyword
    }
  }
}
</script>
