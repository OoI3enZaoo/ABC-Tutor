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
             <v-toolbar-title>
               <logo></logo>
             </v-toolbar-title>

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
          <v-content v-scroll="onScroll">
          <nuxt/>
          </v-content>
        </main>

<br>
<v-btn
   color="blue"
   dark
   bottom
   right
   fab
   fixed
   v-show="isButtonShow"
   @click.native="UpToTop"
 >
   <v-icon>keyboard_arrow_up</v-icon>
 </v-btn>
  <v-snackbar
    :timeout="6000"
    right
    bottom
    secondary
    v-model="snackbar"
  >
    {{ snackbarText }}
    <v-btn flat class="white--text" @click.native="snackbar = false">ปิด</v-btn>
  </v-snackbar>

<v-card class="white--text grey darken-4" style="bottom:0; left:0; right:0; height: 140px;">
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
          <!-- <v-btn flat dark round>ช่วยเหลือ</v-btn> -->
          <v-btn flat dark round @click.native="$router.push('/aboutus')">เกี่ยวกับเรา</v-btn>
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
    created () {
      let user_id = this.$store.state.profile.user_id
      if (user_id == 0) {
        console.log('user_id: 0')
      } else {
        this.$socket.emit('join', user_id)
        console.log('user_id: ' + user_id)
      }
    },
    mounted () {
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
      this.$options.sockets.courseContent = (data) => {
        if (this.$store.state.profile.user_id != data.user_id) {
          this.$store.commit('addCourseContent', data)
          console.log(data)
        }
      }
      this.$options.sockets.PUSH_COURSE = (data) => {
        if (this.$store.state.profile.user_id != data.user_id) {
          console.log('PUSH_COURSE: ' + JSON.stringify(data))
          this.$store.commit('addCourses', [data])
        }
      }
      this.$options.sockets.course_user_purchased = (data) => {
        console.log('course_user_purchased: ' + JSON.stringify(data))
        if (this.$store.state.profile.user_id != data.user_id) {
          console.log('course_user_purchased: ')
          this.$store.commit('addCourseUserPurchasedSocket', [data])
        }
      }
      this.$options.sockets.voting = (data) => {
        if (this.$store.state.profile.user_id != data.user_id) {
          console.log('voting: ' + JSON.stringify(data))
          this.$store.commit('updateCourseVote', data)
        }
      }
      this.$options.sockets.course_review = (data) => {
        if (this.$store.state.profile.user_id != data.user_id) {
          console.log('course_review: ' +JSON.stringify(data))
          this.$store.commit('addCourseReviewSocket', [data])
        }
      }
      this.$options.sockets.qa = (data) => {
        if (this.$store.state.profile.user_id != data.user_id) {
          console.log('qa: ' +JSON.stringify(data))
          this.$store.commit('addCourseQA', [data])
        }
      }
      this.$options.sockets.qa_comment = (data) => {
        console.log('qa_comment')
        if (this.$store.state.profile.user_id != data.user_id) {
          console.log('qa_comment: ' +JSON.stringify(data))
          this.$store.commit('addCourseQAComment', data)
        }
      }
      this.$options.sockets.chat = (data) => {
        console.log('chat')
        if (this.$store.state.profile.user_id != data.user_id) {
          console.log('chat: ' +JSON.stringify(data))
          this.$store.commit('addCourseChat', [data])
        }
      }
      this.$options.sockets.announcement = (data) => {
        if (this.$store.state.profile.user_id != data.user_id) {
          console.log('announcement: ' + JSON.stringify(data))
          this.$store.commit('addCourseAnno', [data])
        }
      }
      this.$options.sockets.announcement_comment = (data) => {
        if (this.$store.state.profile.user_id != data.user_id) {
          console.log('addCourseAnnoComment: ' + JSON.stringify(data))
          this.$store.commit('addCourseAnnoComment', data)
        }
      },
      this.$options.sockets.online = (data) => {
        if (this.$store.state.profile.user_id != data.user_id) {
          console.log('addUserOnline: ' + JSON.stringify(data))
          this.$store.commit('addUserOnline', [data])
        }
      },
      this.$options.sockets.offline = (data) => {
        if (this.$store.state.profile.user_id != data.user_id) {
          console.log('removeUserOnline: ' + JSON.stringify(data))
          this.$store.commit('removeUserOnline', data)
        }
      }
      this.$options.sockets.noti_course = (data) => {
        if (this.$store.state.profile.user_id != data.user_id) {
          this.$store.commit('addNotification', [data])
          this.$store.commit('addNotificationCount')
        }
        this.snackbarText  =  data.noti_des + ' ถูกสร้างขึ้นแล้ว โดย ' + data.fname + ' ' +  data.lname
        this.snackbar = true
      }
      this.$options.sockets.noti_content = (data) => {
        if (this.$store.state.profile.user_id != data.user_id) {
          console.log('noti_content: ' + JSON.stringify(data))
          this.$store.commit('addNotification', [data])
          this.$store.commit('addNotificationCount')
        }
        this.snackbarText  = 'มีเนื้อหาของคอร์สใหม่ใน ' + data.subject
        this.snackbar = true
      }
      this.$options.sockets.noti_annountment = (data) => {
        if (this.$store.state.profile.user_id != data.user_id) {
          this.$store.commit('addNotification', [data])
          this.$store.commit('addNotificationCount')
        }
        this.snackbarText  = 'มีการประกาศใหม่จากติวเตอร์ใน' + data.subject
        this.snackbar = true
      },
      this.$options.sockets.update_course = (data) => {
        this.$store.commit('updateCourse', data)
      }
    },
    data () {
      return {
        slideNav: false,
        snackbar: false,
        snackbarText: '',
        menuAfterLoginItem: [
          {
            name: 'หน้าหลัก',
            icon: 'home',
            link: '/home'
          },
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
            name: 'หน้าหลัก',
            icon: 'home',
            link: '/home'
          },
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
            link: '/register',
            primary: true
          }
        ],
        search: null,
        offsetTop: 0,
        isButtonShow: false
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
      offsetTop: function (val) {
        if (val > 300) {
          this.isButtonShow = true
        } else {
          this.isButtonShow = false
        }
      }
    },
    methods: {
      onScroll (e) {
        this.offsetTop = window.pageYOffset || document.documentElement.scrollTop
      },
      UpToTop () {
        window.pageYOffset = 0
        document.documentElement.scrollTop = 0
      }
    }
  }
</script>
<style scoped>
.cover {
  background-image: url("http://upload.wikimedia.org/wikipedia/commons/1/1a/Bachalpseeflowers.jpg");
}
</style>
