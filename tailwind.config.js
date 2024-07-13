/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        derby: {
          100: '#FFEDD8',
        },
        saddle_brown: {
          950: '#583101',
        },
        gold_sand: {
          300: '#e7bc91',
        },
        black: {
          950: '#040404',
        },
        muddy: {
          400: '#bc8a5f',
        },
        gray:{
          700: '#59554F'
        }
      },
    },
  },
  plugins: [],
};
