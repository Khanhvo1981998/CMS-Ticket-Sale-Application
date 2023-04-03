/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: { 'rhombus-green': { DEFAULT: '#24D5D6', dark: '#00A1A7' } },
    },
  },
  plugins: [],
}

