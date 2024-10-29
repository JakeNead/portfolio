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
      },
    },
  },
  plugins: [],
};
