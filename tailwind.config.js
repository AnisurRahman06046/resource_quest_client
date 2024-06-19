/** @type {import('tailwindcss').Config} */
import flowbitePlugin from "flowbite/plugin";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors:{
        "nav-clr":"#2C2C2C",
        "footer-clr":"#2C2C2C"
      }
    },
  },
  plugins: [flowbitePlugin],
};
