/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    screens: {
      'xs': '400px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1855px',
    },
    extend: {
      boxShadow: {
        'custom': 'rgba(0, 0, 0, 0.3) 0px -30px 40px 0px inset, rgba(0, 0, 0, 0.3) 0px -50px 50px 0px inset, rgba(0, 0, 0, 0.25) 0px -100px 60px 0px inset, rgba(0, 0, 0, 0.15) 0px 4px 2px, rgba(0, 0, 0, 0.2) 0px 8px 4px, rgba(0, 0, 0, 0.2) 0px 16px 8px, rgba(0, 0, 0, 0.2) 0px 32px 16px',
        'custom-nav': 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset',
      },

    },
  },
  plugins: [],
}
