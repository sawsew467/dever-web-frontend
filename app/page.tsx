"use client";
import Banner from "@/components/sections/home/Banner";
import Product from "@/components/sections/home/Product";
import Introduction from "@/components/sections/home/Introduction";
import Join from "@/components/sections/home/Join";

export default function Home() {
  return (
    <>  
      <Banner></Banner>
      <Introduction></Introduction>
      <Product></Product>
      <Join></Join>
    </>
  );
}

