import React from "react";
import { Link } from "react-router-dom";

const MealCard = ({ detail }) => {
  return (
    <div className="meals">
      {!detail
        ? "data not found"
        : detail.map((recipe) => (
            <div key={recipe.idMeal} className="mealImg">
              <img src={recipe.strMealThumb} alt={recipe.strMeal} />
              <p>{recipe.strMeal}</p>
              
              <Link to={`${recipe.idMeal}`}><button>recipe</button></Link>
            </div>
          ))}
    </div>
  );
};

export default MealCard;
