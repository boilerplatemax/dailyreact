module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      padding: { 'fluid-video': '56.25%' },
      animation: {
        fadein1: 'fadeOut 1s ease-in-out',
        fadein2: 'fadeOut 2s ease-in-out',
        fadein3: 'fadeOut 3s ease-in-out'
      },
      keyframes: (theme) => ({
        fadeOut: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        }
      })
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      main: '#12355B',
      black: '#000000',
      tahiti: {
        100: '#cffafe',
        200: '#a5f3fc',
        300: '#67e8f9',
        400: '#22d3ee',
        500: '#06b6d4',
        600: '#0891b2',
        700: '#0e7490',
        800: '#155e75',
        900: '#164e63'
      },
      palette: {
        dark: '#042135',
        main: '#12355B',
        light: '#436d9c',
        paleblue: '#cffafe',
        orange: '#FF570A',
        crimson: '#D72638'
      },
      button: {
        disabled: '#cffafe',
        main: '#a5f3fc',
        hover: '#67e8f9',
        active: '#22d3ee'
      },
      orange: '#FF570A',

      focus: '#D72638',
      loading: '#D72638',

      dark: '#164e63',
      muted: '#999999',
      offwhite: '#dddddd'
    }
  }
};
