/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        logo: ['Montserrat', 'sans-serif'],
        sans: ["Roboto"],
      },
      screens: {
        'custom': '1253px',
      },
    },
  },
  plugins: [],
}