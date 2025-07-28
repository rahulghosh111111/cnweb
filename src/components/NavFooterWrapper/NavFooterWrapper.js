"use client"; 

import { usePathname } from "next/navigation";
import Navbar from "@/components/Menubars/Navbar";
import Footer from "@/components/Menubars/Footer";

export default function NavFooterWrapper({ children }) {
  const pathname = usePathname();
  const hideNavFooter = pathname === "/recruitment2025";

  return (
    <>
      {!hideNavFooter && <Navbar />}
      {children}
      {!hideNavFooter && <Footer />}
    </>
  );
}
