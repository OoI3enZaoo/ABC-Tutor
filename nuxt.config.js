module.exports = {
  /*
  ** Headers of the page
  */
  mode: 'spa',
  router: {
    middleware: ['https', 'checkLogin']
  },
  head: {
    title: 'ABC-Tutor',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Tutor Online' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    ],
    script: [
      { src: 'https://use.fontawesome.com/eed138f88e.js' },
      { src: 'https://cdn.webrtc-experiment.com/RecordRTC.js' },
      // { src: 'https://webrtc.github.io/adapter/adapter-latest.js' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/webrtc-adapter/6.0.3/adapter_no_edge.js'},
      { src: 'https://cdn.WebRTC-Experiment.com/getScreenId.js' },
      { src: 'https://cdn.omise.co/omise.js' }
      // { src: 'http://cdn.peerjs.com/0.3/peer.js' }
    ]
  },
  plugins: [
    { src: '~/plugins/nuxt-client-init.js' },
    { src: '~/plugins/vuetify.js' },
    { src: '~/plugins/VueSocketio.js' },
    { src: '~/plugins/quill.js' }
  ],
  css: [
    '~/assets/style/app.styl',
    'quill/dist/quill.snow.css',
  	'quill/dist/quill.bubble.css',
  	'quill/dist/quill.core.css'
  ],
  loading: { color: '#2196F3' },
  manifest: {
      name: 'ABC-Tutor',
      description: 'ABC-Tutor System',
      theme_color: '#2196F3'
    },
    modules: [
      '@nuxtjs/pwa',
      '@nuxtjs/component-cache'
    ],
  /*
  ** Build configuration
  */
  build: {
    vendor: ['vuetify', 'axios', 'vue-quill-editor/ssr', 'vue-socket.io'],
    extractCSS: true
    // extend (config, ctx) {
    //   if (ctx.dev && ctx.isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/
    //     })
    //   }
    // }
  }
}
