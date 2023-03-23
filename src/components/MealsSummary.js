import React from "react";

const MealsSummary = (props) => {
  return (
    <section className="bg-orange-900 text-white mt-10 text-lg text-center w-[90%] relative rounded-xl p-4 shadow-lg m-auto max-w-[45rem]">
      <h2 className="text-4xl mb-8 font-bold mt-2">
        Delicious Food, Delivered To You
      </h2>
      <p className="mx-6">
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p className="mb-2 mx-6">
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </section>
  );
};

export default MealsSummary;
