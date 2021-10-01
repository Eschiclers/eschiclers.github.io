export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Chicle Website',
    htmlAttrs: {
      lang: 'es'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'This is the Chicle / Eschiclers website. Programmer and systems administrator. Here you can find some of my public projects hosted.' },
      { name: 'author', content: 'Chicle' },
      { name: 'robots', content: 'index, follow' },
      { name: 'keywords', content: 'Eschiclers, Chicle, programación, programador, sysadmin, github, nuxt, vue, node, javascript, typescript' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'msapplication-TileColor', content: '#1F2937' },
      { name: 'msapplication-TileImage', content: '/favicons/mstile-144x144.png' },
      { name: 'theme-color', content: '#1F2937' },
    ],
    link: [
      { rel: "apple-touch-icon", sizes: "57x57", href: "/favicon/apple-icon-57x57.png" },
      { rel: "apple-touch-icon", sizes: "60x60", href: "/favicon/apple-icon-60x60.png" },
      { rel: "apple-touch-icon", sizes: "72x72", href: "/favicon/apple-icon-72x72.png" },
      { rel: "apple-touch-icon", sizes: "76x76", href: "/favicon/apple-icon-76x76.png" },
      { rel: "apple-touch-icon", sizes: "114x114", href: "/favicon/apple-icon-114x114.png" },
      { rel: "apple-touch-icon", sizes: "120x120", href: "/favicon/apple-icon-120x120.png" },
      { rel: "apple-touch-icon", sizes: "144x144", href: "/favicon/apple-icon-144x144.png" },
      { rel: "apple-touch-icon", sizes: "152x152", href: "/favicon/apple-icon-152x152.png" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/favicon/apple-icon-180x180.png" },
      { rel: "icon", type: "image/png", sizes: "192x192", href: "/favicon/android-icon-192x192.png" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon/favicon-32x32.png" },
      { rel: "icon", type: "image/png", sizes: "96x96", href: "/favicon/favicon-96x96.png" },
      { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon/favicon-16x16.png" },
      { rel: "manifest", href: "/manifest.json" },
    ],
    script: [
      { src: '~/assets/load-theme.js' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vue-typed-js.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxtjs/tailwindcss',
    '@nuxt/typescript-build'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    //'bootstrap-vue/nuxt',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    publicPath: './assets/',
  }
}
