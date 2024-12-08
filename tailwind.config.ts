import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary colors
        primary: {
          50: '#F8F6F9',  // Lightest
          100: '#F0E6EC',
          200: '#E8E1F0',
          300: '#B1B3CE', // French gray
          400: '#9A78AB', // African Violet
          500: '#5B4886', // Ultra Violet
          600: '#541D67', // Eminence
          700: '#B62D71', // Magenta dye
        },
        // Text colors
        text: {
          primary: '#000000',   // For main headings
          secondary: '#541D67', // For subheadings
          body: '#4A4A4A',      // For body text
        },
        // Background colors
        background: {
          primary: '#FFFFFF',
          secondary: '#F8F6F9',
          accent: '#F0E6EC',
        }
      }
    }
  },
  plugins: [],
}

export default config
