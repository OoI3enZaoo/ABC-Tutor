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
         <v-container>
           <v-card>
             <v-card-text>
               <div class="text-xs-right">
                  <v-btn primary>บันทึก</v-btn>
               </div>
                <v-text-field label="สิ่งที่ผู้เรียนจะได้รับ" hint="เช่น เนื้อหาวิชาบทที่ 1 เรื่องคอมพิวเตอร์เบื้องต้น"></v-text-field>
                <v-btn primary dark small><v-icon>add_box</v-icon>&nbsp;เพิ่ม</v-btn>
                <br><br>
                <v-text-field label="สิ่งที่ผู้เรียนจะได้รับ" hint="เช่น เนื้อหาวิชาบทที่ 1 เรื่องคอมพิวเตอร์เบื้องต้น"></v-text-field>
                <v-btn primary dark small><v-icon>add_box</v-icon>&nbsp;เพิ่ม</v-btn>
             </v-card-text>
           </v-card>
         </v-container>

       </v-tabs-content>

       <!-- ราคา&การชำระเงิน -->
       <v-tabs-content id="1">
         <v-container>
           <v-card>
             <v-card-text>
               <div class="text-xs-right">
                  <v-btn primary>บันทึก</v-btn>
               </div>
                <v-text-field label="ราคาของคอร์ส" type="number"></v-text-field>
                <br>
                <span>คูปองขอคอร์ส</span><br>
                <v-btn primary>สร้างรหัสคูปอง</v-btn>
             </v-card-text>
           </v-card>
         </v-container>
       </v-tabs-content>

       <!-- หลักสูตร -->
       <v-tabs-content id="2">
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
       </v-tabs-content>


     </v-tabs-items>
   </v-tabs>


  </div>
</template>
<script>
import parallax from '../../../components/parallax.vue'
export default {
  components: {
    parallax
  },
  data () {
    return {
      tabs: ['รายละเอียดคอร์ส', 'ราคา&การชำระเงิน', 'หลักสูตร'],
      active: null,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  }
}
</script>
