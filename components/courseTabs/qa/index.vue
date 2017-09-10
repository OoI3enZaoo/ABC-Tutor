<template>
  <div>
<br><br>
{{$store.state.qa}}
<template v-if="!dataOfQuestion">
  <v-container grid-list-lg>
    <v-switch color="primary" v-model="isTutor" label="เป็นติวเตอร์"></v-switch>
      <v-layout row wrap>
        <v-flex xs12 sm11>
          <v-text-field
          solo
          label="ค้นหา"
          append-icon='search'
          >
          </v-text-field>
        </v-flex>
        <v-flex xs12 sm1>
            <create title="ตั้งคำถาม" type="1"  @result="dataFromQuill"></create>
        </v-flex>
      </v-layout>

    <br><br>
    <v-card v-for="(a,index) in 3" :key="index">
          <v-list two-line>
            <v-list-tile avatar @click="" @click.native="dataOfQuestion=true">
              <v-list-tile-avatar>
                <img src="https://image.flaticon.com/icons/png/512/206/206853.png">
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-sub-title>
                    <span>สมศรีไง</span>
                </v-list-tile-sub-title>
                <v-list-tile-title>
                    <span>ส่วนประกอบของคอมพิวเตอร์มีอะไรบ้างคะ?</span>
                </v-list-tile-title>
              </v-list-tile-content>
              <v-list-tile-action>
                  <v-list-tile-action-text>15 นาทีที่แล้ว</v-list-tile-action-text>
                  <v-list-tile-action-text class="mr-4 black--text">5</v-list-tile-action-text>
                  <v-list-tile-action-text>ตอบกลับ</v-list-tile-action-text>
              </v-list-tile-action>
            </v-list-tile>

          </v-list>
        </v-card>
      </v-container>
    </template>
    <template v-else>
      <v-container grid-list-lg>
        <v-btn flat primary @click.native="dataOfQuestion = !dataOfQuestion">กลับไปสู่คำถามทั้งหมด</v-btn>
              <v-card>
                <v-card-text>

                  <v-list>
                    <v-list-tile avatar>
                      <v-list-tile-avatar >
                        <img src="https://scontent.fbkk1-3.fna.fbcdn.net/v/t1.0-9/18670848_1440946712632376_9108286887308110690_n.jpg?oh=ce1fb663302049cbb304c38276bc1638&oe=5A4E0989" alt="avatar" >
                      </v-list-tile-avatar>
                      <v-list-tile-content>
                        <v-list-tile-title><b>คำถามคำถามคำถามคำถามคำถามคำถามคำถามคำถามคำถามคำถาม</b></v-list-tile-title>
                        <v-list-tile-sub-title>
                          <span class="blue--text"><nuxt-link to="" class="blue--text">Theerapat Vijitpoo</nuxt-link></span> &nbsp;&nbsp; 14 นาทีที่แล้ว
                        </v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    <blockquote>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </blockquote>
                  </v-list>
                    <v-list>
                      <v-list-tile avatar>
                        <v-list-tile-avatar>
                          <img src="http://images.boomsbeat.com/data/images/full/595/bill-gates-jpg.jpg" alt="avatar" >
                        </v-list-tile-avatar>
                        <v-list-tile-content>
                            <v-list-tile-title>
                              <span class="blue--text"><nuxt-link to="" class="blue--text">Bill Gates</nuxt-link></span>  <span class="grey--text">&nbsp;&nbsp; 14 นาทีที่แล้ว</span>
                            </v-list-tile-title>
                            <v-list-tile-sub-title>สวัสดีครับๆๆๆ</v-list-tile-sub-title>
                        </v-list-tile-content>
                      </v-list-tile>
                    </v-list>
                    <v-list>
                      <v-list-tile avatar>
                        <v-list-tile-avatar>
                          <img src="http://images.boomsbeat.com/data/images/full/595/bill-gates-jpg.jpg" alt="avatar" >
                        </v-list-tile-avatar>
                        <v-list-tile-content>
                            <v-list-tile-title>
                              <span class="blue--text"><nuxt-link to="" class="blue--text">Bill Gates</nuxt-link></span>  <span class="grey--text">&nbsp;&nbsp; 14 นาทีที่แล้ว</span>
                            </v-list-tile-title>
                            <v-list-tile-sub-title>สวัสดีครับๆๆๆ</v-list-tile-sub-title>
                        </v-list-tile-content>
                      </v-list-tile>
                    </v-list>
                    <v-layout row wrap>
                      <v-flex xs1 text-xs-right>
                        <v-avatar>
                          <img src="https://scontent.fbkk1-3.fna.fbcdn.net/v/t1.0-9/18670848_1440946712632376_9108286887308110690_n.jpg?oh=ce1fb663302049cbb304c38276bc1638&oe=5A4E0989" alt="avatar" >
                        </v-avatar>
                      </v-flex>
                      <v-flex xs10>
                        <v-text-field solo label="พิมพ์คำตอบ" class="elevation-0" style="border:1px solid grey"></v-text-field>
                      </v-flex>
                      <v-flex xs1>
                        <v-btn primary block>ส่งคำตอบ</v-btn>
                      </v-flex>
                    </v-layout>
                </v-card-text>
              </v-card>
      </v-container>
    </template>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import create from '../addon/createQuestion.vue'
export default {
  created () {
    console.log('check isLogin: ' + this.isLogin)
  },
  components: {
    create
  },
  data () {
    return {
      isTutor: false,
      dataOfQuestion: false
    }
  },
  methods: {
    dataFromQuill (val) {
      const data = {
        room: 1212335,
        title: val.title,
        description: val.description
      }
      this.$socket.emit('qa', data)
    }
  },
  computed: {
    ...mapGetters([
      'qa'
    ])
  }
}
</script>
