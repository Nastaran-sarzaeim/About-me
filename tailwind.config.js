/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-green": "#9BB0A9",
        "background-main": "#FFFDF6",
        "light-purple": "#775577",
        "light-gray": "#99978C",
      },
    },
  },
  plugins: [],
};
