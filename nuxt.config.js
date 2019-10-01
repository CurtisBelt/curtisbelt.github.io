const isProd = process.env.NODE_ENV === 'production'
const isDev = !isProd

export default {
  head: {
    titleTemplate: (titleChunk) =>
      titleChunk ? `${titleChunk} - CurtisBelt.dev` : 'CurtisBelt.dev'
  },

  router: {
    trailingSlash: false
  },

  css: ['assets/css/tailwind', '@fortawesome/fontawesome-svg-core/styles.css'],

  plugins: [{ src: '~plugins/font-awesome.js' }],

  modules: ['@nuxtjs/pwa'],

  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/eslint-module',
    '@nuxtjs/netlify-files'
  ],

  eslint: {
    fix: true
  },

  netlifyFiles: {
    existingFilesDirectory: './netlify'
  },

  purgeCSS: {
    mode: 'postcss',
    whitelistPatterns: [
      // font-awesome
      /^fa-/,
      /--fa$/
    ]
  },

  pwa: {
    meta: {
      name: 'CurtisBelt.dev',
      author: 'Curtis Belt',
      ogHost: 'https://curtisbelt.dev'
    },
    manifest: {
      name: 'CurtisBelt.dev',
      lang: 'en',
      short_name: 'CurtisBelt.dev',
      start_url: '/',
      display: 'standalone'
    }
  },

  generate: {
    fallback: true
  },

  modern: isProd,

  build: {
    parallel: isDev,
    cache: isDev,
    hardSource: isDev,
    publicPath: '/assets/'
  }
}
