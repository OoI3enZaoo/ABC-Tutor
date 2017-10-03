<template>
  <div>
    <parallax src="https://static1.squarespace.com/static/51609147e4b0715db61d32b6/521b97cee4b05f031fd12dde/5519e33de4b06a1002802805/1431718693701/?format=1500w" height="150">
    <div class="mt-4">
      <p class="headline">{{user.fname}} {{user.lname}}</p>
      <h6>Freelancing Web Designer</h6>
    </div>
    </parallax>
    <v-container grid-list-lg>
      <v-layout>
        <v-flex xs2>
          <v-card flat>
            <v-card-media :src="user.user_img" height="200"></v-card-media>
            <v-layout>
              <v-flex xs3><v-btn icon><v-icon class="blue--text">fa-facebook</v-icon></v-btn></v-flex>
              <v-flex xs3><v-btn icon><v-icon class="blue--text">fa-twitter</v-icon></v-btn></v-flex>
              <v-flex xs3><v-btn icon><v-icon class="blue--text">fa-google</v-icon></v-btn></v-flex>
              <v-flex xs3><v-btn icon><v-icon class="blue--text">fa-youtube</v-icon></v-btn></v-btn></v-flex>
            </v-layout>
          </v-card>
        </v-flex>
        <v-flex xs10>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <v-card flat>
            <v-layout>
              <v-flex xs2>
                <span>นักเรียนทั้งหมด</span><br>
                <p style="display:inline;"class="headline">1,500</p>
              </v-flex>
              <v-flex xs2>
                <span>คอร์สสอน</span><br>
                <p style="display:inline;"class="headline">20</p>
              </v-flex>
              <v-flex xs2>
                <span>การถูกรีวิว</span><br>
                <p style="display:inline;"class="headline">6,655</p>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
      <br>
      <hr class="grey lighten-4"><br>
      <div class="text-xs-center">
        <p class="headline">คอร์สที่สอนโดย Theerapat Vijitpoo</p>
      </div>
      <v-layout row wrap>
        <template v-for="a in 7">
          <v-flex xs3>
            <v-card>
              <v-card-media src="http://tutorly.co/assets/img/main5a.jpg" height="150"></v-card-media>
              <v-card-text><h5>5555</h5></v-card-text>
            </v-card>
          </v-flex>
        </template>
      </v-layout>
<br>
<hr>
<br>

      <div class="text-xs-center">
        <p class="headline">คอร์สที่ {{user.fname}} {{user.lname}} ลงเรียน</p>
      </div>
      <v-layout row wrap>
        <template v-for="a in 7">
          <v-flex xs3>
            <v-card>
              <v-card-media src="http://tutorly.co/assets/img/main5a.jpg" height="150"></v-card-media>
              <v-card-text><h5>5555</h5></v-card-text>
            </v-card>
          </v-flex>
        </template>
      </v-layout>


    </v-layout>

    </v-container>
  </div>
</template>
<script>
import parallax from '../../components/parallax.vue'
export default {
  async asyncData ({store, route}) {
    await store.dispatch('PULL_USER', route.params.id)
  },
  components: {
    parallax
  },
  computed: {
    user () {
      return this.$store.getters.USER_FROM_ID(this.$route.params.id)[0]
    }
  }
}
</script>
