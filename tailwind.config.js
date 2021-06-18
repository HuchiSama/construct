// const isProduction = process.env.NODE_ENV === 'production'
// const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  // enabled: isProduction,
  // purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  purge: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx,less}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // spacing: {},
      colors: {
        black3: 'rgba(0,0,0,0.3)',
        border: '#EAE8F0',
        background1: '#f2f2f6',
        background2: '#C9C9D9',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}