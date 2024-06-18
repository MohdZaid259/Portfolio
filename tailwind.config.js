/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '7/10-screen': '70vh',
        '24-screen':'24vh'
      },
      margin: {
        '32rem': '32rem',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.no-scrollbar': {
          '-ms-overflow-style': 'none',  
          'scrollbar-width': 'none',     
        },
        '.no-scrollbar::-webkit-scrollbar': {
          display: 'none',  
        },
      });
    },
  ],
}