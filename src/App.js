import React from "react";

import Header from "./components/UI/Header";
import Meals from "./components/Meals/Meals";
import MealsSummary from "./components/Meals/MealsSummary";

function App() {
  return (
    <div className="">
      <Header />
      <MealsSummary />
      <Meals />
    </div>
  );
}

export default App;
