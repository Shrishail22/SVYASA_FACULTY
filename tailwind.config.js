/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "var(--font-sans)",
        display: "var(--font-display)",
      },
      colors: {
        brand: "var(--color-brand)",
        "brand-2": "var(--color-brand-2)",
        maroon: "var(--color-maroon)",
        "maroon-hover": "var(--color-maroon-hover)",
        "maroon-pale": "var(--color-maroon-pale)",
        "maroon-dark": "var(--color-maroon-dark)",
      },
    },
  },
  plugins: [],
}
