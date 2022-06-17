import React from "react";
import "./components/style.css";
import Meal from "./components/meal";
import Recipe from "./components/recipe";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Meal />} />
        <Route exact path="/:recipeId" element={<Recipe />} />
      </Routes>
    </>
  );
}

export default App;
