/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'phanton' : '#5763a5',
      'lightpurple': '#9ba9eb',
      'darkpurple': '#454f84',
      'blue': '#0b69ff',
      'gray': '#818589 ',
      'lightgray': '#ECECEC ',
      'yellow': '#FFFF00',
      'red': '#FF0000',
    }
  },
  plugins: [],
}
