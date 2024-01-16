/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{html,ts,tsx,js}",],
  theme: {
    extend: {
      // colors: {
      //   "text-dark": "rgb(var(--color-content) / <alpha-value>)",
      //   "bg-dark": "rgb(var(--color-bkg)/<alpha-value>)"
      // }
    },
  },
  darkMode: 'class',
  plugins: [],
}

