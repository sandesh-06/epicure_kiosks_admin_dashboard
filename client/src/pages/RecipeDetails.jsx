import React, { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { IngredientForm, Modal,  Table } from "../components";
const RecipeDetails = () => {
  const ingredientsColumns = [
    { headerName: "Ingredient ID", field: "ingredientId" },
    { headerName: "Ingredient Name", field: "ingredientName" },
    { headerName: "Quantity(grams)", field: "quantity" },
    { headerName: "Actions", field: "action" },
  ];
  const [showIngredientForm, setShowIngredientForm] = useState(false);
  const [selectedIngredient, setSelectedIngredient] = useState("");

  const { machineId, recipeId } = useParams();
  const machines = JSON.parse(localStorage.getItem("machines"));

  const recipeDetails = useMemo(() => {
    const selectedMachine = machines.find((m) => m.machineId === machineId);
    // console.log(selectedMachine)

    if (selectedMachine) {
      return selectedMachine.recipes.find((r) => r.recipeId === recipeId);
    }

    return null;
  }, [machineId, recipeId, machines]);

  const handleIngredientEdit = (ingredient) => {
    setSelectedIngredient(ingredient);
    setShowIngredientForm(true);
  };

  return (
    <div className="container mx-auto p-8 text-white min-h-screen">
      {/* Recipe Info Section */}
      <div className="mb-8 flex flex-col gap-2">
        <div className="w-full flex justify-between items-center">
          <h2 className="text-3xl md:text-5xl font-semibold mb-2">
            {recipeDetails?.recipeName}
          </h2>
          {/* <button
            className="h-8 rounded-lg px-2 text-sm font-medium bg-[#6EE7B7] hover:bg-[#11e792] text-black cursor-pointer "
            onClick={handleRecipeEdit}
          >
            <span className="">Edit Recipe</span>
          </button> */}
        </div>
        <p className="text-lg md:text-xl text-gray-400 font-medium">
          Recipe ID: <span className="">{recipeDetails?.recipeId}</span>
        </p>
        <p className="text-lg md:text-xl text-gray-400 font-medium">
          Category: <span className="">{recipeDetails?.category}</span>
        </p>
      </div>

      {/* Ingredients Section */}
      <div className="mb-8">
        <div className="flex justify-between">
          <h2 className="text-xl md:text-3xl font-semibold mb-4">
            Ingredients
          </h2>
          <button
            className="h-8 rounded-lg px-2 text-sm font-medium bg-[#6EE7B7] hover:bg-[#11e792] text-black cursor-pointer "
            onClick={() => setShowIngredientForm(true)}
          >
            <span className="">Add Ingredient</span>
          </button>
        </div>
        <Table
          columns={ingredientsColumns}
          data={recipeDetails?.ingredients}
          forEdit={true}
          handleEdit={handleIngredientEdit}
        />
      </div>

      {/* Sales Section */}
      <div>
        <h2 className="text-xl md:text-3xl font-semibold mb-4">
          Sales Records
        </h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="sm:w-1/2 bg-[#292929] py-3 px-4 md:py-8 md:px-5 rounded-xl border border-[#383838] flex flex-col gap-2 justify-center items-center">
            <p className="text-xl md:text-3xl text-white">Total Sold</p>
            <h3 className="text-lg md:text-2xl text-gray-400">
              {recipeDetails?.sold}
            </h3>
          </div>
          <div className="sm:w-1/2 bg-[#292929] py-3 px-4 md:py-8 md:px-5 rounded-xl border border-[#383838] flex flex-col gap-2 items-center justify-center">
            <p className="text-xl md:text-3xl text-white">Revenue Generated</p>
            <h3 className="text-lg md:text-2xl text-gray-400">₹1578</h3>
          </div>
        </div>
      </div>

      {/* Ingredient Form */}
      <Modal isOpen={showIngredientForm}>
        <IngredientForm
          setShowIngredientForm={setShowIngredientForm}
          machineId={machineId}
          recipeId={recipeId}
          editIngredientData={selectedIngredient}
          recipeIngredients={recipeDetails?.ingredients}
          resetEditIngredientData={setSelectedIngredient}
        />
      </Modal>
    </div>
  );
};

export default RecipeDetails;
