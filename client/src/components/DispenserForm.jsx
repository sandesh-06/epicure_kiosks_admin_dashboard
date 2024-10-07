import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

function DispenserForm({
  setShowAddDispenserForm,
  machineId,
  editDispenserData = {},
  resetEditDispenserData,
}) {
  //data from local storage
  const ingredientData = JSON.parse(localStorage.getItem("ingredients"));
  const machines = JSON.parse(localStorage.getItem("machines"));
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm()

  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [selectedIngredient, setSelectedIngredient] = useState("")

  const capacity = watch("capacity")
  const quantity = watch("quantity")

  // Pre-fill the form if editDispenserData is provided
  useEffect(() => {
    if (editDispenserData && Object.keys(editDispenserData).length > 0) {
      setValue("dispenserId", editDispenserData.dispenserId);
      setValue("ingredientName", editDispenserData.ingredient)
      setValue("ingredientId", editDispenserData.ingredientId)
      setValue("capacity", editDispenserData.capacity)
      setValue("quantity", editDispenserData.quantity)
      setSelectedIngredient(editDispenserData.ingredient)
    }
  }, [editDispenserData, setValue])

  const onSubmit = (formData) => {
    const machine = machines.find((m) => m.machineId === machineId);

    if (!machine) {
      console.error("Machine not found");
      return
    }

    if (editDispenserData && Object.keys(editDispenserData).length > 0) {
      const dispenserIndex = machine.dispensers.findIndex(
        (d) => d.dispenserId === editDispenserData.dispenserId
      )

      if (dispenserIndex !== -1) {
        machine.dispensers[dispenserIndex] = {
          ...machine.dispensers[dispenserIndex],
          ...formData, 
          dispenserId: editDispenserData.dispenserId, 
        };
      } else {
        console.error("Dispenser not found for editing")
      }
    } else {
      const newDispenser = {
        ...formData,
      };
      machine.dispensers.push(newDispenser)
    }

    localStorage.setItem("machines", JSON.stringify(machines))
    reset()
    handleClose()
  };

  const handleDeleteDispenser = () => {
    const machine = machines.find((m) => m.machineId === machineId);

    const dispenserIndex = machine.dispensers.findIndex(
      (d) => d.dispenserId === editDispenserData.dispenserId
    );

    if (dispenserIndex !== -1) {
      machine.dispensers.splice(dispenserIndex, 1);
      localStorage.setItem("machines", JSON.stringify(machines));
    }

    handleClose();
  };

  const handleClose = () => {
    reset();
    setSelectedIngredient("");
    setShowAddDispenserForm(false);
    resetEditDispenserData("");
  };

  const handleIngredientSelect = (ingredientName, ingredientId) => {
    setSelectedIngredient(ingredientName);
    setValue("ingredientName", ingredientName);
    setValue("ingredientId", ingredientId);
    setIsDropdownOpen(false);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="py-4 px-6 space-y-4 text-white overflow-hidden"
    >
      <div>
        <label className="block mb-3 text-lg md:text-xl font-medium">
          Dispenser ID
        </label>
        <input
          type="text"
          {...register("dispenserId", { required: "Dispenser ID is required" })}
          className="w-full px-3 py-2 bg-[#333333] rounded-lg focus:outline-none border border-[#131313] focus:border-[#6EE7B7]"
          placeholder="Enter ID"
          disabled={!!editDispenserData?.dispenserId} // disable editing ID in edit mode
        />
        {errors.dispenserId && (
          <p className="text-red-500 text-sm mt-1">
            {errors.dispenserId.message}
          </p>
        )}
      </div>

      {/* Custom Dropdown for Select Ingredient */}
      <div>
        <label className="block mb-3 text-lg md:text-xl font-medium">
          Select Ingredient
        </label>
        <div className="relative">
          <div
            className="w-full px-3 py-2 bg-[#333333] rounded-lg cursor-pointer border border-[#131313] focus:border-[#6EE7B7]"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            {selectedIngredient
              ? selectedIngredient
              : "-- Select Ingredient --"}
          </div>
          {isDropdownOpen && (
            <div className="absolute z-10 w-full max-h-40 bg-[#333333] border border-[#131313] mt-1 overflow-y-auto rounded-lg">
              {ingredientData.map((ingredient) => (
                <div
                  key={ingredient.ingredientName}
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
        <input type="hidden" {...register("ingredientId")} />
        {errors.ingredient && (
          <p className="text-red-500 text-sm mt-1">
            {errors.ingredient.message}
          </p>
        )}
      </div>

      <div>
        <label className="block mb-3 text-lg md:text-xl font-medium">
          Total Capacity (in grams)
        </label>
        <input
          type="number"
          {...register("capacity", {
            required: "Capacity is required",
            min: { value: 1, message: "Capacity must be greater than 0" },
          })}
          className="w-full px-3 py-2 bg-[#333333] rounded-lg focus:outline-none border border-[#131313] focus:border-[#6EE7B7]"
          placeholder="Enter capacity"
        />
        {errors.capacity && (
          <p className="text-red-500 text-sm mt-1">{errors.capacity.message}</p>
        )}
      </div>

      <div>
        <label className="block mb-3 text-lg md:text-xl font-medium">
          Quantity Added (in grams)
        </label>
        <input
          type="number"
          {...register("quantity", {
            required: "Quantity is required",
            validate: () =>
              parseInt(quantity) <= parseInt(capacity) ||
              "Quantity cannot exceed capacity",
          })}
          className="w-full px-3 py-2 bg-[#333333] rounded-lg focus:outline-none border border-[#131313] focus:border-[#6EE7B7]"
          placeholder="Enter quantity"
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
            editDispenserData && Object.keys(editDispenserData).length > 0
              ? "block"
              : "hidden"
          } px-4 py-2 text-sm sm:text-md text-black font-medium bg-[#f36e6e] rounded-lg hover:bg-[#f15656] focus:outline-none`}
          onClick={handleDeleteDispenser}
        >
          Delete
        </button>

        <button
          type="submit"
          className="px-4 py-2 text-sm sm:text-md text-black font-medium bg-[#6EE7B7] rounded-lg hover:bg-[#12f097] focus:outline-none"
        >
          {editDispenserData && Object.keys(editDispenserData).length > 0
            ? "Edit Dispenser"
            : "Add Dispenser"}
        </button>
      </div>
    </form>
  );
}

export default DispenserForm;
