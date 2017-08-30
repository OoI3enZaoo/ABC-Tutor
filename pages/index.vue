<template>
  <div>
    <template v-if="$store.state.isLogin==false">
    <div class="hidden-xs-only">
        <div class="gif">
          <br><br><br>
          <div class= "text-xs-center">
            <h4 class="white--text" ><b>ไม่เข้าใจที่อาจารย์สอน ?</b></h4>
            <h6 class="white--text" ><b>มาเริ่มต้นด้วยกันกับเรา Live & Lean </b></h6>
            <v-btn round primary to="/" large>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ลงทะเบียน&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</v-btn>
          </div>
          <br><br><br>
        </div>
    </div>
<div>
  <br><br>
  <v-container
        grid-list-lg>
    <h6>ที่ได้รับความนิยม</h6>
    <v-spacer></v-spacer>
    <v-layout row wrap>
      <template v-for="a in 4">
          <v-flex xs12 md3>
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
        <v-flex xs4>
          <v-card>
            <v-card-media :src = "data.img" height="200"></v-card-media>
            <v-card-title>{{data.name}}</v-card-title>
          </v-card>
        </v-flex>
        </template>
    </v-layout>
  </v-container>
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
        <v-layout row>
            <v-flex xs6>
              <img src="https://beebom-redkapmedia.netdna-ssl.com/wp-content/uploads/2016/01/Reverse-Image-Search-Engines-Apps-And-Its-Uses-2016.jpg" alt="" height="200">
            </v-flex>
            <v-flex xs6>
              <div >
                <v-layout row >
                  <v-flex xs6>
                    <img src="http://tunecomp.net/wp-content/uploads/2016/01/03-website-to-home-screen-android.png" alt="" height="200">
                  </v-flex>
                  <v-flex xs6>
                    <img src="http://pngimg.com/uploads/smartphone/smartphone_PNG8541.png" alt="" height="200">
                  </v-flex>
                </v-layout>
              </div>
            </v-flex>
        </v-layout>
      </v-container>
  </div>
</div>



    <v-footer light>


              <p class="text--white">สร้างคอร์ส</p>

                <v-spacer></v-spacer>
              <p class="text--white">เข้าสู่ระบบ</p>


 </v-footer>
</template>
<template v-else>
      <div class="hidden-xs-only">
          <div class="gif">
            <br><br><br>
            <div class= "text-xs-center">
              <v-container>
                <h4 class="white--text" ><b>ค้นหาคอร์ส</b></h4>
                <h6 class="white--text" ><b>กว่า 635 คอร์สที่ให้ใช้งานอยู่ในขณะนี้ </b></h6>
              </v-container>
            </div>
            <br><br><br>
          </div>
      </div>
      <v-container >
        <h6>คอร์สที่ได้รับความนิยมใน "วิทยาการคอมพิวเตอร์"</h6>
      </v-container>

</template>
  </div>
</template>
<style >
  .gif {
    background-image: url("http://www.gengotutors.com/img/slides/skype-language-tutor-homepage-background.jpg");
    background-size: 100% 500px;
  }
</style>
