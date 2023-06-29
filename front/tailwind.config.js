/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'aurore': ['"La Belle Aurore"', 'cursive'],
      },
      backgroundImage: {
        'soleil': "url('/assets/logo-sun.png')",
      },
      colors: {
        'beige': "#F7F0ED",
        'dark-brown' : "#421F00",
      },
    },
  },
  plugins: [],
}