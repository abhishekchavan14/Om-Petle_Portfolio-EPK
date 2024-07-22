/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['"Inter"'],
      },
      colors:{
        offWhite: '#c7c7c7',
      }
    },
  },
  plugins: [],
}

