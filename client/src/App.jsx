import { Header } from "./components";
import { Outlet } from "react-router-dom";
import { data, ingredientData, recipeData, dispenserData } from "./data/data";
import { useEffect } from "react";
function App() {
  // Save data to localStorage
  useEffect(() => {
    localStorage.setItem("machines", JSON.stringify(data));
    localStorage.setItem("ingredients", JSON.stringify(ingredientData));
    localStorage.setItem("recipes", JSON.stringify(recipeData));
    localStorage.setItem("dispensers", JSON.stringify(dispenserData));
  }, []);


  return (
    <>
      <Header />
      <main className="pt-16 min-h-screen bg-[#141414] custom-scrollbar">
       {localStorage.getItem("machines") && <Outlet />}
      </main>
    </>
  );
}

export default App;
