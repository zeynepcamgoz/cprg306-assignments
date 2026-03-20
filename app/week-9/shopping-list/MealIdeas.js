"use client";
import { useEffect, useState } from "react";


async function fetchMealIdeas(ingredient) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );

  const data = await response.json();

  return data.meals || [];
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);


  const loadMealIdeas = async () => {
    const mealIdeas = await fetchMealIdeas(ingredient);
    setMeals(mealIdeas);
  };


  useEffect(() => {
    if (ingredient) {
      loadMealIdeas();
    }
  }, [ingredient]);

  return (
    <div className="border border-gray-300 rounded-xl p-5 mt-5 bg-white shadow-md max-w-md">
      <h2 className="text-xl font-semibold mb-3 dark:text-black">Meal Ideas</h2>

      {meals.length === 0 ? (
        <p className="text-gray-500 dark:text-black">No meal found</p>
      ) : (
        <ul className="space-y-2">
          {meals.map((meal) => (
            <li
              key={meal.idMeal}
              className="bg-gray-100 px-3 py-2 rounded-md hover:bg-gray-200 transition dark:text-black"
            >
              {meal.strMeal}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}