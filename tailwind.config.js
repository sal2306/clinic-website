/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#34495e',  // calm professional blue
        accent: '#22c55e',   // coral accent
        subtle: '#f3f7fb'
      }
    }
  },
  plugins: []
}
