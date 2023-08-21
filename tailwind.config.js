/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["index.html", "./src/**/*.{js,html}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
        montserrat: ["Montserrat"],
      },
      screen: {
        xl: "1262px",
      },
      colors: {
        transparent: "transparent",
        black: "#111111",
        white: "#ffffff",
        green: "#1B5B31",
        lightgrey: "#F5F0EC",
        beige: "#DCC1AB",
      },
      container: {
        center: true,
      },
      fontSize: {
        invisible: "0",
        xs: "12px",
        sm: "14px",
        base: "16px",
        l: "28px",
        xl: "48px",
        xxl: "60px",
      },
      backgroundImage: {
        white_arrow: "url('./assets/icons/white_arrow.svg')",
        green_arrow: "url('./assets/icons/green_arrow.svg')",
        black_arrow: "url('./assets/icons/black_arrow.svg')",
        arrow_nav: "url('./assets/icons/arrow_nav.svg')",
        bold_arrow: "url('./assets/icons/bold_arrow.svg')",
        eye: "url('./assets/icons/eye.svg')",
        stars: "url('./assets/icons/stars.svg')",
        search: "url('./assets/icons/search.svg')",
        project: "url('./assets/icons/project.svg')",
      },
    },
  },
  plugins: [],
};
