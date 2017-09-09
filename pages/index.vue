<template>
  <div>
    <template v-if="$store.state.isLogin==false">
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
      <template v-for="data in $store.state.branchs">
        <v-flex xs12 sm6 md4>
          <nuxt-link :to="'/allcourse/' + data.key" tag="span" style="cursor:pointer;">
            <v-card>
              <v-card-media :src = "data.img" height="200"></v-card-media>
              <v-card-title>{{data.name}}</v-card-title>
            </v-card>
          </nuxt-link>
        </v-flex>
        </template>
    </v-layout>
  </v-container>
</div>
<br>
  <div class="grey darken-4">
      <v-container>
        <div class="text-xs-center">
          <h6 class ="white--text">ไลฟ์แอนด์เลินทำงานอย่างไร?</h6>
          <v-layout>
            <v-flex xs6>
              <span class ="white--text">ค้นหาวิชาที่จะติว</span><br>
              <span class ="white--text">สำรวจวิชาที่สนใจจะติวด้วยรหัสวิชา</span>
            </v-flex>
            <v-flex xs6>
                <span class ="white--text">สร้างคอร์ส</span><br>
                <span class ="white--text">สร้างคอร์สของคุณเพื่อความก้าวหน้าของคุณ</span>

            </v-flex>
          </v-layout>
        </div>
      </v-container>
  </div>
  <br>
  <div>
      <v-container>
        <h6 style="display:inline;"><b>ประสบการณ์การใหม่บนมือถือ</b></h6>
        <p>ไม่ต้องติดตั้งแอปพลิเคชันบนมือถือ สำหรับ Android</p>
        <v-layout row wrap>
            <v-flex xs12 md6>
                <img src="https://beebom-redkapmedia.netdna-ssl.com/wp-content/uploads/2016/01/Reverse-Image-Search-Engines-Apps-And-Its-Uses-2016.jpg" alt="" height="200">
            </v-flex>
            <v-flex xs6 md3>
                <img src="http://tunecomp.net/wp-content/uploads/2016/01/03-website-to-home-screen-android.png" alt="" height="150">
            </v-flex>
            <v-flex xs6 md3>
                <img src="http://pngimg.com/uploads/smartphone/smartphone_PNG8541.png" alt="" height="150">
            </v-flex>
        </v-layout>
      </v-container>
  </div>


</template>
<template v-else>
      <parallax height = "200" src="https://archive.org/download/abstract-colored-circle-red-material-designlines-background/abstract-colored-circle-red-material-designlines-background.jpg" position="center">
        <h4 class="white--text" ><b>ค้นหาคอร์ส</b></h4>
        <h6 class="white--text" ><b>กว่า 635 คอร์สที่ให้ใช้งานอยู่ในขณะนี้ </b></h6>
      </parallax>

      <v-container grid-list-lg>
        <popularCourse branchs = "วิทยาการคอมพิวเตอร์"></popularCourse>
        <popularCourse branchs = "คอมพิวเตอร์แอนิเมชั่น"></popularCourse>
        <popularCourse branchs = "เทคโนโลยีสารสนเทศและการสื่อสาร"></popularCourse>
        <popularCourse branchs = "วิศวกรรมการเงิน"></popularCourse>
        <popularCourse branchs = "วิทยาศาสตร์และเทคโนโลยีการอาหาร"></popularCourse>
        <popularCourse branchs = "วิชาการจัดการธุรกิจอาหาร"></popularCourse>
      </v-container>
</template>
  </div>
</template>
<script>
// import axios from 'axios'
import parallax from '../components/parallax.vue'
import course from '../components/course.vue'
import popularCourse from '../components/popularCourse.vue'
export default {
  async asyncData ({ store, isServer }) {
    if (store.state.isLogin === false && store.state.branchs.length === 0) {
      store.dispatch('PULL_BRANCHS')
      console.log('get data from firebase')
    } else {
      console.log('get data from store')
    }
  },
  components: {
    parallax,
    course,
    popularCourse
  }
}
</script>
