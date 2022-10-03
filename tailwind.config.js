/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ana-purple': '#A280B5',
      }
      // ,backgroundImage: {
      //   'chenar': "url('/src/pages/Acasa/media/chenar.png')",
       
      // }
    },
  },
  plugins: [],
}