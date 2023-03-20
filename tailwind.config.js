/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/App.js", "./src/Header.js", "./src/Login.js"],
  theme: {
    extend: {
      backgroundImage: {
        "background-image": "url('/src/assets/img/background.jpg')",
      },
    },
  },
  plugins: [],
};
