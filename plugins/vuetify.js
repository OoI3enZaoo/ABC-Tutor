import Vue from 'vue'
import Vuetify from 'vuetify'
import VueSocketio from 'vue-socket.io'
import { ImageImport } from '../modules/ImageImport'
import { ImageResize } from '../modules/ImageResize'


// Vue.use(VueSocketio, 'https://rocky-fortress-72832.herokuapp.com/')
// Vue.use(VueSocketio, 'http://172.104.167.197:1150/')


if (process.browser) {

  const VueQuillEditor = require('vue-quill-editor/ssr')
  const uploader = require('vue-simple-uploader')
  Quill.register('modules/imageImport', ImageImport)
  Quill.register('modules/imageResize', ImageResize)
  Vue.use(VueQuillEditor)
  // Vue.use(VueSocketio, 'http://172.104.167.197:1150/')
  Vue.use(VueSocketio, 'http://localhost:4000/')
  Vue.use(uploader)

  // const VueFire = require('vuefire')
  // Vue.use(VueFire)

  // import Dropzone from 'vue2-dropzone'
  const GSignInButton = require('vue-google-signin-button')
  // import GSignInButton from 'vue-google-signin-button'
  Vue.use(GSignInButton)
}
Vue.use(Vuetify)
