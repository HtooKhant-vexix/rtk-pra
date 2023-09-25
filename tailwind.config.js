/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      primary: "#7689de",
      white:"#ffffff"
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};

