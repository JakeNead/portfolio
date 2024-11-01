module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        slideLeft: "slideLeft .7s forwards cubic-bezier(0.33, 0.67, 0.31, 1)",
        slideRight:
          "slideRight .7s forwards cubic-bezier(0.33, 0.67, 0.31, 1) .9s",
        slideBottom:
          "slideBottom .7s forwards cubic-bezier(0.33, 0.67, 0.31, 1) 1.9s",
      },
      keyframes: {
        slideLeft: {
          "0%": { opacity: "0", transform: "translateX(-100%)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideRight: {
          "0%": { opacity: "0", transform: "translateX(100%)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideBottom: {
          "0%": { opacity: "0", transform: "translateY(100%)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
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
        electrolize: ["Electrolize", "monospace"],
      },
      fontSize: {
        header: "2.25rem",
        subheader: "2rem",
        paragraph: "1.2rem",
        description: "1.25rem",
      },
    },
  },
  plugins: [],
};
