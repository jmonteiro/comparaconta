/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./helpers/**/*.*",
    "./layouts/**/*.*",
    "./models/**/*.*",
    "./pages/**/*.*",
    "./partials/**/*.*"
  ],
  darkMode: "class",
  future: {
    // Only apply hover styles on devices that actually support hovering, so a
    // tap on mobile doesn't leave a row stuck in its hover state.
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
