import React, { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FiCheck } from "react-icons/fi";
import { FiWifi } from "react-icons/fi";
import { FiWifiOff } from "react-icons/fi";
import { IoWarningOutline } from "react-icons/io5";
import { PiWarningCircleLight } from "react-icons/pi";
import { GoCheckCircle } from "react-icons/go";
import { DispenserForm, Modal, RecipeForm, Table } from "../components";
function MachineDetails() {
  const { machineId } = useParams();
  const navigation = useNavigate();
  const dispenserColumns = [
    { headerName: "Dispenser ID", field: "dispenserId" },
    { headerName: "Ingredient", field: "ingredient" },
    { headerName: "Quantity(grams)", field: "quantity" },
    { headerName: "Capacity(grams)", field: "capacity" },
    { headerName: "Status", field: "status" },
    { headerName: "Actions", field: "action" },
  ];
  const recipeColumns = [
    { headerName: "Recipe ID", field: "recipeId" },
    { headerName: "Name", field: "recipeName" },
    { headerName: "Category", field: "category" },
    { headerName: "Sold", field: "sold" },
    { headerName: "Actions", field: "action" },
  ];

  const machines = JSON.parse(localStorage.getItem("machines"));

  const machineData = useMemo(() => {
    return machines.find((machine) => machine.machineId === machineId);
  }, [machineId, machines]);

  const dispenserData = useMemo(() => {
    return machineData.dispensers.map((dispenser) => ({
      dispenserId: dispenser.dispenserId,
      ingredient: dispenser.ingredientName,
      quantity: dispenser.quantity,
      capacity: dispenser.capacity,
      status:
        (dispenser.quantity / Number(dispenser.capacity)) * 100 <= 20
          ? "Running low"
          : "In stock",
      action: "Edit",
      path: "",
    }));
  }, [machineData, machines]);

  const recipeData = useMemo(() => {
    return machineData.recipes.map((recipe) => ({
      recipeId: recipe.recipeId,
      recipeName: recipe.name,
      category: recipe.category,
      sold: recipe.sold,
      action: "Edit",
      path: `/machine-details/${machineId}/recipe-details/${recipe.recipeId}`,
    }));
  }, [machineData, machines]);

  const isMachineOperational = machineData.status.operational;
  const cardDatas = [
    {
      workingIcon: <FiWifi size={30} />,
      notWorkingIcon: <FiWifiOff size={30} />,
      header: isMachineOperational ? "Online" : "Offline",
      subText: "Last updated 5mins ago",
    },
    {
      workingIcon: <FiCheck size={30} />,
      notWorkingIcon: <PiWarningCircleLight size={30} />,
      header: isMachineOperational ? "Operational" : "Maintainance",
      subText: isMachineOperational
        ? "Last checkup on Wednesday"
        : "Under maintainance",
    },
    {
      workingIcon: <GoCheckCircle size={30} />,
      notWorkingIcon: <IoWarningOutline size={30} />,
      header: "Dispenser Status",
      subText: isMachineOperational
        ? `${dispenserData.length}/${dispenserData.length} working`
        : "Under maintainance",
    },
  ];

  // Modal Forms
  const [showAddDispenserForm, setShowAddDispenserForm] = useState(false);
  const [showRecipeForm, setShowRecipeForm] = useState(false);

  //Edit dispenser
  const [selectedDispenser, setSelectedDispenser] = useState("");
  //Selected Recipe
  const [selectedRecipe, setSelectedRecipe] = useState("");

  const handleEditDispenser = (dispenser) => {
    setSelectedDispenser(dispenser);
    setShowAddDispenserForm(true);
  };
  const handleEditRecipe = (recipe) => {
    setSelectedRecipe(recipe);
    navigation(recipe?.path)
  };
  return (
    <div className="container mx-auto text-white lg:mt-4 py-10 px-8 lg:px-0 lg:py-0">
      {/* Header */}
      <div className="py-2 px-2">
        <h1 className="text-3xl md:text-5xl font-semibold mb-2">
          {machineData.name}
        </h1>
        <p className="text-lg md:text-xl text-gray-400 font-medium">
          Machine ID: <span>{machineData.machineId}</span>
        </p>
      </div>

      {/* Status Cards */}
      <div className="flex flex-col sm:flex-row my-10 gap-6">
        {cardDatas.map((card) => (
          <div
            className="sm:w-1/2 bg-[#292929] py-3 px-4 md:py-8 md:px-5 rounded-xl border border-[#383838] flex flex-col gap-2"
            key={card.header}
          >
            {machineData.status.operational
              ? card.workingIcon
              : card.notWorkingIcon}
            <p className="text-xl md:text-2xl">{card.header}</p>
            <span className="text-sm text-gray-400">{card.subText}</span>
          </div>
        ))}
      </div>

      {/* Dispenser Table */}
      <div className="mt-2 mb-4">
        <div className="flex justify-between px-2">
          <h2 className="text-xl md:text-3xl font-semibold mb-4">Dispensers</h2>
          <button
            className={`h-8 rounded-lg px-2 text-sm font-medium ${
              isMachineOperational
                ? "bg-[#6EE7B7] hover:bg-[#11e792] text-black cursor-pointer "
                : "bg-[#292929] text-gray-400"
            } `}
            disabled={!isMachineOperational}
            onClick={() => setShowAddDispenserForm(true)}
          >
            <span className="">Add Dispenser</span>
          </button>
        </div>
        <Table
          columns={dispenserColumns}
          data={dispenserData}
          forEdit={true}
          handleEdit={handleEditDispenser}
        />
      </div>

      {/* Dispenser Form */}
      <Modal isOpen={showAddDispenserForm}>
        <DispenserForm
          setShowAddDispenserForm={setShowAddDispenserForm}
          machineId={machineId}
          editDispenserData={selectedDispenser}
          resetEditDispenserData={setSelectedDispenser}
        />
      </Modal>

      {/* Recipe Table */}
      <div className="mt-10 pt-2 pb-4">
        <div className="flex justify-between px-2">
          <h2 className="text-xl md:text-3xl font-semibold mb-4">Recipes</h2>
          <button
            className={`h-8 rounded-lg px-2 text-sm font-medium ${
              isMachineOperational
                ? "bg-[#6EE7B7] hover:bg-[#11e792] text-black cursor-pointer "
                : "bg-[#292929] text-gray-400"
            } `}
            disabled={!isMachineOperational}
            onClick={() => setShowRecipeForm(true)}
          >
            <span className="">Add Recipe</span>
          </button>
        </div>
        <Table
          columns={recipeColumns}
          data={recipeData}
          handleEdit={handleEditRecipe}
          forEdit={true}
        />
      </div>

      {/* Recipe Form */}
      <Modal isOpen={showRecipeForm}>
        <RecipeForm
          setShowRecipeForm={setShowRecipeForm}
          machineId={machineId}
        />
      </Modal>
    </div>
  );
}

export default MachineDetails;
