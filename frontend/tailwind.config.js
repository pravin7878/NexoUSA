/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        bebas: ["Bebas Neue", "cursive"],
        noto: ["Noto Sans", "sans-serif"],
      },
      keyframes: {
        scaleUp: {
          "0%": {
            transform: "scale(0.5)",
          },
          "100%": { transform: "scale(1)" },
        },
        slideIn: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideOut: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        scaleUp: "scaleUp 1s ease-in-out",
        slideInLeft: "slideIn 1.2s ease-in-out",
        slideInRight: "slideOut 1.2s ease-in-out",
      },
      // colors: {
      //   themeCol: "#fb8500"
      // }
    },
  },
  plugins: [],
};