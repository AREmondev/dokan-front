export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'dokan_front_nuxt',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: '/css/bootstrap.min.css'
      },
      {
        rel: 'stylesheet',
        href: '/css/icons.css'
      },
      {
        rel: 'stylesheet',
        href: '/css/typicons.css'
      },
      {
        rel: 'stylesheet',
        href: '/css/style.css'
      }
    ],
    script: [
      { src: '/js/jquery.min.js', type: "text/javascript", body: true, ssr: false },
      { src: 'js/bootstrap.bundle.min.js', type: "text/javascript", body: true, ssr: false },
      { src: '/js/detect.js', type: "text/javascript", body: true, ssr: false },
      { src: '/js/fastclick.js', type: "text/javascript", async: true },
      { src: '/js/waves.js', type: "text/javascript", body: true, ssr: false },
      { src: '/js/jquery.blockUI.js', type: "text/javascript", body: true, ssr: false },
      { src: '/js/jquery.nicescroll.js', type: "text/javascript", body: true, ssr: false },
      { src: '/js/jquery.scrollTo.js', type: "text/javascript", body: true, ssr: false },
      { src: '/js/jquery.slimscroll.js', type: "text/javascript", body: true, ssr: false },
      { src: '/js/modernizr.min.js', type: "text/javascript", body: true, ssr: false },
      { src: '/js/app.js', type: "text/javascript", body: true, ssr: false },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
plugins: [
  { src: '~/plugins/api.js', mode: 'client' },
  { src: '~/plugins/client.js', mode: 'client' },

],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
