<template>
  <div>
    <parallax height = "500" type="link" src="http://www.gengotutors.com/img/slides/skype-language-tutor-homepage-background.jpg" position="center">
      <h1 class="white--text text-xs-center">ติวออนไลน์</h1>
      <h4 class="white--text">เปิดประสบการณ์ใหม่ที่ไม่เหมือนใครกับระบบวีดีโอสตีมมิ่ง</h4>
      <v-btn v-if="!$store.state.isLogin" round primary large style="padding: 60px 70px 60x 70px;" nuxt to ="/login">สม้ครสมาชิก</v-btn>
    </parallax>
 <div>

  <v-container grid-list-lg v-if="popularCourseIndex.length !== 0">
    <br><br>
    <h6>คอร์สยอดนิยม</h6>
    <v-spacer></v-spacer>
    <v-layout row wrap>
      <template v-for="data in popularCourseIndex">
          <v-flex xs6 md3>
            <nuxt-link :to="'/course/' + data.course_id"  tag="span" style="cursor:pointer;">
            <v-card>
              <v-card-media :src="data.cover" height="150"></v-card-media>
              <v-card-text>
                <p style="display:inline;">{{data.subject}} ({{data.code}})</p><br>
                <span class="grey--text">{{data.fname}} {{data.lname}}</span><br>
                  <RatingInCard :courseId="data.course_id"></RatingInCard>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <h6 class="primary--text"><b>{{data.price}}.-</b></h6>
              </v-card-actions>
            </v-card>
            </nuxt-link>
          </v-flex>
      </template>
    </v-layout>
    <br><br>
    <hr>
  </v-container>
</div>
<div class="white">
  <v-container grid-list-lg>
    <br>

    <h6>คอร์สเรียนทั้งหมด</h6>
    <v-tabs light>

     <v-tabs-bar class="white">
       <v-tabs-slider class="primary"></v-tabs-slider>
       <v-tabs-item
         v-for="(data,i) in menuItems"
         :key="i"
         :href="'#' + data"
       >
         {{data}}
       </v-tabs-item>
     </v-tabs-bar>
     <br>
       <v-tabs-content id='วิทยาศาสตร์และเทคโนโลยี'>
         <v-layout row wrap>
             <template v-for="data in branchs">
               <branch :img = "data.img" :text="data.text" :branchId ="data.branch_id"></branch>
             </template>
         </v-layout>
         <br>
       </v-tabs-content>
       <v-tabs-content id='บริหารธุรกิจ'>
         <noDataCard :png="comming_soon" text="คณะนี้ยังไม่เปิดให้บริการ"> </noDataCard>
       </v-tabs-content>

       <v-tabs-content id='บัญชี'>
         <noDataCard :png="comming_soon" text="คณะนี้ยังไม่เปิดให้บริการ"> </noDataCard>
       </v-tabs-content>
       <v-tabs-content id='เศรษฐศาสตร์'>
         <noDataCard :png="comming_soon" text="คณะนี้ยังไม่เปิดให้บริการ"> </noDataCard>
       </v-tabs-content>
       <v-tabs-content id='มนุษยศาสตร์และประยุกต์ศิลป์'>
         <noDataCard :png="comming_soon" text="คณะนี้ยังไม่เปิดให้บริการ"> </noDataCard>
       </v-tabs-content>
       <v-tabs-content id='นิเทศศาสตร์'>
         <noDataCard :png="comming_soon" text="คณะนี้ยังไม่เปิดให้บริการ"> </noDataCard>
       </v-tabs-content>
       <v-tabs-content id='วิศวกรรมศาสตร์'>
         <noDataCard :png="comming_soon" text="คณะนี้ยังไม่เปิดให้บริการ"> </noDataCard>
       </v-tabs-content>
       <v-tabs-content id='นิติศาสตร์'>
         <noDataCard :png="comming_soon" text="คณะนี้ยังไม่เปิดให้บริการ"> </noDataCard>
       </v-tabs-content>
       <v-tabs-content id='การท่องเที่่ยวและอุตสาหกรรมบริการ'>
         <noDataCard :png="comming_soon" text="คณะนี้ยังไม่เปิดให้บริการ"> </noDataCard>
       </v-tabs-content>
       <v-tabs-content id='วิทยาลัยผู้ประกอบการ'>
         <noDataCard :png="comming_soon" text="คณะนี้ยังไม่เปิดให้บริการ"> </noDataCard>
       </v-tabs-content>
       <v-tabs-content id='International Program'>
         <noDataCard :png="comming_soon" text="คณะนี้ยังไม่เปิดให้บริการ"> </noDataCard>
       </v-tabs-content>
       <v-tabs-content id='อื่น ๆ'>
         <noDataCard :png="comming_soon" text="คณะนี้ยังไม่เปิดให้บริการ"> </noDataCard>
       </v-tabs-content>

   </v-tabs>


  </v-container>
