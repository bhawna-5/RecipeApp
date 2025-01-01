import Header from "./component/Header";
import { Route, Routes } from "react-router-dom";
 import MealInfo from "./component/MealInfo";
import Body from "./component/Body";
 
function App() {
  return (
    <div className="header ">
      
      <Routes>
        <Route path="*" element={<Body />} />
        <Route path="/:mealid" element={<MealInfo />} />
      </Routes>
     
    </div>
  );
}

export default App;
