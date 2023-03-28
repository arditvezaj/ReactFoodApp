import React from "react";

import Header from "./components/Header";
import Meals from "./components/Meals";
import MealsSummary from "./components/MealsSummary";

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
