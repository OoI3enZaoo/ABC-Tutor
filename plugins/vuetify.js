import Vue from 'vue'
import Vuetify from 'vuetify'
import VueSocketio from 'vue-socket.io'
if (process.browser) {
  const VueQuillEditor = require('vue-quill-editor/ssr')
  Vue.use(VueQuillEditor)
  Vue.use(VueSocketio, 'https://rocky-fortress-72832.herokuapp.com/')
  // Vue.use(VueSocketio, 'http://localhost:1337/')
}
Vue.use(Vuetify)
