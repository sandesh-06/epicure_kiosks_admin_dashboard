import React from "react";

function Search({ inputClass = "", inputDivClass = "", placeholderText }) {
  return (
    <div className={`${inputDivClass}`}>
      <input type="search" className={`${inputClass} w-full`} placeholder={placeholderText} />
    </div>
  );
}

export default Search;
