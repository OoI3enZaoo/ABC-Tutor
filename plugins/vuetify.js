import Vue from 'vue'
import Vuetify from 'vuetify'
if (process.browser) {
  const VueQuillEditor = require('vue-quill-editor/ssr')
  Vue.use(VueQuillEditor)
}
Vue.use(Vuetify)
