import Vue from 'vue'
import VueSocketio from 'vue-socket.io'
import store from '../store'
if(process.browser) {
  Vue.use(VueSocketio, 'http://172.104.167.197:4000/', store)
  Vue.use(VueSocketio, 'https://rocky-fortress-72832.herokuapp.com/', store)
  // Vue.use(VueSocketio, 'http://localhost:4000/', store)
}
