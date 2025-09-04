/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",          // root-level HTML files
    "./**/*.html",       // any nested HTML files
    "./assets/**/*.{js,ts,jsx,tsx}" // optional: if you ever use JS/TS with Tailwind
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
