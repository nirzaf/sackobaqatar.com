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
          100: '#e0f0ff',
          200: '#2997ff',
          300: '#0071e3',
          400: '#0077ed',
          500: '#06c',
        }
      },
      fontFamily: {
        sans: ['"SF Pro Display"', 'Inter var', 'system-ui', 'sans-serif'],
        display: ['"SF Pro Display"', 'Inter var', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '2xs': '0.7rem',
        'display-xl': ['80px', { lineHeight: '1.05', letterSpacing: '-0.015em', fontWeight: '700' }],
        'display-lg': ['48px', { lineHeight: '1.05', letterSpacing: '-0.015em', fontWeight: '700' }],
        'display-md': ['40px', { lineHeight: '1.1', letterSpacing: '-0.015em', fontWeight: '600' }],
      },
      animation: {
        'fade-up': 'fade-up 0.8s ease-out forwards',
        'fade-down': 'fade-down 0.8s ease-out forwards',
        'scale-up': 'scale-up 0.4s ease-out forwards',
        'blur-in': 'blur-in 0.6s ease-out forwards',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-down': {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-up': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'blur-in': {
          '0%': { opacity: '0', filter: 'blur(10px)' },
          '100%': { opacity: '1', filter: 'blur(0)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
