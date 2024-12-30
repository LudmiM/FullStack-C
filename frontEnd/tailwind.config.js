/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'my-yellow': '#DDEE7B',
        'my-black': '#2A2A2A',
        'my-light-gray': '#F4F4F5',
        'my-second-yellow': '#BECF5D',
      },
      fontFamily: {
        'playwrite': ['"Playwrite CO Guides"', 'serif'],
      },
    },
  },
  plugins: [],
}

