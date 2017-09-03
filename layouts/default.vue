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
             <v-toolbar-title  class='hidden-xs-only'>
               <nuxt-link to="/" style="text-decoration: none;">{{projectName}}</nuxt-link>
             </v-toolbar-title>
                <v-text-field
                  solo
                  class='ml-5'
                  label='ชื่อวิชาหรือรหัสวิชา..'
                  single-line
                  append-icon='search'
                ></v-text-field>
                <v-spacer></v-spacer>
             <v-toolbar-items class='hidden-xs-only'>
                 <template v-for='data in menuAfterLoginItem'>
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
            icon: 'home',
            link: '/mycourse'
          },
          {
            name: 'สำหรับติวเตอร์',
            icon: 'home',
            link: '/tutor'
          }
        ],
        menuBeforeLoginItem: [
          {
            name: 'สร้างคอร์ส',
            icon: 'home',
            link: '/tutor/manage/create'
          },
          {
            name: 'เข้าสู่ระบบ',
            icon: 'home',
            link: '/login'
          },
          {
            name: 'สม้ครสมาชิก',
            icon: 'home',
            link: '/login',
            primary: true
          }
        ]
      }
    },
    components: {
      avatar, notification
    },
    computed: {
      projectName () {
        return this.$store.state.projectName
      }
    }
  }
</script>
