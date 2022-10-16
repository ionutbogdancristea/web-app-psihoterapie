/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ana-purple': '#A280B5',
        'ana-blue':'#2596be',
      }
      // ,backgroundImage: {
      //   'chenar': "url('/src/pages/Acasa/media/chenar.png')",
       
      // }
    },
  },
  plugins: [],
}