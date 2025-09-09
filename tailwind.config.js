/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customGray: '#2A2828',
        shadowGray: '#949090',
        primaryOrange: '#E6581B',

      },
      fontFamily: {
        custom: ['Itim', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

