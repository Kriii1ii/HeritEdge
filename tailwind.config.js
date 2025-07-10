// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        aquafina: ["'Aquafina Script'", "cursive"],
        avantime: ["'Avantime'", "sans-serif"],
        openSauce: ["'Open Sauce One'", "sans-serif"],
      },
      colors: {
        oliveDark: "#606C38",
        oliveDarker: "#283618",
        cream: "#51074a",
        coffeeBrown: "#4E2C0E",
        tan: "#DDA15E",
        burntOrange: "#C06414",
        deepRed: "#7B1010",
      },
    },
  },
  plugins: [],
};
