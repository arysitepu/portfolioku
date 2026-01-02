/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ['index.html'],
  content: [
    './*.html',
    './**/*.html',
  ],
  safelist: ['w-5', 'h-5', 'fill-current'],
  theme: {
    container:{
      center: true,
      padding: '16px',
    },
    extend: {
      colors:{
        primary: '#14b8a6',
        secondary: '#64748b',
        dark: '#0f172a',
      },
      screens: {
        '2xl' : '1230px',
      }
    },
  },
  plugins: [],
}

