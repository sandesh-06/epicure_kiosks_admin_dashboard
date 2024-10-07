import React from "react";
import { Search, Table } from "../components";

function Machines() {
  const columns = [
    { headerName: "Kiosk", field: "name" },
    { headerName: "Location", field: "location" },
    { headerName: "Temperature", field: "temperature" },
    { headerName: "Status", field: "operational" },
    { headerName: "Last Order", field: "lastOrder" },
    { headerName: "Details", field: "action" },
  ];

  const data = JSON.parse(localStorage.getItem("machines"));
  const extractedData = data?.map((machine) => ({
    machineId: machine.machineId,
    name: machine.name,
    location: machine.location,
    temperature: machine.status.temperature + "F",
    operational: machine.status.operational ? "Operational" : "Maintainance",
    lastOrder: machine.lastOrder,
    action: "View",
    path: `/machine-details/${machine.machineId}`,
  }));

  return (
    <div className="h-full lg:mt-4 py-10 px-8 lg:px-0 lg:py-0">
      <div className="container mx-auto">
        <div className="flex justify-between px-2">
          <h1 className="text-2xl font-semibold mb-4 text-white">Kiosks</h1>
          <button className="cursor-pointer h-8 rounded-lg bg-[#6EE7B7] text-black px-2 text-sm font-medium">
            <span className="truncate">Add Kiosk</span>
          </button>
        </div>
        <Search
          inputClass="form-input resize-none rounded-lg text-[#FFFFFF] focus:outline-0 focus:ring-0 border-none bg-[#292929] focus:border-none placeholder:text-[#C4C4C4] px-4 py-2 text-base font-normal "
          inputDivClass=""
          placeholderText="Search for kiosks"
        />
        <div className="mt-4">
          <Table columns={columns} data={extractedData} />
        </div>
      </div>
    </div>
  );
}

export default Machines;
