const static_url = 'https://nuxt-serverless-123456789-dev-static.s3.us-east-2.amazonaws.com'
// const static_url = ''
let config = {
  ssr: 'true',
  env: {
    urlStatic: static_url,
  },

  /*
  ** Headers of the page
  */
  head: {
    title: 'test',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'test desc' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: static_url+'/favicon.ico' }
    ]
  },

  // router: {
  //   base: `/dev/`
  // },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    // { src: '@/plugins/amplify.js', ssr: false }
    '@/plugins/staticUrl.js',
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },
  // performance: {
  //   gzip: false
  // },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    },
    standalone: true,
    // publicPath: `/dev/_nuxt/`
    publicPath: `https://nuxt-serverless-123456789-dev-assets.s3.us-east-2.amazonaws.com/`
    // publicPath: `/${require('./secrets.json').NODE_ENV}/_nuxt/`
  }
}

module.exports = config