module.exports = {
  content: ['index.html', './src/**/*.{js,jsx,ts,tsx,vue,html}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        terciary: 'var(--terciary)',
        neutral: 'var(--neutral)',
        neutralLight: 'var(--neutralLight)',
      },
    },
  },
  plugins: [],
};
