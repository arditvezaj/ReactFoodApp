import React, { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./pages/Root";
import Header from "./components/UI/Header";
import Meals from "./components/Meals/Meals";
import MealsSummary from "./components/Meals/MealsSummary";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import Login from "./components/Login";
import ErrorPage from "./pages/ErrorPage";
import Menu from "./pages/Menu";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <Header /> },
      { path: "login", element: <Login /> },
      { path: "menu", element: <Menu /> },
    ],
  },
]);

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
    localStorage.setItem("token", "id");
  };

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("token", "id");
  };

  useEffect(() => {
    if (localStorage.getItem("token", "id")) {
      setIsAuth(true);
    }
  }, []);

  return (
    <CartProvider>
      <RouterProvider router={router}>
        {isAuth && cartIsShown && <Cart hideCart={hideCartHandler} />}
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
      </RouterProvider>
    </CartProvider>
  );
}

export default App;
