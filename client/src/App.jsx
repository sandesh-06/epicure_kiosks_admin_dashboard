import { Header } from "./components";
import { Outlet } from "react-router-dom";
import { data, ingredientData, recipeData, dispenserData } from "./data/data";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const saveDataToLocalStorage = () => {
      localStorage.setItem("machines", JSON.stringify(data));
      localStorage.setItem("ingredients", JSON.stringify(ingredientData));
      localStorage.setItem("recipes", JSON.stringify(recipeData));
      localStorage.setItem("dispensers", JSON.stringify(dispenserData));
      setLoading(false); 
    };

    saveDataToLocalStorage(); 
  }, []);

  return (
    <>
      <Header />
      <main className="pt-16 min-h-screen bg-[#141414] custom-scrollbar">
        {loading ? ( 
          <div className="flex justify-center items-center h-full">
            <p className="text-white">Loading...</p>
          </div>
        ) : (
          <Outlet /> 
        )}
      </main>
    </>
  );
}

export default App;
