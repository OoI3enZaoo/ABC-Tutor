<template>
  <div class="text-xs-right mt-2">
    <v-menu
      offset-y
      :close-on-content-click="false"
      :nudge-width="200"
      v-model="menu"
    >
      <v-avatar slot="activator">
        <img src="https://scontent.fbkk2-4.fna.fbcdn.net/v/t1.0-9/18670848_1440946712632376_9108286887308110690_n.jpg?_nc_eui2=v1%3AAeHK1rd2oRtb-z5eaABMDoa_ZZO1Vt9C_dyvbyH7me7jRPK1VH4BkQ-B3l3E4-UCfv8f48-uzvc1E3JbfAeFAZeSaSFSWLWoaRU2NzmLv9hqIg&oh=fe0776c03fef863ba5ec6b9dcb16bff9&oe=5A267C89" alt="ben">
      </v-avatar>
      </v-btn>
      <v-card>
        <v-list>
          <v-list-tile avatar  @click="" >
            <v-list-tile-avatar>
              <img src="https://scontent.fbkk2-4.fna.fbcdn.net/v/t1.0-9/18670848_1440946712632376_9108286887308110690_n.jpg?_nc_eui2=v1%3AAeHK1rd2oRtb-z5eaABMDoa_ZZO1Vt9C_dyvbyH7me7jRPK1VH4BkQ-B3l3E4-UCfv8f48-uzvc1E3JbfAeFAZeSaSFSWLWoaRU2NzmLv9hqIg&oh=fe0776c03fef863ba5ec6b9dcb16bff9&oe=5A267C89" alt="ben">
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>Blend Theerapat</v-list-tile-title>
              <v-list-tile-sub-title>Software Developer</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-btn
                icon
              >
                <v-icon>settings</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
        <v-divider></v-divider>
        <v-list>
          <v-list-tile>
            <v-list-tile-action>
              <v-switch v-model="message" color="primary"></v-switch>
            </v-list-tile-action>
            <v-list-tile-title>การแจ้งเตือน</v-list-tile-title>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-action>
              <v-list-tile-title>
                <nuxt-link tag="span" to="/login">ลงชื่อออก</nuxt-link>
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
    data: () => ({
      fav: true,
      menu: false,
      message: false,
      hints: true
    }),
    methods: {
      logout () {
        console.log('test')
      }
    }
  }
</script>
