<template>
  <div class="text-xs-right mt-2">
    <v-menu
      offset-y
      :close-on-content-click="false"
      :nudge-width="200"
      v-model="menu"
    >
      <v-btn icon slot="activator">
          <v-icon primary>notifications</v-icon>
      </v-btn>
      <v-card>
        <v-list>
          <v-list-tile avatar>
            <v-list-tile-content>
              <v-list-tile-title>การแจ้งเตือน</v-list-tile-title>
              <v-list-tile-sub-title>การแจ้งเตือนทั้งหมด</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
        <v-divider></v-divider>
        <v-list>

          <v-list-tile-content>
            <v-list-tile>
                <v-list-tile-title primary>คอร์สใหม่ถูกเพิ่มขึ้นแล้วนะครับ</v-list-tile-title><br>
                <v-list-tile-sub-title>2 ชั่วโมงที่แล้ว</v-list-tile-sub-title>
            </v-list-tile>
            <v-list-tile>
                <v-list-tile-title primary>คอร์สใหม่ถูกเพิ่มขึ้นแล้วนะครับ</v-list-tile-title><br>
                <v-list-tile-sub-title>2 ชั่วโมงที่แล้ว</v-list-tile-sub-title>
            </v-list-tile>
            <v-list-tile>
                <v-list-tile-title primary>คอร์สใหม่ถูกเพิ่มขึ้นแล้วนะครับ</v-list-tile-title><br>
                <v-list-tile-sub-title>2 ชั่วโมงที่แล้ว</v-list-tile-sub-title>
            </v-list-tile>
            <v-list-tile>
                <v-list-tile-title primary>คอร์สใหม่ถูกเพิ่มขึ้นแล้วนะครับ</v-list-tile-title><br>
                <v-list-tile-sub-title>2 ชั่วโมงที่แล้ว</v-list-tile-sub-title>
            </v-list-tile>
            <v-list-tile>
                <v-list-tile-title primary>คอร์สใหม่ถูกเพิ่มขึ้นแล้วนะครับ</v-list-tile-title><br>
                <v-list-tile-sub-title>2 ชั่วโมงที่แล้ว</v-list-tile-sub-title>
            </v-list-tile>
          </v-list-tile-content>
        </v-list>
      </v-card>
    </v-menu>
  </div>
</template>
<script>
  export default {
    data: () => ({
      fav: true,
      menu: false,
      message: false,
      hints: true
    })
  }
</script>
