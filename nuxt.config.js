import { ProvidePlugin } from 'webpack'
import { locales, defaultLocale, englishLocale } from './locales'

const pages = [
  '/',
  '/company',
  '/ecosystem',
  '/terms-and-conditions',
  '/privacy-policy',
]

export default {
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: 'Fast, Secure, and Fully Decentralized Trading',
    htmlAttrs: {
      lang: englishLocale,
    },
    script: [
      {
        src: 'https://referlist.co/resources/referlist.js',
        body: true,
      },
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'msapplication-TileColor', content: '#da532c' },
      { name: 'theme-color', content: '#fff' },
      {
        name: 'description',
        content:
          'Injective is the first layer-2 decentralized exchange protocol that unlocks the full potential of decentralized derivatives and borderless DeFi',
      },
      {
        name: 'keywords',
        content:
          'Injective is the first layer-2 decentralized exchange protocol that unlocks the full potential of decentralized derivatives and borderless DeFi',
      },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://www.injectiveprotocol.com' },
      {
        property: 'og:image',
        content: 'https://www.injectiveprotocol.com/img/og/og.jpg',
      },
      { property: 'og:image:type', content: 'image/jpeg' },
      { property: 'og:image:width', content: '1024' },
      { property: 'og:image:height', content: '512' },
      {
        property: 'og:title',
        content: 'Fast, Secure, and Fully Decentralized Trading',
      },
      {
        property: 'og:description',
        content:
          'Injective is the first layer-2 decentralized exchange protocol that unlocks the full potential of decentralized derivatives and borderless DeFi',
      },
      { property: 'og:locale', content: 'En' },
      {
        property: 'og:site_name',
        content: 'https://www.injectiveprotocol.com',
      },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: 'https://www.injectiveprotocol.com' },
      {
        name: 'twitter:title',
        content: 'Fast, Secure, and Fully Decentralized Trading',
      },
      {
        name: 'twitter:description',
        content:
          'Injective is the first layer-2 decentralized exchange protocol that unlocks the full potential of decentralized derivatives and borderless DeFi',
      },
      { name: 'twitter:creator', content: 'injectiveprotocol' },
      {
        name: 'twitter:image:src',
        content: 'https://www.injectiveprotocol.com/img/og/twitter.jpg',
      },
      { name: 'twitter:domain', content: 'https://www.injectiveprotocol.com.' },
      { name: 'theme-color', content: '#1A202C' },
      { name: 'msapplication-navbutton-color', content: '#1A202C' },
      { name: 'apple-mobile-web-app-status-bar-style', content: '#1A202C' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/img/favicon/favicon.ico' },
      {
        rel: 'stylesheet',
        body: true,
        href:
          'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '152x152',
        href: '/img/favicon/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/img/favicon/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/img/favicon/favicon-16x16.png',
      },
      {
        rel: 'mask-icon',
        href: '/img/favicon/safari-pinned-tab.svg',
        color: '#5bbad5',
      },
      {
        rel: 'image_src',
        href: 'https://www.injectiveprotocol.com/img/og/og.jpg',
      },
    ],
  },
  /*
   ** Global CSS
   */
  css: ['~/assets/app.scss'],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: false,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],

  'google-gtag': {
    id: 'UA-148360411-1',
  },

  sitemap: {
    hostname: 'https://injectiveprotocol.com',
    gzip: true,
  },

  tailwindcss: {
    cssPath: '~/assets/css/app.scss',
    configPath: './tailwind.config.js',
  },

  toast: {
    position: 'bottom-right',
    duration: 6000,
    theme: 'bubble',
  },

  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/google-gtag',
    '@nuxtjs/sitemap',
    '@nuxtjs/axios',
    '@nuxtjs/toast',
    '@nuxtjs/tailwindcss',
    [
      '@netsells/nuxt-hotjar',
      {
        id: '2031687',
        sv: '6',
      },
    ],
  ],

  router: {
    middleware: 'i18n',
  },
  env: {
    MAILCHIMP_API_ENDPOINT: process.env.MAILCHIMP_API_ENDPOINT,
  },
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: ['~/plugins/i18n.js', { src: '~/plugins/reveal', ssr: false }],
  generate: {
    routes: pages.reduce((routes, page) => {
      const newPages = locales
        .filter((locale) => locale !== defaultLocale)
        .map((locale) => `/${locale}${page === '/' ? '' : page}`)
      return [...routes, page, ...newPages]
    }, []),
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    plugins: [
      new ProvidePlugin({
        jQuery: 'jquery',
        $: 'jquery',
        'window.jQuery': 'jquery',
      }),
    ],
    transpile: ['vee-validate/dist/rules'],
  },
}
