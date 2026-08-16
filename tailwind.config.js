/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "var(--color-ink)",
        surface: "var(--color-surface)",
        raised: "var(--color-raised)",
        hairline: "var(--color-hairline)",
        hi: "var(--color-hi)",
        lo: "var(--color-lo)",
        copper: "var(--color-copper)",
        signal: "var(--color-signal)",
        onaccent: "var(--color-onaccent)",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
    },
    screens: {
      mobile: "340px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
