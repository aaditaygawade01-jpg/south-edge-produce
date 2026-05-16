/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        olive: {
          deep: '#3D4A2E',
          mid: '#5C6B3E',
          light: '#8A9B6E',
          pale: '#B8C9A0',
        },
        warm: {
          white: '#FAFAF7',
          cream: '#F2F0EB',
        },
        charcoal: {
          deep: '#1C2018',
          mid: '#2E3528',
          light: '#4A5240',
        },
        earth: {
          warm: '#8B7355',
          mid: '#A08B6E',
          light: '#C4AD90',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(to bottom, rgba(28,32,24,0.40) 0%, rgba(28,32,24,0.65) 55%, rgba(28,32,24,0.82) 100%)',
        'gradient-olive': 'linear-gradient(135deg, #3D4A2E, #5C6B3E, #8A9B6E)',
        'gradient-dark': 'linear-gradient(135deg, #1C2018, #2E3528, #3D4A2E)',
        'gradient-cta': 'linear-gradient(135deg, #2E3528, #3D4A2E, #5C6B3E)',
      },
      boxShadow: {
        'soft': '0 4px 24px rgba(28,32,24,0.08)',
        'mid': '0 8px 32px rgba(28,32,24,0.14)',
        'strong': '0 16px 48px rgba(28,32,24,0.22)',
        'olive': '0 8px 32px rgba(61,74,46,0.25)',
        'hover': '0 20px 60px rgba(28,32,24,0.28)',
      }
    },
  },
  plugins: [],
}
