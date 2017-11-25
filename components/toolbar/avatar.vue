<template>
  <div class="text-xs-right mt-2">
    <v-menu
      offset-y
      :close-on-content-click="false"
      :nudge-width="200"
      v-model="menu"
    >
      <v-avatar slot="activator">
        <img :src="profile.user_img" >
      </v-avatar>
      </v-btn>
      <v-card>
        <v-list>
          <v-list-tile avatar  @click="">
            <nuxt-link :to="'/user/' + profile.user_id">
              <v-list-tile-avatar >
                <img :src="profile.user_img">
              </v-list-tile-avatar>
            </nuxt-link>
            <v-list-tile-content>
              <v-list-tile-title>{{profile.fname}} {{profile.lname}}</v-list-tile-title>
              <v-list-tile-sub-title>{{profile.career}}</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-btn
                icon
                @click.native="$router.push('/settings')"
              >
                <v-icon>settings</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
        <v-divider></v-divider>
        <v-list>
          <!-- <v-list-tile>
            <v-list-tile-action>
              <v-switch v-model="notification" color="primary"></v-switch>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>การแจ้งเตือน</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile> -->
          <v-list-tile @click="">
            <v-list-tile-action>
              <v-list-tile-title>
                <nuxt-link tag="span" :to="'/user/' + profile.user_id">ข้อมูลส่วนตัว</nuxt-link>
              </v-list-tile-title>
            </v-list-tile-action>
          </v-list-tile>
          <v-list-tile @click="">
            <v-list-tile-action>
              <v-list-tile-title>
                <nuxt-link tag="span" to="/settings/">แก้ไขข้อมูลส่วนตัว</nuxt-link>
              </v-list-tile-title>
            </v-list-tile-action>
          </v-list-tile>
          <v-divider></v-divider>
          <v-list-tile @click="">
            <v-list-tile-action>
              <v-list-tile-title>
                <nuxt-link tag="span" to="/signout">ลงชื่อออก</nuxt-link>
              </v-list-tile-title>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-menu>
  </div>
</template>
<script>
  export default {
    created () {
      console.log('statusNotification: ' + this.$store.state.statusNotification)
      this.notification = this.$store.state.statusNotification
    },
    data: () => ({
      fav: true,
      menu: false,
      notification: false,
      hints: true
    }),
    watch: {
      notification: function (val) {
        // ถ้า notification model มีการเปลี่ยนแปลงให้ทำการ commit ข้อมูล(true,false)ไปยัง store
        this.$store.commit('setStatusNotifictaion', val)
      }
    },
    computed: {
      profile () {
        return this.$store.state.profile
      }
    }
  }
</script>
