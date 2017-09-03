<template>
  <div>
<br><br>
<v-container grid-list-lg>
    <v-layout row wrap>
      <v-flex xs12 sm11>
        <v-text-field
        solo
        label="ค้นหา"
        append-icon='search'
        >
        </v-text-field>
      </v-flex>
      <v-flex xs12 sm1>
          <create></create>
      </v-flex>
    </v-layout>

  <br><br>
  <v-card v-for="(a,index) in 3" :key="index">
        <v-list two-line>
          <v-list-tile avatar @click="">
            <v-list-tile-avatar>
              <img src="https://image.flaticon.com/icons/png/512/206/206853.png">
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-sub-title>
                  <span>สมศรีไง</span>
              </v-list-tile-sub-title>
              <v-list-tile-title>
                  <span>ส่วนประกอบของคอมพิวเตอร์มีอะไรบ้างคะ?</span>
              </v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
                <v-list-tile-action-text>15 นาทีที่แล้ว</v-list-tile-action-text>
                <v-list-tile-action-text class="mr-4 black--text">5</v-list-tile-action-text>
                <v-list-tile-action-text>ตอบกลับ</v-list-tile-action-text>
            </v-list-tile-action>
          </v-list-tile>

        </v-list>


  </v-card>

    </v-container>
  </div>
</template>
<script>
import create from './create.vue'
export default {
  components: {
    create
  }
}
</script>
