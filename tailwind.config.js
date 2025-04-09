module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {
      animation: {
        slideLeft: 'slideLeft .5s forwards cubic-bezier(0.33, 0.67, 0.31, 1) 0s',
        slideRight: 'slideRight .7s forwards cubic-bezier(0.33, 0.67, 0.31, 1) .5s',
        slideBottom: 'slideBottom .7s forwards cubic-bezier(0.33, 0.67, 0.31, 1) .9s',
        sunrise: 'sunrise 3s forwards ease-out',
      },
      keyframes: {
        slideLeft: {
          '0%': { opacity: '0', transform: 'translateX(-100%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(100%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideBottom: {
          '0%': { opacity: '0', transform: 'translateY(100%)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        sunrise: {
          '0%': { transform: 'translate(-50%, 800px)' },
          '100%': { transform: 'translate(-50%, 350px)' },
        },
      },
      colors: {
        blue: 'rgb(61, 111, 163)',
        white: 'rgb(255, 255, 255)',
        light_grey: 'hsl(240, 3.30%, 23.80%)',
        dark_grey: '#2c2c2f',
        text_light: '#eff3f5',
        text_dark: 'rgb(48, 48, 48)',
      },
      backgroundImage: {
        blue_gradient: 'linear-gradient(180deg, rgba(9,92,148,1) 0%, rgba(235,235,235,1) 100%)',
      },
      fontFamily: {
        electrolize: ['Electrolize', 'monospace'],
      },
      fontSize: {
        header: '2.25rem',
        subheader: '2rem',
        paragraph: '1.2rem',
        description: '1.25rem',
      },
    },
  },
  plugins: [],
}
