/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,scss,css,vue}"],
  theme: {
    fontFamily: {
      sans: ["Comfortaa", "cursive"],
    },
    extend: {
      colors: {
        peach: {
          DEFAULT: "#FEB59F",
          50: "#FFE4DC",
          100: "#FED4C7",
          200: "#FEB59F",
          300: "#FD8A67",
          400: "#FD5F30",
          500: "#F23A03",
          600: "#BB2D02",
          700: "#831F01",
          800: "#4C1201",
          900: "#140500",
        },
        rose: {
          DEFAULT: "#FEAAF0",
          50: "#FFE6FB",
          100: "#FED2F7",
          200: "#FEAAF0",
          300: "#FD73E6",
          400: "#FD3BDC",
          500: "#FC04D3",
          600: "#C502A5",
          700: "#8E0276",
          800: "#560148",
          900: "#1F001A",
        },
        atomic: {
          DEFAULT: "#942C66",
          50: "#EAB7D3",
          100: "#E5A7CA",
          200: "#DC88B6",
          300: "#D268A3",
          400: "#C94990",
          500: "#B3357C",
          600: "#942C66",
          700: "#691F48",
          800: "#3E122A",
          900: "#12050D",
        },
        plum: {
          DEFAULT: "#503871",
          100: "#dcd7e3",
          200: "#b9afc6",
          300: "#9688aa",
          400: "#73608d",
          500: "#503871",
          600: "#402d5a",
          700: "#302244",
          800: "#20162d",
          900: "#100b17",
        },
        blue: {
          DEFAULT: '#065C9D',
          50: '#62B8F9',
          100: '#4EAFF9',
          200: '#269DF7',
          300: '#098AEC',
          400: '#0773C5',
          500: '#065C9D',
          600: '#044576',
          700: '#032E4F',
          800: '#011727',
          900: '#000000'
        },
        indigo: {
          DEFAULT: "#006CC8",
          50: "#80C5FF",
          100: "#6CBCFF",
          200: "#43A9FF",
          300: "#1A96FF",
          400: "#0082F0",
          500: "#006CC8",
          600: "#00569F",
          700: "#004076",
          800: "#00223E",
          900: "#000306",
        },
      },
    },
  },
  plugins: [],
};