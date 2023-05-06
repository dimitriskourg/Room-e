const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/vue-tailwind-datepicker/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        "vtd-primary": colors.pink, // Light mode Datepicker color
        "vtd-secondary": colors.gray, // Dark mode Datepicker color
      },
      width: {
        '30': '9rem',
      },
      padding: {
        '100': '25.2rem',
      },
      screens: {
      'xs': '475px',
      "3xl": "1600px",
      "4xl": "1920px",
      ...defaultTheme.screens,
    },
    },
  },
  plugins: [],
}

