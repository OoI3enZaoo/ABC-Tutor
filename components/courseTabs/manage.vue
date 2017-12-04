<template>
  <div>
    <v-container grid-list-lg>
      <v-layout row wrap>
        <v-flex xs10>
          <div class="text-xs-right">
            <v-btn primary outline @click.native="restoreData">คืนค่าเดิม</v-btn>
            <v-btn primary @click.native="saveData">บันทึก</v-btn>
          </div>
          <br>
          <v-subheader>ข้อมูลคอร์ส</v-subheader>
          <v-card>
            <v-card-text>
              <v-subheader>ข้อมูลคอร์สเบื้องต้น</v-subheader>
              <v-list>
                <v-list-tile>
                  <v-layout>
                    <v-flex xs10>
                      <v-text-field label="ชื่อคอร์ส" v-model="data.subject" ></v-text-field>
                    </v-flex>
                    <v-flex xs2>
                      <v-text-field label="รหัสวิชา" v-model="data.code"></v-text-field>
                    </v-flex>
                  </v-layout>
                </v-list-tile>
                <br>
                <v-list-tile>
                  <v-layout>
                    <v-flex xs6>
                      <v-text-field label="ราคา" v-model="data.price"></v-text-field>
                    </v-flex>
                    <v-flex xs6>
                      <v-text-field label="รหัสส่วนลด" v-model="data.coupon"></v-text-field>
                    </v-flex>
                  </v-layout>
                </v-list-tile>
              </v-list>
            </v-card-text>
          </v-card>
          <br>
          <v-subheader>รายละเอียดคอร์ส</v-subheader>
          <v-card>
            <v-card-text>
              <v-subheader>รายละเอียด</v-subheader>
              <quill v-model="data.des"></quill>
            </v-card-text>
          </v-card>
          <br>
          <v-subheader>รูปภาพ</v-subheader>
          <v-card>
            <v-card-text>
              <v-subheader>ภาพหน้าปกคอร์ส</v-subheader>
              <base64upload :imageSrc="data.cover" @change="onChangeImage" style="width:300px;"></base64upload>
            </v-card-text>
          </v-card>
          <br>

          <!-- <v-subheader>ช่องทางการรับเงิน</v-subheader>
          <v-card>
            <v-card-text>
              <v-subheader>รายละเอียด</v-subheader>

            </v-card-text>
          </v-card>
          <br>
          <br> -->

          
        </v-flex>
        <v-flex xs2>
          <userPurchase></userPurchase>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
import userPurchase from '../userPurchase.vue'
import base64upload from '../base64upload.vue'
import quill from '../quill.vue'
export default {
  components: {
    userPurchase,
    base64upload,
    quill
  },
  created() {
    this.setData()
    console.log('manage(isTutor): ' + this.isTutor)
  },
  data () {
    return {
      data: {
        subject: '',
        code: '',
        price: '',
        des: '',
        cover: '',
        coupon: ''
      }
    }
  },
  methods: {
    onChangeImage (file) {
       this.data.cover = 'data:image/jpeg;base64,' + file.base64
    },
    setData () {
      this.data.subject = this.course.subject
      this.data.code = this.course.code
      this.data.price = this.course.price
      this.data.des = this.course.des
      this.data.cover = this.course.cover
      this.data.coupon =  this.course.coupon
    },
    restoreData () {
      this.setData()
    },
    saveData () {
      this.data.course_id = this.course.course_id
      if (this.data.coupon == undefined) {
        this.data.coupon = ''
      }
      console.log('coupon: ' + this.data.coupon);
      this.$store.dispatch('UPDATE_COURSE', this.data)
    }
  },
  computed: {
    course () {
      return this.$store.getters.COURSE_FROM_ID(this.$route.params.id)[0]
    }
  }
}
</script>
