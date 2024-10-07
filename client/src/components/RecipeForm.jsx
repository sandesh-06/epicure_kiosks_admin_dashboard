import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

function RecipeForm({
  setShowRecipeForm,
  editRecipeData = {},
  machineId,
  resetEditRecipeData,
}) {
  const ingredientData = JSON.parse(localStorage.getItem("ingredients"));
  const categories = ["Fast Food", "Dessert", "Beverages"];
  const machines = JSON.parse(localStorage.getItem("machines"))

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [isCategoryDropdownOpen, setisCategoryDropdownOpen] = useState(false);
  const [isIngridentDropdownOpen, setisIngridentDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    if (editRecipeData && Object.keys(editRecipeData).length > 0) {
      setValue("recipeId", editRecipeData.recipeId);
      setValue("name", editRecipeData.name);
      setValue("category", editRecipeData.category);
      setValue("sold", editRecipeData.sold);
      setSelectedCategory(editRecipeData.category);
    }
  }, [editRecipeData, setValue]);

  const onSubmit = (formData) => {
    const machine = machines.find((m) => m.machineId === machineId);

    if (editRecipeData && Object.keys(editRecipeData).length > 0) {
      const recipeIndex = machine.recipes.findIndex(
        (r) => r.recipeId === editRecipeData.recipeId
      );
      machine.recipes[recipeIndex] = formData;
    } else {
      formData.ingredients = selectedIngredients;
      machine.recipes.push(formData);
    }

    localStorage.setItem("machines", JSON.stringify(machines));
    reset();
    setShowRecipeForm(false);
    alert(
      "Recipe added successfully! You can edit the ingredients in the recipe details page."
    );
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setValue("category", category);
    setisCategoryDropdownOpen(false);
  };

  const handleIngredientSelect = (ingredientName, ingredientId) => {
    if (!selectedIngredients.some((ing) => ing.ingredientId === ingredientId)) {
      setSelectedIngredients((prevIngredients) => [
        ...prevIngredients,
        { ingredientName, ingredientId, quantity:0 },
      ]);
    }
  };

  const handleClose = () => {
    reset();
    setSelectedIngredients([]);
    setSelectedCategory("");
    setShowRecipeForm(false);
    // resetEditRecipeData("");
  };

  const handleDeleteRecipe = () => {
    const recipeIndex = recipes.findIndex(
      (r) => r.recipeId === editRecipeData.recipeId
    );

    if (recipeIndex !== -1) {
      recipes.splice(recipeIndex, 1);
      localStorage.setItem("recipes", JSON.stringify(recipes));
    }

    handleClose();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="py-4 px-6 space-y-4 text-white overflow-hidden"
    >
      <div>
        <label className="block mb-3 text-lg md:text-xl font-medium">
          Recipe ID
        </label>
        <input
          type="text"
          {...register("recipeId", { required: "Recipe ID is required" })}
          className="w-full px-3 py-2 bg-[#333333] rounded-lg focus:outline-none border border-[#131313] focus:border-[#6EE7B7]"
          placeholder="Enter Recipe ID"
          disabled={!!editRecipeData?.recipeId}
        />
        {errors.recipeId && (
          <p className="text-red-500 text-sm mt-1">{errors.recipeId.message}</p>
        )}
      </div>

      <div>
        <label className="block mb-3 text-lg md:text-xl font-medium">
          Recipe Name
        </label>
        <input
          type="text"
          {...register("name", { required: "Recipe Name is required" })}
          className="w-full px-3 py-2 bg-[#333333] rounded-lg focus:outline-none border border-[#131313] focus:border-[#6EE7B7]"
          placeholder="Enter Recipe Name"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <label className="block mb-3 text-lg md:text-xl font-medium">
          Category
        </label>
        <div className="relative">
          <div
            className="w-full px-3 py-2 bg-[#333333] rounded-lg cursor-pointer border border-[#131313] focus:border-[#6EE7B7]"
            onClick={() => setisCategoryDropdownOpen(!isCategoryDropdownOpen)}
          >
            {selectedCategory ? selectedCategory : "-- Select Category --"}
          </div>
          {isCategoryDropdownOpen && (
            <div className="absolute z-10 w-full max-h-40 bg-[#333333] border border-[#131313] mt-1 overflow-y-auto rounded-lg shadow-2xl">
              {categories.map((category) => (
                <div
                  key={category}
                  onClick={() => handleCategorySelect(category)}
                  className="px-3 py-2 hover:bg-gray-700 cursor-pointer"
                >
                  {category}
                </div>
              ))}
            </div>
          )}
        </div>
        <input
          type="hidden"
          {...register("category", {
            required: "Please select a category",
          })}
        />
        {errors.category && (
          <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>
        )}
      </div>

      {!editRecipeData.recipeId && (
        <div>
          <label className="block mb-3 text-lg md:text-xl font-medium">
            Select Ingredients
          </label>
          <div className="relative">
            <div
              className="w-full px-3 py-2 bg-[#333333] rounded-lg cursor-pointer border border-[#131313] focus:border-[#6EE7B7]"
              onClick={() =>
                setisIngridentDropdownOpen(!isIngridentDropdownOpen)
              }
            >
              {selectedIngredients.length
                ? selectedIngredients
                    .map((ing) => ing.ingredientName)
                    .join(", ")
                : "-- Select Ingredients --"}
            </div>
            {isIngridentDropdownOpen && (
              <div className="absolute z-10 w-full max-h-40 bg-[#333333] border border-[#131313] mt-1 overflow-y-auto rounded-lg">
                {ingredientData.map((ingredient) => (
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
        </div>
      )}

      <div>
        <label className="block mb-3 text-lg md:text-xl font-medium">
          Sold (Initial Value is 0)
        </label>
        <input
          type="number"
          defaultValue={0}
          {...register("sold", { required: true })}
          className="w-full px-3 py-2 bg-[#333333] rounded-lg focus:outline-none border border-[#131313] focus:border-[#6EE7B7]"
          readOnly
        />
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
            editRecipeData && Object.keys(editRecipeData).length > 0
              ? "block"
              : "hidden"
          } px-4 py-2 text-sm sm:text-md text-black font-medium bg-[#f36e6e] rounded-lg hover:bg-[#f15656] focus:outline-none`}
          onClick={handleDeleteRecipe}
        >
          Delete
        </button>

        <button
          type="submit"
          className="px-4 py-2 text-sm sm:text-md text-black font-medium bg-[#6EE7B7] rounded-lg hover:bg-[#12f097] focus:outline-none"
        >
          {editRecipeData && Object.keys(editRecipeData).length > 0
            ? "Edit Recipe"
            : "Add Recipe"}
        </button>
      </div>
    </form>
  );
}

export default RecipeForm;
