<template>
  <div>
    <parallax src="http://ak8.picdn.net/shutterstock/videos/15654175/thumb/5.jpg" height="200">
      <v-container>
        <v-layout>
          <v-flex sm3 xs6>
              <img src="http://theeducationcentral.com/wp-content/uploads/2016/08/10200136_l-e1470214129475.jpg" height="150">
          </v-flex>
          <v-flex sm9 xs6>
            <h4 class="white--text" ><b>วิชาคอมพิวเตอร์เบื้องต้น (SP521)</b></h4>
          </v-flex>
        </v-layout>
      </v-container>
    </parallax>


    <v-tabs light v-model="active" centered grow>
     <v-tabs-bar class="grey lighten-4">
       <v-tabs-item
         v-for="(tab,i) in tabs"
         :key="tab"
         :href="'#' + i"
         ripple
       >
         {{tab}}
       </v-tabs-item>
       <v-tabs-slider class="red"></v-tabs-slider>
     </v-tabs-bar>
     <hr>
     <v-tabs-items>
       <!-- รายละเอียดคอร์ส -->
       <v-tabs-content id="0">
         <courseDetail></courseDetail>
       </v-tabs-content>

       <!-- ราคา&การชำระเงิน -->
       <v-tabs-content id="1">
         <payment></payment>
       </v-tabs-content>

       <!-- หลักสูตร -->
       <v-tabs-content id="2">
         <course></course>     
       </v-tabs-content>
     </v-tabs-items>
   </v-tabs>
  </div>
</template>
<script>
import parallax from '../../../components/parallax.vue'
import courseDetail from '../../../components/tutor/courseDetail.vue'
import payment from '../../../components/tutor/payment.vue'
import course from '../../../components/tutor/course.vue'
export default {
  components: {
    parallax,
    courseDetail,
    payment,
    course
  },
  data () {
    return {
      tabs: ['รายละเอียดคอร์ส', 'ราคา&การชำระเงิน', 'หลักสูตร'],
      active: null
    }
  }
}
</script>
