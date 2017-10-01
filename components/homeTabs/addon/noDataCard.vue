<template>
  <div>
    <v-container grid-list-lg>
      <v-layout>
        <v-flex xs12 text-xs-center>
          <v-card height="400px">
            <v-card-text>
              <div>
                  <v-layout row wrap style="padding-top:80px;">
                    <v-flex xs12 md2 offset-md4 >
                        <img :src="png" height="150">
                    </v-flex>
                    <v-flex xs12 md5 text-md-left text-xs-center mt-4>
                      <h5>{{text}}</h5>
                        <v-btn primary nuxt :to="link">{{textbtn}}</v-btn>
                    </v-flex>
                  </v-layout>
              </div>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
export default {
  props: ['png', 'text', 'textbtn', 'link']

}
</script>
