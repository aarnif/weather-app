/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["./dist/*.html", "./src/**/*.js"],
  theme: {
    extend: {
      keyframes: {
        emergeFromUp: {
          "0%": { opacity: "0", transform: "translateY(-50px)" },
          "50%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        emergeFromDown: {
          "0%": { opacity: "0", transform: "translateY(50px)" },
          "50%": { opacity: "0", transform: "translateY(50px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        emergeFromLeft: {
          "0%": { opacity: "0", transform: "translateX(-50px)" },
          "50%": { opacity: "0", transform: "translateX(-50px)" },
          "75%": { opacity: "0", transform: "translateX(-50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        emergeFromRight: {
          "0%": { opacity: "0", transform: "translateX(50px)" },
          "50%": { opacity: "0", transform: "translateX(50px)" },
          "75%": { opacity: "0", transform: "translateX(50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        "emerge-up": "emergeFromUp 1s ease-in-out",
        "emerge-down": "emergeFromDown 1s ease-in-out",
        "emerge-left": "emergeFromLeft 1s ease-in-out",
        "emerge-right": "emergeFromRight 1s ease-in-out",
      },
      backgroundImage: {
        default: "url('assets/images/backgrounds/default.png')",
      },
    },
  },
  plugins: [],
};
