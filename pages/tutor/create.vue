<template>
  <div>
    <br>
    <!-- <v-container grid-list-lg>
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
    </v-container> -->

    <v-container grid-list-lg>
      <p class="headline text-xs-center">สร้างคอร์สใหม่</p>
      <blockquote v-show="isBranchSelect">
        <ul>
          <li>สาขา: {{branch}}</li>
          <li v-if="lessonName !== null">ชื่อวิชา: {{lessonName}}</li>
          <li v-if="lessonCode !== null">รหัสวิชา: {{lessonCode}}</li>
        </ul>
      </blockquote>
      <br>
        <v-stepper v-model="e1">
        <v-stepper-header>
          <v-stepper-step step="1" :complete="e1 > 1">เลือกสาขา</v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step step="2" :complete="e1 > 2">เลือกวิชา</v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step step="3">ภาพหน้าปก</v-stepper-step>
        </v-stepper-header>
        <v-stepper-content step="1">

          <v-card class="elevation-0">
            <v-card-text>
              <v-select
             v-bind:items="items"
             v-model="branch"
             label="Select"
             single-line
             bottom
           ></v-select>

            </v-card-text>
          </v-card>

          <v-btn primary :disabled="isBranchSelect==false" @click.native="e1 = 2">ต่อไป</v-btn>

        </v-stepper-content>
        <v-stepper-content step="2">

          <v-card class="elevation-0">
            <v-card-text>
              <v-text-field v-model="lessonName" label="ชื่อวิชา" hint ="วิชาเช่น คอมพิวเตอร์เบื้องต้น"></v-text-field>
              <v-text-field v-model="lessonCode"label="รหัสวิชา" hint="รหัสวิชา 6 หลัก เช่น SP402"></v-text-field>
            </v-card-text>
          </v-card>
          <v-btn primary :disabled="isLessonSelect== false" @click.native="e1 = 3">ต่อไป</v-btn>
          <v-btn flat primary @click.native="e1 = 1">ย้อนกลับ</v-btn>
        </v-stepper-content>
        <v-stepper-content step="3">
            <v-card class="elevation-0">
              <v-card-text>
                <input type="file">
              </v-card-text>
            </v-card>
          <v-btn primary nuxt to="/tutor/manage/dd">สร้างคอร์ส</v-btn>
          <v-btn flat primary @click.native="e1 = 2">ย้อนกลับ</v-btn>
        </v-stepper-content>
      </v-stepper>
    </v-container>
  </div>
</template>
<script>
export default {
  data () {
    return {
      e1: 0,
      branch: null,
      items: ['วิทยาการคอมพิวเตอร์', 'คอมพิวเตอร์แอนิเมชั่น', 'เทคโนโลยีสารสนเทศและการสื่อสาร', 'วิศวกรรมการเงิน', 'วิทยาศาสตร์เทคโนโลยีการอาหาร', 'วิชาการจัดการธุรกิจอาหาร'],
      lessonName: null,
      lessonCode: null
    }
  },
  computed: {
    isBranchSelect () {
      return this.branch !== null
    },
    isLessonSelect () {
      return this.lessonName !== null && this.lessonCode !== null
    }
  }
}
</script>
