import colors from 'vuetify/es5/util/colors'
import logo from '~/components/icons/logo.vue'
export default {
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
        success: colors.green.accent3
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
  icons: {
    // iconfont: 'fa',
    values: {
      logo: {
        component: logo 
      }
    }
  }
}
