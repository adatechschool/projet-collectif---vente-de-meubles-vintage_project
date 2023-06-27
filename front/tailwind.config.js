/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'soleil': "url('/assets/logo-sun.png')",
      },
      colors: {
        beige: "#F7F0ED",
      },
    },
  },
  plugins: [],
}