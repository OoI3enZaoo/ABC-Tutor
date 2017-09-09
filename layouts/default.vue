<template>
  <div>
  <v-app light toolbar footer>
    <template v-if='$store.state.isLogin==false'>
          <v-navigation-drawer v-model='slideNav' temporary>
            <v-list>
              <v-list-tile v-for="(data,index) in menuBeforeLoginItem" :key="index" @click="" nuxt :to="data.link">
                  <v-list-tile-action>
                    <v-icon>{{data.icon}}</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-title>
                    {{data.name}}
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
               <template v-for="(data,index) in menuBeforeLoginItem" >
                 <v-btn  v-if="!data.primary" flat primary small nuxt :to="data.link">
                  {{ data.name}}
                 </v-btn>
                 <v-btn v-else primary small nuxt :to="data.link" class="white--text">
                    {{ data.name}}
                 </v-btn>
              </template>
             </v-toolbar-items>
             <br>
          </v-toolbar>
        </template>
        <template v-else>
          <v-navigation-drawer v-model='slideNav' temporary>
              <v-list class="cover">
                <v-list-tile avatar>
                  <v-list-tile-avatar>
                    <img src="https://scontent.fbkk1-2.fna.fbcdn.net/v/t1.0-9/18670848_1440946712632376_9108286887308110690_n.jpg?oh=ce1fb663302049cbb304c38276bc1638&oe=5A4E0989" alt="avatar">
                  </v-list-tile-avatar>
                  <v-list-tile-content>
                    <v-list-tile-title>
                      Theerapat Vijitpoo
                    </v-list-tile-title>
                    <v-list-tile-sub-title>
                      Web Developer
                    </v-list-tile-sub-title>
                  </v-list-tile-content>
                  <v-list-tile-action>
                    <v-btn icon><v-icon>settings</v-icon></v-btn>
                  </v-list-tile-action>
                </v-list-tile>
              </v-list>
            <hr>
            <v-list>
              <v-list-tile v-for="(data, index) in menuAfterLoginItem" :key="index" @click="" nuxt :to="data.link">
                  <v-list-tile-action>
                    <v-icon>{{data.icon}}</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-title>
                    {{data.name}}
                  </v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-navigation-drawer>
          <v-toolbar>
            <div class="hidden-sm-and-up">
              <v-toolbar-side-icon  @click.stop='slideNav=!slideNav'></v-toolbar-side-icon>
            </div>
             <v-toolbar-title  >
               <nuxt-link to="/" style="text-decoration: none;">{{projectName}}</nuxt-link>
             </v-toolbar-title>
                <v-text-field
                  solo
                  class='ml-2 pr-5'
                  label='ชื่อวิชาหรือรหัสวิชา..'
                  single-line

                  v-model="search"
                ></v-text-field>
                <v-spacer></v-spacer>
             <v-toolbar-items class='hidden-xs-only'>
                 <template v-for='data in menuAfterLoginItem'>
                   <template v-if="!data.mobile">
                     <template v-if="data.name">
                       <v-btn flat primary small  nuxt :to="data.link">
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
                </template>
                <notification></notification>
                &nbsp;&nbsp;&nbsp;
                <avatar></avatar>
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
  import avatar from '../components/toolbar/avatar.vue'
  import notification from '../components/toolbar/notification.vue'
  export default {
    data () {
      return {
        slideNav: false,
        menuAfterLoginItem: [
          {
            name: 'คอร์สของฉัน',
            icon: 'class',
            link: '/mycourse'
          },
          {
            name: 'สำหรับติวเตอร์',
            icon: 'card_travel',
            link: '/tutor'
          },
          {
            name: 'ออกจากระบบ',
            icon: 'fa-sign-out',
            link: '/signout',
            mobile: true
          }
        ],
        menuBeforeLoginItem: [
          {
            name: 'สร้างคอร์ส',
            icon: 'note_add',
            link: '/tutor/create'
          },
          {
            name: 'เข้าสู่ระบบ',
            icon: 'fa-sign-in',
            link: '/login'
          },
          {
            name: 'สม้ครสมาชิก',
            icon: 'fa-user-plus',
            link: '/login',
            primary: true
          }
        ],
        search: null
      }
    },
    components: {
      avatar, notification
    },
    computed: {
      projectName () {
        return this.$store.state.projectName
      }
    },
    watch: {
      search: function (val) {
        if (val !== '') {
          this.$router.push('/search/' + val)
        } else {
          this.$router.push('/')
        }
      }
    }
  }
</script>
<style scoped>
.cover {
  background-image: url("http://upload.wikimedia.org/wikipedia/commons/1/1a/Bachalpseeflowers.jpg");
}
</style>
