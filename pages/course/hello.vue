<template>
  <div v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="a in 5">
        <v-card>
          <v-card-media src="https://www.bannersnack.com/public/images/landing/examples/tpl_03.jpg" height="150"></v-card-media>
          <v-card-title>สวัสดี</v-card-title>
        </v-card>
      </div>
    </div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </div>
</template>
<script>
  export default {
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
          }
        }
      }
    }
  }
</script>
