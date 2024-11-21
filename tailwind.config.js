/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./helpers/**/*.*",
    "./layouts/**/*.*",
    "./models/**/*.*",
    "./pages/**/*.*",
    "./partials/**/*.*"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
}
