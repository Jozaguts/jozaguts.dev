require("dotenv").config();
const siteKey = process.env.SITE_KEY;
export default {
  env: {
    appVersion: process.env.APP_VERSION || "v-0.0.1"
  },
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: "%s  ",
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: ["~/assets/main.css"],
  /*
   ** Middleware
   */
  router: {
    // middleware: ['redirect-to-root']
    // base: '/jozaguts.dev/'
  },
  serverMiddleware: ["~/api/app.js"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: "~/plugins/Vee-validate.js", ssr: false },
    { src: "~plugins/google-analytics.js", mode: "client" },
    { src: "~/plugins/vue-pdf.js", ssr: false }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ["@nuxtjs/vuetify", "@nuxtjs/dotenv"],
  /*
   ** Nuxt.js modules
   */
  modules: [
    ['nuxt-canonical', { baseUrl: 'https://jozaguts.dev'}],
    "@nuxtjs/recaptcha",
    '@nuxtjs/sitemap',
    ['@nuxtjs/robots',
      { 
        /* module options */
        UserAgent: '*',
        Disallow: '/api/*',
        SiteMap: '/sitemap.xml'
      }
    ],
    ["vue-scrollto/nuxt", { duration: 300 }],
    "@nuxtjs/axios",
    "@nuxtjs/proxy",
    [
      "nuxt-i18n",
      {
        seo: true,
        trailingSlashes:true,
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: "i18n_redirected"
        },
        locales: [
          {
            code: "es",
            iso: 'es-MX',
            file: "es-MX.js"
          },
          {
            code: "en",
            iso: 'en-US',
            file: "en-US.js"
          }
        ],
        lazy: true,
        langDir: "lang/",
        defaultLocale: "en"
      }
    ]
  ],
  sitemap: {
    hostname: 'https://jozaguts.dev',
    gzip: true,
    exclude: [
      '/api'
    ],
    routes: [
      '/about-me',
      '/blog',
      '/resume',
      '/es/about-me',
      '/es/blog',
      '/es/resume',
    ]
  },
  recaptcha: {
    /* reCAPTCHA options */
    hideBadge: true, // Hide badge element (v3 & v2 via size=invisible)
    language: "en", // Recaptcha language (v2)
    siteKey: siteKey, //v3 Site key for requests
    version: 3, // Version
    size: "compact" // Size: 'compact', 'normal', 'invisible' (v2)
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
    customVariables: ["~/assets/variables.scss"],
    defaultAssets: {
      icons: "fa",
      font: false
    },
    // theme: {
    //   options: {
    //     customProperties: true,
    //   },
    //   dark: true,
    //   themes: {
    //     light: {
    //       primary: "#5E8CC2",
    //       accent: "#295f91",
    //       secondary: '#7A83D3',
    //       info: colors.teal.lighten1,
    //       warning: colors.amber.base,
    //       error: colors.deepOrange.accent4,
    //       success: colors.green.accent3,
    //     },
    //     dark: {
    //       primary: "#5E8CC2",
    //       accent: "#295f91",
    //       secondary: '#7A83D3',
    //       info: colors.teal.lighten1,
    //       warning: colors.amber.base,
    //       error: colors.deepOrange.accent4,
    //       success: colors.green.accent3
    //     },
    //   },
    // },
    // // icons: {
    // //   // iconfont: 'fa',
    // //   values: {
    // //     logo: {
    // //       component: logo
    // //     }
    // //   }
    // // }
    optionsPath: "./vuetify.options.js"
  },
  /*
   ** Build configuration
   */
  
  build: {
    app: ({ isDev }) => isDev ? '[name].js' : '[contenthash].js',
    chunk: ({ isDev }) => isDev ? '[name].js' : '[contenthash].js',
    css: ({ isDev }) => isDev ? '[name].css' : '[contenthash].css',
    img: ({ isDev }) => isDev ? '[path][name].[ext]' : 'img/[contenthash:7].[ext]',
    font: ({ isDev }) => isDev ? '[path][name].[ext]' : 'fonts/[contenthash:7].[ext]',
    video: ({ isDev }) => isDev ? '[path][name].[ext]' : 'videos/[contenthash:7].[ext]',
    extend (config, {isClient}) {
      if (isClient){
        config.optimization.splitChunks.maxSize = 200000;
      }
    },
    html:{
      minify:{
        collapseBooleanAttributes: true,
        decodeEntities: true,
        minifyCSS: true,
        minifyJS: true,
        processConditionalComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        trimCustomFragments: true,
        useShortDoctype: true,
        minifyURLs: true,
        removeComments: true,
        removeEmptyElements: true,
        preserveLineBreaks: false,
        collapseWhitespace: true
      }
    },
    optimization: {
      minimize: true
    },
    splitChunks: {
      chunks: 'all',
      automaticNameDelimiter: '.',
      name: undefined,
      cacheGroups: {}
    },
    transpile: ["vee-validate/dist/rules", "gsap"],
    terser: {
      extractComments: false // default was LICENSES
    },
      extractCSS: true,
    
    /*
     ** You can extend webpack config here
     */
    // extend(config, ctx) {
    //  
    // }
  }
};
