import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

function IngredientForm({
  setShowIngredientForm,
  machineId,
  recipeId,
  editIngredientData = {},
  resetEditIngredientData,
}) {
  const ingredientOptions = JSON.parse(localStorage.getItem("ingredients"));
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  const [selectedIngredient, setSelectedIngredient] = useState("");
  const [isIngredientDropdownOpen, setIsIngredientDropdownOpen] =
    useState(false);
  const [ingredientError, setIngredientError] = useState("");

  const machines = JSON.parse(localStorage.getItem("machines"));

  useEffect(() => {
    if (editIngredientData && Object.keys(editIngredientData).length > 0) {
      setValue("ingredientId", editIngredientData.ingredientId);
      setValue("quantity", editIngredientData.quantity);
      setValue("ingredientName", editIngredientData?.ingredientName);
      setSelectedIngredient(editIngredientData.ingredientName);
    }
  }, [editIngredientData, setValue]);

  const onSubmit = (formData) => {
    // Find the machine by its ID
    const machineIndex = machines.findIndex(
      (machine) => machine.machineId === machineId
    );
    if (machineIndex === -1) {
      alert("Machine not found.");
      return;
    }

    const machine = machines[machineIndex];

    const recipeIndex = machine.recipes.findIndex(
      (recipe) => recipe.recipeId === recipeId
    );
    if (recipeIndex === -1) {
      alert("Recipe not found.");
      return;
    }

    const recipe = machine.recipes[recipeIndex];

    const isAlreadyAdded = recipe.ingredients.some(
      (ingredient) => ingredient.ingredientId === formData.ingredientId
    );

    if (
      isAlreadyAdded &&
      !(editIngredientData && Object.keys(editIngredientData).length > 0)
    ) {
      setIngredientError("This ingredient is already added to the recipe.");
      return;
    }

    if (editIngredientData && Object.keys(editIngredientData).length > 0) {
      const ingredientIndex = recipe.ingredients.findIndex(
        (ing) => ing.ingredientId === editIngredientData.ingredientId
      );
      recipe.ingredients[ingredientIndex] = {
        ...editIngredientData,
        ...formData,
      };
    } else {
      recipe.ingredients.push(formData);
    }

    machine.recipes[recipeIndex] = recipe;
    machines[machineIndex] = machine;

    localStorage.setItem("machines", JSON.stringify(machines));

    reset();
    handleClose();
  };

  const handleDeleteIngredient = (ingredientIdToDelete) => {

    const machineIndex = machines.findIndex(
      (machine) => machine.machineId === machineId
    );
    if (machineIndex === -1) {
      alert("Machine not found.")
      return
    }
    const machine = machines[machineIndex]

    const recipeIndex = machine.recipes.findIndex(
      (recipe) => recipe.recipeId === recipeId
    )
    if (recipeIndex === -1) {
      alert("Recipe not found.")
      return
    }

    const recipe = machine.recipes[recipeIndex]

   
    const updatedIngredients = recipe.ingredients.filter(
      (ingredient) => ingredient.ingredientId !== ingredientIdToDelete
    )
    recipe.ingredients = updatedIngredients

    machine.recipes[recipeIndex] = recipe
    machines[machineIndex] = machine
    localStorage.setItem("machines", JSON.stringify(machines))
    console.log(recipe.ingredients)
    handleClose()
  }
  const handleIngredientSelect = (ingredientName, ingredientId) => {
    setSelectedIngredient(ingredientName);
    setValue("ingredientId", ingredientId);
    setValue("ingredientName", ingredientName);
    setIsIngredientDropdownOpen(false);
    setIngredientError("");
  };

  const handleClose = () => {
    reset();
    setSelectedIngredient("");
    setShowIngredientForm(false);
    setIngredientError("");
    resetEditIngredientData("");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="py-4 px-6 space-y-4 text-white"
    >
      <div>
        <label className="block mb-3 text-lg md:text-xl font-medium">
          Ingredient ID
        </label>
        <input
          type="text"
          {...register("ingredientId", {
            required: "Ingredient ID is required",
          })}
          className="w-full px-3 py-2 bg-[#333333] rounded-lg focus:outline-none border border-[#131313] focus:border-[#6EE7B7]"
          placeholder="Ingredient ID"
          disabled={true}
        />
        {errors.ingredientId && (
          <p className="text-red-500 text-sm mt-1">
            {errors.ingredientId.message}
          </p>
        )}
      </div>

      <div>
        <label className="block mb-3 text-lg md:text-xl font-medium">
          Ingredient Name
        </label>
        <div className="relative">
          <div
            className="w-full px-3 py-2 bg-[#333333] rounded-lg cursor-pointer border border-[#131313] focus:border-[#6EE7B7]"
            onClick={() =>
              setIsIngredientDropdownOpen(!isIngredientDropdownOpen)
            }
          >
            {selectedIngredient
              ? selectedIngredient
              : "-- Select Ingredient --"}
          </div>
          {isIngredientDropdownOpen && (
            <div className="absolute z-10 w-full max-h-40 bg-[#333333] border border-[#131313] mt-1 overflow-y-auto rounded-lg shadow-2xl">
              {ingredientOptions.map((ingredient) => (
                <div
                  key={ingredient.ingredientId}
                  onClick={() =>
                    handleIngredientSelect(
                      ingredient.ingredientName,
                      ingredient.ingredientId
                    )
                  }
                  className="px-3 py-2 hover:bg-gray-700 cursor-pointer"
                >
                  {ingredient.ingredientName}
                </div>
              ))}
            </div>
          )}
        </div>
        <input
          type="hidden"
          {...register("ingredientName", {
            required: "Please select an ingredient",
          })}
        />
        {errors.ingredientName && (
          <p className="text-red-500 text-sm mt-1">
            {errors.ingredientName.message}
          </p>
        )}
      </div>

      {ingredientError && (
        <p className="text-red-500 text-sm mt-1">{ingredientError}</p>
      )}

      <div>
        <label className="block mb-3 text-lg md:text-xl font-medium">
          Quantity
        </label>
        <input
          type="number"
          {...register("quantity", { required: "Quantity is required" })}
          className="w-full px-3 py-2 bg-[#333333] rounded-lg focus:outline-none border border-[#131313] focus:border-[#6EE7B7]"
          placeholder="Enter Quantity"
        />
        {errors.quantity && (
          <p className="text-red-500 text-sm mt-1">{errors.quantity.message}</p>
        )}
      </div>

      <div className="flex flex-col-reverse md:flex-row-reverse justify-between pt-5 gap-7">
        <button
          type="button"
          onClick={handleClose}
          className="px-4 py-2 text-sm sm:text-md font-medium bg-transparent rounded-lg border border-[#131313] hover:bg-gray-700 focus:outline-none"
        >
          Close Form
        </button>
        <button
          type="button"
          className={`${
            editIngredientData && Object.keys(editIngredientData).length > 0
              ? "block"
              : "hidden"
          } px-4 py-2 text-sm sm:text-md text-black font-medium bg-[#f36e6e] rounded-lg hover:bg-[#f15656] focus:outline-none`}
          onClick={()=>handleDeleteIngredient(editIngredientData?.ingredientId)}
        >
          Delete
        </button>
        <button
          type="submit"
          className="px-4 py-2 text-sm sm:text-md text-black font-medium bg-[#6EE7B7] rounded-lg hover:bg-[#12f097] focus:outline-none"
        >
          {editIngredientData && Object.keys(editIngredientData).length > 0
            ? "Edit Ingredient"
            : "Add Ingredient"}
        </button>
      </div>
    </form>
  );
}

export default IngredientForm;
