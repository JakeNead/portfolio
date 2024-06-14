module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        slideLeft: "slideLeft .5s ease-in-out forwards",
        slideRight: "slideRight .5s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
