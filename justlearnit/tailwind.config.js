/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'grayMain': '#d9d9d9',
      'graySecondary': '#F1F1F1',
      'whiteMain': '#ffffff',
      'transparentGrayMain': "rgba(0,0,0, .8)"
    },
  },
  plugins: [],
}
