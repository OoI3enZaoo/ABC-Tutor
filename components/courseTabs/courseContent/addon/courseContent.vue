<template>
  <div>
    <toolbar :title="course.title" link="/home"></toolbar>
            <v-card class="elevation-0">
              <q-video :src="course.youtube" style="height:300px;" />
              <v-card-actions>
                <v-icon>remove_red_eye</v-icon>&nbsp; <span>{{course.view}}</span> &nbsp;&nbsp;
                <v-icon>shopping_cart</v-icon>&nbsp; <span>{{course.purchase}}</span> &nbsp;&nbsp;
                <v-icon>fa-money</v-icon> <span><b>THB{{course.price}}</b></span>
                <v-spacer></v-spacer>
                <span>
                  <v-avatar size="25px">
                    <img :src="course.avatar">
                  </v-avatar>
                  {{course.fname}} {{course.lname}}
                </span>
              </v-card-actions>
              <q-card-separator />
              <v-card-title>
                <span class="headline">{{course.title}}</span>
              </v-card-title>
              <v-card-main>
                 <p v-html="course.description"></p>
              </v-card-main>
            </v-card>
            <v-card class="elevation-0" style="background-color:#EEEEEE;">
                <v-card-text>
                  <template v-if="purchaseCourse">
                    <v-btn primary block @click.native="CourseInfo(course.course_id)">รายละเอียด</v-btn>
                  </template>
                  <template v-else>
                    <v-btn primary block @click.native="buyCourse"><v-icon dark>shopping_cart</v-icon>&nbsp;ซื้อตอนนี้</v-btn>
                  </template>
              </v-card-text>
            </v-card>
  </div>
</template>
<script>
import {
  QCardTitle,
  QVideo,
  QCard,
  QCardActions,
  QCardMedia,
  QCardMain,
  QIcon,
  QCardSeparator
} from 'quasar'
export default {
  beforeCreate() {
    navigator.vibrate(50)
    this.$store.dispatch('addCourseView', this.$route.params.id)
  },
  components: {
    QCardTitle,
    QVideo,
    QCard,
    QCardActions,
    QCardMedia,
    QCardMain,
    QIcon,
    QCardSeparator
  },
  data () {
    return {
      data: {},
      lesson: []
    }
  },
  mounted() {
    document.addEventListener("deviceready", this.onDeviceReady, false);
  },
  methods: {
    buyCourse () {
      if (!this.CreditCard) {
        this.showAlert()
      } else {
        const data = {
          course_id: this.course.course_id,
          price: this.course.price
        }
        this.$store.dispatch('purchaseCourse', data)
        this.$store.dispatch('pullLesson', this.course.course_id)
      }
    },
    showAlert () {
      navigator.notification.confirm(
          'คุณยังไม่มีบัตรเดบิต/เครดิต ในระบบ', // message
           this.onConfirm,            // callback to invoke with index of button pressed
          'Game Over',           // title
          ['เพิ่มบัตร','ปิด']     // buttonLabels
      );
    },
    onConfirm (buttonIndex) {
      if (buttonIndex == 1) {
        this.$router.push('/payment')
      }
    },
    onDeviceReady () {
    },
    CourseInfo (course_id) {
      console.log('course_id: ' + course_id)
      this.$router.push('/lessonList/' + course_id)
    }
  },
  computed: {
    course () {
      return this.$store.getters.course_from_course_id(this.$route.params.id)[0]
    },
    purchaseCourse () {
      return this.$store.getters.course_purchase_from_course_id(this.$route.params.id)[0] !== undefined ? true : false
    },
    CreditCard () {
      return this.$store.state.creditCard
    }
  }
}
</script>
