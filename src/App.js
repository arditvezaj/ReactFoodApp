import React from "react";

import Header from "./components/Header";
import Meals from "./components/Meals";
import MealsSummary from "./components/MealsSummary";

function App() {
  return (
    <div className="bg-[#3f3f3f] pb-10">
      <Header />
      <MealsSummary />
      <Meals />
    </div>
  );
}

export default App;
