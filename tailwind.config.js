module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: { padding: { "fluid-video": "56.25%" } },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'main': '#12355B',
      'black':'#000000',
      'tahiti': {
        100: '#cffafe',
        200: '#a5f3fc',
        300: '#67e8f9',
        400: '#22d3ee',
        500: '#06b6d4',
        600: '#0891b2',
        700: '#0e7490',
        800: '#155e75',
        900: '#164e63',
      },
      'button': {
        'disabled': '#cffafe',
        'main': '#a5f3fc',
        'hover': '#67e8f9',
        'active': '#22d3ee',
      },
      'orange':'#FF570A',
      'crimson': {
        500:'#D72638'
      },
      'focus':'#D72638',
      'loading':'#D72638',
   
      'light': '#cffafe',
      'dark': '#164e63',
      'muted': '#a5f3fc',
      'offwhite': '#dddddd',
      


    },
  },
};
