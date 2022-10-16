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
      },
      fontFamily: {
        museoslab500:["museo-slab-500"],
        museoslab100:["museo-slab-100"],
      }
    },
  },
  plugins: [],
}