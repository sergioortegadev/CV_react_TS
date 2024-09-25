/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        lightBgColor: "#fdfdfa",
        mainColor: "#373a44",
        secondColor: "#b2b1b9",
        secondColorBtn: "#b2b1b920",
        secondColorBtnHover: "#b2b1b960",
        thirdColor: "#595260",
        fourthColor: "#fff159",
        brandYellow: "#FFF100",
        mainModalColor: "#2c2e43d0",
        secondModalColor: "#fff159ea",
        darkMainColor: "#ccc",
        darkSecondColor: "#b3b0cc",
        darkBgColor: "#222",
      },
      fontFamily: {
        Montserrat: ["Montserrat"],
        Overpass: ["Overpass"],
        SourceCodePro: ["SourceCodePro"],
      },
    },
  },
  plugins: [],
};
