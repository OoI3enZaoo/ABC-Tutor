module.exports = {
  /*
  ** Headers of the page
  */
  // mode: 'spa',
  router: {
    middleware: ['https','checkLogin']
  },
  head: {
    title: 'ABC-Tutor',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js + Vuetify.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    ],
    script: [
      { src: 'https://use.fontawesome.com/eed138f88e.js' }
    ]
  },
  plugins: [
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
