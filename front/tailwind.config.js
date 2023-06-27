/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'beige': "#F7F0ED",
        'dark-brown' : "#421F00",
      },
    },
  },
  plugins: [],
}