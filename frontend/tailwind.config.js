/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: ["./src/**/*.jsx"],
  theme: {
    screens: {
      '900': '900px',
      '870': '870px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        'shop_main': '#38bdf8',
        'bgr-page' : '#f1f5f9',
        'border-blur':'#efefef',
      },
    }
  },
  plugins: [],
}

