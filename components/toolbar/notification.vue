<template>
  <div class="text-xs-right mt-2">
    <v-menu
      offset-y
      :close-on-content-click="false"
      :nudge-width="200"
      v-model="menu"
    >
    <v-badge left color="blue" slot="activator" v-model="show" class="mt-2 ml-4 mr-2">
      <span slot="badge">8</span>
      <v-icon large primary>notifications</v-icon>
    </v-badge>
      <v-card>
        <v-list>
          <v-list-tile avatar>
            <v-list-tile-content>
              <v-list-tile-title>การแจ้งเตือน</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
        <v-tabs v-model="active" grow>
          <v-tabs-bar class="white">
            <v-tabs-item
              v-for="(data,i) in menuItems"
              :key="i"
              :href="'tab-' + i"
              ripple
            >
            {{data.title}}
            </v-tabs-item>
            <v-tabs-slider class="blue"></v-tabs-slider>
          </v-tabs-bar>
          <v-divider></v-divider>
          <v-tabs-items>
            <v-tabs-content id='tab-0'>
              <v-list two-line>
                <v-list-tile-content>
                  <v-list-tile @click="">
                    <v-list-tile-avatar>
                      <img src="http://tutormahadelivery.ueuo.com/images/6-advantages-of-online-tutoring.jpeg">
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                      <v-list-tile-title primary>คอมพิวเตอร์เบื้องต้น(SP444) </v-list-tile-title>
                      <v-list-tile-sub-title>2 วันก่อน โดย Theerapat Vijitpoo</v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list-tile-content>
              </v-list>
            </v-tabs-content>
            <v-tabs-content id='tab-1'>
              <v-list two-line>
                  <v-list-tile @click="">
                    <v-list-tile-avatar>
                      <img src="http://northyorktutors.com/img/slider/tutoring.jpg">
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                      <v-list-tile-title primary>คอมพิวเตอร์เบื้องต้น(SP444) </v-list-tile-title>
                      <v-list-tile-sub-title>มีการเพิ่มคำถามใหม่</v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile @click="">
                    <v-list-tile-avatar>
                      <img src="http://northyorktutors.com/img/slider/tutoring.jpg">
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                      <v-list-tile-title primary>คอมพิวเตอร์เบื้องต้น(SP444) </v-list-tile-title>
                      <v-list-tile-sub-title>มีการเพิ่มคำถามใหม่</v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>
              </v-list>
            </v-tabs-content>
          </v-tabs-items>
        </v-tabs>

      </v-card>
    </v-menu>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        fav: true,
        menu: false,
        message: false,
        hints: true,
        show: true,
        menuItems: [
          { title: 'คอร์สใหม่' },
          { title: 'ภายในคอร์ส' }
        ],
        active: null,
        text: 'Lorem ipsum dolor sit amet, conse'
      }
    }
  }
</script>
