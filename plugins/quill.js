import Vue from 'vue'
import { ImageImport } from '../modules/ImageImport'
import { ImageResize } from '../modules/ImageResize'
if(process.browser) {
  const VueQuillEditor = require('vue-quill-editor/ssr')
  Quill.register('modules/imageImport', ImageImport)
  Quill.register('modules/imageResize', ImageResize)
  Vue.use(VueQuillEditor)
}
