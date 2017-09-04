<template>
  <div>
    <parallax height = "200"  src="https://www.guttersupply.com/file_area/public/categories/ImageUrl_1241190124_7226.jpg">
        <h5 class="white--text mt-4">วิชาคอมพิวเตอร์เบื้องต้น (SP521)</h5>
        <h6 class="white--text">ผู้ที่ต้องการสอบกลางภาควิชาคอมพิวเตอร์เบื้องต้น (SP521)</h6>
        <h6 class="white--text">สร้างโดย <span class="blue--text">Theerapat Vijitpoo</span> อัพเดทข้อมูลล่าสุดเมื่อ 18/92560 16:18</h6>
    </parallax>
    <br>
    <v-container grid-list-lg>
      <v-layout row wrap>
        <v-flex xs12 sm9>
          <h6 class="headline">สิ่งที่ผู้เรียนจะได้รับ</h6>
          <ul>
            <li>ติวเข็มบทที่ 1 เรื่องคอมพิวเตอร์เบื้องต้น</li>
            <li>ติวเข็มบทที่ 2 ส่วนประกอบของคอมพิวเตอร์</li>
          </ul>
          <br><br><br>
          <h6 class="headline">เนื้อหาสำหรับ</h6>
          <span>ผู้ที่่ต้องการสอบกลางภาควิชาคอมพิวเตอร์เบื้องต้น (SP521)</span>
          <br><br><br>
          <h6 class="headline">เกี่ยวกับผู้สอน</h6>
          <v-layout>
            <v-flex xs2>
              <v-avatar tile size="80px">
                <img src="https://scontent.fbkk2-4.fna.fbcdn.net/v/t1.0-9/18670848_1440946712632376_9108286887308110690_n.jpg?_nc_eui2=v1%3AAeHK1rd2oRtb-z5eaABMDoa_ZZO1Vt9C_dyvbyH7me7jRPK1VH4BkQ-B3l3E4-UCfv8f48-uzvc1E3JbfAeFAZeSaSFSWLWoaRU2NzmLv9hqIg&oh=fe0776c03fef863ba5ec6b9dcb16bff9&oe=5A267C89" alt="John">
              </v-avatar>
            </v-flex>
            <v-flex xs3>
              <p class="blue--text">Theerapat Vijitpoo</p>
              <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore a qui officia deserunt mollit anim id est laborum.</span>
            </v-flex>
          </v-layout>
          <br><br><br>
          <h6 class="headline">การตอบรับของผู้เรียน</h6>
          <v-layout>
            <v-flex xs2 text-xs-center>
              <div class="mt-2">
                <h3><b>5.0</b></h3>
                <template v-for="a in 5">
                  <v-icon>star</v-icon>
                </template><br>
                <span class="grey--text">ผลโหวตโดยเฉลี่ย</span>
              </div>
            </v-flex>
            <v-flex xs2>
                <v-progress-linear value="100" height="10" success> </v-progress-linear>
                <v-progress-linear value="80" height="10" success> </v-progress-linear>
                <v-progress-linear value="70" height="10" success> </v-progress-linear>
                <v-progress-linear value="40" height="10" success> </v-progress-linear>
                <v-progress-linear value="10" height="10" success> </v-progress-linear>
            </v-flex>
            <v-flex xs3>
              <div class="mt-2">
                  <v-icon>star</v-icon><v-icon>star</v-icon><v-icon>star</v-icon><v-icon>star</v-icon><v-icon>star</v-icon> <br>
                  <v-icon>star</v-icon><v-icon>star</v-icon><v-icon>star</v-icon><v-icon>star</v-icon><br>
                  <v-icon>star</v-icon><v-icon>star</v-icon><v-icon>star</v-icon><br>
                  <v-icon>star</v-icon><v-icon>star</v-icon><br>
                  <v-icon>star</v-icon><br>
                </div>
            </v-flex>
          </v-layout>
          <br><br><br>
          <h6 class="headline">การรีวิว</h6>
            <v-layout>
              <v-flex xs1>
                <v-avatar>
                  <img src="http://s3.amazonaws.com/s3.timetoast.com/public/uploads/photos/2065220/billgates.png" alt="avatar">
                </v-avatar>
              </v-flex>
              <v-flex xs1>
                  <span class="grey--text">5 นาทีที่แล้ว</span><br>
                  <span>Bill Gates</span>
              </v-flex>
              <v-flex xs4>
                <template v-for="a in 5">
                  <v-icon>star</v-icon>
                </template><br>
                <span>ชอบมากครับ ที่ผมมีทุกวันนี้ได้เพราะคุณคนเดียวเลย เยี่ยมจริงๆ</span>
              </v-flex>
            </v-layout>
        </v-flex>

        <v-flex xs12 sm3>
          <v-card fixed>
            <v-card-media src="https://us.123rf.com/450wm/juliatim/juliatim1603/juliatim160300025/54282789-young-man-sitting-in-the-park-under-a-tree-and-working-with-laptop-flat-modern-illustration-of-socia.jpg?ver=6" height="150"></v-card-media>
            <v-card-text>
              <span class="headline">350.-</span><br><br>
              <div class="text-xs-center">
                  <v-btn primary block>ซื้อตอนนี้</v-btn>
                  <v-btn primary outline block>เก็บใส่ตะกร้า</v-btn>
              </div>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>


    </v-container>
  </div>
</template>

<script>
import parallax from '../../components/parallax.vue'
export default {
  components: {
    parallax
  }
}
</script>
