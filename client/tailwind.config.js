/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        // 'machine-lerning': "url('./images/ml.png')",
        // 'artificial-intelligence': "url('./images/Ai.jpg')",
        // // 'startup': "url('./images/Startup.jpg')",
      }
    },
  },
  plugins: [],
}