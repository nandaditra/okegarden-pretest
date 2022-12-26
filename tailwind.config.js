/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.{js,jsx,ts,tsx}",
    "./resources/**/*.vue",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    fontFamily: {
      serif: ['Lato', 'sans-serif']
    },
    fontWeight :{
      bold: 750,
      black: 1000
    },
    extend: {
      colors:{
        'green' : "#0d6a28",
        'yellow' : "#fff2d1",
        'black' :"#333333",
        'gray': "#676767",
        'blue': "#1688d2",
        'sky': "#99cbeb",
        'neutral': "#ebebeb",
        'teal': "#d9e6d8"
      }
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

