"use client";
import Banner from "@/components/sections/home/Banner";
import Product from "@/components/sections/home/Product";
import Introduction from "@/components/sections/home/Introduction";
import Join from "@/components/sections/home/Join";
import { useEffect, useState } from "react";
import Reloading from "@/components/Reloading";

export default function Home() {
  const [isReloading, setIsReloading] = useState<boolean>(true);
  console.log(isReloading);

  useEffect(() => {
    setTimeout(() => {
      setIsReloading(false);
    }, 2400);
  });
  return (
    <>
      {isReloading ? <Reloading></Reloading> : null}
      <Banner></Banner>
      <Introduction></Introduction>
      <Product></Product>
      <Join></Join>
    </>
  );
}
