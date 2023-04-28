import LayoutContext from "@/contexts/LayoutContext";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
import { IoCloseOutline } from "react-icons/io5";

const Drawer = () => {
  const ctx = useContext(LayoutContext);
  const router = useRouter();

  return (
    <div className="bg-purple-800 h-full lg:w-60 w-full p-2 flex flex-col space-y-4 text-white">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-2xl">Spotipie</h1>
        <button onClick={ctx?.toggleMenu} className="lg:hidden block">
          <IoCloseOutline className="text-2xl" />
        </button>
      </div>
      <nav className="flex flex-col space-y-1 text-purple-400 text-lg">
        {
          ctx?.links.map((link, i) => {
            return <Link href={link.href} onClick={ctx.toggleMenu} key={i} className={`${router.pathname === link.href ? "font-semibold text-white" : null}`}>{link.label}</Link>
          })
        }
      </nav>
    </div>
  );
};

export default Drawer;
