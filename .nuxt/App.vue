<template>
  <div id="__nuxt">
    <nuxt-loading ref="loading"></nuxt-loading>
    <component v-if="layout" :is="nuxt.err ? 'nuxt' : layout"></component>
  </div>
</template>

<script>
import Vue from 'vue'
import NuxtLoading from './components/nuxt-loading.vue'

import '..\\assets\\style\\app.styl'

import '..\\node_modules\\quill\\dist\\quill.snow.css'

import '..\\node_modules\\quill\\dist\\quill.bubble.css'

import '..\\node_modules\\quill\\dist\\quill.core.css'


let layouts = {

  "_default": () => import('..\\layouts\\default.vue'  /* webpackChunkName: "layouts\\default" */).then(m => m.default || m)

}

let resolvedLayouts = {}

export default {
  head: {"title":"ABC-Tutor","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":"Nuxt.js + Vuetify.js project"},{"name":"mobile-web-app-capable","content":"yes"},{"name":"apple-mobile-web-app-title","content":"ABC-Tutor"},{"name":"theme-color","content":"#2196F3"},{"name":"og:type","content":"website"},{"name":"og:title","content":"ABC-Tutor"},{"name":"og:description","content":"ABC-Tutor System"}],"link":[{"rel":"icon","type":"image/x-icon","href":"/favicon.ico"},{"rel":"stylesheet","href":"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons"},{"rel":"manifest","href":"/_nuxt/manifest.8febe698.json"},{"rel":"shortcut icon","href":"/_nuxt/icons/icon_64.d4LbD0ZM723.png"},{"rel":"apple-touch-icon","href":"/_nuxt/icons/icon_512.d4LbD0ZM723.png","sizes":"512x512"}],"script":[{"src":"https://use.fontawesome.com/eed138f88e.js"},{"src":"https://cdn.webrtc-experiment.com/RecordRTC.js"},{"src":"https://cdnjs.cloudflare.com/ajax/libs/webrtc-adapter/6.0.3/adapter_no_edge.js"},{"src":"https://cdn.WebRTC-Experiment.com/getScreenId.js"},{"src":"https://cdn.omise.co/omise.js"}],"style":[],"htmlAttrs":{"lang":"en"}},
  data: () => ({
    layout: null,
    layoutName: ''
  }),
  beforeCreate () {
    Vue.util.defineReactive(this, 'nuxt', this.$options._nuxt)
  },
  created () {
    // Add this.$nuxt in child instances
    Vue.prototype.$nuxt = this
    // add to window so we can listen when ready
    if (typeof window !== 'undefined') {
      window.$nuxt = this
    }
    // Add $nuxt.error()
    this.error = this.nuxt.error
  },
  
  mounted () {
    this.$loading = this.$refs.loading
  },
  watch: {
    'nuxt.err': 'errorChanged'
  },
  
  methods: {
    
    errorChanged () {
      if (this.nuxt.err && this.$loading) {
        if (this.$loading.fail) this.$loading.fail()
        if (this.$loading.finish) this.$loading.finish()
      }
    },
    
    setLayout (layout) {
      if (!layout || !resolvedLayouts['_' + layout]) layout = 'default'
      this.layoutName = layout
      let _layout = '_' + layout
      this.layout = resolvedLayouts[_layout]
      return this.layout
    },
    loadLayout (layout) {
      if (!layout || !(layouts['_' + layout] || resolvedLayouts['_' + layout])) layout = 'default'
      let _layout = '_' + layout
      if (resolvedLayouts[_layout]) {
        return Promise.resolve(resolvedLayouts[_layout])
      }
      return layouts[_layout]()
      .then((Component) => {
        resolvedLayouts[_layout] = Component
        delete layouts[_layout]
        return resolvedLayouts[_layout]
      })
      .catch((e) => {
        if (this.$nuxt) {
          return this.$nuxt.error({ statusCode: 500, message: e.message })
        }
      })
    }
  },
  components: {
    NuxtLoading
  }
}
</script>

