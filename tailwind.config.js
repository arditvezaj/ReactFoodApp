/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/App.js",
    "./src/components/Header.js",
    "./src/components/Login.js",
    "./src/components/Meals.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "background-image": "url('/src/assets/img/background.jpg')",
      },
    },
  },
  plugins: [],
};
