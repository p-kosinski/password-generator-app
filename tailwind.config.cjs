/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    colors: {
      'red': 'hsla(0, 90%, 63%, 1)',
      'orange': 'hsla(13, 96%, 67%, 1)',
      'yellow': 'hsla(42, 91%, 69%, 1)',
      'green': 'hsla(127, 100%, 82%, 1)',
      'light': 'hsla(252, 11%, 91%, 1)',
      'grey-light': 'hsla(252, 9%, 53%, 1)',
      'grey-dark': 'hsla(247, 11%, 15%, 1)',
      'dark': 'hsla(248, 15%, 11%, 1)',
    },
    fontFamily: {
      main: ['JetBrains Mono', 'monospace'],
      italic: ['JetBrains Mono Italic', 'monospace'],
    }
  },
  plugins: [],
}
