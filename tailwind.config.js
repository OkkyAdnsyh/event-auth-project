/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      animation : {
        'custom-spin' : 'customSpin 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite'
      },
      keyframes : {
        customSpin : {
          '0%' : { transform : 'rotate(0deg)'},
          '100%' : { transform : 'rotate(360deg)'}
        }
      }
    },
  },
  plugins: [],
}
