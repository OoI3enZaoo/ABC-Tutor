<template>
  <div>
    <parallax height = "500" type="link" src="http://www.gengotutors.com/img/slides/skype-language-tutor-homepage-background.jpg" position="center">
      <h1 class="white--text">เรียนกับอาจารย์ไม่รู้เรื่อง ?</h1>
      <h4 class="white--text">มาเริ่มต้นกับเราที่ ABC-Tutor</h4>
      <v-btn round primary large>สม้ครสมาชิก</v-btn>
    </parallax>
 <div>
  <br><br>
  <v-container
        grid-list-lg>
    <h6>ที่ได้รับความนิยม</h6>
    <v-spacer></v-spacer>
    <v-layout row wrap>
      <template v-for="a in 4">
          <v-flex xs6 md3>
            <v-card>
              <v-card-media src="https://us.123rf.com/450wm/juliatim/juliatim1603/juliatim160300025/54282789-young-man-sitting-in-the-park-under-a-tree-and-working-with-laptop-flat-modern-illustration-of-socia.jpg?ver=6" height="150"></v-card-media>
              <v-card-text>
                <p style="display:inline;">คอมพิวเตอร์เบื้องต้น (SP521)</p><br>
                <span class="grey--text">Theerapat Vijitpoo</span><br>
                <template v-for="a in 5">
                    <v-icon>star</v-icon>
                </template>
                5.0 <p class="grey--text" style="display:inline;">25,555</p>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <h6 class="red--text"><b>350.-</b></h6>
              </v-card-actions>
            </v-card>
          </v-flex>
      </template>
    </v-layout>

  </v-container>
</div>
  <hr>
<div class="text-xs-center white">
  <v-container grid-list-lg>
    <br>

    <h5 class="black--text">สำรวจ</h5>
    <v-layout row wrap>
        <template v-for="data in branchs">
          <branch :img = "data.img" :text="data.text" :branchId ="data.branch_id"></branch>
        </template>
    </v-layout>
  </v-container>
</div>
<br>
  <div class="grey darken-4">
      <v-container>
        <v-card flat class="grey darken-4">
          <v-card-text>
            <div class="text-xs-center">
              <h5 class ="white--text">{{$store.state.projectName}} ทำงานอย่างไร?</h5>
              <v-layout>
                <v-flex xs6>
                  <v-layout>
                    <v-flex xs3>
                        <img src="http://www.clker.com/cliparts/D/k/0/U/i/k/search-icon-red-hi.png" height="55" alt="">
                    </v-flex>
                    <v-flex xs4 text-xs-left>
                      <span class ="white--text"><b>ค้นหาวิชาที่จะติว</b></span><br>
                      <span class ="white--text">สำรวจวิชาที่สนใจจะติวด้วยรหัสวิชา</span>
                    </v-flex>
                  </v-layout>
                </v-flex>
                <v-flex xs6>
                  <v-layout>
                    <v-flex xs7 text-xs-right>
                        <img src="https://cdn4.iconfinder.com/data/icons/keynote-and-powerpoint-icons/256/Plus-128.png" height="55" alt="">
                    </v-flex>
                    <v-flex xs4 text-xs-left class="ml-5">
                      <span class ="white--text"><b>สร้างคอร์ส</b></span><br>
                      <span class ="white--text">สร้างคอร์สของคุณเพื่อความก้าวหน้าของคุณ</span>
                    </v-flex>
                  </v-layout>
                </v-flex>
              </v-layout>
            </div>
          </v-card-text>
        </v-card>
      </v-container>
  </div>


      <v-container>
        <v-card flat>
          <v-card-text>
            <div class="text-xs-center">
              <h5 style="display:inline;"><b>ประสบการณ์การใหม่บนมือถือ</b></h5>
              <p>ไม่ต้องติดตั้งแอปพลิเคชันบนมือถือ สำหรับ Android ด้วยระบบ Progressive Web Apps &nbsp; <nuxt-link to="">ข้อมูลเพิ่มเติม</nuxt-link></p>
            </div>
            <br>
            <v-layout row wrap>
                <v-flex xs12 md6>
                    <img src="https://blog.ionic.io/wp-content/uploads/2016/05/what-is-pwa-img.png" alt="" height="200">
                </v-flex>
                <v-flex xs6 md3 text-xs-right mt-3>
                    <img src="http://tunecomp.net/wp-content/uploads/2016/01/03-website-to-home-screen-android.png" alt="" height="150">
                </v-flex>

                <v-flex xs6 md3 text-xs-center mt-3>
                    <img src="http://pngimg.com/uploads/smartphone/smartphone_PNG8541.png" alt="" height="150">
                </v-flex>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-container>
  </div>
</template>
<script>
import parallax from '../components/parallax.vue'
import branch from '../components/branch.vue'
export default {
  async asyncData ({ store }) {
    if (store.state.isLogin === true) {
      await store.dispatch('PULL_COURSES')
    }
  },
  computed: {
    branchs () {
      return this.$store.state.branchs
    }
  },
  mounted () {
    console.log(JSON.stringify(this.branchs))
  },
  components: {
    parallax,
    branch
  }
}
</script>
