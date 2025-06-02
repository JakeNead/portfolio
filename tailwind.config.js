module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {
      animation: {
        slideLeft: 'slideLeft .5s forwards cubic-bezier(0.33, 0.67, 0.31, 1) 0s',
        slideRight: 'slideRight .7s forwards cubic-bezier(0.33, 0.67, 0.31, 1) .5s',
        slideBottom: 'slideBottom .7s forwards cubic-bezier(0.33, 0.67, 0.31, 1) .9s',
        sunrise: 'sunrise 3s forwards ease-out',
        backgroundCloud: 'cloud 35s linear infinite',
        midgroundCloud: 'cloud 28s linear infinite',
        foregroundCloud: 'cloud 21s linear infinite',
        backgroundCloudSingle: 'cloudSingle 35s forwards linear ',
        midgroundCloudSingle: 'cloudSingle 28s forwards linear',
        foregroundCloudSingle: 'cloudSingle 21s forwards linear',
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
        cloud: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(180vw)' },
        },
        cloudSingle: {
          '0%': { opacity: '1', transform: 'translateX(0)' },
          '99%': { opacity: '1', transform: 'translateX(180vw)' },
          '100%': { opacity: '0', transform: 'translateX(180vw)' },
        },
      },
      colors: {
        blue: 'rgb(57 111 169)',
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
