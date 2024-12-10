/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#F4F7FB',
        'secondary': '#635BFF',
      },
      width: {
        'sidebarWidth': '80px',
        'contentWidth': 'calc(100vw - 80px)',
      },
      spacing: {
        'sidebarWidth': '80px',
      },
      boxShadow: {
        'cardShadow': '0px 0px 11px 4px rgba(0,0,0,0.3);',
      }
      
    },
  },
  plugins: [],
}

