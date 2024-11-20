/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'geologica': ['Geologica', 'sans-serif'],
    },
    colors: {
      'dark-gray': '#1b1b1b',
      'light-gray': '#adadad',  
      'ligh-red':'#ad040f',
      'glass-black':'#262626',
      'ok-red':'#da4e4b',
      'back':'#adadad',
      'whitish':'#FFFFFF',
    }
  },
  plugins: [],
}