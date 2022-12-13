/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#aa1d4e",
        secondary: "#1a5a95",
        background: "#f8e9bb",
        contrast: "#170312",
        blend: "#4d3e3e",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        beldaCon: ["belda-condensed", "sans-serif"],
        beldaExt: ["belda-extended", "sans-serif"],
        belda: ["belda-normal", "sans-serif"],
        josefin: ["Josefin Slab", "sans-serif"],
        roboto: ["Roboto Slab", "sans-serif"],
        zilla: ["Zilla Slab", "sans-serif"],
      },
      animation: {
        loaderBg: `loaderBg 0.2s ease-in forwards 2.0s`,
        loaderRight: `loaderRight 1s cubic-bezier(.99,-0.51,1,.53) forwards 1s`,
        loaderRight: `loaderRight 1s cubic-bezier(.99,-0.51,1,.53) forwards 1s`,
        loaderLeft: `loaderLeft 1s cubic-bezier(.99,-0.51,1,.53) forwards 1s`,
        navbarMobile: `navbarMobile 0.4s ease-in forwards`,
        barberPoleLeft: `barberPoleLeft 0.7s ease-in forwards 0.3s`,
        barberPoleRight: `barberPoleRight 0.7s ease-in forwards 0.3s`,
        price: `price 0.7s ease-in forwards 0.3s`,
      },
      keyframes: {
        loaderBg: {
          "0%": { opacity: "1" },

          "100%": { opacity: "0"},
        },
        loaderRight: {
          "0%": { opacity: "1" },

          "100%": { opacity: "1", transform: "translate(59vh)" },
        },
        loaderLeft: {
          "0%": { opacity: "1" },

          "100%": { opacity: "1", transform: "translate(-59vh)" },
        },
        navbarMobile: {
          "0%": { opacity: "0", transform: "translate(-20%)" },

          "100%": { opacity: "1" },
        },
        barberPoleLeft: {
          "0%": { opacity: "0", transform: "translate(350%)" },
          "20%": { opacity: "0.8" },
          "100%": { opacity: "1", transform: "translate(0%)" },
        },
        barberPoleRight: {
          "0%": { opacity: "0", transform: "translate(-350%)" },
          "20%": { opacity: "0.8" },
          "100%": { opacity: "1", transform: "translate(0%)" },
        },
        price: {
          "0%": { opacity: "0" },
          "40%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1024px",
      lg: "1200px",
      xl: "1700px",
      xxl: "3000px",
    },
  },
  plugins: [require("flowbite/plugin")],
};
