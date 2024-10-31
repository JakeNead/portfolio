module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        // slideLeft: "slideLeft .5s ease-in-out forwards",
        // slideRight: "slideRight .5s ease-in-out forwards",
        slideLeft: "slideLeft .7s cubic-bezier(0.33, 0.67, 0.31, 1) forwards",
        slideRight:
          "slideRight .7s  forwards cubic-bezier(0.33, 0.67, 0.31, 1)",
      },
      colors: {
        blue: "rgb(61, 111, 163)",
        white: "rgb(255, 255, 255)",
        light_grey: "#b9b9b9",
        dark_grey: "#2c2c2f",
        text_light: "rgb(239, 243, 245)",
        text_dark: "rgb(48, 48, 48)",
      },
      backgroundImage: {
        blue_gradient:
          "linear-gradient(180deg, rgba(9,92,148,1) 0%, rgba(235,235,235,1) 100%)",
      },
      fontFamily: {
        play: ["play", "sans-serif"],
      },
    },
  },
  plugins: [],
};
