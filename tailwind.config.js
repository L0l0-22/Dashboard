/* eslint-disable no-undef */
// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: '#1E1E1E',
        mainHover: '#333333',        
        redS: '#d7050a',        
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideOut: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        slide: 'slideIn 3s ease-in-out infinite, slideOut 3s ease-in-out infinite',
      },
       fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide' ,'tailwindcss-rtl' )],

}
