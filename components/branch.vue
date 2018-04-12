<template>
    <v-flex xs12 sm6 md4>
      <nuxt-link :to="'/allcourse/' + branchId" tag="span" style="cursor:pointer;">
        <v-card class="elevation-4">
          <v-card-media src = "http://science.utcc.ac.th/images/major/comsci.jpg" height="200"></v-card-media>
          <!-- <img :src="img" alt=""> -->
          <v-card-title>{{text}}</v-card-title>
        </v-card>
      </nuxt-link>
    </v-flex>
</template>
<script>
export default {
  props: ['img', 'text', 'branchId']
}
</script>
