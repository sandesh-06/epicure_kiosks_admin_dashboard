import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function RecipeForm({
  setShowRecipeForm,
  editRecipeData,
  machineId,
  resetEditRecipeData,
}) {
  const categories = ["Fast Food", "Dessert", "Beverages"];
  const machines = JSON.parse(localStorage.getItem("machines"));
  const machine = machines.find((m) => m.machineId === machineId);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    if (editRecipeData && Object.keys(editRecipeData).length > 0) {
      setValue("recipeId", editRecipeData.recipeId);
      setValue("recipeName", editRecipeData.recipeName);
      setValue("category", editRecipeData.category);
      setValue("sold", editRecipeData.sold);
      setSelectedCategory(editRecipeData.category);
    }
  }, [editRecipeData, setValue]);

  const onSubmit = (formData) => {
    if (editRecipeData && Object.keys(editRecipeData).length > 0) {
      const recipeIndex = machine.recipes.findIndex(
        (r) => r.recipeId === editRecipeData.recipeId
      );
      console.log(editRecipeData)
      if (recipeIndex !== -1) {
        formData.ingredients = editRecipeData.ingredients
        machine.recipes[recipeIndex] = formData
        alert("Recipe edited successfully!")
      }
    } else {

      if (!selectedCategory) {
        alert("Please select a category.")
        return;
      }
      formData.ingredients = []; 
      formData.category = selectedCategory; 
      machine.recipes.push(formData);
      alert("Recipe added successfully!");
    }
    localStorage.setItem("machines", JSON.stringify(machines));
    reset();
    handleClose();
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setValue("category", category);
    setIsCategoryDropdownOpen(false);
  };

  const handleClose = () => {
    reset();
    setSelectedCategory("");
    setShowRecipeForm(false);
    if (editRecipeData && Object.keys(editRecipeData).length > 0) {
      resetEditRecipeData("");
    }
  };

  const handleDeleteRecipe = () => {
    const recipeIndex = machine.recipes.findIndex(
      (r) => r.recipeId === editRecipeData.recipeId
    );

    if (recipeIndex !== -1) {
      machine.recipes.splice(recipeIndex, 1);
      localStorage.setItem("machines", JSON.stringify(machines));
      alert("Recipe deleted successfully!");
      handleClose();
      navigate(`/machine-details/${machineId}`);
    }
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
          {...register("recipeName", { required: "Recipe Name is required" })}
          className="w-full px-3 py-2 bg-[#333333] rounded-lg focus:outline-none border border-[#131313] focus:border-[#6EE7B7]"
          placeholder="Enter Recipe Name"
        />
        {errors.recipeName && (
          <p className="text-red-500 text-sm mt-1">
            {errors.recipeName.message}
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
            onClick={() => setIsCategoryDropdownOpen(!isCategoryDropdownOpen)}
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
          {...register("category", { required: "Please select a category" })}
        />
        {errors.category && (
          <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>
        )}
      </div>

      <div>
        <label className="block mb-3 text-lg md:text-xl font-medium">
          Sold (Initial Value is 0)
        </label>
        <input
          type="number"
          defaultValue={0}
          {...register("sold", { required: true })}
          className="w-full px-3 py-2 bg-[#333333] rounded-lg focus:outline-none border border-[#131313] focus:border-[#6EE7B7]"
          disabled={!(editRecipeData && Object.keys(editRecipeData).length > 0)}
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
