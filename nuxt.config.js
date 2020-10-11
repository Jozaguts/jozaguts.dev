import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s  ',
    title: process.env.npm_package_name || '',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: process.env.npm_package_description || ''}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {color: '#fff'},
  /*
  ** Global CSS
  */
  css: [
    '~/assets/main.css'
  ],
  /* 
  ** Middleware
  */
  router: {
    // middleware: ['redirect-to-root']
    // base: '/jozaguts.dev/'
  },
  serverMiddleware: ['~/api/app.js'],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {src: '~/plugins/Vee-validate.js', ssr: false},
    {src: '~plugins/google-analytics.js', mode: 'client'}
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/recaptcha',
    ['vue-scrollto/nuxt', {duration: 300}],
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    ['nuxt-i18n', {
      detectBrowserLanguage: {
        useCookie: true,
        cookieKey: 'i18n_redirected'
      },
      locales: [
        {
          code: 'es',
          file: 'es-MX.js'
        },
        {
          code: 'en',
          file: 'en-US.js'
        }
      ],
      lazy: true,
      langDir: 'lang/',
      defaultLocale: 'en'
    }
    ]
  ],
  recaptcha: {
    /* reCAPTCHA options */
    hideBadge: true, // Hide badge element (v3 & v2 via size=invisible)
    language: 'en',   // Recaptcha language (v2)
    // siteKey: '6LdAHMkZAAAAAMN6j84gNpzOSUT9Ua52TRSeG6MA', //v2 
    siteKey: '6LelF8kZAAAAAKNACgYCudrBa08u_fzTmLULF3Dv', //v3 Site key for requests
    version: 3,     // Version
    size: 'compact'        // Size: 'compact', 'normal', 'invisible' (v2)
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    // proxy: true,
    // https: true,
    // debug: true,
  },
  proxy: {
    // '/api': 'http://localhost:3000'
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    defaultAssets: {icons: 'fa'},
    theme: {
      options: {
        customProperties: true,
      },
      dark: true,
      themes: {
        light: {
          primary: "#5E8CC2",
          accent: "#295f91",
          secondary: '#7A83D3',
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
        dark: {
          primary: "#5E8CC2",
          accent: "#295f91",
          secondary: '#7A83D3',
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        },
      },
    },
    // icons: {
    //   // iconfont: 'fa',
    //   values: {
    //     logo: {
    //       component: logo 
    //     }
    //   }
    // }
    // optionsPath: "./vuetify.options.js",
  },
  /*
  ** Build configuration
  */
  build: {
    transpile: ["vee-validate/dist/rules"],
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
