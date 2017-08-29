<template>
  <div>


  <v-app light toolbar footer>
    <v-navigation-drawer v-model="slideNav" temporary>
      <v-list>
        <v-list-tile>
            <v-list-tile-action>
              <v-icon>home</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>
              hello
            </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar>
      <v-toolbar-side-icon @click.native.stop="slideNav=true" class="hidden-sm-and-up"></v-toolbar-side-icon>
       <v-toolbar-title >
         Tutor
       </v-toolbar-title>
       <v-spacer></v-spacer>
       <v-toolbar-items class="hidden-xs-only">
          <v-btn flat primary small>
            <v-icon class="red--text">home</v-icon>
            &nbsp;เข้าสู่ระบบ
          </v-btn>
          <v-btn primary small>
            <v-icon dark>home</v-icon>
            &nbsp;<span  class="white--text">สมัครสมาชิก</span>
          </v-btn>
       </v-toolbar-items>
       <br>
    </v-toolbar>

    <main>
      <nuxt/>
    </main>

  </v-app>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        slideNav: false
      }
    }
  }
</script>
