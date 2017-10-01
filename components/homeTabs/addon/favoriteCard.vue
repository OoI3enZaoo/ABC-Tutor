<template>
      <v-flex xs3>        
        <nuxt-link :to="'/course/' + id " tag="span" style="cursor:pointer;">
          <v-card>
            <v-card-media :src="cover" height="150"></v-card-media>
            <v-card-text>
              <p>{{subject}} ({{code}})</p>
              <span class="grey--text">{{fname}} {{lname}}</span><br>
              <template v-for="a in 5">
                <v-icon>star</v-icon>
              </template>
              <span>5.0 </span> <span class="grey--text">(33,888)</span>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <h6 class="primary--text">{{price}}.-</h6>
            </v-card-actions>
          </v-card>
        </nuxt-link>
      </v-flex>
</template>
<script>
export default {
  props: ['id', 'subject', 'code', 'price', 'cover', 'fname', 'lname']
}
</script>
