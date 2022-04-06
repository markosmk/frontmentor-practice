module.exports = {
  content: ['index.html', './src/**/*.{js,jsx,ts,tsx,vue,html}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        darkElements: 'var(--darkElements)',
        darkBg: 'var(--darkBg)',
        lightText: 'var(--lightText)',
        lightInput: 'var(--lightInput)',
        lightBg: 'var(--lightBg)',
      },
    },
  },
  plugins: [],
};
