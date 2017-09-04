<template>
  <div>
    <br>
    <v-layout>
      <v-flex xs11><h6>คอร์สที่ได้รับความนิยมใน "{{branchs}}"</h6></v-flex>
      <v-flex xs1 text-xs-right><nuxt-link to="/allcourse/xxx">ดูทั้งหมด</nuxt-link></v-flex>
    </v-layout>
      <div v-swiper:mySwiper="swiperOption">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="a in 10">
            <v-card>
              <v-card-media src="https://us.123rf.com/450wm/juliatim/juliatim1603/juliatim160300025/54282789-young-man-sitting-in-the-park-under-a-tree-and-working-with-laptop-flat-modern-illustration-of-socia.jpg?ver=6" height="150"></v-card-media>
              <v-card-text>
                <p>คอมพิวเตอร์เบื้องต้น (SP521)</p>
                <span class="grey--text">Theerapat Vijitpoo</span><br>
                <template v-for="a in 5">
                  <v-icon>star</v-icon>
                </template>
                <span>5.0 </span> <span class="grey--text">(33,888)</span>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <h6 class="primary--text">350.-</h6>
              </v-card-actions>
            </v-card>
            <br>
          </div>
        </div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </div>
  </div>
</template>
<script>
export default {
  props: ['branchs'],
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationElement: 'li',
        slidesPerView: 5,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        spaceBetween: 30,
        onTap: swiper => {
          console.log('onTap', swiper.realIndex)
          this.$router.push('/course/xxxx')
        }
      }
    }
  }
}
</script>
