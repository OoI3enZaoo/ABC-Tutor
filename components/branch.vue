<template>
    <v-flex xs12 sm6 md4>
      <nuxt-link :to="'/allcourse/' + branchId" tag="span" style="cursor:pointer;">
        <v-card>
          <v-card-media :src = "img" height="200"></v-card-media>
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
