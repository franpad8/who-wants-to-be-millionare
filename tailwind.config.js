/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Conduit ITC W02 Bold"', ...defaultTheme.fontFamily.sans],
        serif: ['"Copperplate Gothic"', ...defaultTheme.fontFamily.serif]
      },
      colors: {
        transparent: 'transparent',
        primary: '#13106D',
        green: '#51941E',
        orange: {
          300: '#fdba74',
          DEFAULT: '#E18C1D'
        }
      },
      keyframes: {
        blink: {
          '0%': { 'background-color': '#E18C1D' },
          '50%': { 'background-color': '#000000' },
          '100%': { 'background-color': '#E18C1D' }
        }
      },
      animation: {
        blinking: 'blink 1s linear infinite'
      }
    }
  },
  plugins: []
}
