<template>
  <div>
    <v-container>
      <p class="headline">แชท</p>
      <br>
      <v-card>
        <v-card-text>
          <v-list two-line>
            <template v-for="a in 5">
                <v-list-tile avatar >
                  <v-list-tile-avatar>
                    <img src="http://s3.amazonaws.com/s3.timetoast.com/public/uploads/photos/2065220/billgates.png?1473908657" alt="avatar">
                  </v-list-tile-avatar>
                  <v-list-tile-content>
                      <v-list-tile-title>Bill Gates &nbsp;&nbsp; <span class="grey--text">10 นาทีที่แล้ว</span> </v-list-tile-title>
                      <v-list-tile-sub-title>มันดีมากๆเลยครับ</v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
            </template>

          </v-list>
        </v-card-text>
        <v-text-field solo label="พิมช้อความ">
        </v-text-field>
      </v-card>
    </v-container>
    <br><br><br>
  </div>
</template>
<script>
export default {

}
</script>
