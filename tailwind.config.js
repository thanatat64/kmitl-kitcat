/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'conclustion' : '#FFFAF5',
        'card' : '#FFF4EA',
        accept: {
          100: '#5AD6E3',
          200: '#32AEBB'
        },
        'blueText' : '#000958'
      }
    },
  },
  plugins: [],
}
