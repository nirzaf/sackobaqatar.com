import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '475px',
      },
      fontFamily: {
        'lato': ['Lato', 'sans-serif'],
      },
      colors: {
        red: {
          DEFAULT: '#FF0000',
          100: '#330000',
          200: '#660000',
          300: '#990000',
          400: '#CC0000',
          500: '#FF0000',
          600: '#FF3333',
          700: '#FF6666',
          800: '#FF9999',
          900: '#FFCCCC',
        },
        fandango: {
          DEFAULT: '#A1247E',
          100: '#200719',
          200: '#410F33',
          300: '#61164C',
          400: '#821D65',
          500: '#A1247E',
          600: '#D134A5',
          700: '#DC67BB',
          800: '#E89AD2',
          900: '#F3CCE8',
        },
        egyptianBlue: {
          DEFAULT: '#1A3A9A',
          100: '#050C1F',
          200: '#0A173D',
          300: '#10235C',
          400: '#152E7A',
          500: '#1A3A9A',
          600: '#234FD1',
          700: '#5578E2',
          800: '#8EA5EC',
          900: '#C6D2F5',
        },
        periwinkle: {
          DEFAULT: '#B2B3D0',
          100: '#1D1E30',
          200: '#3B3C60',
          300: '#585A90',
          400: '#8385B3',
          500: '#B2B3D0',
          600: '#C2C3DA',
          700: '#D1D2E3',
          800: '#E1E1EC',
          900: '#F0F0F6',
        },
        columbiaBlue: {
          DEFAULT: '#D0ECF7',
          100: '#0D3B4E',
          200: '#1A779B',
          300: '#34ADDD',
          400: '#81CCEA',
          500: '#D0ECF7',
          600: '#D9EFF8',
          700: '#E2F3FA',
          800: '#ECF7FC',
          900: '#F5FBFD',
        },
        black: {
          DEFAULT: '#000000',
          100: '#000000',
          200: '#000000',
          300: '#000000',
          400: '#000000',
          500: '#000000',
          600: '#333333',
          700: '#666666',
          800: '#999999',
          900: '#CCCCCC',
        },
        // Legacy color mappings for backward compatibility
        primary: {
          50: '#F0F0F6',   // periwinkle-900
          100: '#E1E1EC',  // periwinkle-800
          200: '#D1D2E3',  // periwinkle-700
          300: '#C2C3DA',  // periwinkle-600
          400: '#B2B3D0',  // periwinkle-500
          500: '#A1247E',  // fandango-500
          600: '#821D65',  // fandango-400
          700: '#61164C',  // fandango-300
        },
        // Text colors
        text: {
          primary: '#000000',   // black
          secondary: '#A1247E', // fandango
          body: '#1D1E30',      // periwinkle-100
        },
        // Background colors
        background: {
          primary: '#FFFFFF',
          secondary: '#F5FBFD', // columbiaBlue-900
          accent: '#ECF7FC',    // columbiaBlue-800
        }
      }
    }
  },
  plugins: [],
}

export default config
