/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./index.html'],
  theme: {
    extend: {
      spacing: {
        '5%': '5%',
        '1%': '1%'
      }
    },
    fontFamily:{
      'SourceSansPro':['Source Sans Pro', 'sans-serif']
    }
  },
  plugins: [],
}
