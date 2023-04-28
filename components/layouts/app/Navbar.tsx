import LayoutContext from "@/contexts/LayoutContext";
import React, { useContext } from "react";
import Link from "next/link";
import {IoMenu} from "react-icons/io5"

const Navbar = () => {
  const ctx = useContext(LayoutContext);
  return (
    <div className="py-2 bg-purple-800 sticky top-0 z-20">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="text-white font-bold text-2xl">
          Spotipie
        </Link>
        {/* Todo search component here */}
        <button className="lg:hidden block" onClick={ctx?.toggleMenu}>
          <IoMenu className="text-white text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
