/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'vintage-beige':'#F7F0ED',
        'vintage-brown':'#421F00',
      }
    },
  },
  plugins: [],
}