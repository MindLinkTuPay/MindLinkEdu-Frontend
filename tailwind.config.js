const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundSize: {
        'size-100': '100% 100%',
        'size-200': '200% 200%',
      },
      backgroundPosition: {
        'pos-0': '0% 0%',
        'pos-50': '50% 50%',
        'pos-100': '100% 100%',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: defaultTheme.colors.black,
        white: defaultTheme.colors.white,
        background: '#FEFEFE',
        text: {
          1: '#3A3A3A',
          2: '#8D8D8D',
          3: '#EAEAEA',
          4: '#F9F9F9',
        },
        ml: '#FF6300',
        green: '#10B981',
        red: '#E83C59',
      },
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        lg: '1rem',
        xl: '1rem',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide'), require('tailwind-scrollbar')],
};