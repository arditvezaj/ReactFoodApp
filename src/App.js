import React, { useState } from "react";

import Header from "./components/UI/Header";
import Meals from "./components/Meals/Meals";
import MealsSummary from "./components/Meals/MealsSummary";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import Login from "./components/Login";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [isAuth, setIsAuth] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const login = () => {
    setIsAuth(true);
  };

  const logout = () => {
    setIsAuth(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart hideCart={hideCartHandler} />}
      <Header
        showCart={showCartHandler}
        isAuth={isAuth}
        login={login}
        logout={logout}
      />
      {isAuth ? (
        <main className="mt-40">
          <MealsSummary />
          <Meals />
        </main>
      ) : (
        <Login login={login} />
      )}
    </CartProvider>
  );
}

export default App;
