import React from "react";
import { Search, Table } from "../components";

function Recipes() {
  const columns = [
    { headerName: "Recipe ID", field: "recipeId" },
    { headerName: "Name", field: "name" },
    { headerName: "Category", field: "category" },
    { headerName: "Sold", field: "sold" },
    { headerName: "Actions", field: "action" },
  ];

  const data = JSON.parse(localStorage.getItem("recipes"));
  const extractedData = data?.map((recipe) => ({
    recipeId: recipe.recipeId,
    name: recipe.name,
    category: recipe.category,
    sold: recipe.sold,
    action: "View",
  }));
  return (
    <div className="h-full lg:mt-4 py-10 px-8 lg:px-0 lg:py-0">
      <div className="container mx-auto">
        <div className="flex justify-between px-2">
          <h1 className="text-2xl font-semibold mb-4 text-white">
            Recipes
          </h1>
          <button className="cursor-pointer h-8 rounded-lg bg-[#6EE7B7] text-black px-2 text-sm font-medium">
            <span className="truncate">Add Recipe</span>
          </button>
        </div>
        <Search
          inputClass="form-input resize-none rounded-lg text-[#FFFFFF] focus:outline-0 focus:ring-0 border-none bg-[#292929] focus:border-none placeholder:text-[#C4C4C4] px-4 py-2 text-base font-normal "
          inputDivClass=""
          placeholderText="Search for recipe"
        />
        <div className="mt-4">
          <Table columns={columns} data={extractedData} />
        </div>
      </div>
    </div>
  );
}

export default Recipes;
