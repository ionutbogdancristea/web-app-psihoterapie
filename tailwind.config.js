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
        museoslab100:["museo-slab-100"],
        museoslab100italic:["museo-slab-100-italic"],
        museoslab300:["museo-slab-300"],
        museoslab300italic:["museo-slab-300-italic"],
        museoslab500:["museo-slab-500"],
        museoslab500italic:["museo-slab-500-italic"],
        museoslab700:["museo-slab-700"],
        museoslab700italic:["museo-slab-700-italic"],
        museoslab900:["museo-slab-900"],
        museoslab900italic:["museo-slab-900-italic"],
        museoslab1000:["museo-slab-1000"],
        museoslab1000italic:["museo-slab-1000-italic"],
        sourceserifprolight:["source-serif-pro-light"],
        sourceserifvariableroman:["source-serif-variable-roman"]
      }
    },
  },
  plugins: [],
}