</div>
<br>
  <div class="grey darken-4">
      <v-container>
        <v-card flat class="grey darken-4">
          <v-card-text>
            <div class="text-xs-center">
              <h5 class ="white--text">{{$store.state.projectName}} ทำงานอย่างไร ?</h5>
              <v-layout>
                <v-flex xs6>
                  <v-layout>
                    <v-flex xs5>
                        <img src="http://www.clker.com/cliparts/D/k/0/U/i/k/search-icon-red-hi.png" height="55" alt="">
                    </v-flex>
                    <v-flex xs7 text-xs-left>
                      <span class ="white--text"><b>ค้นหาวิชาที่จะติว</b></span><br>
                      <span class ="white--text hidden-xs-only">สำรวจวิชาที่สนใจจะติวด้วยรหัสวิชา</span>
                    </v-flex>
                  </v-layout>
                </v-flex>
                <v-flex xs6>
                  <v-layout>
                    <v-flex xs3 text-xs-right>
                        <img src="https://cdn4.iconfinder.com/data/icons/keynote-and-powerpoint-icons/256/Plus-128.png" height="55" alt="">
                    </v-flex>
                    <v-flex xs9 text-xs-left class="ml-5">
                      <span class ="white--text"><b>สร้างคอร์ส</b></span><br>
                      <span class ="white--text  hidden-xs-only">สร้างคอร์สของคุณเพื่อความก้าวหน้าของคุณ</span>
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
              <p>ไม่ต้องติดตั้งแอปพลิเคชันบนมือถือ สำหรับ Android ด้วยระบบ Progressive Web Apps</p>
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
import popularCourse from '../components/popularCourse.vue'
import RatingInCard from '../components/RatingInCard.vue'
import noDataCard from '../components/noDataCard.vue'
export default {
  asyncData ({store, redirect}) {
    if (store.state.isLogin == true) {
      redirect('/home')
    } else {
      store.dispatch('PULL_POPULAR_COURSE_INDEX')
    }
  },
  computed: {
    branchs () {
      return this.$store.state.branchs
    },
    popularCourseIndex () {
      return this.$store.state.popularCourseIndex
    }
  },
  data () {
    return {
      menuItems: [
      'วิทยาศาสตร์และเทคโนโลยี',
      'บริหารธุรกิจ',
      'บัญชี',
      'เศรษฐศาสตร์',
      'มนุษยศาสตร์และประยุกต์ศิลป์'  ,
      'นิเทศศาสตร์',
      'วิศวกรรมศาสตร์',
      'นิติศาสตร์',
      'การท่องเที่่ยวและอุตสาหกรรมบริการ',
      'วิทยาลัยผู้ประกอบการ',
      'International Program',
      'อื่น ๆ'
    ],
      comming_soon: require('../static/coming-soon.png')
    }
  },
  mounted () {
    // console.log(JSON.stringify(this.branchs))
    // console.log(notification)
  },
  components: {
    parallax,
    branch,
    popularCourse,
    RatingInCard,
    noDataCard
  }
}
</script>
