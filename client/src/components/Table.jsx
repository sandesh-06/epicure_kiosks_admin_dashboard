import React from "react";
import { Link } from "react-router-dom";

const Table = ({
  columns,
  data,
  forEdit = false,
  handleEdit,
}) => {
  return (
    <div className="overflow-x-auto rounded-xl border border-[#161111]">
      <table
        className="min-w-full bg-[#141414] shadow-md rounded-lg overflow-hidden"
        border={1}
      >
        <thead>
          <tr className="bg-[#242424] text-white">
            {columns?.map((column, index) => (
              <th
                key={index}
                className="py-3 px-6 text-left text-sm font-medium tracking-wider uppercase"
              >
                {column.headerName}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.length === 0 ? (
            <tr>
              <td colSpan={columns?.length} className="text-center">
                <div className="w-full">
                  <p className="sm:text-xl md:text-2xl font-medium text-[#636262] my-5">
                    No data to display
                  </p>
                </div>
              </td>
            </tr>
          ) : (
            data?.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className="bg-[#141414] hover:bg-[#333333] transition-colors duration-300 ease-in-out border-b border-b-[#383838]"
              >
                {columns?.map((column, colIndex) => (
                  <td
                    key={colIndex}
                    className="py-4 px-6 text-sm md:text-base text-white"
                  >
                    {column.field === "action" ? (
                      forEdit ? (
                        <button
                          className="h-full cursor-pointer bg-gray-700 px-2 py-1 rounded-xl hover:bg-gray-800"
                          onClick={() => handleEdit(row)}
                        >
                          Edit
                        </button>
                      ) : (
                        <Link
                          className="w-full h-full cursor-pointer bg-gray-700 px-2 py-1 rounded-xl hover:bg-gray-800"
                          to={row.path}
                        >
                          {row[column.field]}
                        </Link>
                      )
                    ) : (
                      row[column.field]
                    )}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
