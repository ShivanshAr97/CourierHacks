/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'num1': '#FF3278',
        'num2': '#F6F6F6'
      },
      fontSize: {
        '4xl': '2.25rem'
      },
      width:{
        '27/10':'27%',
        '3/10':'30%'
      },
      gridTemplateRows: {
        '10': 'repeat(10, minmax(0, 1fr))'
      },
      fontSize: {
        'xx': '.625rem',
      }
      
    },
  },
  plugins: [],
}
