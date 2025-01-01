import { useState, useEffect } from "react";
import MealCard from "./MealCard";

const Body = () => {
  const [search, setSearch] = useState("");
  //const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  // Search function
  // const searchDish = (searchTerm, data) => {
  //   return data.filter((dish) =>
  //     dish.strMeal.toLowerCase().includes(searchTerm.toLowerCase())
  //   );
  // };

  // Fetch data from the API
  const getData = async () => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );
      const json = await response.json();
      const meals = json.meals;
      // setData(meals);
      setFilteredData(meals);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  
  return (
    <>
      <h1 className="head">Food Paradise</h1>
      <div className="searchBar">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search recipes"
        />
        <button onClick={getData}>Search</button>
      </div>
      <div>
        <MealCard detail={filteredData}/>
      </div>
    </>
  );
};

export default Body;
