module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        slideLeft: "slideLeft .5s ease-in-out forwards",
        slideRight: "slideRight .5s ease-in-out forwards",
      },
      colors: {
        blue: "rgb(13, 81, 127)",
        white: "rgb(255, 255, 255)",
        light_grey: "#ebebeb",
        text_light: "rgb(239, 243, 245)",
        text_dark: "rgb(48, 48, 48)",
      },
    },
  },
  plugins: [],
};
