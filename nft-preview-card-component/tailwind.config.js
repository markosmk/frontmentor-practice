module.exports = {
  content: ['index.html', './src/**/*.{js,jsx,ts,tsx,vue,html}'],
  theme: {
    extend: {
      colors: {
        primarySoft: 'var(--primary-soft)',
        primaryCyan: 'var(--primary-cyan)',
        neutralBack: 'var(--neutral-back)',
        neutralCard: 'var(--neutral-card)',
        neutralLine: 'var(--neutral-line)',
        neutralWhite: 'var(--neutral-white)',
      },
    },
  },
  plugins: [],
};
