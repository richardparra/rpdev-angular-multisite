/** @type {import('tailwindcss').Config} */
const colors=require('tailwindcss/colors');

module.exports = {
  content: ["./src/**/*.{html,ts}",],
  theme: {
    extend: {
      animation:{
        upDown:'upDown 3s linear infinite',
        leftRight:'leftRight 3s linear infinite',
        spinfinite: 'spin 1s linear',
      },
      keyframes:{
        upDown:{
          '0%':{paddingTop:'0px'},
          '50%':{paddingTop:'40px'},
          '100%':{paddingTop:'0px'}
        },
        leftRight:{
          '0%':{paddingLeft:'0px'},
          '50%':{paddingLeft:'40px'},
          '100%':{paddingLeft:'0px'}
        },
        gira: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(5deg)' },
          '20%': { transform: 'rotate(10deg)' },
          '30%': { transform: 'rotate(15deg)' },
          '40%': { transform: 'rotate(20deg)' },
          '50%': { transform: 'rotate(25.0deg)' },
          '60%': { transform: 'rotate(30.0deg)' },
          '100%': { transform: 'rotate(35.0deg)' },
        },
      },
      colors: {
        success: {
          100: '#d5d74c',
          200: '#d5d74c',
          300: '#d5d74c',
          400: '#d5d74c',
          500: '#d5d74c',
          600: '#d5d74c',
          700: '#d5d74c',
          800: '#d5d74c',
          900: '#cacd0f',
        },
        primary: {
          100: '#2c91f2',
          200: '#1f8bf2',
          300: '#1982e6',
          400: '#1578d6',//'#0161af', color de yellow
          500: '#0161af',//'#0056a4', color pagina DM
          600: '#494740',//'#0a3a62',
          700: '#14385a',
          800: '#1c2e4c',
          900: '#1a2b49',
        },
        secondary: {
          100: '#bf86b8',
          200: '#b472ac',
          300: '#a95da1',
          400: '#bcbdb6', //'#943589',
          500: '#903F97', //color secundario oficial (lila)
          600: '#85307b',
          700: '#552685', //'#762a6e',
          800: '#993c8e',
          900: '#331033',
        },
        tertiary: "#897099",
        warning: colors.red,
        info: colors.blue,
      },
      fontFamily:{
        'primary': ['Poppins', ],
        'secondary':['GothamBook'],
        'tertiary':['Montserrat'],
        'oswald':['Oswald'],
        'gothambook': ['GothamBook', 'Poppins', 'sans-serif'],
        'gothambold': ['GothamBold', 'Poppins', 'sans-serif'],
        'Poetsen': ['Poetsen One', 'Poppins', 'sans-serif'],
        'roboto': ['Roboto Condensed'],
        'noexiste':['NoExiste'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
  }),
  ],
}
