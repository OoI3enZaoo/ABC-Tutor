<template>
  <div>
    <br>
    <v-container grid-list-lg>
      <p class="headline text-xs-center">สร้างคอร์สใหม่</p>
      <br>
      <v-card>
        <v-card-title class="grey lighten-3">มาเริ่มสร้างคอร์สใหม่กันเลย</v-card-title>
        <hr><br>
        <v-card-text>กรอกวิชาที่ต้องการติว
            <v-text-field class="elevation-1 mt-2" solo label="เช่น คอมพิวเตอร์เบื้องต้น"></v-text-field>
            <br><br>
            <div class="text-xs-center">
                <v-btn text-xs-center primary>สร้างคอร์ส</v-btn>
            </div>
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>
