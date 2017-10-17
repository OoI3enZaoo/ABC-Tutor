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
      <div class="text-xs-center">
        <p class="headline">สร้างคอร์ส</p>
        <h6>สร้างคอร์สใหม่ด้วยตัวเองง่าย ๆ เพียง 5 ขั้นตอน</h6>
      </div>
        <v-stepper v-model="e1">
        <v-stepper-header>
          <v-stepper-step step="1" :complete="e1 > 1">เลือกสาขา</v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step step="2" :complete="e1 > 2">เลือกวิชา</v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step step="3" :complete="e1 > 3">ภาพหน้าปก</v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step step="4" :complete="e1 > 4">รายละเอียด</v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step step="5">ราคา</v-stepper-step>
        </v-stepper-header>
        <v-stepper-content step="1">
          <v-card class="elevation-0">
            <v-card-text>
              <v-select
             v-bind:items="items"
             v-model="data.branch_id"
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
              <v-text-field v-model="data.subject" label="ชื่อวิชา" hint ="วิชาเช่น คอมพิวเตอร์เบื้องต้น"></v-text-field>
              <v-text-field v-model="data.code"label="รหัสวิชา" hint="รหัสวิชา 6 หลัก เช่น SP402"></v-text-field>
            </v-card-text>
          </v-card>
          <v-btn primary :disabled="isLessonSelect== false" @click.native="e1 = 3">ต่อไป</v-btn>
          <v-btn flat primary @click.native="e1 = 1">ย้อนกลับ</v-btn>
        </v-stepper-content>
        <v-stepper-content step="3">
            <v-card class="elevation-0">
              <v-card-text>
                  <base64upload imageSrc="https://goo.gl/Fyb2eG" @change="onChangeImage" style="width:300px;"></base64upload>
              </v-card-text>
            </v-card>
          <v-btn primary @click.native="e1 = 4">ต่อไป</v-btn>
          <v-btn flat primary @click.native="e1 = 2">ย้อนกลับ</v-btn>
        </v-stepper-content>
        <v-stepper-content step="4">
          <v-card class="elevation-0">
            <v-card-text>
              <p class="headline">เพิ่มรายละเอียดของคอร์ส</p>
              <quill v-model="data.des"></quill>
            </v-card-text>
          </v-card>
          <v-btn primary :disabled="isDesSelect == false" @click.native="e1 = 5">ต่อไป</v-btn>
          <v-btn flat primary @click.native="e1 = 3">ย้อนกลับ</v-btn>
        </v-stepper-content>
        <v-stepper-content step="5">
          <v-card class="elevation-0">
            <v-card-text>
               <v-text-field label="ราคาของคอร์ส" type="number" v-model="data.price"></v-text-field>
               <br>
               <span>รหัสคูปอง</span>
               <v-layout>
                 <v-flex xs12 md3 sm6>
                   <v-text-field v-model="data.coupon" label="กรอกรหัสคูปองที่นี่"></v-text-field>
                  </v-flex>
               </v-layout>
            </v-card-text>
          </v-card>

          <v-dialog v-model="dialog" lazy absolute>
            <v-btn primary dark slot="activator" :disabled="isPriceSelect == false">สร้างคอร์ส</v-btn>
            <v-card>
              <v-card-title>
                <div class="headline">แน่ใจใช่ไหม ?</div>
              </v-card-title>
              <v-card-text>คุณแน่ใจใช่หรือไม่ว่าจะสร้างคอร์สสอนวิชา {{data.subject}}({{data.code}})</v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn class="green--text darken-1" flat="flat" @click.native="dialog = false">ยกเลิก</v-btn>
                <v-btn class="green--text darken-1" flat="flat" @click.native="create">แน่ใจ</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>

          <v-btn flat primary @click.native="e1 = 4">ย้อนกลับ</v-btn>
        </v-stepper-content>
      </v-stepper>
      <br>


      <v-card class="grey lighten-3">
        <v-card-text>
          <h6>ข้อมูลตัวตัวอย่างคอร์ส</h6>
            <img :src="data.cover" style="height:150px;">
            <blockquote v-if="data.branch_id !== null">
            <ul>
              <li v-if="data.branch_id !== null">สาขา: {{data.branch_id}}</li>
              <li v-if="data.subject !== ''">ชื่อวิชา: {{data.subject}}</li>
              <li v-if="data.code !== ''">รหัสวิชา: {{data.code}}</li>
              <li v-if="data.des !== ''" v-html="data.des"></li>
              <li v-if="data.price !== ''">ราคา: {{data.price}}</li>
              <li v-if="data.coupon !== ''">คูปอง: {{data.coupon}}</li>
            </ul>
          </blockquote>
        </v-card-text>
      </v-card>
    </v-container>



  </div>
</template>
<script>
import base64upload from '../../components/base64upload.vue'
import quill from '../../components/quill.vue'
import Vue from 'vue'
const moment = require('moment')
Vue.use(require('vue-moment'), {
    moment
})
export default {
  components: {
    base64upload,
    quill
  },
  created () {
    this.$store.state.branchs.map(data => this.items.push(data.text))
  },
  methods: {
    onChangeImage(file) {
        this.data.cover = 'data:image/jpeg;base64,' + file.base64
      },
      create () {
        this.dialog = false
        this.data.branch_id = this.$store.getters.BRANCH_FROM_NAME(this.data.branch_id)[0].branch_id
        this.data.ts = Vue.moment().format('YYYY-MM-DD HH:mm:ss')
        this.data.user_id = this.$store.state.profile.user_id
        this.data.course_id = (new Date().getTime())
        this.data.lastUpdate = Vue.moment().format('YYYY-MM-DD HH:mm:ss')
        this.$store.dispatch('PUSH_COURSE', this.data)
        this.data.fname = this.$store.state.profile.fname
        this.data.lname = this.$store.state.profile.lname
        this.$store.commit('addCourses', [this.data])
        this.$store.commit('addCourseCreate', [this.data.course_id])
        this.$socket.emit('PUSH_COURSE', this.data)
        let notification = {
          course_id: this.data.course_id,
          subject: this.data.subject,
          code: this.data.code,
          user_id: this.$store.state.profile.user_id,
          user_img: this.$store.state.profile.user_img,
          noti_des: this.data.subject + '('+ this.data.code+')',
          noti_type: 1,
          noti_ts: this.data.ts
        }
        this.$socket.emit('noti_course', notification)
        let {course_id, user_id, noti_cover, noti_des, noti_type, noti_ts} = notification
        this.$store.dispatch('ADD_NOTIFICATION', {course_id, user_id, noti_cover, noti_des, noti_type, noti_ts})
        this.$router.push('/mycourse/' + this.data.course_id)
      }
  },
  data () {
    return {
      e1: 0,
      dialog: false,
      data: {
        course_id: null,
        user_id: null,
        branch_id: null,
        subject: '',
        code: '',
        price: '',
        des: '',
        cover: 'https://goo.gl/Fyb2eG',
        ts: null,
        coupon: '',
        lastUpdate: null
      },
      branch: null,
      items: [],
      lessonName: null,
      lessonCode: null
    }
  },
  computed: {
    isBranchSelect () {
      return this.data.branch_id !== null
    },
    isLessonSelect () {
      return this.data.subject !== ''
    },
    isDesSelect () {
      return this.data.des !== ''
    },
    isPriceSelect () {
      return this.data.price !== ''
    }
  }
}
</script>
