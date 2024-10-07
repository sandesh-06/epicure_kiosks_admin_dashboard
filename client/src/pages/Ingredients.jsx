import React from "react";
import { Search, Table } from "../components";

function Ingredients() {
  const columns = [
    { headerName: "Ingredient ID", field: "ingredientId" },
    { headerName: "Name", field: "ingredientName" },
    { headerName: "Actions", field: "action" },
  ];

  const data = JSON.parse(localStorage.getItem("ingredients"));
  const extractedData = data?.map((ingredient) => ({
    ingredientId: ingredient.ingredientId,
    ingredientName: ingredient.ingredientName,
    action: "View",
  }));
  return (
    <div className="h-full lg:mt-4 py-10 px-8 lg:px-0 lg:py-0">
      <div className="container mx-auto">
        <div className="flex justify-between px-2">
          <h1 className="text-2xl font-semibold mb-4 text-white">Ingredients</h1>
          <button className="cursor-pointer h-8 rounded-lg bg-[#6EE7B7] text-black px-2 text-sm font-medium">
            <span className="truncate">Add Ingredient</span>
          </button>
        </div>
        <Search
          inputClass="form-input resize-none rounded-lg text-[#FFFFFF] focus:outline-0 focus:ring-0 border-none bg-[#292929] focus:border-none placeholder:text-[#C4C4C4] px-4 py-2 text-base font-normal "
          inputDivClass=""
          placeholderText="Search for ingredient"
        />
        <div className="mt-4">
          <Table columns={columns} data={extractedData} />
        </div>
      </div>
    </div>
  );
}

export default Ingredients;
