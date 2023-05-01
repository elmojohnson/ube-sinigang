import React, { useContext, useEffect, useState } from "react";
import Navbar from "./Navbar";
import Login from "./Login";
import Drawer from "./Drawer";
import LayoutContext from "@/contexts/LayoutContext";
import { useRouter } from "next/router";

interface AppLayout {
  children: any;
}

const Layout: React.FC<AppLayout> = ({ children }) => {
  const router = useRouter();
  const [isLoggedIn, setLoggedIn] = useState<boolean>(false);
  const ctx = useContext(LayoutContext);

  // Check access token
  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      setLoggedIn(true);
    }
  }, [router]);

  if (!isLoggedIn) {
    return <Login />;
  }

  return (
    <div className="flex h-screen overflow-y-hidden">
      {ctx?.isOpen && (
        <div className="fixed left-0 top-0 h-screen z-50 w-full">
          <Drawer />
        </div>
      )}
      <div className="lg:block hidden">
        <Drawer />
      </div>
      <div className="w-full h-full overflow-y-scroll bg-slate-200">
        <Navbar />
        <main className="wrapper">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
