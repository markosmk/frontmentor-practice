module.exports = {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}"],
  theme: {
    extend: {
      colors: {
        primaryPale: "var(--primary-pale)",
        primaryBri: "var(--primary-bright)",
        neutralPale: "var(--neutral-very-pale)",
        neutralDesa: "var(--neutral-desaturated)",
        neutralDark: "var(--neutral-dark)",
      },
    },
  },
  plugins: [],
};
