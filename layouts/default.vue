<template>
  <div>
  <v-app light toolbar footer>
    <template v-if='$store.state.isLogin==false'>
          <v-navigation-drawer v-model='slideNav' temporary>
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
            <div class="hidden-sm-and-up">
            <v-toolbar-side-icon  @click.stop='slideNav=!slideNav'></v-toolbar-side-icon>
            </div>
             <v-toolbar-title >
               <nuxt-link to="/" style="text-decoration: none;">{{projectName}}</nuxt-link>
             </v-toolbar-title>
             <v-spacer></v-spacer>
             <v-toolbar-items class='hidden-xs-only'>
                <v-btn flat primary small nuxt to="/login">
                  <v-icon class='red--text'>home</v-icon>
                  &nbsp;เข้าสู่ระบบ
                </v-btn>
                <v-btn primary small>
                  <v-icon class="white--text">home</v-icon>
                  &nbsp;<span class='white--text'>สมัครสมาชิก</span>
                </v-btn>
             </v-toolbar-items>
             <br>
          </v-toolbar>
        </template>
        <template v-else>


          <v-navigation-drawer v-model='slideNav' temporary>
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
            <v-toolbar-side-icon @click.stop='slideNav=true' class='hidden-sm-and-up'></v-toolbar-side-icon>
             <v-toolbar-title  class='hidden-xs-only'>
               <nuxt-link to="/" style="text-decoration: none;">{{projectName}}</nuxt-link>
             </v-toolbar-title>
                <v-text-field

                  class='mt-4 ml-5'
                  label='ชื่อวิชาหรือรหัสวิชา..'
                  single-line
                  append-icon='search'
                ></v-text-field>
                <v-spacer></v-spacer>
             <v-toolbar-items class='hidden-xs-only'>
                 <template v-for='data in menuLoginItem'>
                   <template v-if="data.name">
                     <v-btn flat primary small>
                       <v-icon class='red--text'>{{data.icon}}</v-icon>
                       &nbsp;
                       {{data.name}}
                     </v-btn>
                   </template>
                    <template v-else>
                      <v-btn icon flat primary>
                        <v-icon class='red--text'>{{data.icon}}</v-icon>
                        &nbsp;
                      </v-btn>
                    </template>
                </template>
                &nbsp;&nbsp;&nbsp;
                <v-avatar>
                  <img src="https://scontent.fbkk2-4.fna.fbcdn.net/v/t1.0-9/18670848_1440946712632376_9108286887308110690_n.jpg?_nc_eui2=v1%3AAeHK1rd2oRtb-z5eaABMDoa_ZZO1Vt9C_dyvbyH7me7jRPK1VH4BkQ-B3l3E4-UCfv8f48-uzvc1E3JbfAeFAZeSaSFSWLWoaRU2NzmLv9hqIg&oh=fe0776c03fef863ba5ec6b9dcb16bff9&oe=5A267C89" alt="John">
                </v-avatar>
                &nbsp;&nbsp;
             </v-toolbar-items>
             <br>
          </v-toolbar>


        </template>

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
        slideNav: false,
        menuLoginItem: [
          {
            name: 'คอร์สของฉัน',
            icon: 'home',
            link: '/'
          },
          {
            name: 'สำหรับติวเตอร์',
            icon: 'home',
            link: '/'
          },
          {
            icon: 'notifications',
            link: '/'
          }
        ]
      }
    },
    computed: {
      projectName () {
        return this.$store.state.projectName
      }
    }
  }
</script>
