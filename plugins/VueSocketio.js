import Vue from 'vue'
import VueSocketio from 'vue-socket.io'
import store from '../store'
if(process.browser) {
  Vue.use(VueSocketio, 'https://xn--m3cia1ci0ba7c2i8c.com:4000/', store)
  // Vue.use(VueSocketio, 'https://rocky-fortress-72832.herokuapp.com/', store)
  // Vue.use(VueSocketio, 'http://localhost:4000/', store)
}
