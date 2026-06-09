/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0D0D0D',
        gold: '#C8A24A',
        mist: '#F3F2EF',
        graphite: '#2E2E2E',
        brand: {
          black: '#0D0D0D',
          white: '#FFFFFF',
          gold: '#C8A24A',
          gray: '#F3F2EF',
          graphite: '#2E2E2E',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 24px 70px rgba(13, 13, 13, 0.12)',
      },
    },
  },
  plugins: [],
};
