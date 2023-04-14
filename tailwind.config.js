/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/App.js",
    "./src/components/UI/Header.js",
    "./src/components/Login.js",
    "./src/components/Meals/Meals.js",
    "./src/components/Meals/MealItem.js",
    "./src/components/Meals/MealsSummary.js",
    "./src/components/UI/Modal.js",
    "./src/components/Cart/Cart.js",
    "./src/components/Cart/CartItem.js",
    "./src/components/Cart/Checkout.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
