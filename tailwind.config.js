/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage : {
        'main-bg' : "url('/public/login-bg.webp')",
        'main-pattern' : "url('/public/pattern.svg)",
        'main-grad' : 'linear-gradient(0deg, rgba(0,0,0,1) 8%, rgba(0,0,0,0.6755077030812324) 35%, rgba(0,0,0,0) 100%)',
        'btn-grad' : 'linear-gradient(56deg, rgba(226,221,50,1) 38%, rgba(255,255,255,1) 100%)',
        'white-grad' : 'linear-gradient(0deg, rgba(255,255,255,1) 38%, rgba(255,255,255,0) 100%)'
      },
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