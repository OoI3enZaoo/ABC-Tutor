<template>
  <div>
    <v-container grid-list-lg>
      <v-card >
        <v-card-text>
          <div class="text-xs-right">
             <v-btn primary outline>หน้าตัวอย่าง</v-btn>
             <v-btn primary>บันทึก</v-btn>
          </div>
           <p>สามารถเพิ่มคลิบวีดีโอต่าง ๆ ในแต่ละหลักสูตรได้ตามต้องการ</p>
           <br>
           <v-card flat class="grey lighten-3"><v-card-text><span><b>หลักสูตรที่ 1 การแนะนำ</b></span></v-card-text></v-card>
           <v-layout>
             <v-flex xs4><v-btn primary outline block><v-icon>add_box</v-icon>&nbsp;เพิ่มวีดีโอ</v-btn></v-flex>
             <v-flex xs4><v-btn primary outline block><v-icon>add_box</v-icon>&nbsp;เพิ่มไฟล์</v-btn></v-flex>
             <v-flex xs4><v-btn primary outline block><v-icon>add_box</v-icon>&nbsp;เพิ่มแบบฝึกหัด</v-btn></v-flex>
           </v-layout>
           <v-btn primary  block><v-icon>add_box</v-icon>&nbsp;เพิ่มหลักสูตรใหม่</v-btn>
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>
<script>
export default {
}
</script>
