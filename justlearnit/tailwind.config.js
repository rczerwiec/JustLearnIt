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
      'grayHover': '#F3F3F3',
      'greenMain': '#4CAF50',
      'greenHover': '#6ECF72',
      'redMain': '#f44336',
      'redHover': '#f66558',
      'whiteMain': '#ffffff',
      'transparentGrayMain': "rgba(0,0,0, .8)"
    },
  },
  plugins: [],
}
