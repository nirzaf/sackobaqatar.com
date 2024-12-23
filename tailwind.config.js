/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          300: '#9A78AB',
          400: '#8A68AB',
          500: '#7A58AB',
          600: '#541D67',
          700: '#441D57',
          800: '#341D47'
        }
      },
      fontFamily: {
        'old-english': ['UnifrakturMaguntia', 'serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
