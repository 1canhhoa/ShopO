/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: ["./src/**/*.jsx"],
  theme: {
    screens: {
      'ipx': '375px',
      '900': '900px',
      '970': '970px',
      '870': '870px',
      '830' : '830px',
      '730' : '730px',
      '460': '460px',
      ...defaultTheme.screens,
    },
    extend: {
      boxShadow:{
        'shadow-chat':'0 4px 20px 0 rgba(28,28,51,.16)',
        '3xl': '0 1px 0 0 red'
      },
      colors: {
        'shop_main': '#38bdf8',//sky-400
        'bgr-page' : '#f1f5f9',
        'border-blur':'#efefef',
        'black-rgba': 'rgba(0, 0, 0, 0.4)',
      },
    }
  },
  plugins: [],
}

