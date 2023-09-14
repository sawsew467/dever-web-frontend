"use client";
import Banner from "@/components/sections/home/Banner";
import Product from "@/components/sections/home/Product";
import Introduction from "@/components/sections/home/Introduction";
import Join from "@/components/sections/home/Join";
import { useAppContext } from "./context/AppContext";
import { useEffect } from "react";
export default function Home() {
  const {activeHomeNav} = useAppContext();
  useEffect(() => {
    activeHomeNav();
  })
  return (
    <>  
      <Banner></Banner>
      <Introduction></Introduction>
      <Product></Product>
      <Join></Join>
    </>
  );
}

