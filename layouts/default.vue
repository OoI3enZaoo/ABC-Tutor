<template>
  <div>
  <v-app toolbar footer>
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
               <logo></logo>
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
                    <img :src="profile.user_img" alt="avatar">
                  </v-list-tile-avatar>
                  <v-list-tile-content>
                    <v-list-tile-title>
                      {{profile.fname}} {{profile.lname}}
                    </v-list-tile-title>
                    <v-list-tile-sub-title>
                      {{profile.career}}
                    </v-list-tile-sub-title>
                  </v-list-tile-content>
                  <v-list-tile-action>
                    <v-btn icon @click.native="$router.push('/settings')"><v-icon>settings</v-icon></v-btn>
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
               <logo></logo>
             </v-toolbar-title>
                <v-text-field
                  solo
                  class=' ml-3 pr-5 elevation-0'
                  label='ชื่อวิชาหรือรหัสวิชา..'
                  single-line
                  v-model="search"
                    style="border: 1px solid grey"

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
<br>

  <v-snackbar
    :timeout="6000"
    right
    bottom
    secondary
    multi-line
    v-model="snackbar"
  >
    {{ snackbarText }}
    <v-btn flat class="white--text" @click.native="snackbar = false">ปิด</v-btn>
  </v-snackbar>

<v-card class="white--text grey darken-4" style="position:relative; bottom:0; left:0; right:0; height: 50px;">
      <v-card-text class="pl-5 pr-5">
        <v-card-actions>
              <v-btn flat dark round @click.native="$router.push('/tutor/create')">สร้างคอร์ส</v-btn>
              <v-spacer></v-spacer>
              <template v-if="isLogin">
                <v-btn flat dark round @click.native="$router.push('/signout')">ออกจากระบบ</v-btn>
              </template>
              <template v-else>
                <v-btn flat dark round @click.native="$router.push('/login')">สมัครสมาชิก</v-btn>
              </template>
        </v-card-actions>
        <hr>
        <v-card-actions>
          <v-btn flat dark round>ช่วยเหลือ</v-btn>
          <v-btn flat dark round>เกี่ยวกับเรา</v-btn>
        </v-card-actions>
      </v-card-text>

</v-card>
  </v-app>
    </div>
</template>

<script>
  import avatar from '../components/toolbar/avatar.vue'
  import notification from '../components/toolbar/notification.vue'
  import logo from '../components/logo.vue'
  export default {
    beforeMount () {
      this.$socket.emit('subscribe', 1212335)
    },
    mounted () {
      // this.$options.sockets.announcement = (data) => {
      //   console.log('announcement: ' + JSON.stringify(data))
      //   this.$store.commit('addAnnouncement', data)
      // }
      // this.$options.sockets.qa = (data) => {
      //   console.log('qa: ' + JSON.stringify(data))
      //   this.$store.commit('addQA', data)
      // }
      // this.$options.sockets.courseContent = (data) => {
      //   console.log('courseContent: ' + JSON.stringify(data))
      //   this.$store.commit('addCourseContent', data)
      // }
      // this.$options.sockets.chat = (data) => {
      //   console.log('addChat: ' + JSON.stringify(data))
      //   this.$store.commit('addChat', data)
      // }
      // this.$options.sockets.course = (data) => {
      //   console.log('addChat: ' + JSON.stringify(data))
      //   this.$store.commit('addCourse', data)
      // }
      this.$options.sockets.PUSH_COURSE = (data) => {
        if (this.$store.state.profile.user_id != data.user_id) {
          console.log('PUSH_COURSE: ' + data.user_id)
          this.$store.commit('addCourses', [data])
          this.snackbarText  = 'คอร์ส ' + data.subject + ' (' + data.code +')' + ' ถูกสร้างขึ้นแล้ว'
          this.snackbar = true
        }
        // if (this.$store.state.profile == data.)
      }
      console.log('user: ' + JSON.stringify(this.user))
    },
    data () {
      return {
        slideNav: false,
        snackbar: true,
        snackbarText: '',
        menuAfterLoginItem: [
          {
            name: 'สร้างคอร์ส',
            icon: 'note_add',
            link: '/tutor/create'
          },
          {
            name: 'สำรวจ',
            icon: 'class',
            link: '/course'
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
      avatar, notification, logo
    },
    computed: {
      projectName () {
        return this.$store.state.projectName
      },
      isLogin () {
        return this.$store.state.isLogin
      },
      profile () {
        return this.$store.state.profile
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
