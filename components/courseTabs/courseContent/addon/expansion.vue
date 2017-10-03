<template>
  <div>
    <v-expansion-panel expand>
        <v-expansion-panel-content>
            <div slot="header">
              <v-container>
                  <v-layout>
                    <v-flex xs10>
                      <span class="grey--text">{{title}}</span><br>
                      <h6 style="display:inline;">{{description}}</h6>
                    </v-flex>
                    <v-flex xs2 text-xs-right>
                      <span class="grey--text">{{time}}</span>
                    </v-flex>
                  </v-layout>
              </v-container>
            </div>
            <v-card>
              <v-card-text>
                  <template v-for="data in files">
                      <div class="mt-3"><v-icon>fa-link</v-icon>&nbsp;&nbsp;<a  @click="openFile(data)"><span class="blue--text"  style="cursor:pointer;">{{data}}</span></a></div>
                    <!-- <div><v-icon>fa-play-circle-o</v-icon>&nbsp;&nbsp;<span>แนะนำคอร์สโดยรวม</span></div>
                    <div class="mt-3"><v-icon>fa-link</v-icon>&nbsp;&nbsp;<span class="blue--text">เนื้อหาอ้างอิง</span></div>
                    <div class="mt-3"><v-icon>fa-file-pdf-o</v-icon>&nbsp;&nbsp;<span class="blue--text">เนื้อหากลางภาค.pdf</span></div>
                    <div class="mt-3"><v-icon>fa-file-image-o</v-icon>&nbsp;&nbsp;<span class="blue--text">หน้าปกหนังสือ.jpeg</span></div> -->
                  </template>
              </v-card-text>
            </v-card>
        </v-expansion-panel-content>
    </v-expansion-panel>
  </div>
</template>
<script>
export default {
  props: ['title', 'description', 'files', 'contentId', 'time'],
  methods: {
    openFile (name) {
      console.log(' filename: ' + name + ' contentId: ' + this.contentId)
      let url = 'http://172.104.167.197:1150/api/getfile/' + this.contentId + '/' + name
      window.open(url, '_blank');
    }
  }
}
</script>
