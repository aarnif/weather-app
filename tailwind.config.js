/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html", "./src/**/*.js"],
  theme: {
    extend: {
      backgroundImage: {
        default: "url('assets/images/backgrounds/default.png')",
      },
    },
  },
  plugins: [],
};
