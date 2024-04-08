/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      light: {
        primary: "#165091",
        secondary: "#616161", // #FFCDD2
        icone: "#165091",
    },
    dark: {
        primary: '#165091',
        icone: "#FFF",
    }
    },
  },
})
