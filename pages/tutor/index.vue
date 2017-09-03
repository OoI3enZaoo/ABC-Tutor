<template>
  <div>
    <parallax height="200" src= "https://archive.org/download/abstract-colored-circle-red-material-designlines-background/abstract-colored-circle-red-material-designlines-background.jpg"  >
    <h4 class="mt-5">หน้าจัดการคอร์สสำหรับติวเตอร์</h4>
    </parallax>
    <v-container grid-list-lg>
        <v-layout row wrap>
          <v-flex xs12 sm11>
            <v-text-field
            solo
            label="ค้นหาคอร์สของคุณ"
            append-icon='search'
            >
            </v-text-field>
          </v-flex>
          <v-flex xs12 sm1>
              <v-btn primary block nuxt to = '/tutor/manage/create'>สร้างคอร์ส</v-btn>
          </v-flex>
        </v-layout>
        <br><br>
        <v-card>
          <v-layout>
            <v-flex xs3>
                <v-card-media src="https://us.123rf.com/450wm/juliatim/juliatim1603/juliatim160300025/54282789-young-man-sitting-in-the-park-under-a-tree-and-working-with-laptop-flat-modern-illustration-of-socia.jpg?ver=6" height="200"></v-card-media>
            </v-flex>
            <v-flex xs9>
              <v-card-text>
                <v-layout>
                  <v-flex xs9>
                      <h6><b>วิชาคอมพิวเตอร์เบื้องต้น (SP521) 350.-</b></h6>
                      <template v-for="a in 5">
                        <v-icon>star</v-icon>
                      </template>
                      &nbsp;&nbsp;
                      <span>5.0</span>&nbsp;&nbsp; <span>จากคนโหวตทั้งหมด</span>&nbsp;<span>5,040</span>&nbsp;<span>คน</span>
                  </v-flex>
                  <v-flex xs3 text-xs-right>
                      <span>สร้างเมื่อ 18/08/2560 18:50</span> <br>
                      <span>อัพเดทล่าสุด 26/08/2560 19:43</span>
                  </v-flex>
                </v-layout>

                  <v-layout>
                    <template v-for="a in 4">
                        <v-flex xs3>
                          <v-card class="grey lighten-4 text-xs-center">
                            <v-card-text>
                              <span><b>ลงทะเบียนรวม</b></span><br>
                              <span>6,855</span>
                            </v-card-text>
                          </v-card>
                        </v-flex>
                    </template>
                  </v-layout>
              </v-card-text>

            </v-flex>
          </v-layout>
        </v-card>
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
