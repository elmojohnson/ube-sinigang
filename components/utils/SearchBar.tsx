import React from "react";
import { IoSearchCircle } from "react-icons/io5";

const SearchBar = () => {
  return (
    <div className="border rounded-full bg-slate-100 flex items-center justify-between w-full">
      <input
        type="text"
        placeholder="Search here"
        className="bg-transparent outline-none px-3 py-1"
      />
      <button className="px-1 py-1 text-purple-800">
        <IoSearchCircle className="text-2xl" />
      </button>
    </div>
  );
};

export default SearchBar;
