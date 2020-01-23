const title = 'Injective Protocol'
const description =
  'Injective is the first front-running resistant, layer-2 exchange protocol that unlocks the full potential of borderless finance by supporting derivatives and futures.'
const author = 'Injective Protocol <admin@injectiveprotocol.com>'

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title,
    htmlAttrs: {
      lang: 'en-US'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: description
      },
      {
        hid: 'g-site-verification',
        name: 'google-site-verification',
        content: '23Mg1_gUpvKFCmuEz8EzKv9eZBNEYYWJCc1KifKklgQ'
      },
      { hid: 'author', name: 'author', content: author },
      {
        hid: 'twitter-card',
        property: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        hid: 'twitter-site',
        property: 'twitter:site',
        content: '@injectiveprotocol'
      },
      {
        hid: 'twitter-creator',
        property: 'twitter:creator',
        content: '@injectiveprotocol'
      },
      { hid: 'twitter-title', property: 'twitter:title', content: title },
      { hid: 'og-title', property: 'og:title', content: title },
      {
        hid: 'og-image',
        property: 'og:image',
        content: `${process.env.NUXT_ENV_APP_URL}/images/share.png`
      },
      {
        hid: 'og-description',
        property: 'og:description',
        content: description
      },
      {
        hid: 'og-url',
        property: 'og:url',
        content: process.env.NUXT_ENV_APP_URL
      },
      {
        hid: 'og-type',
        property: 'og:type',
        content: 'website'
      },
      {
        hid: 'twitter-description',
        property: 'twitter:description',
        content: description
      },
      {
        hid: 'twitter-url',
        property: 'twitter:url',
        content: process.env.NUXT_ENV_APP_URL
      },
      {
        hid: 'twitter-image',
        property: 'twitter:image',
        content: `${process.env.NUXT_ENV_APP_URL}/images/banner.png`
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/i18n'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/google-gtag',
    '@nuxtjs/sitemap',
    '@nuxtjs/dotenv'
  ],

  'google-gtag': {
    id: 'UA-156829931-1'
  },

  sitemap: {
    hostname: 'https://injectiveprotocol.com',
    gzip: true
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  router: {
    linkActiveClass: 'is-active'
  },
  tailwindcss: {
    cssPath: '~/assets/css/app.scss'
  },
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
