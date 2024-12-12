/** @type {import('tailwindcss').Config} */

export const content = ["./src/**/*.{html,js,jsx,ts,tsx}"];
export const theme = {
  extend: {
    colors: {
      primary: '#07300f',
    },
    fontFamily: {
      'marcellus': ['Marcellus', 'serif'],
      'questrial': ['Questrial', 'sans-serif'],
    },
  },
};
export const plugins = [];

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#07370F',
      },
      fontFamily: {
        'marcellus': ['Marcellus', 'serif'],
        'questrial': ['Questrial', 'sans-serif'],
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in forwards',
        slideUp: 'slideUp 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}


