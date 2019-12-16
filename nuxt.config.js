export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css'
      }
    ],

    script: [
      {
        src: 'https://code.jquery.com/jquery-3.4.1.slim.min.js'
      },
      {
        src:
          'https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js'
      },
      {
        src:
          'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js'
      },
      {
        src: '/js/stellar.js'
      },
      {
        src: '/vendors/lightbox/simpleLightbox.min.js'
      },
      {
        src: '/vendors/nice-select/js/jquery.nice-select.min.js'
      },
      {
        src: '/vendors/isotope/imagesloaded.pkgd.min.js'
      },
      {
        src: '/vendors/isotope/isotope-min.js'
      },
      {
        src: '/vendors/owl-carousel/owl.carousel.min.js'
      },
      {
        src: '/js/jquery.ajaxchimp.min.js'
      },
      {
        src: '/vendors/counter-up/jquery.waypoints.min.js'
      },
      {
        src: '/vendors/counter-up/jquery.counterup.js'
      },
      {
        src: '/js/mail-script.js'
      },
      {
        src: '/js/theme.js'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */

  css: [
    './assets/css/bootstrap.css',
    './assets/vendors/linericon/style.css',
    './assets/css/font-awesome.min.css',
    './assets/css/themify-icons.css',
    './assets/css/flaticon.css',
    './assets/vendors/owl-carousel/owl.carousel.min.css',
    './assets/vendors/lightbox/simpleLightbox.css',
    './assets/vendors/nice-select/css/nice-select.css',
    './assets/vendors/animate-css/animate.css',
    './assets/vendors/jquery-ui/jquery-ui.css',
    './assets/css/style.css',
    './assets/css/responsive.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
