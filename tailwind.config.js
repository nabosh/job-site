/** @format */

const colors = require("tailwindcss/colors");

module.exports = {
  purge: [],
  darkMode: "class", // false or 'media'
  theme: {
    extend: {
      colors: {
        lime: colors.lime,
        emerald: colors.emerald,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
