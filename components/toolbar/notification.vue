<template>

  <div class="text-xs-right mt-2">
    <v-menu
      offset-y
      :close-on-content-click="false"
      :nudge-width="200"
      v-model="menu"
      @click.native="clickMenu"
    >
    <v-badge left color="blue" slot="activator" v-model="show" class="mt-2 ml-4 mr-2">
      <template v-if="$store.state.notificationCount != 0">
        <span slot="badge">{{$store.state.notificationCount}}</span>
      </template>
      <v-icon large primary>notifications</v-icon>
    </v-badge>
    <!-- <v-icon  style="padding-top:6px;" large primary slot="activator">notifications</v-icon> -->
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
                <div style="height:300px; overflow:scroll; overflow-x:hidden;">
                  <template v-if="$store.getters.NOTIFICATION(1).length == 0">
                      <v-list-tile>
                        <v-list-tile-content>
                          <p>ยังไม่มีการแจ้งเตือนในขณะนี้</p>
                        </v-list-tile-content>
                      </v-list-tile>
                  </template>
                  <template v-else v-for="data in $store.getters.NOTIFICATION(1)">
                    <v-list-tile @click="" nuxt :to="'/course/' + data.course_id">
                      <v-list-tile-avatar>
                        <img :src="data.user_img">
                      </v-list-tile-avatar>
                      <v-list-tile-content>
                        <v-list-tile-title primary>{{data.noti_des}} </v-list-tile-title>
                        <v-list-tile-sub-title>ถูกสร้าง {{data.noti_ts | moment('from','now',true)}} ก่อน โดย {{data.fname}} {{data.lname}}</v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                  </template>
                </div>
              </v-list>
            </v-tabs-content>
            <v-tabs-content id='tab-1'>
              <v-list two-line>
                <div style="height:300px; overflow:scroll; overflow-x:hidden;">
                  <template v-if="$store.getters.NOTIFICATION(2).length == 0">
                      <v-list-tile>
                        <v-list-tile-content>
                          <p>ยังไม่มีการแจ้งเตือนในขณะนี้</p>
                        </v-list-tile-content>
                      </v-list-tile>
                  </template>
                  <template v-else v-for="data in $store.getters.NOTIFICATION(2)">
                    <v-list-tile @click="" nuxt :to="'/mycourse/' + data.course_id">
                      <v-list-tile-avatar>
                        <img :src="data.noti_cover">
                      </v-list-tile-avatar>
                      <v-list-tile-content>
                        <v-list-tile-title primary>{{data.noti_des}} </v-list-tile-title>
                        <v-list-tile-sub-title>{{data.noti_ts | moment('from','now',true)}} ago โดย {{data.fname}} {{data.lname}}</v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                  </template>
                </div>
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
    methods: {
      clickMenu () {
        this.$store.commit('setNotificationCount')
      }
    },
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
