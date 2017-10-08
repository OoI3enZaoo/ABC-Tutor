import Vue from 'vue'
import VueSocketio from 'vue-socket.io'
if(process.browser) {
  Vue.use(VueSocketio, 'http://172.104.167.197:4000/')
    // Vue.use(VueSocketio, 'http://localhost:4000/')
}
