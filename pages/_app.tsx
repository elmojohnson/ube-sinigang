import Layout from "@/components/layouts/app/Layout";
import LayoutContext from "@/contexts/LayoutContext";
import "@/styles/globals.css";
import { Link } from "@/types";
import type { AppProps } from "next/app";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [isOpen, setOpen] = useState<boolean>(false);
  const links: Link[] = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Account",
      href: "/account",
    },
  ];

  const toggleMenu = () => setOpen(!isOpen);
  return (
    <LayoutContext.Provider value={{ isOpen, links, toggleMenu }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </LayoutContext.Provider>
  );
}
