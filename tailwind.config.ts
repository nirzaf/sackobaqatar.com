import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f5f7',
          100: '#e8e8ed',
          200: '#d2d2d9',
          300: '#a1a1a7',
          400: '#86868b',
          500: '#6e6e73',
          600: '#1d1d1f',
          700: '#000000',
        },
        accent: {
          50: '#f1f8ff',
          100: '#e2f0ff',
          200: '#baddff',
          300: '#7cc0ff',
          400: '#369eff',
          500: '#0080ff',
          600: '#0066cc',
          700: '#004d99',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
