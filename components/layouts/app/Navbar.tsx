import LayoutContext from "@/contexts/LayoutContext";
import React, { useContext } from "react";
import { IoMenu } from "react-icons/io5";
import SearchBar from "@/components/utils/SearchBar";

const Navbar = () => {
  const ctx = useContext(LayoutContext);
  return (
    <div className="py-2 bg-white shadow sticky top-0 z-20">
      <div className="wrapper flex items-center justify-between lg:space-x-0 space-x-8">
        <button className="lg:hidden block" onClick={ctx?.toggleMenu}>
          <IoMenu className="text-2xl" />
        </button>
        {/* Todo search component here */}
        <SearchBar />
      </div>
    </div>
  );
};

export default Navbar;
