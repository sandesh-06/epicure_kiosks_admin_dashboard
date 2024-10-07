import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Table } from '../components';
const RecipeDetails = () => {
    const ingredientsColumns = [
        { headerName: "Ingredient ID", field: "ingredientId" },
        { headerName: "Ingredient Name", field: "ingredientName" },
        { headerName: "Quantity(grams)", field: "quantity" },
      ];
    const {machineId, recipeId} = useParams()
    const machines = JSON.parse(localStorage.getItem("machines"))

    const recipeDetails = useMemo(() => {
        const selectedMachine = machines.find((m) => m.machineId === machineId);
        // console.log(selectedMachine)
       
        if (selectedMachine) {
          return selectedMachine.recipes.find((r) => r.recipeId === recipeId);
        }
    
        return null;
      }, [machineId, recipeId, machines]); 
    
      console.log(recipeDetails);

  const recipeInfo = {
    id: '#12345',
    name: 'Chicken Alfredo',
    category: 'Entree',
    ingredients: [
      { name: 'Chicken', quantity: '1lb' },
      { name: 'Fettuccini', quantity: '16oz' },
      { name: 'Parmesan', quantity: '2 cups' },
      { name: 'Heavy Cream', quantity: '1 pint' },
      { name: 'Butter', quantity: '4oz' },
    ],
    sales: {
      totalSold: 1000,
      revenue: '10,000',
    },
  };


  return (
    <div className="container mx-auto p-8 text-white min-h-screen">
      {/* Recipe Info Section */}
      <div className="mb-8">
        <h2 className="text-xl md:text-4xl font-semibold mb-4">{recipeDetails?.name}</h2>
        <p className="text-lg md:text-xl text-gray-400 ">
          Recipe ID: <span className='font-medium'>{recipeDetails?.recipeId}</span>
        </p>
        <p className="text-lg md:text-xl text-gray-400">
          Category: <span className='font-medium'>{recipeDetails?.category}</span>
        </p>
        {/* <div className="grid grid-cols-2 gap-6 bg-gray-800 p-6 rounded-lg">
          <div>
            <p className="text-sm text-gray-400">ID</p>
            <h3 className="text-lg">{recipeInfo.id}</h3>
          </div>
          <div>
            <p className="text-sm text-gray-400">Name</p>
            <h3 className="text-lg">{recipeInfo.name}</h3>
          </div>
          <div>
            <p className="text-sm text-gray-400">Category</p>
            <h3 className="text-lg">{recipeInfo.category}</h3>
          </div>
        </div> */}
      </div>

      {/* Ingredients Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Ingredients</h2>
       <Table columns={ingredientsColumns} data={recipeDetails?.ingredients}/>
      </div>

      {/* Sales Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Sales</h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="sm:w-1/2 bg-[#292929] py-3 px-4 md:py-8 md:px-5 rounded-xl border border-[#383838] flex flex-col gap-2 justify-center items-center">
            <p className="text-xl md:text-3xl text-gray-400">Total Sold</p>
            <h3 className="text-lg md:text-2xl">{recipeDetails?.sold}</h3>
          </div>
          <div className="sm:w-1/2 bg-[#292929] py-3 px-4 md:py-8 md:px-5 rounded-xl border border-[#383838] flex flex-col gap-2 items-center justify-center">
            <p className="text-xl md:text-3xl text-gray-400">Revenue Generated</p>
            <h3 className="text-lg md:text-2xl">₹1578</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
