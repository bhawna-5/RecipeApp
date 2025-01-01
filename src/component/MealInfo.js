import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const MealInfo = () => {
  const { mealid } = useParams();
  const [info, setInfo] = useState(null); // Initialize as null to check loading state

  const getInfo = async () => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`
      );
      const jsonData = await response.json();
      if (jsonData.meals) {
        setInfo(jsonData.meals[0]); // Set the fetched data to state
      } else {
        setInfo(null); // Handle case where no meal is found
      }
    } catch (error) {
      console.error("Error fetching meal info:", error);
    }
  };

  // Use useEffect to fetch data when mealid changes
  useEffect(() => {
    if (mealid) {
      getInfo();
    }
  }, [mealid]);
  const getIngredients = (meal) => {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      if (ingredient) {
        ingredients.push(ingredient);
      }
    }
    return ingredients;
  };
  return (
    <div>
      {!info ? (
        <p>Loading...</p>
      ) : (
        <div className="mealInfo">
          <img src={info.strMealThumb} alt={info.strMeal} />
          <div className="info">
            {/* <h1>Recipe Detail</h1> */}
            <h1>{info.strMeal}</h1>
            <h3>
              <b>Ingredients:</b>
            </h3>
            <ul>
              {getIngredients(info).map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <h3>Instructions</h3>
            <p>{info.strInstructions}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MealInfo;
