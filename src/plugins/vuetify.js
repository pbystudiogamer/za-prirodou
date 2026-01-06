/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import 'vuetify/styles'
import { md2 } from 'vuetify/blueprints'

// Composables
import { createVuetify } from 'vuetify'

const myCustomLightTheme = {
  dark: false,
  colors: {
    background: '#f80000',
    surface: '#FFFFFF',
    'surface-bright': '#FFFFFF',
    'surface-light': '#EEEEEE',
    'surface-variant': '#000000',
    'on-surface-variant': '#EEEEEE',
    primary: '#1867C0',
    'primary-darken-1': '#1F5592',
    secondary: '#48A9A6',
    'secondary-darken-1': '#018786',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
    fill: '#986a6a',
    'fill-variant': '#ffffff'
  },
};

// Define your custom dark theme once
const myCustomDarkTheme = {
  dark: true,
  colors: {
    background: '#000000',
    surface: '#151515',
    'surface-bright': '#FFFFFF',
    'surface-light': '#EEEEEE',
    'surface-variant': '#ffea00',
    'on-surface-variant': '#EEEEEE',
    primary: '#1867C0',
    'primary-darken-1': '#1F5592',
    secondary: '#48A9A6',
    'secondary-darken-1': '#018786',
    error: '#855c64',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
    fill: '#000000',
    'fill-variant': '#acacac'
  },
  components: {
    VDataTable: {
      headerColor: 'primary',
      backgroundColor: 'surface',
    },
  },
};

// Create Vuetify instance with the theme
export default createVuetify({
  theme: {
    defaultTheme: 'myCustomDarkTheme',
    themes: {
      myCustomDarkTheme, // Reference the theme object here
      myCustomLightTheme
    },
  },
});
