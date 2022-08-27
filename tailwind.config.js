/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    container: {
      center : true,
      padding : '20px'
    },
    extend: {
      colors: {
        'black' : '#191A15',
        'yblue' : '#F9F8FE',
        'navy'  : '#161C28'
      }
    },
  },
  plugins: [],
}
