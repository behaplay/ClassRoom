const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      animation: {
        "rotate-vert-center": "rotate-vert-center 1.3s cubic-bezier(0.455, 0.030, 0.515, 0.955)  infinite both"
    },
    keyframes: {
        "rotate-vert-center": {
            "0%": {
                transform: "rotateY(0)"
            },
            to: {
                transform: "rotateY(360deg)"
            }
        }
    },
      colors: {
        bleck: '#121212',
        sin: 'rgba(33,150,243,.5)',
        jol: '#FFC107',
        kor: '#353535',
        be: '#B0BEC5'
      }
    },
  },
  plugins: [],
}

