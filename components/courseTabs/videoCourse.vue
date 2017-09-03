<template>
  <div>
    <v-container grid-list-lg>
      <template v-for="a in 5">
            <v-expansion-panel expand>
                <v-expansion-panel-content>
                    <div slot="header">
                      <v-container>
                          <v-layout>
                            <v-flex xs10>
                              <span class="grey--text">เนื้อหาคอร์สที่ {{a}}</span><br>
                              <h6 style="display:inline;">แนะนำคอร์สโดยรวม</h6>
                            </v-flex>
                            <v-flex xs2 text-xs-right>
                              <span class="grey--text">18/8/14 18:15</span>
                            </v-flex>
                          </v-layout>
                      </v-container>
                    </div>
                    <v-card>
                      <v-card-text>
                          <div><v-icon>fa-play-circle-o</v-icon>&nbsp;&nbsp;<span>แนะนำคอร์สโดยรวม</span></div>
                          <div class="mt-3"><v-icon>fa-link</v-icon>&nbsp;&nbsp;<span class="blue--text">เนื้อหาอ้างอิง</span></div>
                          <div class="mt-3"><v-icon>fa-file-pdf-o</v-icon>&nbsp;&nbsp;<span class="blue--text">เนื้อหากลางภาค.pdf</span></div>
                          <div class="mt-3"><v-icon>fa-file-image-o</v-icon>&nbsp;&nbsp;<span class="blue--text">หน้าปกหนังสือ.jpeg</span></div>
                      </v-card-text>
                    </v-card>
                </v-expansion-panel-content>
            </v-expansion-panel>
      <br>

      </template>
<br><br><br><br>


    </v-container>
  </div>
</template>
<script>
export default {

}
</script>
