import Vue from 'vue'
import Vuetify from 'vuetify'
import VueSocketio from 'vue-socket.io'
if (process.browser) {
  const VueQuillEditor = require('vue-quill-editor/ssr')
  Vue.use(VueQuillEditor)
  // Vue.use(VueSocketio, 'https://rocky-fortress-72832.herokuapp.com/')
  Vue.use(VueSocketio, 'http://172.104.167.197:1150/')
  // const VueFire = require('vuefire')
  // Vue.use(VueFire)
}
Vue.use(Vuetify)
